import "./InfoPages.css";

const FAQS = [
  ["Where is the Lumberton Visitors Bureau?", "Our office is at 3431 Lackey Street, Lumberton, NC 28360."],
  ["How can I speak with someone about planning a visit?", "Call 910-739-9999 or toll-free at 1-800-359-6971. You can also send us a message from the Contact Us page."],
  ["Where can I find places to stay, shop, or meet?", "Use the Lodging, Shopping, and Meeting Facilities menus at the top of this site to browse local guides by category."],
  ["Can the Visitors Bureau help with group or meeting plans?", "Yes. Contact our team with your dates, group size, and the type of space or information you need. We can help you get started with local options."],
  ["How do I get a Lumberton visitor guide?", "Call our office at 1-800-359-6971 or use the Contact Us form to ask about visitor information."],
  ["Where can I find current events?", "Visit the Events section on the home page for event information and updates."],
];

export default function FAQsPage() {
  return <main className="info-page">
    <section className="info-hero"><div className="container"><span>Here to help</span><h1>User FAQs</h1><p>Quick answers to help you plan your time in Lumberton, North Carolina.</p></div></section>
    <section className="section faq-section"><div className="container faq-layout">
      <header><span className="eyebrow">Good to know</span><h2>Frequently asked questions</h2><p>Can’t find what you need? <a href="/contact">Get in touch with our team.</a></p></header>
      <div className="faq-list">{FAQS.map(([question, answer]) => <details className="faq-item" key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
    </div></section>
    <section className="info-cta"><div className="container info-cta__inner"><div><span>Still have a question?</span><h2>We’ll help you get pointed in the right direction.</h2></div><a href="/contact">Contact Us <span aria-hidden="true">→</span></a></div></section>
  </main>;
}
