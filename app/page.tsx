"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const founderSignals = ["Y Combinator", "Entrepreneur First", "WTFund", "Antler", "Pebblebed", "Hive Mind Capital", "Emergent Ventures", "Offscript Ventures", "Accel"];

const domains = [
  { index: "01", name: "Deep tech", note: "Science that leaves the lab" },
  { index: "02", name: "AI", note: "Models, agents and infrastructure" },
  { index: "03", name: "Hardware", note: "Robots, chips and real-world systems" },
  { index: "04", name: "Consumer", note: "Brands people choose and remember" },
  { index: "05", name: "Media", note: "Culture, storytelling and distribution" },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const hasSeenEntry = window.sessionStorage.getItem("proxima-entry-seen") === "true";
    if (!hasSeenEntry) window.sessionStorage.setItem("proxima-entry-seen", "true");
    const id = window.setTimeout(() => setLoaded(true), reduceMotion || hasSeenEntry ? 0 : 520);
    return () => window.clearTimeout(id);
  }, [reduceMotion]);

  return (
    <main>
      <AnimatePresence>
        {!loaded && (
          <motion.div className="curtain" initial="closed" animate="closed" exit="open" aria-hidden="true">
            <motion.div
              className="curtain-panel curtain-panel-left"
              variants={{ closed: { x: 0 }, open: { x: "-102%" } }}
              transition={{ duration: reduceMotion ? 0 : 0.82, ease: [0.76, 0, 0.24, 1] }}
            />
            <motion.div
              className="curtain-panel curtain-panel-right"
              variants={{ closed: { x: 0 }, open: { x: "102%" } }}
              transition={{ duration: reduceMotion ? 0 : 0.82, ease: [0.76, 0, 0.24, 1] }}
            />
            <motion.div
              className="curtain-mark"
              variants={{ closed: { opacity: 1, y: 0 }, open: { opacity: 0, y: -10 } }}
              transition={{ duration: reduceMotion ? 0 : 0.22, ease: "easeOut" }}
            >
              <span>Proxima / Mumbai</span>
              <b>Builders, in motion.</b>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="page-shell">
      <header className="masthead">
        <a className="brand" href="#top" aria-label="Proxima Mumbai home">
          <span className="brand-shape" />
          <span>proxima<br />mumbai</span>
        </a>
        <button className={`menu-button${menuOpen ? " menu-button-open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="main-nav">
          {menuOpen ? "Close" : "Navigate"}
        </button>
        <motion.nav
          id="main-nav"
          className={`site-nav${menuOpen ? " site-nav-open" : ""}`}
          animate={{
            opacity: menuOpen ? 1 : 0,
          }}
          transition={reduceMotion ? { duration: 0 } : {
            opacity: { duration: menuOpen ? 0.26 : 0.2, ease: "linear" },
          }}
          initial={false}
          aria-hidden={!menuOpen}
          style={{ pointerEvents: menuOpen ? "auto" : "none" }}
        >
          <a href="#thesis" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>Why Proxima</a>
          <a href="#grants" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>Grants</a>
          <a href="#network" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>Network</a>
          <a href="#talent" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>Talent</a>
          <Link href="/companies" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>Companies</Link>
          <a href="#join" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>Join</a>
        </motion.nav>
      </header>

      <section className="hero" id="top">
        <motion.p className="hero-tagline" initial={{ opacity: 0, y: 12 }} animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }} transition={{ delay: 0.52, duration: 0.5 }}>
          A founder community for people already in motion.
        </motion.p>

        <div className="hero-metrics" aria-label="Community metrics">
          <motion.div className="metric metric-events" initial={{ opacity: 0, y: 20 }} animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ delay: 0.56 }}>
            <strong>42</strong><span>events held</span>
          </motion.div>
          <motion.div className="metric metric-raised" initial={{ opacity: 0, y: 20 }} animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ delay: 0.66 }}>
            <strong>₹18.4Cr</strong><span>raised by members</span>
          </motion.div>
          <motion.div className="metric metric-people" initial={{ opacity: 0, y: 20 }} animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ delay: 0.76 }}>
            <strong>120</strong><span>members building</span>
          </motion.div>

        </div>
      </section>

      <section className="home-thesis" id="thesis" aria-labelledby="thesis-title">
        <div className="section-kicker">01 / The Proxima advantage</div>
        <div className="home-thesis-grid">
          <motion.h2 id="thesis-title" initial={{ opacity: 0.2, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }}>
            Bring the idea.<br />Bring the resolve<br /><em>to ship.</em>
          </motion.h2>
          <div className="home-thesis-copy">
            <p className="home-thesis-deck">We’ll help you find the rest.</p>
            <p>Meet founders in Mumbai, connect with builder communities across India, and find direct paths to early capital through Proxima.</p>
            <p>Whether you’re building in deep tech, AI, hardware, consumer, or media, you can start here without leaving Bombay.</p>
          </div>
        </div>
        <div className="home-thesis-proof" aria-label="What Proxima provides">
          <div><span>01</span><strong>Meet in Mumbai</strong><small>A local room for founders</small></div>
          <div><span>02</span><strong>Reach across India</strong><small>Introductions to partner communities</small></div>
          <div><span>03</span><strong>Apply for capital</strong><small>Grants up to ₹10 lakh with 3F.VC</small></div>
        </div>
      </section>

      <section className="home-grants section-dark" id="grants" aria-labelledby="grants-title">
        <div className="home-grants-image" role="img" aria-label="A Mumbai founder's workshop overlooking the city at night" />
        <div className="home-grants-shade" />
        <div className="home-grants-content">
          <div className="section-kicker">02 / Proxima × 3F.VC</div>
          <h2 id="grants-title">Up to<br /><em>₹10 lakh</em><br />to begin.</h2>
          <div className="home-grants-note">
            <strong>Founder grants for Mumbai</strong>
            <p>We’re working with 3F.VC to back talented Mumbai founders with grants of up to ₹10 lakh. Conviction should not have to wait for permission—or a move to another city.</p>
            <a href="mailto:hello@proxima.mumbai?subject=Proxima%20x%203F.VC%20founder%20grant">Ask about the grant <Arrow /></a>
          </div>
        </div>
        <div className="home-grants-mark">₹10L</div>
      </section>

      <section className="home-network" id="network" aria-labelledby="network-title">
        <div className="home-network-copy">
          <div className="section-kicker">03 / A national network, close at hand</div>
          <h2 id="network-title">One room<br />in Bombay.<br /><em>India within reach.</em></h2>
          <p>Proxima works with founder communities across India, giving Mumbai builders direct introductions to collaborators, specialist talent, operators, and peers beyond the city.</p>
          <div className="home-network-line"><span>Mumbai room</span><span>India-wide peers</span><span>Direct introductions</span></div>
        </div>
        <div
          className="home-network-image"
          role="img"
          aria-label="Mumbai's waterfront skyline illuminated at night"
        />
      </section>

      <section className="home-talent section-dark" id="talent" aria-labelledby="talent-title">
        <div className="section-kicker">04 / Track record in the room</div>
        <div className="home-talent-heading">
          <h2 id="talent-title">Selected by YC.<br /><em>Backed by Accel.</em></h2>
          <p>People across the Proxima network have been selected by Y Combinator and backed by funds and programs including Entrepreneur First, WTFund, Antler, Pebblebed, Hive Mind Capital, Emergent Ventures, Offscript Ventures, and Accel.</p>
        </div>
        <div className="home-signal-list" aria-label="Funds and programs represented in the Proxima network">
          {founderSignals.map((signal, index) => <span key={signal}><i>{String(index + 1).padStart(2, "0")}</i>{signal}</span>)}
        </div>
        <div className="home-domains">
          <div className="home-domains-image" role="img" aria-label="Robotics, biotechnology, consumer products, and media tools on a maker's bench" />
          <div className="home-domains-copy">
            <div className="section-kicker">What they’re building</div>
            <h3>Deep tech.<br /><em>AI. Hardware.</em><br />Media. Consumer.</h3>
            <p>The companies in Proxima span deep tech, AI, hardware, consumer brands, and media. Open the directory and see what is being built.</p>
            <div className="home-domain-list">
              {domains.map((domain) => <div key={domain.name}><span>{domain.index}</span><strong>{domain.name}</strong><small>{domain.note}</small></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="join" id="join">
        <div className="join-current" />
        <div className="section-kicker">05 / Bombay founders, start here</div>
        <h2>Bring the idea.<br />Bring the determination.<br /><em>We’ll take care<br />of the rest.</em></h2>
        <p>If you’re building in Bombay, write to us. We’ll help you find the people, partner communities, and early capital to move.</p>
        <a href="mailto:hello@proxima.mumbai?subject=I%20am%20building%20in%20Mumbai" className="join-link magnetic">Tell us what you’re building</a>
        <div className="join-meta">Mumbai, India · Founder-led · In person<br />Ideas / collaborators / grants / community</div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-shape" /><span>proxima<br />mumbai</span></a>
        <p>Built in Bombay.<br />Connected across India.<br />Open to builders.</p>
        <div><Link href="/companies">Companies</Link><a href="#grants">Founder grants</a><a href="mailto:hello@proxima.mumbai">Email us</a></div>
        <small>© 2026 Proxima Mumbai</small>
      </footer>
      </div>
    </main>
  );
}
