"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function PageTransition() {
  const pathname = usePathname();
  const router = useRouter();
  const reduceMotion = useReducedMotion();
  const inFlight = useRef(false);
  const timer = useRef<number | null>(null);
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
      setDestination(url.pathname === "/people" ? "The people in the room" : "Proxima Mumbai");
      setActive(true);

      timer.current = window.setTimeout(() => {
        router.push(`${url.pathname}${url.search}${url.hash}`);
      }, reduceMotion ? 0 : 470);
    };

    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [reduceMotion, router]);

  useEffect(() => {
    if (!inFlight.current) return;
    window.scrollTo(0, 0);
    const id = window.setTimeout(() => {
      setActive(false);
      inFlight.current = false;
    }, reduceMotion ? 0 : 35);
    return () => window.clearTimeout(id);
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
