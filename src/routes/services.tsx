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
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white drop-shadow-md leading-tight">
              <TextWordReveal text="Our Services" accentWords={["Services"]} baseDelay={0.2} stagger={0.08} />
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
          <div className="rounded-3xl border border-brand/10 bg-cream p-8 md:p-10 shadow-soft reveal-from-left flex flex-col justify-between">
            <div>
              <span className="text-accent text-xs font-bold uppercase tracking-widest">Division 01</span>
              <h2 className="font-display text-3xl font-bold text-accent mt-1">Catering Services</h2>
              <p className="mt-4 text-base leading-relaxed text-brand/85">
                Large-scale breakfast, lunch, dinner, and midnight meal solutions designed specifically for manufacturing units and factory environments.
              </p>
              <ul className="mt-6 space-y-3 text-base text-brand/90">
                <li className="flex items-center gap-3"><span className="text-accent text-xl">✓</span> Customized Daily & Weekly Menus</li>
                <li className="flex items-center gap-3"><span className="text-accent text-xl">✓</span> High Capacity Central Kitchen Production</li>
                <li className="flex items-center gap-3"><span className="text-accent text-xl">✓</span> Insulated Delivery & Warm Serving Counters</li>
                <li className="flex items-center gap-3"><span className="text-accent text-xl">✓</span> 100% FSSAI Safety Standard Compliance</li>
              </ul>
            </div>
            <div className="mt-8">
              <a href="/catering" className="btn-primary w-full text-center uppercase tracking-wider text-xs py-3">
                View Catering Details <span>→</span>
              </a>
            </div>
          </div>

          {/* Hospitality Services Card */}
          <div className="rounded-3xl border border-brand/10 bg-cream p-8 md:p-10 shadow-soft reveal-from-right flex flex-col justify-between">
            <div>
              <span className="text-accent text-xs font-bold uppercase tracking-widest">Division 02</span>
              <h2 className="font-display text-3xl font-bold text-accent mt-1">Hospitality Services</h2>
              <p className="mt-4 text-base leading-relaxed text-brand/85">
                Complete pantry management, cafeteria housekeeping, dining hall logistics, and trained professional staff.
              </p>
              <ul className="mt-6 space-y-3 text-base text-brand/90">
                <li className="flex items-center gap-3"><span className="text-accent text-xl">✓</span> Cafeteria Cleaning & Deep Sanitation</li>
                <li className="flex items-center gap-3"><span className="text-accent text-xl">✓</span> Executive Pantry & Beverage Vending</li>
                <li className="flex items-center gap-3"><span className="text-accent text-xl">✓</span> Trained, Uniformed & Groomed Staff</li>
                <li className="flex items-center gap-3"><span className="text-accent text-xl">✓</span> Waste Management & Zero-Contamination Policy</li>
              </ul>
            </div>
            <div className="mt-8">
              <a href="/hospitality" className="btn-primary w-full text-center uppercase tracking-wider text-xs py-3">
                View Hospitality Details <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Light Background & Wave Divider */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-b from-white via-cream/90 to-white text-brand">
        <WaveDivider position="top" fillColor="fill-cream" />
        <img src="/food.jpg" alt="Catering meal background" className="absolute inset-0 h-full w-full object-cover opacity-10 object-center" />
        <div className="relative z-10 max-w-5xl mx-auto text-center px-5 sm:px-8 reveal-on-scroll">
          <p className="section-label justify-center">Tailored Catering</p>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-brand mt-2">Need a Custom Meal Plan for Your Factory?</h2>
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
