"use client";

import Image from "next/image";
import { useState } from "react";

const colours = [
  { name: "Paper", value: "#F4F1E9", usage: "Primary canvas" },
  { name: "Ink", value: "#11110F", usage: "Type and dark fields" },
  { name: "Copper", value: "#8E351F", usage: "Primary accent" },
  { name: "Copper light", value: "#E48B6B", usage: "Accent on dark" },
  { name: "Stone", value: "#5F5D57", usage: "Secondary copy" },
  { name: "Warm surface", value: "#E9E4D9", usage: "Section background" },
];

const assets = [
  {
    name: "Proxima symbol",
    note: "Primary transparent mark · PNG · 760 × 760",
    src: "/brand/proxima.png",
    filename: "proxima-logo.png",
    className: "brand-asset-proxima",
  },
  {
    name: "Proxima symbol / black",
    note: "Black transparent mark · PNG · 760 × 760",
    src: "/brand/proxima-black.png",
    filename: "proxima-logo-black.png",
    className: "brand-asset-proxima-black",
  },
  {
    name: "3F.VC wordmark",
    note: "Partner wordmark · transparent PNG · 2967 × 991",
    src: "/brand/3fvc-png.png",
    filename: "3fvc-logo.png",
    className: "brand-asset-3fvc",
  },
];

export default function BrandAssetsClient() {
  const [copied, setCopied] = useState<string | null>(null);

  async function copyColour(value: string) {
    await navigator.clipboard.writeText(value);
    setCopied(value);
    window.setTimeout(() => setCopied((current) => current === value ? null : current), 1400);
  }

  return (
    <>
      <section className="brand-assets-hero">
        <div className="brand-assets-hero-copy">
          <div className="section-kicker">Proxima Mumbai / identity system</div>
          <h1>Brand<br /><em>assets.</em></h1>
          <p>Marks, partner lockups, and the colours that hold the Proxima Mumbai world together.</p>
        </div>
        <div className="brand-assets-hero-mark" aria-hidden="true">
          <Image src="/brand/proxima.png" alt="" fill priority sizes="(max-width: 680px) 72vw, 44vw" />
        </div>
        <div className="brand-assets-hero-note">Mumbai, India<br />Version 01 / 2026</div>
      </section>

      <section className="brand-assets-library" id="downloads">
        <div className="brand-assets-intro">
          <div className="section-kicker">01 / Marks</div>
          <p>Use the supplied files without redrawing, stretching, or adding effects to the artwork.</p>
        </div>
        <div className="brand-asset-grid">
          {assets.map((asset, index) => (
            <article className={`brand-asset-card ${asset.className}`} key={asset.name}>
              <div className="brand-asset-preview">
                <Image src={asset.src} alt={`${asset.name} preview`} fill sizes="(max-width: 680px) 90vw, 44vw" />
              </div>
              <div className="brand-asset-meta">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h2>{asset.name}</h2><p>{asset.note}</p></div>
                <a href={asset.src} download={asset.filename}>Download PNG <b>↓</b></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="brand-colours" aria-labelledby="brand-colours-title">
        <div className="brand-assets-intro">
          <div className="section-kicker">02 / Colour</div>
          <p id="brand-colours-title">Click any swatch to copy its production-ready hex value.</p>
        </div>
        <div className="brand-colour-grid">
          {colours.map((colour, index) => (
            <button
              type="button"
              className="brand-colour"
              key={colour.value}
              onClick={() => copyColour(colour.value)}
              aria-label={`Copy ${colour.name} colour ${colour.value}`}
            >
              <span className="brand-colour-chip" style={{ backgroundColor: colour.value }} />
              <span className="brand-colour-index">{String(index + 1).padStart(2, "0")}</span>
              <strong>{colour.name}</strong>
              <code>{copied === colour.value ? "Copied" : colour.value}</code>
              <small>{colour.usage}</small>
            </button>
          ))}
        </div>
        <p className="brand-copy-status" aria-live="polite">{copied ? `${copied} copied to clipboard.` : ""}</p>
      </section>
    </>
  );
}
