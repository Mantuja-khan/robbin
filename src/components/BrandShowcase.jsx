import { useState, useEffect, useRef } from "react";

const defaultItems = [
  {
    image: "/robin-singh.png",
    thumbnail: "/robin-singh.png",
    eyebrow: "LEADERSHIP & VISION",
    titlePrefix: "Robin",
    titleAccent: "Singh",
    role: "MANAGING DIRECTOR",
    content:
      "A visionary leader and veteran in the hospitality and food service sector since 2006, Robin Singh brings over two decades of dedicated industry leadership. Under his guidance, Robin Hospitality Services has set industry benchmarks in large-scale industrial catering, institutional dining, and comprehensive facility management across India. His core philosophy emphasizes unwavering food safety, authentic taste, nutritional balance, and forging everlasting client partnerships through transparent, reliable, and excellence-driven operations.",
  },
  {
    image: "/vikash-gupta.jpg",
    thumbnail: "/vikash-gupta.jpg",
    eyebrow: "OPERATIONS & FOOD SERVICE",
    titlePrefix: "Vikash",
    titleAccent: "Gupta",
    role: "GENERAL MANAGER — OPERATIONS",
    content:
      "A results-driven and highly experienced Hospitality & Food Service Operations Professional with 18+ years of industry experience, specializing in end-to-end operations management, food service, catering, kitchen operations, client management, and team leadership. A professionally trained hospitality management graduate from Culinary Institute of India, Durgapur, West Bengal, with extensive hands-on experience in managing large-scale food service operations and delivering consistent standards of quality, hygiene, food safety, service excellence, and operational efficiency.",
  },
];

export function BrandShowcase({ items = defaultItems }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef(null);

  const activeItem = items[activeIndex] || items[0];
  const inactiveIndex = activeIndex === 0 ? 1 : 0;
  const inactiveItem = items[inactiveIndex] || items[1];

  const handleSwap = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? 1 : 0));
    setTimeout(() => {
      setIsAnimating(false);
    }, 450);
  };

  // Automatic 7-second timer with reset on user interaction
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev === 0 ? 1 : 0));
      setTimeout(() => {
        setIsAnimating(false);
      }, 450);
    }, 7000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIndex]);

  return (
    <section className="relative py-14 sm:py-20 bg-gradient-to-b from-cream via-white to-cream overflow-hidden">
      {/* Decorative ambient background elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-brand/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT SIDE - Compact Large Circular Display showing upper half from top */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative">
              
              {/* Outer Decorative Gold Halo Ring */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-full border border-amber-300/40 pointer-events-none" />
              <div className="absolute -top-2 -left-2 h-3.5 w-3.5 rounded-full bg-amber-400 shadow-sm pointer-events-none" />

              {/* LARGE CIRCULAR IMAGE (Half image showing from top) */}
              <div
                className={`relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full bg-white p-2 sm:p-2.5 shadow-2xl border-4 border-white transition-all duration-500 ease-out overflow-hidden ${
                  isAnimating ? "scale-95 opacity-80" : "scale-100 opacity-100"
                }`}
                style={{
                  boxShadow:
                    "0 20px 40px -10px rgba(11, 37, 69, 0.22), 0 0 0 1px rgba(212, 164, 58, 0.2)",
                }}
              >
                <img
                  key={`large-${activeIndex}`}
                  src={activeItem.image}
                  alt={`${activeItem.titlePrefix} ${activeItem.titleAccent}`}
                  className="w-full h-full object-cover object-top rounded-full transition-all duration-700 ease-out"
                />
              </div>

              {/* SMALL CIRCULAR THUMBNAIL (Positioned at Bottom-Right Corner with ~1cm distance) */}
              <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 md:-bottom-4 md:-right-4 z-20">
                <button
                  type="button"
                  onClick={handleSwap}
                  aria-label={`Switch to ${inactiveItem.titlePrefix} ${inactiveItem.titleAccent}`}
                  className="group relative flex flex-col items-center focus:outline-none cursor-pointer"
                  title="Click to switch"
                >
                  {/* Small Circular Image Badge */}
                  <div
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white p-1 sm:p-1.5 border-2 border-amber-400 shadow-2xl group-hover:border-amber-500 group-hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center overflow-hidden ring-4 ring-white"
                    style={{
                      boxShadow: "0 10px 25px -4px rgba(11, 37, 69, 0.35)",
                    }}
                  >
                    <img
                      key={`small-${inactiveIndex}`}
                      src={inactiveItem.thumbnail || inactiveItem.image}
                      alt={`${inactiveItem.titlePrefix} ${inactiveItem.titleAccent}`}
                      className="w-full h-full object-cover object-top rounded-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Switch Pill Overlay */}
                  <span className="absolute -bottom-2.5 px-3 py-0.5 rounded-full bg-brand text-cream text-[10px] font-extrabold uppercase tracking-wider shadow-md group-hover:bg-accent group-hover:text-brand transition-all duration-300 flex items-center gap-1 border border-white/40">
                    <span className="text-amber-400 group-hover:text-brand font-bold">⇅</span>
                    SWITCH
                  </span>
                </button>
              </div>

            </div>

            {/* Auto Switch 7s Timer Status */}
            <div className="mt-7 flex items-center gap-2">
              <div className="h-1.5 w-14 bg-brand/10 rounded-full overflow-hidden">
                <div
                  key={activeIndex}
                  className="h-full bg-accent rounded-full"
                  style={{
                    animation: "progressAnim 7s linear infinite",
                  }}
                />
              </div>
              <span className="text-[10px] uppercase font-semibold text-brand/50 tracking-wider">
                Auto-switch (7s)
              </span>
            </div>
          </div>

          {/* RIGHT SIDE - Information for Active Leadership Member */}
          <div className="lg:col-span-7 text-center sm:text-left flex flex-col items-center sm:items-start pl-0 lg:pl-6">
            <div
              key={`text-${activeIndex}`}
              className="transition-all duration-500 ease-out transform animate-fadeIn"
            >
              {/* Eyebrow with horizontal line */}
              <div className="flex items-center justify-center sm:justify-start gap-3 mb-2.5">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-amber-600">
                  {activeItem.eyebrow}
                </span>
                <span className="h-[2px] w-12 bg-amber-400/80 rounded-full inline-block" />
              </div>

              {/* Title with two-tone styling */}
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15]">
                <span className="text-brand mr-2.5">
                  {activeItem.titlePrefix}
                </span>
                <span className="text-accent">
                  {activeItem.titleAccent}
                </span>
              </h2>

              {/* Role / Designation */}
              <p className="mt-2 text-xs sm:text-sm font-extrabold tracking-widest text-brand/90 uppercase">
                {activeItem.role}
              </p>

              {/* Paragraph Content */}
              <p className="mt-4 text-sm sm:text-base text-brand/80 leading-relaxed font-normal max-w-xl">
                {activeItem.content}
              </p>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes progressAnim {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </section>
  );
}

export default BrandShowcase;
