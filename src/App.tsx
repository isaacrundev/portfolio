import "./App.css";
import BackToTop from "./components/BackToTop";
import Header from "./components/Header";
import MenuButton from "./components/MenuButton";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Showcases from "./sections/Showcases";
import About from "./sections/About";
import { useEffect, useState } from "react";

const menuItem: string[] = ["about", "showcases", "contact"];

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const BackToTopVisibility = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", BackToTopVisibility);
  }, [scrollPosition]);

  return (
    <>
      <Header>
        {menuItem.map((item) => (
          <MenuButton
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

export default App;
