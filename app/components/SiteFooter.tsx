import Link from "next/link";
import BrandMark from "./BrandMark";

const APPLY_URL = "https://airtable.com/appZuFxRHE6j4u3nz/shrer90nVgB5dUbVH";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-orbit" aria-hidden="true" />

      <div className="site-footer-topline">
        <Link className="brand footer-brand" href="/" aria-label="Proxima Mumbai home">
          <BrandMark />
        </Link>
        <div className="site-footer-status">
          <i aria-hidden="true" />
          <span>Bombay, India</span>
          <span>Founders in motion</span>
        </div>
      </div>

      <div className="site-footer-lead">
        <div className="site-footer-kicker">The room is open</div>
        <h2>See you<br /><em>in the room.</em></h2>
        <a className="site-footer-apply" href={APPLY_URL} target="_blank" rel="noreferrer">
          <span>Apply to Proxima Mumbai</span>
        </a>
      </div>

      <div className="site-footer-directory">
        <nav aria-label="Footer navigation">
          <span>Explore</span>
          <Link href="/">Home</Link>
          <Link href="/companies">Companies</Link>
          <a href="https://events.proximamumbai.com" target="_blank" rel="noreferrer">Events</a>
          <Link href="/brand">Brand assets</Link>
        </nav>
        <nav aria-label="Proxima Mumbai social profiles">
          <span>Follow</span>
          <a href="https://x.com/ProximaMumbai" target="_blank" rel="noreferrer">X</a>
          <a href="https://www.linkedin.com/company/proxima-mumbai" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.youtube.com/@ProximaMumbai" target="_blank" rel="noreferrer">YouTube</a>
        </nav>
        <div className="site-footer-contact">
          <span>Start a conversation</span>
          <a href="mailto:hello@proxima.mumbai">hello@proxima.mumbai</a>
        </div>
      </div>

      <div className="site-footer-wordmark" aria-hidden="true">
        Proxima <em>Mumbai</em>
      </div>

      <div className="site-footer-bottomline">
        <small>© 2026 Proxima Mumbai</small>
        <small>19.0760° N / 72.8777° E</small>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
