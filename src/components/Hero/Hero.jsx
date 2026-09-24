import { useState } from "react";
import heroBg from "../../assets/images/hero-bg.png";
import "./Hero.css";

export default function Hero() {
  const [active, setActive] = useState(0);

  return (
    <section className="hero">
      <img
        className="hero__bg"
        src={heroBg}
        alt="Friends gathered around a table at a twilight rooftop gathering in Lumberton"
      />
      <div className="hero__overlay">
        <div className="container hero__content">
          <h1>
            Relaxing
            <br />
            <span className="hero__script">Walkaways</span>
            <br />
            Among Us
          </h1>
          <p className="hero__subtitle">
            Situated in Southeastern North Carolina on Interstate 95,
            Lumberton is the midpoint between New York and Florida.
          </p>
        </div>
        <div className="hero__dots">
          {[0, 1].map((i) => (
            <button
              key={i}
              className={`hero__dot ${i === active ? "is-active" : ""}`}
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
