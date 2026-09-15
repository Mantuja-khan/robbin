import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { DottedSquare } from "@/components/DottedSquare";
import { WaveDivider } from "@/components/WaveDivider";
import { TextWordReveal } from "@/components/TextWordReveal";

export default function ServicesPage() {
  useScrollReveal();

  return (
    <main className="min-h-screen bg-cream text-brand">
      <Navbar />
      
      {/* Header Banner with Custom Services Image & Left Aligned Content */}
      <section className="relative min-h-[50vh] sm:min-h-[55vh] flex items-center overflow-hidden bg-brand text-cream pt-32 pb-24 px-5 sm:px-8">
        <img src="/services-top-banner.png" alt="Robin Hospitality Services Collage Banner" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand/95 via-brand/75 to-transparent md:w-[65%]" />
        {/* Top Dark Overlay for Navbar contrast */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-brand/90 via-brand/40 to-transparent pointer-events-none z-10" />
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl text-left">
            <p className="eyebrow text-amber-400 font-semibold tracking-widest uppercase mb-3">
              <TextWordReveal text="Catering • Hospitality • Pantry Management" baseDelay={0.1} />
            </p>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white drop-shadow-md leading-tight uppercase">
              <TextWordReveal text="OUR SERVICES" accentWords={["SERVICES"]} baseDelay={0.2} stagger={0.08} />
            </h1>
            <p className="mt-4 text-cream/95 text-lg sm:text-xl font-medium leading-relaxed max-w-xl">
              <TextWordReveal text="Comprehensive Industrial Catering & Workplace Hospitality Solutions for manufacturing units across India." baseDelay={0.45} stagger={0.04} />
            </p>
            <div className="mt-8 flex flex-wrap gap-4 animate-hero-fade" style={{ animationDelay: "0.85s" }}>
              <a href="/contact" className="btn-primary uppercase tracking-wider text-xs px-6 py-3">Request a Quote <span>→</span></a>
              <a href="/about" className="btn-outline text-white border-white/60 hover:bg-white hover:text-brand uppercase tracking-wider text-xs px-6 py-3">About Us</a>
            </div>
          </div>
        </div>
        <WaveDivider position="bottom" fillColor="fill-cream" />
      </section>

      <section className="relative max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <DottedSquare className="absolute top-10 right-10 text-brand/20" />
        <DottedSquare className="absolute bottom-10 left-12 text-brand/20" />
        <div className="relative z-10 grid gap-8 md:grid-cols-2">
          {/* Catering Services Card */}
          <article className="group relative overflow-hidden rounded-3xl min-h-[480px] flex flex-col justify-end p-8 border border-white/10 shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-amber-400/50 reveal-from-left">
            <img
              src="/service-catering.jpg"
              alt="Catering Services"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/40 transition-opacity duration-500 group-hover:from-black/95 group-hover:via-black/85 group-hover:to-black/50" />
            <div className="absolute inset-0 bg-black/30" />

            <div className="relative z-10 text-white">
              <span className="inline-block rounded-full bg-accent/90 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cream mb-3 shadow-md">
                DIVISION 01
              </span>
              <h2 className="font-display text-3xl font-extrabold text-white tracking-wide uppercase drop-shadow-md">
                CATERING SERVICES
              </h2>
              <p className="mt-2 text-sm sm:text-base font-medium text-gray-200">
                Large-scale breakfast, lunch, dinner, and midnight meal solutions designed specifically for manufacturing units and factory environments.
              </p>
              <ul className="mt-5 space-y-2.5 text-sm sm:text-base text-gray-100">
                <li className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-cream text-xs font-bold">✓</span>
                  <span>Customized Daily & Weekly Menus</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-cream text-xs font-bold">✓</span>
                  <span>High Capacity Central Kitchen Production</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-cream text-xs font-bold">✓</span>
                  <span>Insulated Delivery & Warm Serving Counters</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-cream text-xs font-bold">✓</span>
                  <span>100% FSSAI Safety Standard Compliance</span>
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-white/20">
                <a
                  href="/catering"
                  className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 transition-colors duration-300 hover:text-white uppercase tracking-wider"
                >
                  VIEW CATERING DETAILS <span className="transition-transform group-hover:translate-x-1.5">→</span>
                </a>
              </div>
            </div>
          </article>

          {/* Hospitality Services Card */}
          <article className="group relative overflow-hidden rounded-3xl min-h-[480px] flex flex-col justify-end p-8 border border-white/10 shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-amber-400/50 reveal-from-right">
            <img
              src="/service-hospitality.jpg"
              alt="Hospitality Services"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/40 transition-opacity duration-500 group-hover:from-black/95 group-hover:via-black/85 group-hover:to-black/50" />
            <div className="absolute inset-0 bg-black/30" />

            <div className="relative z-10 text-white">
              <span className="inline-block rounded-full bg-accent/90 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cream mb-3 shadow-md">
                DIVISION 02
              </span>
              <h2 className="font-display text-3xl font-extrabold text-white tracking-wide uppercase drop-shadow-md">
                HOSPITALITY SERVICES
              </h2>
              <p className="mt-2 text-sm sm:text-base font-medium text-gray-200">
                Complete pantry management, cafeteria housekeeping, dining hall logistics, and trained professional staff.
              </p>
              <ul className="mt-5 space-y-2.5 text-sm sm:text-base text-gray-100">
                <li className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-cream text-xs font-bold">✓</span>
                  <span>Cafeteria Cleaning & Deep Sanitation</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-cream text-xs font-bold">✓</span>
                  <span>Executive Pantry & Beverage Vending</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-cream text-xs font-bold">✓</span>
                  <span>Trained, Uniformed & Groomed Staff</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-cream text-xs font-bold">✓</span>
                  <span>Waste Management & Zero-Contamination Policy</span>
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-white/20">
                <a
                  href="/hospitality"
                  className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 transition-colors duration-300 hover:text-white uppercase tracking-wider"
                >
                  VIEW HOSPITALITY DETAILS <span className="transition-transform group-hover:translate-x-1.5">→</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CTA Section with Light Background & Wave Divider */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-b from-white via-cream/90 to-white text-brand">
        <WaveDivider position="top" fillColor="fill-cream" />
        <img src="/food.jpg" alt="Catering meal background" className="absolute inset-0 h-full w-full object-cover opacity-10 object-center" />
        <div className="relative z-10 max-w-5xl mx-auto text-center px-5 sm:px-8 reveal-on-scroll">
          <p className="section-label justify-center uppercase">TAILORED CATERING</p>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-brand mt-2 uppercase">NEED A CUSTOM MEAL PLAN FOR YOUR FACTORY?</h2>
          <p className="mt-4 text-brand/80 text-lg max-w-2xl mx-auto">Contact our team to get a detailed quotation tailored for your daily headcount and menu preferences.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="/contact" className="btn-primary">Request a Quote <span>→</span></a>
            <a href="/about" className="btn-outline">Learn About Us</a>
          </div>
        </div>
        <WaveDivider position="bottom" fillColor="fill-cream" />
      </section>

      <Footer />
    </main>
  );
}
