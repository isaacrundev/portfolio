import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from "react";
import BackToTop from "../components/BackToTop";
import Header from "../components/Header";
import MenuButton from "../components/MenuButton";
import Contact from "../layouts/Contact";
import Hero from "../layouts/Hero";
import Showcases from "../layouts/Showcases";
import About from "../layouts/About";

export const Route = createFileRoute('/')({ component: App })

const menuItem: string[] = ["about", "showcases", "contact"];

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const BackToTopVisibility = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", BackToTopVisibility);
    return () => window.removeEventListener("scroll", BackToTopVisibility);
  }, []); // fixed dependencies if needed

  return (
    <>
      <Header>
        {menuItem.map((item) => (
          <MenuButton
            key={item}
            text={item.charAt(0).toUpperCase() + item.slice(1)}
            linkTo={"#" + item}
          />
        ))}
      </Header>
      <Hero />
      <About />
      <Showcases />
      <Contact />
      {scrollPosition > 64 && <BackToTop />}
    </>
  );
}
