import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { DottedSquare } from "@/components/DottedSquare";
import { WaveDivider } from "@/components/WaveDivider";
import { TextWordReveal } from "@/components/TextWordReveal";

export default function CertificatesPage() {
  useScrollReveal();

  return (
    <main className="min-h-screen bg-cream text-brand">
      <Navbar />
      {/* Header Banner with Custom Certificates Image & Top Dark Gradient for Navbar */}
      <section className="relative min-h-[48vh] sm:min-h-[52vh] flex items-center overflow-hidden bg-brand text-cream pt-32 pb-24 px-5 sm:px-8">
        <img src="/certificates-top-banner.png" alt="Robin Hospitality Certificates & Policy Standards Banner" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand/95 via-brand/75 to-transparent md:w-[65%]" />
        {/* Top Dark Overlay for Navbar contrast */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-brand/90 via-brand/40 to-transparent pointer-events-none z-10" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl text-left">
            <p className="eyebrow text-amber-400 font-semibold tracking-widest uppercase mb-3">
              <TextWordReveal text="Safety & Standards Compliance" baseDelay={0.1} />
            </p>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white drop-shadow-md leading-tight">
              <TextWordReveal text="Certificates & Policies" accentWords={["Policies"]} baseDelay={0.2} stagger={0.08} />
            </h1>
            <p className="mt-4 text-cream/95 text-lg sm:text-xl font-medium leading-relaxed max-w-xl">
              <TextWordReveal text="Our strict commitment to FSSAI food safety, ISO 22000 quality standards & environmental hygiene." baseDelay={0.45} stagger={0.04} />
            </p>
          </div>
        </div>
        <WaveDivider position="bottom" fillColor="fill-cream" />
      </section>
      {/* Certificates & Standards Cards */}
      <section className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-8">
        <DottedSquare className="absolute top-8 right-8 text-brand/20" />
        <DottedSquare className="absolute bottom-8 left-10 text-brand/20" />
        
        <div className="relative z-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-brand/10 bg-white/70 p-8 text-center shadow-soft reveal-on-scroll">
            <span className="text-4xl">📜</span>
            <h3 className="mt-4 font-bold text-xl text-brand">FSSAI Certified</h3>
            <p className="mt-2 text-sm text-brand/80">Full compliance with Food Safety and Standards Authority of India.</p>
          </div>
          <div className="rounded-2xl border border-brand/10 bg-white/70 p-8 text-center shadow-soft reveal-on-scroll reveal-delay-150">
            <span className="text-4xl">🛡️</span>
            <h3 className="mt-4 font-bold text-xl text-brand">ISO 22000 Standards</h3>
            <p className="mt-2 text-sm text-brand/80">Food Safety Management System certified operations.</p>
          </div>
          <div className="rounded-2xl border border-brand/10 bg-white/70 p-8 text-center shadow-soft reveal-on-scroll reveal-delay-300">
            <span className="text-4xl">🌱</span>
            <h3 className="mt-4 font-bold text-xl text-brand">Hygiene & Environmental Policy</h3>
            <p className="mt-2 text-sm text-brand/80">Eco-friendly waste disposal and zero-contamination policy.</p>
          </div>
        </div>
      </section>

      {/* Our Policy Statement Section (Icons only - No Images) */}
      <section className="relative max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal-on-scroll">
          <span className="text-accent font-bold uppercase tracking-widest text-xs sm:text-sm">Quality Commitment</span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-brand mt-2 uppercase">
            Our Policy Statement
          </h2>
          <p className="mt-3 text-brand/80 text-base">
            Our core quality, hygiene, and audit principles guiding daily hospitality operations.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Policy Part 1 */}
          <div className="flex flex-col items-center text-center p-8 rounded-2xl border border-brand/15 bg-white/60 shadow-soft reveal-on-scroll">
            <div className="h-16 w-16 rounded-2xl bg-accent/15 border border-accent/30 grid place-items-center text-3xl mb-5 text-accent">
              🎯
            </div>
            <h3 className="font-display text-xl font-bold text-brand uppercase tracking-wide mb-3">
              Quality & Efficiency Policy
            </h3>
            <p className="text-brand/85 text-sm sm:text-base leading-relaxed">
              We have strict measures for quality policy, and that’s why we are an exception from in the competition. We strive our best at producing excellent cost-cutting and efficient hospitality services to our clients.
            </p>
          </div>

          {/* Policy Part 2 */}
          <div className="flex flex-col items-center text-center p-8 rounded-2xl border border-brand/15 bg-white/60 shadow-soft reveal-on-scroll reveal-delay-150">
            <div className="h-16 w-16 rounded-2xl bg-accent/15 border border-accent/30 grid place-items-center text-3xl mb-5 text-accent">
              👨‍🍳
            </div>
            <h3 className="font-display text-xl font-bold text-brand uppercase tracking-wide mb-3">
              Hygienic Hospitality Service
            </h3>
            <p className="text-brand/85 text-sm sm:text-base leading-relaxed">
              We lead a team of enthusiasts who love to cook, serve & provide the best hospitality services with all the hygienic measures, which is why we are the most preferred service provider of the Hospitality Sector
            </p>
          </div>

          {/* Policy Part 3 */}
          <div className="flex flex-col items-center text-center p-8 rounded-2xl border border-brand/15 bg-white/60 shadow-soft reveal-on-scroll reveal-delay-300">
            <div className="h-16 w-16 rounded-2xl bg-accent/15 border border-accent/30 grid place-items-center text-3xl mb-5 text-accent">
              📈
            </div>
            <h3 className="font-display text-xl font-bold text-brand uppercase tracking-wide mb-3">
              Continuous Auditing & Feedback
            </h3>
            <p className="text-brand/85 text-sm sm:text-base leading-relaxed">
              We take client feedback seriously and continuously improve our practices and practical inputs and offer better results. We hold internal auditing and management analysis for assessment and development purpose.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
