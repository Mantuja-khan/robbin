import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { DottedSquare } from "@/components/DottedSquare";
import { WaveDivider } from "@/components/WaveDivider";
import { TextWordReveal } from "@/components/TextWordReveal";

export default function ClientsPage() {
  useScrollReveal();

  return (
    <main className="min-h-screen bg-cream text-brand">
      <Navbar />
      
      {/* Top CTA Header Banner with Custom Clients Image */}
      <section className="relative min-h-[48vh] sm:min-h-[52vh] flex items-center overflow-hidden bg-brand text-cream pt-32 pb-24 px-5 sm:px-8">
        <img src="/clients-top-banner.png" alt="Trusted by Leading Industries - Global Partnerships" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand/95 via-brand/75 to-transparent md:w-[65%]" />
        {/* Top Dark Overlay for Navbar contrast */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-brand/90 via-brand/40 to-transparent pointer-events-none z-10" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl text-left">
            <p className="eyebrow text-amber-400 font-semibold tracking-widest uppercase mb-3">
              <TextWordReveal text="Industrial Partnerships" baseDelay={0.1} />
            </p>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white drop-shadow-md leading-tight">
              <TextWordReveal text="Our Esteemed Client" accentWords={["Client"]} baseDelay={0.2} stagger={0.08} />
            </h1>
            <p className="mt-4 text-cream/95 text-lg sm:text-xl font-medium leading-relaxed max-w-xl">
              <TextWordReveal text="Trusted by Manufacturing & Industrial Leaders Across India for daily catering and dining operations." baseDelay={0.45} stagger={0.04} />
            </p>
          </div>
        </div>
        <WaveDivider position="bottom" fillColor="fill-cream" />
      </section>

      {/* Main Clients Showcase Section on Light Cream Background */}
      <section className="relative max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <DottedSquare className="absolute top-10 left-10 text-brand/20" />
        <DottedSquare className="absolute bottom-10 right-10 text-brand/20" />

        <div className="relative z-10 text-center">
          <div className="reveal-on-scroll max-w-3xl mx-auto">
            <p className="section-label justify-center">Partnership Excellence</p>
            <h2 className="section-title text-brand">Powering <span className="text-accent">Industrial Leaders</span></h2>
            <p className="body-copy mx-auto">
              We deliver high-capacity kitchen operations, daily balanced meals, and complete cafeteria management for global manufacturing plants.
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
                <div className="mt-6 border-t border-brand/10 pt-6 text-center">
                  <h3 className="font-display text-2xl font-extrabold text-brand">Balkrishna Industries Limited (BKT)</h3>
                  <p className="mt-2 text-sm sm:text-base font-semibold text-accent">Leading Global Off-Highway Tire Manufacturer</p>
                  <p className="mt-3 text-xs sm:text-sm text-brand/75 max-w-md mx-auto leading-relaxed">
                    Robin Hospitality Services proudly powers BKT's manufacturing workforce with daily nutritious meals, strict hygienic catering, and premium workplace dining management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
