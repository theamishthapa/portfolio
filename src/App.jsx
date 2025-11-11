import "./App.css";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Hero from "./sections/HeroSection";
import Projects from "./sections/Projects";
import Quote from "./sections/Quote";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Quote />
      <Footer />
    </>
  );
}

export default App;
