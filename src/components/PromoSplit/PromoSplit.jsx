import "./PromoSplit.css";

export default function PromoSplit({ image, alt, eyebrow, heading, description, cta }) {
  return (
    <section className="section section--alt promo-split">
      <div className="container promo-split__inner">
        <div className="promo-split__media">
          <img src={image} alt={alt} loading="lazy" />
        </div>
        <div className="promo-split__content">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{heading}</h2>
          <p>{description}</p>
          <a href="#contact" className="btn-outline">
            {cta}
          </a>
        </div>
      </div>
    </section>
  );
}
