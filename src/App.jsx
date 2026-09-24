import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import CardRow from "./components/CardRow/CardRow";
import PromoSplit from "./components/PromoSplit/PromoSplit";
import EventsShowcase from "./components/EventsShowcase/EventsShowcase";
import PartnerStrip from "./components/PartnerStrip/PartnerStrip";
import Footer from "./components/Footer/Footer";
import AboutPage from "./pages/AboutPage";
import DirectoryPage from "./pages/DirectoryPage";
import { DIRECTORY_PAGES } from "./data/directoryPages";
import FAQsPage from "./pages/FAQsPage";
import ContactPage from "./pages/ContactPage";
import SiteAnimations from "./components/SiteAnimations";
import LanguageProvider from "./i18n/LanguageProvider";

import golfer from "./assets/images/golfer.png";
import heartMural from "./assets/images/heart-mural.png";
import foodPlatter from "./assets/images/food-platter.png";
import golfPromo from "./assets/images/golf-promo.png";
import restaurantAdelios from "./assets/images/restaurant-adelios.png";
import sandwich from "./assets/images/sandwich.png";
import restaurantAwning from "./assets/images/restaurant-awning.png";
import outdoorDinner from "./assets/images/outdoor-dinner.png";
import conferenceRoom from "./assets/images/conference-room.png";
import weddingArch from "./assets/images/wedding-arch.png";
import liveMusic from "./assets/images/live-music.png";
import seasonalEvent from "./assets/images/seasonal-event.png";

const PROGRAM_ITEMS = [
  { title: "Golf", description: "No need to fret, we can help you plan your trip.", image: golfer, alt: "Golfer swinging a club on a course at sunset" },
  { title: "Arts, Culture, Outdoor Adventure", image: heartMural, alt: "Colorful heart mural on a downtown Lumberton building" },
  { title: "Local Cuisine & Drinks", image: foodPlatter, alt: "Roast chicken platter with seasonal sides" },
  { title: "Live Music & Events", image: liveMusic, alt: "Musician playing acoustic guitar at a local event" },
];

const RESTAURANT_ITEMS = [
  { title: "Adelio's Downtown", image: restaurantAdelios, alt: "Adelio's Italian-American Ristorante storefront" },
  { title: "Arby's", image: sandwich, alt: "Roast beef sandwich on a wooden board" },
  { title: "Best Tacos & Wings", image: restaurantAwning, alt: "Local restaurant storefront with red awning" },
  { title: "Local Cuisine", image: foodPlatter, alt: "Roast chicken platter with seasonal sides" },
];

const BUSINESS_ITEMS = [
  { title: "Weddings", image: weddingArch, alt: "Floral wedding arch set up on the water" },
  { title: "Banquets/ Family Reunion", image: outdoorDinner, alt: "Guests enjoying an outdoor garden dinner party" },
  { title: "Meeting Spaces", image: conferenceRoom, alt: "Modern glass-walled conference room" },
  { title: "Live Event Experiences", image: liveMusic, alt: "Live musician performing at an event" },
];

export default function App() {
  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
  const isAboutPage = currentPath === "/about";
  const isFAQsPage = currentPath === "/faqs";
  const isContactPage = currentPath === "/contact";
  const directoryPage = DIRECTORY_PAGES[currentPath];

  return (
    <LanguageProvider>
    <SiteAnimations>
      <Header />
      {directoryPage ? <DirectoryPage page={directoryPage} /> : isFAQsPage ? <FAQsPage /> : isContactPage ? <ContactPage /> : isAboutPage ? <AboutPage /> : (
        <main>
          <Hero />
          <CardRow id="programs" eyebrow="Our best offered" heading="Programs" description="No need to fret, we can help you plan your trip." items={PROGRAM_ITEMS} />
          <PromoSplit image={golfPromo} alt="Golfer teeing off with a Tee Off - Your U.S. Open Experience In Lumberton banner" eyebrow="Highly converted" heading="Championship" description="Expected to bring over 225,000 attendees during its full-week event. You're likely one of them." cta="Get the Details !" />
          <CardRow id="restaurants" eyebrow="Dining" heading="Restaurants" description="Places to Eat & Drink in Lumberton, NC" items={RESTAURANT_ITEMS} />
          <EventsShowcase eyebrow="Upcoming" heading="Events" description="Get the latest news and event information for Lumberton." cta="Get the Details !" imageMain={seasonalEvent} altMain="Person in an Easter Bunny costume seated at a table" titleMain="Eastern Bunny" imageAccent={liveMusic} altAccent="Musician Rob Cole playing acoustic guitar" titleAccent="Rob Cole" />
          <CardRow id="business" eyebrow="Our" heading="Business" description="Our business to keep you up-to-date even on Vacations." items={BUSINESS_ITEMS} />
          <PartnerStrip />
        </main>
      )}
      <Footer />
    </SiteAnimations>
    </LanguageProvider>
  );
}
