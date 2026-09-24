import arrow from "../../assets/icons/arrow-forward-white.svg";
import "./Card.css";

export default function Card({ image, title, description, alt }) {
  const isLead = Boolean(description);

  return (
    <div className={`card ${isLead ? "card--lead" : ""}`}>
      {image && <img src={image} alt={alt} loading="lazy" />}
      <div className="card__scrim" />
      <div className="card__body">
        <h3>{title}</h3>
        {description && (
          <>
            <p>{description}</p>
            <a href="#contact" className="card__link">
              <img src={arrow} alt="" aria-hidden="true" />
              Explore More
            </a>
          </>
        )}
      </div>
    </div>
  );
}
