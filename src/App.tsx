import { useEffect, useState } from "react";
import "./App.css";
import BackToTop from "./components/BackToTop";
import Header from "./components/Header";
import MenuButton from "./components/MenuButton";
import Contact from "./sections/Contact";
import Main from "./sections/Main";
import Showcases from "./sections/Showcases";

// window.onscroll = function () {
//   scrollFunction();
// };

const menuItem: string[] = ["about", "showcases", "contact"];

function App() {
  // const [scroll, setScroll] = useState<number>(window.scrollY);

  return (
    <>
      {/* {document.body.scrollTop > 20 ||
        (document.documentElement.scrollTop > 20 && <BackToTop />)} */}
      <Header>
        {menuItem.map((item) => (
          <MenuButton
            text={item.charAt(0).toUpperCase() + item.slice(1)}
            linkTo={"#" + item}
          />
        ))}
      </Header>
      <Main />
      <Showcases />
      <Contact />
      <img src="1.png" alt="" />
    </>
  );
}

export default App;
