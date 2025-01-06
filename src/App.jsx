import Navbar from "./components/Nav/Navbar";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import { useState, useRef } from "react";

function App() {
  const [orderPopup, setOrderPopup] = useState(false);
  const handlerOrderPopup = () => setOrderPopup(!orderPopup);
  const linkRef = useRef(null);

  return (
    <>
      <Navbar
        handlerOrderPopup={handlerOrderPopup}
        onClick={() => console.log(hello)}
      />
      <Hero />
      <Menu handlerOrderPopup={handlerOrderPopup} />
      <About />
      <Contact />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </>
  );
}

export default App;
