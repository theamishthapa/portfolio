import quoteBg from "../assets/images/quote-bg.jpg";

const Quote = () => {
  return (
    <section
      id="quote"
      className="relative w-full h-96 flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `url(${quoteBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        filter: "grayscale(100%)",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Decorative quotes */}
      <div className="absolute top-4 left-4 text-white text-[8rem] font-bold opacity-20 select-none pointer-events-none">
        “
      </div>
      <div className="absolute bottom-4 right-4 text-white text-[8rem] font-bold opacity-20 select-none pointer-events-none">
        ”
      </div>

      {/* Quote content */}
      <div className="relative z-10 max-w-3xl px-6 text-white">
        <p className="text-2xl md:text-4xl font-semibold mb-6">
          "Discipline is choosing what you want most over what you want now."
        </p>
        <p className="text-lg md:text-xl font-light"></p>
      </div>
    </section>
  );
};

export default Quote;
