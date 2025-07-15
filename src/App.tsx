import { useEffect } from "react";
import "./styles/main.scss";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
//import Services from "./components/Services";
import Websites from "./components/Websites";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Websites />
      <Footer />
    </>
  );
};

export default App;
