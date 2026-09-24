import heroImage from "../assets/images/hero-bg.png";
import heartMural from "../assets/images/heart-mural.png";
import outdoorDinner from "../assets/images/outdoor-dinner.png";
import arrow from "../assets/icons/arrow-forward-white.svg";
import "./AboutPage.css";

const HIGHLIGHTS = [
  { value: "1787", label: "Lumberton's founding" },
  { value: "I-95", label: "A natural place to pause" },
  { value: "The river", label: "At the heart of our outdoors" },
];

const EXPERIENCES = [
  { title: "Explore the outdoors", description: "Follow the Lumber River, find a quiet trail, or make time for a walk along the downtown Riverwalk.", image: heartMural, alt: "Colorful public art in downtown Lumberton", href: "/#programs" },
  { title: "Gather around the table", description: "From local restaurants to family celebrations, good food is part of the Lumberton experience.", image: outdoorDinner, alt: "Guests sharing an outdoor dinner", href: "/#restaurants" },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero" style={{ "--about-hero-image": `url(${heroImage})` }} aria-labelledby="about-title">
        <div className="container about-hero__content">
          <span className="about-hero__eyebrow">Stop. Stay. Linger longer.</span>
          <h1 id="about-title">A little more time in Lumberton.</h1>
          <p>Find your next favorite meal, a relaxing weekend, or a reason to gather with the people you love.</p>
          <a className="about-hero__button" href="/#programs">Discover Lumberton<img src={arrow} alt="" aria-hidden="true" /></a>
        </div>
        <div className="about-hero__bottom" aria-hidden="true" />
      </section>

      <section className="about-intro section"><div className="container about-intro__layout"><div className="about-intro__title"><span className="eyebrow">Welcome to our corner of North Carolina</span><h2>Right where the journey slows down.</h2></div><div className="about-intro__copy"><p>Set in southeastern North Carolina, Lumberton is an easy place to pause along I-95 and discover more than you expected. We’re the county seat of Robeson County, shaped by the Lumber River and a warm, welcoming community.</p><p>Whether you’re passing through, planning a weekend, or bringing everyone together, we’ll help you find a good place to eat, stay, explore, and make the most of your time here.</p></div></div></section>
      <section className="about-highlights" aria-label="Lumberton at a glance"><div className="container about-highlights__grid">{HIGHLIGHTS.map((highlight) => <div className="about-highlights__item" key={highlight.value}><strong>{highlight.value}</strong><span>{highlight.label}</span></div>)}</div></section>
      <section className="about-story section"><div className="container about-story__layout"><div className="about-story__image-wrap"><img src={heartMural} alt="A colorful heart mural brightening a downtown wall" loading="lazy"/><span className="about-story__image-note">The heart of Robeson County</span></div><div className="about-story__copy"><span className="eyebrow">Rooted here</span><h2>History, hospitality, and room to explore.</h2><p>Founded in 1787, Lumberton grew alongside the river that gave the city its name. Today, that same sense of connection runs through our historic downtown, local arts, outdoor spaces, and community gatherings.</p><p>Come for a stop on the road. Stay for a meal, a walk, a show, or a weekend that gives you time to see it all at your own pace.</p><a className="about-text-link" href="/#business">Plan a gathering <span aria-hidden="true">→</span></a></div></div></section>
      <section className="about-experiences section section--alt"><div className="container"><div className="about-section-heading"><span className="eyebrow">Make it your own</span><h2>Find your kind of Lumberton.</h2><p>Take a look around and start planning the parts you’ll remember.</p></div><div className="about-experiences__grid">{EXPERIENCES.map((experience) => <a className="about-experience" href={experience.href} key={experience.title}><div className="about-experience__image"><img src={experience.image} alt={experience.alt} loading="lazy"/></div><div className="about-experience__body"><h3>{experience.title}</h3><p>{experience.description}</p><span>Explore <span>→</span></span></div></a>)}</div></div></section>
      <section className="about-cta"><div className="container about-cta__inner"><div><span className="eyebrow">We’re glad you’re here</span><h2>Let’s make your visit a little longer.</h2></div><a href="tel:+18003596971">Talk with our team <span aria-hidden="true">→</span></a></div></section>
    </main>
  );
}
