import { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import callIcon from "../../assets/icons/call.svg";
import emailIcon from "../../assets/icons/email.svg";
import calendarIcon from "../../assets/icons/calendar.svg";
import globeIcon from "../../assets/icons/map.svg";
import chevronDown from "../../assets/icons/chevron-down.svg";
import { NAV_LINKS } from "../../data/directoryPages";
import { useLanguage } from "../../i18n/LanguageProvider";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const { language, setLanguage, options: languageOptions } = useLanguage();
  const currentPath = window.location.pathname.replace(/\/$/, "") || "/";

  useEffect(() => {
    document.body.classList.toggle("no-scroll", menuOpen);
    return () => document.body.classList.remove("no-scroll");
  }, [menuOpen]);

  return (
    <header className="site-header" id="home">
      <div className="utility-bar">
        <div className="container utility-bar__inner">
          <a className="utility-bar__phone" href="tel:+18003596971">
            <img src={callIcon} alt="" aria-hidden="true" />
            Call us @ 1 (800) 359-6971
          </a>
          <ul className="utility-bar__right">
            <li>
              <a href="#calendar">
                <img src={calendarIcon} alt="" aria-hidden="true" />
                Calendar
              </a>
            </li>
            <li>
              <a href="mailto:info@lumberton.org">
                <img src={emailIcon} alt="" aria-hidden="true" />
                info@lumberton.org
              </a>
            </li>
            <li>
              <div className={`utility-language ${languageMenuOpen ? "is-open" : ""}`} data-no-translate>
                <button type="button" className="utility-bar__lang" aria-label="Choose language" aria-expanded={languageMenuOpen} onClick={() => setLanguageMenuOpen((open) => !open)}>
                  <img src={globeIcon} alt="" aria-hidden="true" />
                  {languageOptions.find((option) => option.code === language)?.short || "EN"}
                  <img src={chevronDown} alt="" aria-hidden="true" className="chevron" />
                </button>
                <div className="utility-language__menu" role="menu" aria-label="Languages">
                  {languageOptions.map((option) => <button type="button" role="menuitemradio" aria-checked={language === option.code} key={option.code} onClick={() => { setLanguage(option.code); setLanguageMenuOpen(false); }}>{option.name}</button>)}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="main-nav">
        <div className="container main-nav__inner">
          <a href="/" className="main-nav__logo">
            <img src={logo} alt="Lumberton, North Carolina Visitors Bureau" />
          </a>

          <nav
            className={`main-nav__links ${menuOpen ? "is-open" : ""}`}
            aria-label="Primary"
          >
            <a
              href="/"
              className="main-nav__drawer-logo"
              aria-label="Lumberton Visitors Bureau home"
              onClick={() => setMenuOpen(false)}
            >
              <img src={logo} alt="" aria-hidden="true" />
            </a>
            <ul>
              {NAV_LINKS.map((link) => {
                const hasChildren = Boolean(link.children?.length);
                const active = link.href ? currentPath === link.href : currentPath.startsWith(`/${link.label.toLowerCase().replaceAll(" ", "-")}/`);
                return (
                  <li key={link.label} className={`main-nav__item ${hasChildren ? "main-nav__item--dropdown" : ""} ${openDropdown === link.label ? "is-expanded" : ""}`}>
                    {hasChildren ? (
                      <>
                        <button type="button" className={`main-nav__trigger ${active ? "is-active" : ""}`} aria-expanded={openDropdown === link.label} onClick={() => setOpenDropdown((open) => open === link.label ? null : link.label)}>
                          {link.label}<img src={chevronDown} alt="" aria-hidden="true" className="chevron" />
                        </button>
                        <ul className="main-nav__dropdown">
                          {link.children.map((child) => <li key={child.href}><a href={child.href} onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}>{child.label}</a></li>)}
                        </ul>
                      </>
                    ) : (
                      <a href={link.href} className={currentPath === link.href ? "is-active" : ""} onClick={() => setMenuOpen(false)}>{link.label}</a>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            className={`hamburger ${menuOpen ? "is-open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
