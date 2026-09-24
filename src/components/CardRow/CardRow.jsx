import { useState, useEffect, useRef, useCallback } from "react";
import Card from "../Card/Card";
import chevron from "../../assets/icons/chevron-right-navy.svg";
import arrow from "../../assets/icons/arrow-forward-white.svg";
import "./CardRow.css";

export default function CardRow({ id, eyebrow, heading, description, items, exploreLabel = "Explore More Programs", alt = false }) {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [offsetPx, setOffsetPx] = useState(0);

  const measure = useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track || !track.children.length) return;

    const firstItem = track.children[0];
    const trackStyle = getComputedStyle(track);
    const gap = parseFloat(trackStyle.columnGap || trackStyle.gap || "0") || 0;
    const itemWidth = firstItem.getBoundingClientRect().width;
    if (!itemWidth) return;

    const step = itemWidth + gap;
    const rawCount = Math.round((viewport.clientWidth + gap) / step);
    const vc = Math.min(Math.max(1, rawCount), items.length);
    setVisibleCount(vc);
  }, [items.length]);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const maxIndex = Math.max(0, items.length - visibleCount);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || !track.children.length) return;
    const firstItem = track.children[0];
    const trackStyle = getComputedStyle(track);
    const gap = parseFloat(trackStyle.columnGap || trackStyle.gap || "0") || 0;
    const step = firstItem.getBoundingClientRect().width + gap;
    setOffsetPx(index * step);
  }, [index, visibleCount]);

  const goNext = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));

  return (
    <section id={id} className={`section card-row ${alt ? "section--alt" : ""}`}>
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{heading}</h2>
          {description && <p>{description}</p>}
        </div>

        <div className="card-row__wrap">
          <div className="card-row__viewport" ref={viewportRef}>
            <div
              className="card-row__grid"
              ref={trackRef}
              style={{ transform: `translateX(-${offsetPx}px)` }}
            >
              {items.map((item) => (
                <div className="card-row__item" key={item.title}>
                  <Card
                    image={item.image}
                    alt={item.alt}
                    title={item.title}
                    description={item.description}
                  />
                </div>
              ))}
            </div>
          </div>

          {maxIndex > 0 && (
            <button type="button" className="card-row__next" aria-label="Show next" onClick={goNext}>
              <img src={chevron} alt="" />
            </button>
          )}
        </div>

        <a href="#contact" className="explore-link">
          <span className="explore-link__icon">
            <img src={arrow} alt="" aria-hidden="true" />
          </span>
          {exploreLabel}
        </a>
      </div>
    </section>
  );
}
