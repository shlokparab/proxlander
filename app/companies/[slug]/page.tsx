import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CompanyNavigation from "../CompanyNavigation";
import { companies, getCompany } from "../../data/companies";

type CompanyPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return companies.map((company) => ({ slug: company.slug }));
}

export async function generateMetadata({ params }: CompanyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const company = getCompany(slug);
  if (!company) return {};
  const people = company.founders.map((founder) => founder.name).join(", ");
  const title = `${company.name}: Company, Team & What It Builds`;
  const description = `${company.description}${people ? ` Meet ${people} and learn how ${company.name} is connected to Proxima Mumbai.` : ` Learn how ${company.name} is connected to Proxima Mumbai.`}`;
  const socialImage = company.image
    ? { url: company.image, alt: `${company.name} — Proxima Mumbai company profile` }
    : { url: "/og.png", width: 1729, height: 910, alt: `${company.name} — Proxima Mumbai company profile` };
  return {
    title: { absolute: `${title} | Proxima Mumbai` },
    description,
    keywords: [company.name, ...company.aliases, `${company.name} founder`, `${company.name} company`, `${company.name} Proxima Mumbai`, company.sector],
    alternates: { canonical: `/companies/${company.slug}` },
    robots: { index: true, follow: true },
    openGraph: {
      title: `${title} | Proxima Mumbai`,
      description,
      url: `/companies/${company.slug}`,
      type: "article",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${company.name} — Proxima Mumbai`,
      description,
      images: [company.image ?? "/og.png"],
    },
  };
}

export default async function CompanyPage({ params }: CompanyPageProps) {
  const { slug } = await params;
  const company = getCompany(slug);
  if (!company) notFound();

  const companyIndex = companies.findIndex((item) => item.slug === company.slug);
  const previous = companies[(companyIndex - 1 + companies.length) % companies.length];
  const next = companies[(companyIndex + 1) % companies.length];
  const canonicalUrl = `https://www.proximamumbai.com/companies/${company.slug}`;
  const founderPeople = company.founders.filter((person) => /(^|\s)(co-)?founder($|\s)|founding team/i.test(person.role));
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${canonicalUrl}#organization`,
    name: company.name,
    alternateName: company.aliases,
    description: company.description,
    image: company.image,
    url: company.website ?? canonicalUrl,
    mainEntityOfPage: canonicalUrl,
    sameAs: company.website ? [company.website] : undefined,
    location: company.location ? { "@type": "Place", name: company.location } : undefined,
    founder: founderPeople.length ? founderPeople.map((person) => ({ "@type": "Person", name: person.name, jobTitle: person.role, sameAs: [person.linkedin, person.x].filter(Boolean) })) : undefined,
    employee: company.founders.map((person) => ({ "@type": "Person", name: person.name, jobTitle: person.role, sameAs: [person.linkedin, person.x].filter(Boolean) })),
    memberOf: { "@type": "Organization", name: "Proxima Mumbai", url: "https://www.proximamumbai.com" },
  };
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: `${company.name}: Company, Team & What It Builds`,
    description: company.description,
    primaryImageOfPage: company.image ? { "@type": "ImageObject", url: company.image } : undefined,
    isPartOf: { "@type": "WebSite", name: "Proxima Mumbai", url: "https://www.proximamumbai.com" },
    mainEntity: { "@id": `${canonicalUrl}#organization` },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Proxima Mumbai", item: "https://www.proximamumbai.com" },
        { "@type": "ListItem", position: 2, name: "Companies", item: "https://www.proximamumbai.com/companies" },
        { "@type": "ListItem", position: 3, name: company.name, item: canonicalUrl },
      ],
    },
  };

  return (
    <main className="company-profile-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd).replace(/</g, "\\u003c") }} />
      <CompanyNavigation />

      <section className="company-profile-hero">
        <div className="company-profile-current" aria-hidden="true" />
        <div className="company-profile-topline">
          <Link href="/companies">Companies</Link><span>/</span><span>{String(companyIndex + 1).padStart(2, "0")}</span>
        </div>
        <div className="company-profile-sector">{company.sector}</div>
        <h1>{company.name}</h1>
        <p>{company.description}</p>
        {company.website && <a className="company-website-link" href={company.website} target="_blank" rel="noreferrer">Visit company <span>↗</span></a>}
        <div className="company-profile-number" aria-hidden="true">{String(companyIndex + 1).padStart(2, "0")}</div>
      </section>

      <section className="company-profile-body">
        <div className="company-profile-intro">
          <div className="section-kicker">About {company.name}</div>
          <div className="company-profile-overview">
            {company.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>

        <dl className="company-profile-facts">
          <div><dt>Company</dt><dd>{company.name}</dd></div>
          <div><dt>Focus</dt><dd>{company.sector}</dd></div>
          {company.location && <div><dt>Location</dt><dd>{company.location}</dd></div>}
          <div><dt>Also known as</dt><dd>{company.aliases.join(" · ")}</dd></div>
        </dl>

        <section className="company-focus-section" aria-labelledby="company-focus-title">
          <div className="company-founder-heading">
            <span id="company-focus-title">What {company.name} is building</span>
            <strong>{String(company.highlights.length).padStart(2, "0")} focus areas</strong>
          </div>
          <div className="company-focus-grid">
            {company.highlights.map((highlight, index) => <div key={highlight}><span>{String(index + 1).padStart(2, "0")}</span><strong>{highlight}</strong></div>)}
          </div>
        </section>

        <section className="company-founder-section" aria-labelledby="company-people-title">
          <div className="company-founder-heading">
            <span id="company-people-title">The people behind it</span>
            <strong>{company.founders.length ? (company.founders.length === 1 ? "01 profile" : `${String(company.founders.length).padStart(2, "0")} profiles`) : "Details forthcoming"}</strong>
          </div>
          {company.founders.length ? <div className={`company-founder-grid${company.founders.length === 1 ? " company-founder-grid-single" : ""}`}>
            {company.founders.map((founder, founderIndex) => (
              <article className="company-founder" key={founder.name}>
                <div className="company-founder-image">
                  {founder.image ? <Image src={founder.image} alt={`${founder.name}, ${founder.role} at ${company.name}`} fill sizes="(max-width: 700px) 90vw, 42vw" priority={founderIndex < 2} /> : <div className="company-founder-placeholder" aria-hidden="true"><span>{founder.name.split(" ").map((part) => part[0]).join("")}</span><strong>{company.name}</strong></div>}
                </div>
                <div className="company-founder-copy">
                  <span>{founder.role}</span>
                  <h2>{founder.name}</h2>
                  <div>
                    {founder.linkedin && <a href={founder.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>}
                    {founder.x && <a href={founder.x} target="_blank" rel="noreferrer">X ↗</a>}
                  </div>
                </div>
              </article>
            ))}
          </div> : <p className="company-founder-empty">The company is part of the Proxima Mumbai network. Founder information will be added here once it is publicly confirmed.</p>}
        </section>
      </section>

      <nav className="company-profile-pagination" aria-label="Company profiles">
        <Link href={`/companies/${previous.slug}`}><span>← Previous</span><strong>{previous.name}</strong></Link>
        <Link href="/companies" className="company-profile-all">All companies</Link>
        <Link href={`/companies/${next.slug}`}><span>Next →</span><strong>{next.name}</strong></Link>
      </nav>

      <footer>
        <Link className="brand footer-brand" href="/"><span className="brand-shape" /><span>proxima<br />mumbai</span></Link>
        <p>Good companies.<br />Hard problems.<br />No theatre.</p>
        <div><Link href="/companies">Companies</Link><Link href="/#grants">Founder grants</Link><a href="mailto:hello@proxima.mumbai">Email us</a></div>
        <small>© 2026 Proxima Mumbai</small>
      </footer>
    </main>
  );
}
