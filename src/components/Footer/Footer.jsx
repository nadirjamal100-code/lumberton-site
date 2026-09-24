import { useState } from "react";
import logo from "../../assets/images/logo.png";
import "./Footer.css";

const COLUMNS = [
  {
    title: "Quick Links",
    links: [
      { label: "Sign Up", href: "#newsletter-email" },
      { label: "About Us", href: "/about" },
    ],
  },
  {
    title: "Others",
    links: [
      { label: "User FAQs", href: "/faqs" },
      { label: "Contact Us", href: "/contact" },
      { label: "Legal", href: "#contact" },
      { label: "Privacy Policy", href: "#contact" },
      { label: "Terms and Conditions", href: "#contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Send", href: "#contact" },
      { label: "Receive", href: "#contact" },
      { label: "Buy", href: "#contact" },
    ],
  },
];

const SOCIALS = [
  {
    label: "YouTube",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.5v-7l6.3 3.5-6.3 3.5Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M15 8.5h2.5V4.9c-.4-.05-1.9-.2-3.6-.2-3.6 0-6 2.2-6 6.2v3.4H4.5v4.1h3.4V23H12v-4.6h3.4l.6-4.1H12v-3c0-1.2.3-2 2-2Z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22 5.9c-.7.3-1.5.6-2.3.7a4 4 0 0 0 1.8-2.2c-.8.5-1.6.8-2.5 1a3.9 3.9 0 0 0-6.7 3.6A11.2 11.2 0 0 1 4 4.9a3.9 3.9 0 0 0 1.2 5.3c-.6 0-1.2-.2-1.7-.5v.1a3.9 3.9 0 0 0 3.2 3.9c-.6.1-1.2.2-1.8.1a3.9 3.9 0 0 0 3.7 2.7A7.9 7.9 0 0 1 2 18.6a11.2 11.2 0 0 0 6.1 1.8c7.3 0 11.3-6.2 11.3-11.5v-.5c.8-.6 1.4-1.3 2-2.1Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <footer className="site-footer" id="contact">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <a href="/" aria-label="Lumberton Visitors Bureau home">
            <img className="site-footer__logo" src={logo} alt="Lumberton, North Carolina Visitors Bureau" />
          </a>
        </div>

        {COLUMNS.map((col) => (
          <div className="site-footer__col" key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="site-footer__newsletter">
          <p>Subscribe to our newsletter and be the first to know about our updates</p>
          <form onSubmit={handleSubmit} className="newsletter-form">
            <label htmlFor="newsletter-email" className="visually-hidden">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Subscribe</button>
          </form>
          {submitted && (
            <p className="newsletter-form__success">Thanks — you're subscribed!</p>
          )}
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>Copyright &copy; 2026. All rights reserved.</p>
        <p className="site-footer__credit">Website developed by <strong>NADIR JAMAL</strong></p>
        <ul className="site-footer__social">
          {SOCIALS.map((s) => (
            <li key={s.label}>
              <a href="/" aria-label={s.label}>
                {s.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
