import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { DottedSquare } from "@/components/DottedSquare";
import { WaveDivider } from "@/components/WaveDivider";

const clients = ["HERO", "BOSCH", "DAIKIN", "MARUTI SUZUKI", "DENSO", "HONDA", "PANASONIC", "LG", "MOTHERSON", "SAMSUNG", "TATA", "HYUNDAI"];

function TextWordReveal({
  text,
  className = "",
  baseDelay = 0.1,
  stagger = 0.08,
  accentWords = [],
}: {
  text: string;
  className?: string;
  baseDelay?: number;
  stagger?: number;
  accentWords?: string[];
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(timer);
  }, []);

  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, idx) => {
        const cleanWord = word.replace(/[^a-zA-Z&]/g, "");
        const isAccent = accentWords.includes(word) || accentWords.includes(cleanWord);
        const delay = (baseDelay + idx * stagger).toFixed(2);
        return (
          <span key={idx} className="inline-block overflow-hidden align-top mr-[0.24em] pb-[0.08em]">
            <span
              className={`inline-block transition-all duration-700 ease-out transform ${mounted
                ? "opacity-100 translate-y-0 filter-none"
                : "opacity-0 translate-y-8 blur-sm"
                } ${isAccent ? "text-accent" : ""}`}
              style={{
                transitionDelay: `${delay}s`,
              }}
            >
              {word}
            </span>
          </span>
        );
      })}
    </span>
  );
}

function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="top" className="relative min-h-[85vh] md:min-h-screen pt-20 sm:pt-24 pb-12 overflow-hidden bg-brand flex items-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/hero-chef.jpg"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-90"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-cream/80 via-cream/55 to-cream/10 md:from-cream/85 md:via-cream/60 md:to-transparent md:w-[60%] lg:w-[55%]" />
      {/* Top Dark Overlay for Navbar contrast */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-brand/90 via-brand/40 to-transparent pointer-events-none z-10" />
      <div className="relative z-10 mx-auto flex max-w-7xl items-start md:items-center px-5 py-4 sm:px-8 w-full">
        <div className="max-w-2xl pt-2 sm:pt-4">
          <p
            className={`eyebrow transition-all duration-700 ease-out transform ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            style={{ transitionDelay: "0.15s" }}
          >
            Nourishing people. Powering industries.
          </p>

          <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.04] sm:text-6xl lg:text-7xl drop-shadow-sm">
            <TextWordReveal text="ROBIN HOSPITALITY & SERVICES" accentWords={["&", "SERVICES"]} baseDelay={0.25} stagger={0.08} />
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-brand/90 sm:text-xl font-medium">
            <TextWordReveal text="Delivered to factories, for a healthier and more productive tomorrow." baseDelay={0.65} stagger={0.04} />
          </p>

          <div
            className={`mt-6 flex flex-wrap gap-3 transition-all duration-700 ease-out transform ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            style={{ transitionDelay: "1.1s" }}
          >
            <a href="/services" className="btn-primary">Our Services <span>→</span></a>
            <a href="/contact" className="btn-outline">Contact Us</a>
          </div>

          <p
            className={`script-note mt-7 transition-all duration-700 ease-out transform ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            style={{ transitionDelay: "1.25s" }}
          >
            Good Food<br />Stronger Teams <span className="script-swoop" />
          </p>
        </div>
      </div>
      <WaveDivider position="bottom" fillColor="fill-cream" />
    </section>
  );
}

export default function HomePage() {
  useScrollReveal();

  return (
    <main className="min-h-screen overflow-x-hidden bg-cream text-brand">
      <Navbar />

      <HeroSection />

      <section id="about" className="relative section-shell bg-cream">
        <DottedSquare className="absolute top-12 right-12 text-brand/20" />
        <DottedSquare className="absolute bottom-16 left-8 text-brand/15" />

        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div className="reveal-from-left">
            <p className="section-label">About Us</p>
            <h2 className="section-title">More Than Food, <span>A Healthier Workforce</span></h2>
            <p className="body-copy">Robin Hospitality Services is dedicated to providing hygienic, nutritious and great-tasting food to factories and industrial workplaces. We understand that a well-nourished workforce is the backbone of every successful industry.</p>
            <a href="/about" className="btn-primary mt-8">Know More About Us <span>→</span></a>
          </div>
          <div className="relative mx-auto max-w-md w-full reveal-from-right">
            <img src="/about-delivery.png" alt="Robin Hospitality Services delivery truck and team loading catering containers" className="h-auto max-h-[320px] md:max-h-[360px] w-full object-contain mix-blend-multiply transition-transform duration-500 hover:scale-105" />
          </div>
        </div>

        {/* Mission & Vision Cards with Background Images */}
        <div className="mx-auto mt-14 grid max-w-7xl gap-8 px-5 sm:px-8 md:grid-cols-2">
          {/* Mission Box */}
          <div className="relative overflow-hidden rounded-3xl border border-brand/10 p-8 sm:p-10 text-cream shadow-xl reveal-from-left">
            <img src="/food.jpg" alt="Mission background" className="absolute inset-0 h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-br from-brand/95 via-brand/90 to-brand/85" />
            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-cream text-2xl font-bold">🎯</span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-cream">Our Mission</h3>
              </div>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-cream/95 font-medium">
                Our mission is to provide best quality food to nourish individual, businesses and communities through the serving of delicious and hygienic food with friendly environment.
              </p>
            </div>
          </div>

          {/* Vision Box */}
          <div className="relative overflow-hidden rounded-3xl border border-brand/10 p-8 sm:p-10 text-cream shadow-xl reveal-from-right">
            <img src="/service-catering.jpg" alt="Vision background" className="absolute inset-0 h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-br from-brand/95 via-brand/90 to-brand/85" />
            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-cream text-2xl font-bold">👁</span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-cream">Our Vision</h3>
              </div>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-cream/95 font-medium">
                Our Vision is to be the only choice of clients/Customers when it comes to Hospitality Management, Catering & Restaurant in INDIA. Our only motto is <span className="text-accent font-bold">"Serving Quality Food With Smile"</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="relative section-shell bg-service">
        <DottedSquare className="absolute top-16 left-10 text-brand/20" />
        <DottedSquare className="absolute bottom-12 right-12 text-brand/20" />

        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center reveal-on-scroll">
            <p className="section-label justify-center">Our Services</p>
            <h2 className="section-title">Quality Food. <span>Care Beyond Service.</span></h2>
            <p className="body-copy mx-auto">We create healthier, happier workplaces with reliable catering and professional hospitality services tailored for factories and industrial environments.</p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_1fr_1fr]">
            <img src="/service-catering.jpg" alt="Robin chef preparing fresh meals" className="h-full min-h-[470px] w-full rounded-2xl object-cover reveal-from-left" />
            <ServiceCard image="/service-catering.jpg" title="Catering Services" subtitle="Nutritious Meals for a Stronger Workforce" items={["Breakfast, Lunch & Dinner", "Customized Menu Planning", "Hygienic Food Preparation", "Large-Scale Meal Delivery"]} className="reveal-on-scroll reveal-delay-100" />
            <ServiceCard image="/service-hospitality.jpg" title="Hospitality Services" subtitle="Clean | Safe | Comfortable" items={["Housekeeping & Cleaning", "Pantry & Dining Management", "Trained & Reliable Staff", "Hygiene & Safety Compliance"]} className="reveal-from-right reveal-delay-200" />
          </div>
        </div>
      </section>


      {/* Clients Section with Custom Clients Banner Background */}
      <section id="clients" className="section-shell relative overflow-hidden bg-brand text-cream py-24 sm:py-32">
        <WaveDivider position="top" fillColor="fill-cream" />
        <img src="/clients-top-banner.png" alt="Trusted by Leading Industries Background" className="absolute inset-0 h-full w-full object-cover object-center opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand/95 via-brand/80 to-brand/60" />

        <DottedSquare className="absolute top-10 left-12 text-white/20 z-10" />
        <DottedSquare className="absolute bottom-10 right-14 text-white/20 z-10" />
        <WaveDivider position="bottom" fillColor="fill-cream" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 text-center sm:px-8">
          <div className="reveal-on-scroll">
            <p className="section-label justify-center text-amber-400">Our Esteemed Client</p>
            <h2 className="section-title text-white">Trusted by <span className="text-amber-400">Leading Industries</span></h2>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-white font-medium drop-shadow-sm">
              We are proud to serve global manufacturing pioneers with dedicated daily catering and industrial hospitality services.
            </p>
          </div>

          <div className="mt-12 flex justify-center reveal-on-scroll reveal-delay-100">
            <div className="group relative max-w-xl w-full overflow-hidden rounded-3xl border border-brand/15 bg-white/95 p-8 sm:p-12 shadow-2xl backdrop-blur-md transition-all duration-500 hover:scale-[1.02] hover:border-accent">
              <div className="flex flex-col items-center justify-center">
                <img
                  src="/bkt-logo.png"
                  alt="BKT Tires - Balkrishna Industries Limited"
                  className="h-auto max-h-36 sm:max-h-44 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />

              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ServiceCard({ image, title, subtitle, items, className = "" }: { image: string; title: string; subtitle: string; items: string[]; className?: string }) {
  return <article className={`overflow-hidden rounded-2xl border border-brand/10 bg-cream shadow-soft ${className}`}><img src={image} alt="" className="h-44 w-full object-cover" /><div className="p-6"><h3 className="font-display text-2xl font-bold">{title}</h3><p className="mt-1 text-sm font-semibold text-brand/70">{subtitle}</p><ul className="mt-5 space-y-3 text-sm">{items.map(item => <li key={item} className="flex gap-2"><span className="text-accent">✓</span>{item}</li>)}</ul></div></article>;
}