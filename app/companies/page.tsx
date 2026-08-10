"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import CompanyNavigation from "./CompanyNavigation";
import BrandMark from "../components/BrandMark";
import { companies } from "../data/companies";

export default function CompaniesPage() {
  const reduceMotion = useReducedMotion();
  const directoryJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Companies in the Proxima Mumbai network",
    url: "https://www.proximamumbai.com/companies",
    numberOfItems: companies.length,
    itemListElement: companies.map((company, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: company.name,
      url: `https://www.proximamumbai.com/companies/${company.slug}`,
    })),
  };

  return (
    <main className="companies-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(directoryJsonLd).replace(/</g, "\\u003c") }} />
      <CompanyNavigation />

      <section className="companies-hero">
        <div className="companies-hero-grain" aria-hidden="true" />
        <motion.div className="companies-eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .18 }}>
          06 / The companies in the room · {companies.length} profiles
        </motion.div>
        <h1 aria-label="Companies in motion">
          <span className="companies-title-line"><motion.i initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: .8, ease: [0.16, 1, 0.3, 1] }}>Companies,</motion.i></span>
          <span className="companies-title-line companies-title-offset"><motion.i initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: .8, delay: .1, ease: [0.16, 1, 0.3, 1] }}>in <em>motion.</em></motion.i></span>
        </h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .45, duration: .6 }}>
          The products, protocols, labs, and institutions being built inside Proxima—from Mumbai, outward.
        </motion.p>
        <div className="companies-hero-note">Selected signal<br />Real companies<br />Bombay / 2026</div>
        <a className="companies-scroll" href="#directory">Explore the directory <span>↓</span></a>
      </section>

      <section className="companies-directory" id="directory">
        <div className="companies-directory-intro">
          <div className="section-kicker">The directory / what the room is building</div>
          <p>Different markets.<br />A shared bias toward <em>shipping.</em></p>
        </div>

        <div className="company-grid">
          {companies.map((company, index) => (
            <motion.article
              className="company-card"
              key={company.slug}
              initial={reduceMotion ? false : { opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .15 }}
              transition={{ duration: .58, delay: (index % 3) * .055, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={`/companies/${company.slug}`} aria-label={`View ${company.name}`}>
                <div className="company-card-meta"><span>{String(index + 1).padStart(2, "0")}</span><span>{company.sector}</span></div>
                <div className={`company-card-visual${company.image ? "" : " company-card-visual-placeholder"}`}>
                  {company.image
                    ? <Image src={company.image} alt={`${company.name} company thumbnail`} fill sizes="(max-width: 680px) 90vw, (max-width: 900px) 44vw, 29vw" />
                    : <span aria-hidden="true">{company.name.slice(0, 2)}</span>}
                </div>
                <h2>{company.name}</h2>
                <p>{company.description}</p>
                <div className="company-card-foot">
                  <span>{company.founders.length ? company.founders.map((founder) => founder.name).join(" · ") : "Proxima company"}</span>
                  <b aria-hidden="true">↗</b>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="companies-outro">
        <div className="section-kicker">The directory keeps moving</div>
        <h2>Building something<br /><em>worth knowing?</em></h2>
        <p>Proxima is for companies already in motion. Tell us what your team is making true.</p>
        <a href="mailto:hello@proxima.mumbai?subject=Company%20for%20Proxima" className="join-link">Put your company on our radar</a>
      </section>

      <footer>
        <Link className="brand footer-brand" href="/" aria-label="Proxima Mumbai home"><BrandMark /></Link>
        <p>Good companies.<br />Hard problems.<br />No theatre.</p>
        <div><Link href="/">Home</Link><Link href="/#grants">Founder grants</Link><Link href="/brand">Brand assets</Link><a href="mailto:hello@proxima.mumbai">Email us</a></div>
        <small>© 2026 Proxima Mumbai</small>
      </footer>
    </main>
  );
}
