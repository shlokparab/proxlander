"use client";

import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
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

const reveal: Variants = {
  hidden: { y: "28%", opacity: 0 },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.06 + i * 0.06, duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  }),
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function SocialIcon({ name }: { name: "x" | "linkedin" | "youtube" }) {
  if (name === "x") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22H17l-4.9-6.4L6.5 22H3.4l7.2-8.3L2.8 2h6.4l4.4 5.8L18.9 2Zm-1.1 17.9h1.7L8.3 4H6.5l11.3 15.9Z" /></svg>;
  }

  if (name === "linkedin") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.2 1.4-2.2 2.9v5.7H9.3V9h3.5v1.6c.5-.9 1.7-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.3ZM5.3 7.4a2.1 2.1 0 1 1 0-4.1 2.1 2.1 0 0 1 0 4.1ZM7.1 20.5H3.5V9h3.6v11.5Z" /></svg>;
  }

  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z" /></svg>;
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
          <a href="https://events.proximamumbai.com" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>Events</a>
          <a href="#grants" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>Grants</a>
          <a href="#network" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>Network</a>
          <a href="#talent" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>Talent</a>
          <Link href="/companies" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>Companies</Link>
          <a href="#join" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>Join</a>
        </motion.nav>
      </header>

      <section className="hero" id="top">
        <motion.div
          className="hero-current"
          initial={reduceMotion ? false : { opacity: 0, scale: 1.01 }}
          animate={loaded ? { opacity: 1, scale: 1 } : undefined}
          transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <svg className="current-image" viewBox="0 0 1600 900" preserveAspectRatio="none" aria-hidden="true" focusable="false">
            <defs>
              <clipPath id="hero-wave-clip" clipPathUnits="userSpaceOnUse">
                <path d="M -80 765 C 145 780 350 720 545 625 C 690 555 770 420 880 330 C 950 272 1005 290 1065 235 C 1170 140 1235 72 1320 20 C 1430 -45 1540 -80 1680 -100 L 1680 980 L -80 980 Z" />
              </clipPath>
              <linearGradient id="hero-wave-shade" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0" stopColor="#11110f" stopOpacity=".08" />
                <stop offset="1" stopColor="#11110f" stopOpacity=".28" />
              </linearGradient>
            </defs>
            <rect width="1600" height="900" fill="#11110f" clipPath="url(#hero-wave-clip)" />
            <image href="/images/monsoon-wave-v2.png" x="32" y="260" width="1696" height="954" preserveAspectRatio="xMaxYMin slice" clipPath="url(#hero-wave-clip)" />
            <rect width="1600" height="900" fill="url(#hero-wave-shade)" clipPath="url(#hero-wave-clip)" />
          </svg>
        </motion.div>

        <h1 className="hero-title" aria-label="Proxima Mumbai">
          <span className="mask word-where"><motion.i custom={0} variants={reveal} initial="hidden" animate={loaded ? "show" : "hidden"}>Proxima</motion.i></span>
          <span className="mask word-founders"><motion.i custom={1} variants={reveal} initial="hidden" animate={loaded ? "show" : "hidden"}>Mumbai</motion.i></span>
        </h1>

        <motion.p className="hero-tagline" initial={{ opacity: 0, y: 12 }} animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }} transition={{ delay: 0.52, duration: 0.5 }}>
          A founder community for people already in motion.
        </motion.p>

        <a className="hero-cta magnetic" href="#join"><span>Enter the room</span></a>

        <motion.div className="hero-under-cta" initial={{ opacity: 0, y: 10 }} animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }} transition={{ delay: .68, duration: .45 }}>
          <nav className="hero-socials" aria-label="Proxima Mumbai social profiles">
            <a href="https://x.com/ProximaMumbai" target="_blank" rel="noreferrer" aria-label="Proxima Mumbai on X"><SocialIcon name="x" /></a>
            <a href="https://www.linkedin.com/company/proxima-mumbai" target="_blank" rel="noreferrer" aria-label="Proxima Mumbai on LinkedIn"><SocialIcon name="linkedin" /></a>
            <a href="https://www.youtube.com/@ProximaMumbai" target="_blank" rel="noreferrer" aria-label="Proxima Mumbai on YouTube"><SocialIcon name="youtube" /></a>
          </nav>
          <div className="hero-backer"><span>Founder grants with</span><strong>3F.VC · up to ₹10L</strong></div>
        </motion.div>
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

      <section className="home-events" id="events" aria-labelledby="events-title">
        <div className="home-events-orbit" aria-hidden="true" />
        <div className="section-kicker">02 / Proxima events</div>
        <div className="home-events-heading">
          <motion.h2 id="events-title" initial={{ opacity: 0.2, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}>
            Rooms worth<br /><em>showing up for.</em>
          </motion.h2>
          <div className="home-events-copy">
            <p>We host small, high-signal gatherings across Mumbai for founders, engineers, researchers, and operators who would rather compare notes than trade pitches.</p>
            <a className="home-events-cta" href="https://events.proximamumbai.com">
              <span>See all events</span><Arrow />
            </a>
          </div>
        </div>
        <div className="home-event-formats" aria-label="Proxima event formats">
          <div><span>01</span><strong>Founder rooms</strong><small>Honest conversations with people in motion</small></div>
          <div><span>02</span><strong>Working sessions</strong><small>Build, debug, and leave with a next step</small></div>
          <div><span>03</span><strong>Show-and-tell</strong><small>Put unfinished work in front of sharp peers</small></div>
        </div>
      </section>

      <section className="home-grants section-dark" id="grants" aria-labelledby="grants-title">
        <div className="home-grants-image" role="img" aria-label="A Mumbai founder's workshop overlooking the city at night" />
        <div className="home-grants-shade" />
        <div className="home-grants-content">
          <div className="section-kicker">03 / Proxima × 3F.VC</div>
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
          <div className="section-kicker">04 / A national network, close at hand</div>
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
        <div className="section-kicker">05 / Track record in the room</div>
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
        <div className="section-kicker">07 / Bombay founders, start here</div>
        <h2>Bring the idea.<br />Bring the determination.<br /><em>We’ll take care<br />of the rest.</em></h2>
        <p>If you’re building in Bombay, apply to join us. We’ll help you find the people, partner communities, and early capital to move.</p>
        <a
          href="https://airtable.com/appZuFxRHE6j4u3nz/shrer90nVgB5dUbVH"
          target="_blank"
          rel="noreferrer"
          className="join-link magnetic"
        >
          Apply to Proxima Mumbai
        </a>
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
