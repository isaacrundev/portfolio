import "./App.css";
import Header from "./components/Header";
import MenuButton from "./components/MenuButton";
import Contact from "./sections/Contact";
import Main from "./sections/Main";
import Showcases from "./sections/Showcases";

const menuItem: string[] = ["about", "showcases", "contact"];

function App() {
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
      <Main />
      <Showcases />
      <Contact />
    </>
  );
}

export default App;
