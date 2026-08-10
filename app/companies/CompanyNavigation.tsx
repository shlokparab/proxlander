"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function CompanyNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <header className="masthead companies-masthead">
      <Link className="brand" href="/" aria-label="Proxima Mumbai home">
        <span className="brand-shape" />
        <span>proxima<br />mumbai</span>
      </Link>
      <button className={`menu-button${menuOpen ? " menu-button-open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="companies-nav">
        {menuOpen ? "Close" : "Navigate"}
      </button>
      <motion.nav id="companies-nav" className={`site-nav${menuOpen ? " site-nav-open" : ""}`} animate={{ opacity: menuOpen ? 1 : 0 }} transition={{ duration: reduceMotion ? 0 : .24 }} initial={false} aria-hidden={!menuOpen} style={{ pointerEvents: menuOpen ? "auto" : "none" }}>
        <Link href="/">Home</Link>
        <Link href="/companies">Companies</Link>
        <Link href="/#thesis">Why Proxima</Link>
        <a href="https://events.proximamumbai.com">Events</a>
        <Link href="/#grants">Grants</Link>
        <Link href="/#network">Network</Link>
        <Link href="/#join">Join</Link>
      </motion.nav>
    </header>
  );
}
