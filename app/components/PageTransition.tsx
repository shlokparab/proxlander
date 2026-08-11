"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const BACKGROUND_URL_PATTERN = /url\((?:"([^"]+)"|'([^']+)'|([^)]*))\)/g;
const ROUTE_READY_TIMEOUT_MS = 1400;

function afterNextPaint() {
  return new Promise<void>((resolve) => {
    window.requestAnimationFrame(() => window.requestAnimationFrame(() => resolve()));
  });
}

function isNearViewport(element: Element) {
  const rect = element.getBoundingClientRect();
  return rect.width > 0 && rect.height > 0 && rect.bottom >= -120 && rect.top <= window.innerHeight + 120;
}

function waitForImageElement(image: HTMLImageElement) {
  if (image.complete) {
    if (!image.naturalWidth) return Promise.resolve();
    return image.decode().catch(() => undefined);
  }

  return new Promise<void>((resolve) => {
    image.addEventListener("load", () => resolve(), { once: true });
    image.addEventListener("error", () => resolve(), { once: true });
  });
}

function loadBackgroundImage(source: string) {
  return new Promise<void>((resolve) => {
    const image = new window.Image();
    image.decoding = "async";
    image.onload = () => resolve();
    image.onerror = () => resolve();
    image.src = new URL(source.trim(), window.location.href).href;
    if (image.complete) resolve();
  });
}

function visibleBackgroundSources() {
  const sources = new Set<string>();

  document.querySelectorAll<HTMLElement>("body *").forEach((element) => {
    if (!isNearViewport(element)) return;
    const background = window.getComputedStyle(element).backgroundImage;
    if (!background || background === "none") return;

    for (const match of background.matchAll(BACKGROUND_URL_PATTERN)) {
      const source = match[1] ?? match[2] ?? match[3];
      if (source && !source.startsWith("data:")) sources.add(source);
    }
  });

  return [...sources];
}

async function waitForRouteReady() {
  await afterNextPaint();

  const visibleImages = [...document.images].filter(isNearViewport);
  const tasks: Promise<unknown>[] = [
    ...visibleImages.map(waitForImageElement),
    ...visibleBackgroundSources().map(loadBackgroundImage),
  ];

  if (document.fonts) tasks.push(document.fonts.ready);

  await new Promise<void>((resolve) => {
    const timeout = window.setTimeout(resolve, ROUTE_READY_TIMEOUT_MS);
    Promise.allSettled(tasks).then(() => {
      window.clearTimeout(timeout);
      resolve();
    });
  });

  await afterNextPaint();
}

function destinationLabel(pathname: string) {
  if (pathname === "/") return "Proxima Mumbai";
  if (pathname === "/companies") return "Companies in motion";
  if (pathname.startsWith("/companies/")) return "Company profile";
  if (pathname === "/brand") return "Brand assets";
  return "Next room";
}

export default function PageTransition() {
  const pathname = usePathname();
  const router = useRouter();
  const reduceMotion = useReducedMotion();
  const inFlight = useRef(false);
  const navigationTimer = useRef<number | null>(null);
  const failsafeTimer = useRef<number | null>(null);
  const [active, setActive] = useState(false);
  const [destination, setDestination] = useState("Next room");

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = (event.target as HTMLElement).closest("a");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return;

      event.preventDefault();
      if (inFlight.current) return;

      inFlight.current = true;
      router.prefetch(`${url.pathname}${url.search}`);
      setDestination(destinationLabel(url.pathname));
      setActive(true);

      navigationTimer.current = window.setTimeout(() => {
        router.push(`${url.pathname}${url.search}${url.hash}`);
        navigationTimer.current = null;
      }, reduceMotion ? 0 : 470);

      failsafeTimer.current = window.setTimeout(() => {
        setActive(false);
        inFlight.current = false;
        failsafeTimer.current = null;
      }, 4500);
    };

    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
      if (navigationTimer.current) window.clearTimeout(navigationTimer.current);
      if (failsafeTimer.current) window.clearTimeout(failsafeTimer.current);
    };
  }, [reduceMotion, router]);

  useLayoutEffect(() => {
    const hash = window.location.hash.slice(1);
    const target = hash ? document.getElementById(decodeURIComponent(hash)) : null;

    if (target) target.scrollIntoView({ block: "start", behavior: "instant" });
    else window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  useEffect(() => {
    if (!inFlight.current) return;

    let cancelled = false;
    void waitForRouteReady().then(() => {
      if (cancelled) return;
      setActive(false);
      inFlight.current = false;
      if (failsafeTimer.current) window.clearTimeout(failsafeTimer.current);
      failsafeTimer.current = null;
    });

    return () => {
      cancelled = true;
    };
  }, [pathname, reduceMotion]);

  return (
        <motion.div
          className="route-transition"
          initial="open"
          animate={active ? "closed" : "open"}
          aria-hidden="true"
          style={{ pointerEvents: active ? "all" : "none" }}
        >
          <motion.div
            className="route-transition-panel route-transition-panel-left"
            variants={{ open: { x: "-102%" }, closed: { x: 0 } }}
            transition={{ duration: reduceMotion ? 0 : 0.48, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="route-transition-panel route-transition-panel-right"
            variants={{ open: { x: "102%" }, closed: { x: 0 } }}
            transition={{ duration: reduceMotion ? 0 : 0.48, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="route-transition-copy"
            variants={{ open: { opacity: 0, y: -8 }, closed: { opacity: 1, y: 0 } }}
            transition={{ duration: reduceMotion ? 0 : 0.18, delay: reduceMotion ? 0 : 0.2 }}
          >
            <span>Proxima / Mumbai</span>
            <strong>{destination}</strong>
          </motion.div>
        </motion.div>
  );
}
