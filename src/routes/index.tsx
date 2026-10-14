import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import BackToTop from "../components/BackToTop";
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
  const { t } = useTranslation();

  useEffect(() => {
    // Boolean state: React bails out of re-rendering when the value is unchanged,
    // so scrolling no longer re-renders every showcase on every scroll event.
    const onScroll = () => setShowBackToTop(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Header>
        {menuItem.map((item) => (
          <MenuButton
            key={item}
            text={t(`nav.${item}`)}
            linkTo={"#" + item}
          />
        ))}
        <LanguageSwitcher />
      </Header>
      <Hero />
      <About />
      <Showcases />
      <Contact />
      {showBackToTop && <BackToTop />}
    </>
  );
}
