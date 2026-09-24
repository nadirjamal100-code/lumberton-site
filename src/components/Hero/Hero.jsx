import { useEffect, useState } from "react";
import heroBg from "../../assets/images/hero-bg.png";
import "./Hero.css";

const slides = [
  {
    title: ["Relaxing", "Walkaways", "Among Us"],
    description:
      "Situated in Southeastern North Carolina on Interstate 95, Lumberton is the midpoint between New York and Florida.",
  },
  {
    title: ["Stay", "Awhile", "in Lumberton"],
    description:
      "Savor local flavors, explore downtown, and find plenty of reasons to linger a little longer.",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <img
        className="hero__bg"
        src={heroBg}
        alt="Friends gathered around a table at a twilight rooftop gathering in Lumberton"
        fetchPriority="high"
      />
      <div className="hero__overlay">
        <div className="container hero__content" key={active}>
          <h1>
            {slides[active].title[0]}
            <br />
            <span className="hero__script">{slides[active].title[1]}</span>
            <br />
            {slides[active].title[2]}
          </h1>
          <p className="hero__subtitle">{slides[active].description}</p>
        </div>
        <div className="hero__dots">
          {slides.map((slide, i) => (
            <button
              key={slide.title[1]}
              className={`hero__dot ${i === active ? "is-active" : ""}`}
              aria-label={`Show slide ${i + 1}`}
              aria-current={i === active ? "true" : undefined}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
