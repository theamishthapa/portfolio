import React, { useEffect, useState } from "react";
import heroImage from "../assets/images/hero-landscape.jpg";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY * 0.5); // adjust speed factor
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center overflow-hidden"
      data-aos="fade-up" // ✅ proper AOS usage
    >
      {/* Parallax Background */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${offsetY}px)`,
          backgroundPosition: "top",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 md:px-12 text-left">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
          Hi, I’m Amish Thapa
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-6">
          I’m a web developer building modern, responsive, and aesthetic web
          experiences. Let’s create something amazing together.
        </p>
        <a
          href="#projects"
          className="inline-block px-6 py-3 border border-white text-white font-semibold bg-transparent hover:bg-white hover:text-black transition"
        >
          See My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
