import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from "react";
import { useTranslation } from "../i18n";
import BackToTop from "../components/BackToTop";
import Bubbles from "../components/Bubbles";
import DepthGauge from "../components/DepthGauge";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MenuButton from "../components/MenuButton";
import LanguageSwitcher from "../components/LanguageSwitcher";
import Contact from "../layouts/Contact";
import Hero from "../layouts/Hero";
import Showcases from "../layouts/Showcases";
import About from "../layouts/About";

export const Route = createFileRoute('/')({ component: App })

const menuItem: string[] = ["about", "showcases", "contact"];

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showUnderwater, setShowUnderwater] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    // Boolean state: React bails out of re-rendering when the value is unchanged,
    // so scrolling no longer re-renders every showcase on every scroll event.
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 64);
      // The first viewport is above water: bubbles and the depth gauge only
      // belong in the descent, once the horizon has scrolled past.
      setShowUnderwater(window.scrollY > window.innerHeight * 0.8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {showUnderwater && <Bubbles />}
      {/* The header and the back-to-top button trade places past the same
          scroll threshold, so the content gets the full width. */}
      <Header hidden={showBackToTop}>
        {menuItem.map((item) => (
          <MenuButton
            key={item}
            text={t(`nav.${item}`)}
            linkTo={"#" + item}
          />
        ))}
        <LanguageSwitcher />
      </Header>
      <main className="relative z-10">
        <Hero />
        <About />
        <Showcases />
        <Contact />
      </main>
      <Footer />
      {showUnderwater && <DepthGauge />}
      {showBackToTop && <BackToTop />}
    </>
  );
}
