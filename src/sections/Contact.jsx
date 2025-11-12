import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full bg-gray-900 text-white py-16 px-6 flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>
      <p className="text-gray-400 mb-10 text-center max-w-md">
        Have a question, project idea, or just want to say hi? I’d love to hear
        from you.
      </p>

      <form
        className="flex flex-col w-full max-w-md space-y-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Your Name"
          required
          className="p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          className="p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          required
          className="p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 py-3 rounded-lg font-semibold"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
