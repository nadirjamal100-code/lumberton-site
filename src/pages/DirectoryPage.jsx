import { NAV_LINKS } from "../data/directoryPages";
import "./DirectoryPage.css";

export default function DirectoryPage({ page }) {
  const relatedLinks = NAV_LINKS.flatMap((item) => item.children || []).filter((item) => item.href.startsWith(`/${page.group.toLowerCase().replaceAll(" ", "-")}/`));

  return (
    <main className="directory-page">
      <section className="directory-hero">
        <div className="container directory-hero__content">
          <p className="directory-hero__crumb"><a href="/">Home</a><span>/</span>{page.group}</p>
          <span className="directory-hero__eyebrow">Explore Lumberton</span>
          <h1>{page.title}</h1>
          <p>{page.description}</p>
        </div>
      </section>
      <section className="section directory-listings">
        <div className="container">
          <header className="directory-heading">
            <span className="eyebrow">Plan your visit</span>
            <h2>{page.group} in Lumberton, NC</h2>
            <p>Use this local guide to start planning. Details and availability may change, so contact a location directly before you go.</p>
          </header>
          <div className="directory-grid">
            {page.places.map(([name, description], index) => (
              <article className="directory-card" key={name}>
                <span className="directory-card__number">{String(index + 1).padStart(2, "0")}</span>
                <div><span className="directory-card__type">{page.group}</span><h3>{name}</h3><p>{description}</p></div>
                <a className="directory-card__link" href="tel:+18003596971" aria-label={`Call the Lumberton Visitors Bureau about ${name}`}>Ask us about this place <span aria-hidden="true">→</span></a>
              </article>
            ))}
          </div>
          <nav className="directory-related" aria-label={`More ${page.group} categories`}>
            <h2>Explore more {page.group.toLowerCase()}</h2>
            <div>{relatedLinks.map((link) => <a href={link.href} key={link.href}>{link.label}<span aria-hidden="true">→</span></a>)}</div>
          </nav>
        </div>
      </section>
      <section className="directory-contact"><div className="container directory-contact__inner"><div><span>Need help planning?</span><h2>We’re happy to help you find your way around.</h2></div><a href="tel:+18003596971">Call 1 (800) 359-6971</a></div></section>
    </main>
  );
}
