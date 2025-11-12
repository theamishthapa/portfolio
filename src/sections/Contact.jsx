import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="contact"
      className="w-full bg-white text-gray-900 py-20 px-6 flex flex-col items-center justify-center"
      data-aos="fade-up"
    >
      <h2 className="text-4xl md:text-8xl font-semibold mb-6 md:mb-16 text-gray-300">
        Get in{" "}
        <span className="text-gray-200  text-6xl md:text-9xl">Touch</span>
      </h2>
      <p className="text-gray-400 mb-10 max-w-md">
        Have a question, project idea, or wanna discuss some freelance projects?
        I’d love to hear from you.
      </p>

      <form
        className="flex flex-col w-full max-w-md space-y-4"
        onSubmit={(e) => e.preventDefault()}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <input
          type="text"
          placeholder="Your Name"
          required
          className="p-3 border border-gray-300 bg-transparent text-gray-900 outline-none focus:border-black transition duration-300"
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          className="p-3 border border-gray-300 bg-transparent text-gray-900 outline-none focus:border-black transition duration-300"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          required
          className="p-3 border border-gray-300 bg-transparent text-gray-900 outline-none focus:border-black resize-none transition duration-300"
        ></textarea>

        <button
          type="submit"
          className="border border-black bg-white text-black py-3 font-semibold hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
