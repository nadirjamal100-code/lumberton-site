import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { LANGUAGE_OPTIONS, TRANSLATIONS } from "./translations";

const LanguageContext = createContext(null);
const originalText = new WeakMap();
const originalAttributes = new WeakMap();
const ENGLISH_TITLE = "Lumberton Visitors Bureau | Relaxing Weekends Around Us";
const ENGLISH_DESCRIPTION = "Discover golf, dining, weddings, live music and events in Lumberton, North Carolina.";

function translatePage(language) {
  const dictionary = TRANSLATIONS[language] || {};
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (node.parentElement?.closest("[data-no-translate]")) continue;
    const original = originalText.get(node) ?? node.nodeValue;
    if (!original.trim()) continue;
    if (!originalText.has(node)) originalText.set(node, original);
    const leading = original.match(/^\s*/)?.[0] ?? "";
    const trailing = original.match(/\s*$/)?.[0] ?? "";
    const key = original.trim();
    const result = language === "en" ? key : (dictionary[key] || key);
    const next = `${leading}${result}${trailing}`;
    if (node.nodeValue !== next) node.nodeValue = next;
  }

  document.body.querySelectorAll("input, textarea, button, a, img, [title]").forEach((element) => {
    ["placeholder", "aria-label", "alt", "title"].forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;
      let saved = originalAttributes.get(element);
      if (!saved) { saved = {}; originalAttributes.set(element, saved); }
      if (saved[attribute] === undefined) saved[attribute] = element.getAttribute(attribute);
      const text = saved[attribute];
      const next = language === "en" ? text : (dictionary[text] || text);
      if (element.getAttribute(attribute) !== next) element.setAttribute(attribute, next);
    });
  });
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}

export default function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem("lumberton-language");
      return LANGUAGE_OPTIONS.some((option) => option.code === saved) ? saved : "en";
    } catch { return "en"; }
  });

  function setLanguage(next) {
    if (!LANGUAGE_OPTIONS.some((option) => option.code === next)) return;
    setLanguageState(next);
    try { localStorage.setItem("lumberton-language", next); } catch { /* Storage can be disabled. */ }
  }

  useEffect(() => {
    document.documentElement.lang = language;
    const dictionary = TRANSLATIONS[language] || {};
    document.title = language === "en" ? ENGLISH_TITLE : (dictionary[ENGLISH_TITLE] || ENGLISH_TITLE);
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = language === "en" ? ENGLISH_DESCRIPTION : (dictionary[ENGLISH_DESCRIPTION] || ENGLISH_DESCRIPTION);
    const update = () => translatePage(language);
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ["placeholder", "aria-label", "alt", "title"] });
    return () => observer.disconnect();
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage, options: LANGUAGE_OPTIONS }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
