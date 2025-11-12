import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Hero from "./sections/HeroSection";
import Projects from "./sections/Projects";
import Quote from "./sections/Quote";
import AOS from "aos";
import "aos/dist/aos.css"; // **must** be imported
import Contact from "./sections/Contact";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <>
      <Navbar />
      <Hero data-aos="fade-up" />
      <About data-aos="fade-up" />
      <Projects data-aos="fade-up" />
      <Quote data-aos="fade-up" />
      <Contact data-aos="fade-up" />
      <Footer data-aos="fade-up" />
    </>
  );
}

export default App;
