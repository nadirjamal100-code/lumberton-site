import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const REVEALS = [
  [".section-heading", { y: 26, duration: 0.75 }],
  [".promo-split__media", { x: -34, duration: 0.9 }],
  [".promo-split__content", { x: 34, duration: 0.8 }],
  [".events__content", { x: -30, duration: 0.8 }],
  [".events__card", { y: 28, duration: 0.75, stagger: 0.14 }],
  [".partner-strip", { y: 22, duration: 0.7 }],
  [".about-intro__layout, .about-story__image-wrap", { x: -28, duration: 0.85 }],
  [".about-intro__copy, .about-story__copy", { x: 28, duration: 0.85 }],
  [".about-highlights__item", { y: 18, duration: 0.6, stagger: 0.12 }],
  [".about-experience", { y: 30, duration: 0.7, stagger: 0.13 }],
  [".about-cta__inner", { y: 22, duration: 0.7 }],
  [".directory-hero__content, .info-hero .container", { y: 24, duration: 0.8 }],
  [".directory-heading, .contact-heading", { y: 20, duration: 0.7 }],
  [".directory-card", { y: 28, duration: 0.65, stagger: 0.1 }],
  [".directory-related, .faq-layout > header", { y: 20, duration: 0.65 }],
  [".faq-item", { y: 14, duration: 0.48, stagger: 0.07 }],
  [".contact-card, .contact-map", { y: 24, duration: 0.7, stagger: 0.12 }],
  [".site-footer__brand, .site-footer__col, .site-footer__newsletter", { y: 18, duration: 0.55, stagger: 0.08 }],
];

export default function SiteAnimations({ children }) {
  const root = useRef(null);

  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const scope = root.current;
      if (!scope) return undefined;
      const cleanups = [];
      const context = gsap.context(() => {
        const header = scope.querySelector(".site-header");
        if (header) gsap.from(header, { y: -16, autoAlpha: 0, duration: 0.65, ease: "power2.out", clearProps: "transform,opacity,visibility" });

        const hero = scope.querySelector(".hero");
        if (hero) {
          const bg = hero.querySelector(".hero__bg");
          const content = hero.querySelector(".hero__content");
          if (bg) gsap.fromTo(bg, { scale: 1.055 }, { scale: 1, duration: 1.5, ease: "power2.out", clearProps: "transform" });
          if (content) gsap.from(content.children, { y: 24, autoAlpha: 0, duration: 0.85, stagger: 0.13, delay: 0.18, ease: "power3.out", clearProps: "transform,opacity,visibility" });
        }

        const aboutHero = scope.querySelector(".about-hero__content");
        if (aboutHero) gsap.from(aboutHero.children, { y: 24, autoAlpha: 0, duration: 0.8, stagger: 0.12, delay: 0.12, ease: "power3.out", clearProps: "transform,opacity,visibility" });

        REVEALS.forEach(([selector, options]) => {
          scope.querySelectorAll(selector).forEach((element) => {
            gsap.from(element, {
              ...options,
              autoAlpha: 0,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
              scrollTrigger: { trigger: element, start: "top 88%", once: true },
            });
          });
        });

        scope.querySelectorAll(".card > img, .events__card > img, .about-experience__image img").forEach((img) => {
          const card = img.closest(".card, .events__card, .about-experience");
          if (!card) return;
          const enter = () => gsap.to(img, { scale: 1.045, duration: 0.45, ease: "power2.out", overwrite: "auto" });
          const leave = () => gsap.to(img, { scale: 1, duration: 0.55, ease: "power2.out", overwrite: "auto" });
          card.addEventListener("mouseenter", enter);
          card.addEventListener("mouseleave", leave);
          card.addEventListener("focusin", enter);
          card.addEventListener("focusout", leave);
          cleanups.push(() => {
            card.removeEventListener("mouseenter", enter);
            card.removeEventListener("mouseleave", leave);
            card.removeEventListener("focusin", enter);
            card.removeEventListener("focusout", leave);
          });
        });
      }, root);

      return () => { context.revert(); cleanups.forEach((cleanup) => cleanup()); };
    });
    return () => media.revert();
  }, []);

  return <div className="site-app" ref={root}>{children}</div>;
}
