import { useState } from "react";
import "./InfoPages.css";

export default function ContactPage() {
  const [notice, setNotice] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Website inquiry from ${data.get("name")}`);
    const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone") || "Not provided"}\n\n${data.get("message")}`);
    setNotice("Your email app should open with your message ready to send. If it doesn’t, email info@lumberton-nc.com.");
    window.location.href = `mailto:info@lumberton-nc.com?subject=${subject}&body=${body}`;
  }

  return <main className="info-page contact-page">
    <section className="info-hero"><div className="container"><span>We’re glad to help</span><h1>Contact Us</h1><p>Have a question about visiting Lumberton? Our team can help you get started.</p></div></section>
    <section className="section contact-content"><div className="container">
      <header className="contact-heading"><span className="eyebrow">Get in touch</span><h2>We’d love to hear from you.</h2><p>Send us a note or contact the Visitors Bureau directly.</p></header>
      <div className="contact-grid">
        <section className="contact-card contact-card--form" aria-labelledby="contact-form-title"><h3 id="contact-form-title">Send us a message</h3><p>Fill in the form and your email app will prepare a message for our team.</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" autoComplete="name" required />
            <label htmlFor="contact-email">Email address</label><input id="contact-email" name="email" type="email" autoComplete="email" required />
            <label htmlFor="contact-phone">Phone (optional)</label><input id="contact-phone" name="phone" type="tel" autoComplete="tel" />
            <label htmlFor="contact-message">How can we help?</label><textarea id="contact-message" name="message" rows="5" required />
            <button type="submit">Prepare message <span aria-hidden="true">→</span></button>
            {notice && <p className="contact-form__notice" role="status">{notice}</p>}
          </form>
        </section>
        <div className="contact-side">
          <section className="contact-card contact-address" aria-labelledby="address-title"><span className="contact-address__pin" aria-hidden="true">⌖</span><h3 id="address-title">Visit our office</h3><address>Lumberton Visitors Bureau<br />3431 Lackey Street<br />Lumberton, NC 28360</address><a href="tel:+19107399999">910-739-9999</a><a href="tel:+18003596971">Toll-free: 1-800-359-6971</a><a href="mailto:info@lumberton-nc.com">info@lumberton-nc.com</a></section>
          <div className="contact-map"><iframe title="Map showing the Lumberton Visitors Bureau at 3431 Lackey Street" src="https://maps.google.com/maps?q=3431%20Lackey%20Street%2C%20Lumberton%2C%20NC%2028360&t=&z=15&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><a className="contact-map__link" href="https://www.google.com/maps/search/?api=1&query=3431+Lackey+Street+Lumberton+NC+28360" target="_blank" rel="noreferrer">Open directions in Google Maps ↗</a></div>
        </div>
      </div>
    </div></section>
  </main>;
}
