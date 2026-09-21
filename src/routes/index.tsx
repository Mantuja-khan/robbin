import { useEffect, useState, useRef } from "react";
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
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");
  return (
    <span ref={containerRef} className={className}>
      {words.map((word, idx) => {
        const cleanWord = word.replace(/[^a-zA-Z&.]/g, "");
        const isAccent = accentWords.includes(word) || accentWords.includes(cleanWord);
        const delay = (baseDelay + idx * stagger).toFixed(2);
        return (
          <span key={idx} className="inline-block overflow-hidden align-top mr-[0.24em] pb-[0.08em]">
            <span
              className={`inline-block transition-all duration-700 ease-out transform ${inView
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

function HeroVideoBackground() {
  const [activeVideo, setActiveVideo] = useState<0 | 1>(0);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const isSwitchingRef = useRef(false);

  const handleTimeUpdate1 = () => {
    const v1 = video1Ref.current;
    if (!v1 || activeVideo !== 0 || isSwitchingRef.current) return;

    // Show first video for half its total duration
    if (v1.duration && v1.duration > 0 && v1.currentTime >= v1.duration / 2) {
      isSwitchingRef.current = true;
      v1.pause();
      v1.currentTime = 0;
      setActiveVideo(1);

      if (video2Ref.current) {
        video2Ref.current.currentTime = 0;
        const playPromise = video2Ref.current.play();
        if (playPromise !== undefined) {
          playPromise
            .catch(() => { })
            .finally(() => {
              isSwitchingRef.current = false;
            });
        } else {
          isSwitchingRef.current = false;
        }
      } else {
        isSwitchingRef.current = false;
      }
    }
  };

  const handleEnded2 = () => {
    const v2 = video2Ref.current;
    if (v2) {
      v2.currentTime = 0;
    }
    setActiveVideo(0);
    if (video1Ref.current) {
      video1Ref.current.currentTime = 0;
      video1Ref.current.play().catch(() => { });
    }
  };

  useEffect(() => {
    if (activeVideo === 0 && video1Ref.current) {
      video1Ref.current.play().catch(() => { });
    } else if (activeVideo === 1 && video2Ref.current) {
      video2Ref.current.play().catch(() => { });
    }
  }, [activeVideo]);

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden">
      <video
        ref={video1Ref}
        autoPlay
        muted
        playsInline
        preload="auto"
        poster="/hero-chef.jpg"
        onTimeUpdate={handleTimeUpdate1}
        className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${activeVideo === 0 ? "opacity-90 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        <source src="/first.mp4" type="video/mp4" />
      </video>

      <video
        ref={video2Ref}
        muted
        playsInline
        preload="auto"
        poster="/hero-chef.jpg"
        onEnded={handleEnded2}
        className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${activeVideo === 1 ? "opacity-90 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        <source src="/second.mp4" type="video/mp4" />
      </video>
    </div>
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
      <HeroVideoBackground />
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
          <div className="relative mx-auto max-w-xl w-full flex justify-center items-center reveal-from-right">
            <img
              src="/about-delivery.png"
              alt="Robin Hospitality Services delivery truck and team loading catering containers"
              className="h-auto max-h-[460px] sm:max-h-[520px] md:max-h-[580px] w-full object-contain mix-blend-multiply transition-transform duration-500 hover:scale-105"
            />
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

      <section id="services" className="relative section-shell bg-service py-20 sm:py-28">
        <DottedSquare className="absolute top-16 left-10 text-brand/20" />
        <DottedSquare className="absolute bottom-12 right-12 text-brand/20" />

        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center reveal-on-scroll">
            <p className="section-label justify-center text-amber-700 uppercase tracking-widest font-extrabold text-xs sm:text-sm">OUR SERVICES</p>
            <h2 className="section-title text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-brand mt-3 leading-snug">
              <TextWordReveal
                text="QUALITY FOOD. CARE BEYOND SERVICE."
                accentWords={["CARE", "BEYOND", "SERVICE.", "CARE.", "SERVICE"]}
                baseDelay={0.1}
                stagger={0.08}
              />
            </h2>
            <p className="body-copy mx-auto mt-4 text-base sm:text-lg">We create healthier, happier workplaces with reliable catering and professional hospitality services tailored for factories and industrial environments.</p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            <ServiceCard
              image="/service-catering.jpg"
              category="CATERING SERVICES"
              title="CATERING SERVICES"
              subtitle="Nutritious Meals for a Stronger Workforce"
              items={["Breakfast, Lunch & Dinner", "Customized Menu Planning", "Hygienic Food Preparation", "Large-Scale Meal Delivery"]}
              href="/services/catering"
              className="reveal-on-scroll reveal-delay-100"
            />
            <ServiceCard
              image="/service-hospitality.jpg"
              category="HOSPITALITY SERVICES"
              title="HOSPITALITY SERVICES"
              subtitle="Clean | Safe | Comfortable"
              items={["Housekeeping & Cleaning", "Pantry & Dining Management", "Trained & Reliable Staff", "Hygiene & Safety Compliance"]}
              href="/services/hospitality"
              className="reveal-on-scroll reveal-delay-200"
            />
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

          <div className="mt-12 grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto reveal-on-scroll reveal-delay-100">
            {/* Client 1: BKT */}
            <div className="group relative w-full overflow-hidden rounded-3xl border border-brand/15 bg-white/95 p-6 sm:p-8 shadow-2xl backdrop-blur-md transition-all duration-500 hover:scale-[1.02] hover:border-accent flex flex-col items-center justify-center">
              <div className="h-32 sm:h-36 flex items-center justify-center">
                <img
                  src="/bkt-logo.png"
                  alt="BKT Tires - Balkrishna Industries Limited"
                  className="max-h-24 sm:max-h-28 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 border-t border-brand/10 pt-4 text-center w-full">
                <h3 className="font-display text-base sm:text-lg font-bold text-brand uppercase">BALKRISHNA INDUSTRIES (BKT)</h3>
                <p className="text-xs font-semibold text-accent mt-1">Leading Global Tire Manufacturer</p>
              </div>
            </div>

            {/* Client 2: RN Wire */}
            <div className="group relative w-full overflow-hidden rounded-3xl border border-brand/15 bg-white/95 p-6 sm:p-8 shadow-2xl backdrop-blur-md transition-all duration-500 hover:scale-[1.02] hover:border-accent flex flex-col items-center justify-center">
              <div className="h-32 sm:h-36 flex items-center justify-center">
                <img
                  src="/rw-wire-logo.png"
                  alt="RAHUL WIRES - Wire with Ultimate Precision"
                  className="max-h-24 sm:max-h-28 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 border-t border-brand/10 pt-4 text-center w-full">
                <h3 className="font-display text-base sm:text-lg font-bold text-brand uppercase">RAHUL WIRES </h3>
                <p className="text-xs font-semibold text-accent mt-1">Wire with Ultimate Precision</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ServiceCard({
  image,
  category,
  title,
  subtitle,
  items,
  href,
  className = "",
}: {
  image: string;
  category: string;
  title: string;
  subtitle: string;
  items: string[];
  href: string;
  className?: string;
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-3xl min-h-[460px] flex flex-col justify-end p-7 sm:p-8 border border-white/10 shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-amber-400/50 ${className}`}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Dark Black Color Gradient Overlay for high legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/40 transition-opacity duration-500 group-hover:from-black/95 group-hover:via-black/85 group-hover:to-black/50" />
      <div className="absolute inset-0 bg-black/30" />

      {/* Content over the image */}
      <div className="relative z-10 text-white">
        <span className="inline-block rounded-full bg-accent/90 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cream mb-3 shadow-md">
          {category}
        </span>
        <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-wide uppercase drop-shadow-md">
          {title}
        </h3>
        <p className="mt-1.5 text-sm font-semibold text-amber-300 drop-shadow-sm">
          {subtitle}
        </p>

        <ul className="mt-5 space-y-2.5 text-sm sm:text-base text-gray-100">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-cream text-xs font-bold shadow-sm">
                ✓
              </span>
              <span className="font-medium drop-shadow-sm">{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 pt-4 border-t border-white/20">
          <a
            href={href}
            className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 transition-colors duration-300 hover:text-white"
          >
            EXPLORE SERVICE <span className="transition-transform group-hover:translate-x-1.5">→</span>
          </a>
        </div>
      </div>
    </article>
  );
}