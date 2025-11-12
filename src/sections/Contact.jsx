import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // stop page reload

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/movyvawn", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        alert("Message sent successfully!");
        form.reset(); // clear all fields
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="w-full bg-white text-gray-900 py-20 px-6 flex flex-col items-center justify-center"
      data-aos="fade-up"
    >
      <h2 className="text-4xl md:text-8xl font-semibold mb-6 md:mb-16 text-gray-300">
        Get in <span className="text-gray-200 text-6xl md:text-9xl">Touch</span>
      </h2>

      <p className="text-gray-400 mb-10 max-w-md">
        Have a question, project idea, or wanna discuss some freelance projects?
        I’d love to hear from you.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-md space-y-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-3 border border-gray-300 bg-transparent text-gray-900 outline-none focus:border-black transition duration-300"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-3 border border-gray-300 bg-transparent text-gray-900 outline-none focus:border-black transition duration-300"
        />

        <textarea
          name="message"
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
