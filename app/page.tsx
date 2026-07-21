"use client";

import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";

const groups = [
  { name: "AI systems", note: "agents · infra · evals", members: "218" },
  { name: "Consumer craft", note: "products people keep", members: "184" },
  { name: "Climate / city", note: "Mumbai as a testbed", members: "96" },
  { name: "Fintech", note: "money that moves better", members: "142" },
  { name: "Design engineering", note: "taste, code, systems", members: "127" },
  { name: "Deep tech", note: "atoms over demos", members: "73" },
];

const events = [
  { day: "19", month: "JUL", title: "Agents after dark", place: "Bandra West · 19:30", type: "Live teardown" },
  { day: "27", month: "JUL", title: "Founders’ table Nº12", place: "Fort · 20 seats", type: "Dinner" },
  { day: "02", month: "AUG", title: "Build night: interfaces", place: "Lower Parel · 18:00", type: "Open studio" },
  { day: "17", month: "AUG", title: "Monsoon demo room", place: "By invitation · Mumbai", type: "Show & tell" },
];

const resources = [
  { index: "01", title: "Mumbai founder map", meta: "Living directory · 11 min" },
  { index: "02", title: "Raising without theatre", meta: "Field note · 7 min" },
  { index: "03", title: "The agent stack we trust", meta: "Working doc · 18 tools" },
  { index: "04", title: "Rooms over audiences", meta: "Community memo · 5 min" },
];

const memberNames = [
  "Aditi", "Vishal", "Anushka", "Naman", "Rhea", "Shaan", "Meher", "Arjun",
  "Kavya", "Dhruv", "Tanvi", "Kabir", "Mihir", "Zoya", "Aarav", "Maya",
];

const reveal: Variants = {
  hidden: { y: "110%", opacity: 0 },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.12 + i * 0.08, duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  }),
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const id = window.setTimeout(() => setLoaded(true), reduceMotion ? 0 : 220);
    return () => window.clearTimeout(id);
  }, [reduceMotion]);

  return (
    <main>
      <AnimatePresence>
        {!loaded && (
          <motion.div
            className="loader"
            initial={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: reduceMotion ? "blur(0px)" : "blur(16px)" }}
            transition={{ duration: reduceMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          >
            <span>PROXIMA / MUMBAI</span>
            <b>Proxima Mumbai</b>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="page-shell"
        initial={{ opacity: reduceMotion ? 1 : 0.12 }}
        animate={{ opacity: loaded ? 1 : reduceMotion ? 1 : 0.12 }}
        transition={{ duration: reduceMotion ? 0 : 1.05, ease: [0.22, 1, 0.36, 1] }}
      >
      <header className="masthead">
        <a className="brand" href="#top" aria-label="Proxima Mumbai home">
          <span className="brand-shape" />
          <span>proxima<br />mumbai</span>
        </a>
        <div className="mast-center">19.0760° N / 72.8777° E<br />Friday, builders online</div>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="main-nav">
          {menuOpen ? "Close" : "Navigate"} <span>{menuOpen ? "×" : "↘"}</span>
        </button>
        <motion.nav id="main-nav" className="nav-orbit" animate={{ scale: menuOpen ? 1 : 0, opacity: menuOpen ? 1 : 0 }} initial={false}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#groups" onClick={() => setMenuOpen(false)}>Groups</a>
          <a href="#timeline" onClick={() => setMenuOpen(false)}>Timeline</a>
          <a href="#resources" onClick={() => setMenuOpen(false)}>Resources</a>
          <a href="#members" onClick={() => setMenuOpen(false)}>People</a>
          <a href="#join" onClick={() => setMenuOpen(false)}>Join</a>
        </motion.nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-current">
          <svg className="current-image" viewBox="0 0 1600 760" preserveAspectRatio="none" aria-hidden="true" focusable="false">
            <defs>
              <clipPath id="hero-wave-clip" clipPathUnits="userSpaceOnUse">
                <path d="M -80 685 C 250 640 455 565 665 430 C 900 280 1055 325 1245 150 C 1390 18 1535 -25 1680 -60 L 1680 820 C 1475 790 1325 750 1150 690 C 960 625 820 585 655 615 C 425 650 220 720 -80 755 Z" />
              </clipPath>
            </defs>
            <image href="/images/monsoon-wave-v2.png" width="1600" height="760" preserveAspectRatio="xMidYMid slice" clipPath="url(#hero-wave-clip)" />
            <rect width="1600" height="760" fill="url(#hero-wave-shade)" clipPath="url(#hero-wave-clip)" />
            <defs>
              <linearGradient id="hero-wave-shade" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0" stopColor="#11110f" stopOpacity=".08" />
                <stop offset="1" stopColor="#11110f" stopOpacity=".28" />
              </linearGradient>
            </defs>
          </svg>
          <span className="current-note note-a">No gatekeepers · no spectators</span>
          <span className="current-note note-b">Built in Bombay / shared everywhere</span>
          <span className="current-note note-c">Signal over noise · since 2023</span>
        </div>

        <h1 className="hero-title" aria-label="Mumbai's builder community">
          <span className="mask"><motion.i custom={0} variants={reveal} initial="hidden" animate={loaded ? "show" : "hidden"}>Mumbai’s</motion.i></span>
          <span className="mask word-build"><motion.i custom={1} variants={reveal} initial="hidden" animate={loaded ? "show" : "hidden"}>builder</motion.i></span>
        </h1>

        <motion.p className="hero-intro" initial={{ opacity: 0, y: 20 }} animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ delay: 0.42, duration: 0.8 }}>
          A high-trust room for founders, engineers, researchers and designers building the next important thing—from Mumbai.
        </motion.p>

        <div className="hero-metrics" aria-label="Community metrics">
          <motion.div className="metric metric-events" initial={{ opacity: 0, y: 20 }} animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ delay: 0.56 }}>
            <strong>42</strong><span>events held</span>
          </motion.div>
          <motion.div className="metric metric-raised" initial={{ opacity: 0, y: 20 }} animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ delay: 0.66 }}>
            <strong>₹18.4Cr</strong><span>raised by members</span>
          </motion.div>
          <motion.div className="metric metric-people" initial={{ opacity: 0, y: 20 }} animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ delay: 0.76 }}>
            <strong>1,280</strong><span>members in orbit</span>
          </motion.div>
          <motion.div className="metric metric-startups" initial={{ opacity: 0, y: 20 }} animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ delay: 0.86 }}>
            <strong>64</strong><span>startups building</span>
          </motion.div>
        </div>

        <a className="hero-cta magnetic" href="#join"><span>Enter the room</span><Arrow /></a>
        <span className="scroll-note">Scroll into the current ↓</span>
      </section>

      <section className="manifesto" id="about" aria-labelledby="about-title">
        <div className="section-kicker">Proxima Mumbai / Bombay</div>
        <div className="manifesto-grid">
          <motion.h2 id="about-title" initial={{ opacity: 0.2, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }}>
            Where founders<br /><em>gather.</em>
          </motion.h2>
          <div className="manifesto-copy">
            <p className="manifesto-deck">An intimate founder community where ambition meets creativity in the heart of Bombay.</p>
            <p>Proxima curates a tech-founder community through hackathons and monthly meetups with VCs. Collaborations with universities provide dedicated spaces for networking and building ventures.</p>
            <p>We believe in the power of intimate gatherings, thoughtful discourse, and the magic that happens when ambitious minds collide in a space that feels like home.</p>
          </div>
        </div>
        <div className="manifesto-side">Small rooms · thoughtful discourse · ambitious minds</div>
      </section>

      <section className="groups section-dark" id="groups">
        <div className="section-kicker">01 / Working groups · always on</div>
        <h2>Six currents.<br /><em>One city.</em></h2>
        <div className="group-current" role="list">
          {groups.map((group, index) => (
            <motion.a
              href="#join"
              className={`group group-${index + 1}`}
              key={group.name}
              role="listitem"
              whileHover={{ x: index % 2 ? -10 : 10 }}
              whileFocus={{ scale: 1.04 }}
            >
              <span className="group-index">0{index + 1}</span>
              <strong>{group.name}</strong>
              <small>{group.note} · {group.members} people</small>
            </motion.a>
          ))}
        </div>
        <div className="orange-pool">Find<br />your<br /><i>people.</i></div>
      </section>

      <section className="timeline" id="timeline">
        <div className="timeline-river" />
        <div className="section-kicker">02 / Next in Mumbai · July → August</div>
        <h2>Things worth<br /><em>leaving home for.</em></h2>
        <div className="events-flow">
          {events.map((event, index) => (
            <a
              href="#join"
              className={`event event-${index + 1}`}
              key={event.title}
            >
              <span className="event-date"><b>{event.day}</b>{event.month}</span>
              <span className="event-copy"><small>{event.type}</small><strong>{event.title}</strong><i>{event.place}</i></span>
              <Arrow />
            </a>
          ))}
        </div>
      </section>

      <section className="resources section-dark" id="resources">
        <div className="resource-glow" />
        <div className="section-kicker">03 / Open source intelligence</div>
        <h2>Useful things,<br /><em>left in the open.</em></h2>
        <p className="resource-intro">Notes, maps and operating knowledge from inside the community. No lead form. No content theatre.</p>
        <div className="resource-flow">
          {resources.map((resource, index) => (
            <motion.a href="#" key={resource.title} className={`resource resource-${index + 1}`} whileHover={{ scale: 1.035 }}>
              <span>{resource.index}</span>
              <strong>{resource.title}</strong>
              <small>{resource.meta}</small>
              <Arrow />
            </motion.a>
          ))}
        </div>
      </section>

      <section className="members" id="members">
        <div className="section-kicker">04 / The people in the room</div>
        <h2>Builders are the<br /><em>best infrastructure.</em></h2>
        <div className="member-orbit" aria-label="A selection of Proxima members">
          <div className="member-photo" />
          {memberNames.map((name, index) => (
            <span
              key={name}
              className={`member-name member-name-${index + 1}`}
            >{name}</span>
          ))}
          <span className="member-count">+1,264 more<br />shipping quietly</span>
        </div>
      </section>

      <section className="join" id="join">
        <div className="join-current" />
        <div className="section-kicker">Open doors / selective signal</div>
        <h2>Bring the thing<br />you can’t stop<br /><em>thinking about.</em></h2>
        <p>Proxima is for people already in motion. Tell us what you’re building, learning or trying to make true.</p>
        <a href="mailto:hello@proxima.mumbai?subject=I%20want%20in" className="join-link magnetic">Request an introduction <Arrow /></a>
        <div className="join-meta">Mumbai, India · Independent · Founder-led<br />Responses within seven working days</div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-shape" /><span>proxima<br />mumbai</span></a>
        <p>Good people.<br />Hard problems.<br />No spectators.</p>
        <div><a href="#resources">Field notes</a><a href="#timeline">Next room</a><a href="mailto:hello@proxima.mumbai">Email us</a></div>
        <small>© 2026 Proxima Mumbai<br />19.0760° N / 72.8777° E</small>
      </footer>
      </motion.div>
    </main>
  );
}
