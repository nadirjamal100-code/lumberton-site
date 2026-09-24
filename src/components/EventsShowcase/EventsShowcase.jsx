import arrow from "../../assets/icons/arrow-forward-white.svg";
import "./EventsShowcase.css";

export default function EventsShowcase({
  eyebrow,
  heading,
  description,
  cta,
  imageMain,
  altMain,
  titleMain,
  imageAccent,
  altAccent,
  titleAccent,
}) {
  return (
    <section className="section section--alt events">
      <div className="container events__inner">
        <div className="events__content">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{heading}</h2>
          <p>{description}</p>
          <a href="#contact" className="btn-outline">
            {cta}
          </a>
        </div>

        <div className="events__media">
          <figure className="events__card events__card--main">
            <img src={imageMain} alt={altMain} loading="lazy" />
            <figcaption>
              <span className="events__title">{titleMain}</span>
              <span className="events__badge">
                <img src={arrow} alt="" aria-hidden="true" />
              </span>
            </figcaption>
          </figure>
          <figure className="events__card events__card--accent">
            <img src={imageAccent} alt={altAccent} loading="lazy" />
            <figcaption>
              <span className="events__title">{titleAccent}</span>
              <span className="events__badge">
                <img src={arrow} alt="" aria-hidden="true" />
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
