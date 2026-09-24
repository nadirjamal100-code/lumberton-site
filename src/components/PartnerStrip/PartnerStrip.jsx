import "./PartnerStrip.css";

const partners = [
  { name: "Visit North Carolina", logo: "https://www.visitnc.com/sites/default/files/styles/scale_1920/public/2025-09/Visit%20NC%20Logo%20Placeholder.png?h=2aa300aa&itok=QprMpSHb", className: "partner-strip__logo--visit-nc" },
  { name: "SportsNC", logo: "https://www.sportsnc.com/wp-content/themes/sportsnc/images/sportsnc-logo.svg", className: "partner-strip__logo--sports-nc" },
  { name: "City of Lumberton", logo: "https://www.lumbertonnc.gov/ImageRepository/Document?documentID=1202", className: "partner-strip__logo--city" },
  { name: "Main Street Lumberton", logo: "https://www.lumbertonnc.gov/ImageRepository/Document?documentID=661", className: "partner-strip__logo--main-street" },
  { name: "North Carolina State Parks", logo: "https://files.nc.gov/parks/styles/inline_medium/public/images/2022-04/NatWond_Wordmark_white.png?VersionId=pjjuTnh_7Wq1usqU5O.Rs6x&itok=2C_a4fgU", className: "partner-strip__logo--parks" },
  { name: "UNC Pembroke", logo: "https://commons.wikimedia.org/wiki/Special:FilePath/University%20of%20North%20Carolina%20at%20Pembroke%20logo.svg", className: "partner-strip__logo--uncp" },
];

export default function PartnerStrip() {
  return <section className="section--alt partner-strip" aria-labelledby="partners-heading"><div className="container"><h3 className="partner-strip__heading" id="partners-heading">Our Partners</h3><div className="partner-strip__inner">{partners.map(({ name, logo, className }) => <a className="partner-strip__link" href="#" key={name} aria-label={name}><img className={className} src={logo} alt={name} loading="lazy" decoding="async" /></a>)}</div></div></section>;
}
