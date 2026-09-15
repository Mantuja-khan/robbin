import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { DottedSquare } from "@/components/DottedSquare";
import { WaveDivider } from "@/components/WaveDivider";
import { TextWordReveal } from "@/components/TextWordReveal";

export default function ContactPage() {
  useScrollReveal();

  return (
    <main className="min-h-screen bg-cream text-brand">
      <Navbar />

      {/* Header Banner with Custom Contact Image & Top Dark Gradient for Navbar */}
      <section className="relative min-h-[48vh] sm:min-h-[52vh] flex items-center overflow-hidden bg-brand text-cream pt-32 pb-24 px-5 sm:px-8">
        <img src="/contact-top-banner.png" alt="Robin Hospitality Customer Support & Consultation Banner" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand/95 via-brand/75 to-transparent md:w-[65%]" />
        {/* Top Dark Overlay for Navbar contrast */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-brand/90 via-brand/40 to-transparent pointer-events-none z-10" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl text-left">
            <p className="eyebrow text-amber-400 font-semibold tracking-widest uppercase mb-3">
              <TextWordReveal text="24/7 DEDICATED SUPPORT" baseDelay={0.1} />
            </p>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white drop-shadow-md leading-tight uppercase">
              <TextWordReveal text="CONTACT US" accentWords={["US"]} baseDelay={0.2} stagger={0.08} />
            </h1>
            <p className="mt-4 text-cream/95 text-lg sm:text-xl font-medium leading-relaxed max-w-xl">
              <TextWordReveal text="Get in touch for daily factory meal quotations, cafeteria audits & industrial catering consultations." baseDelay={0.45} stagger={0.04} />
            </p>
          </div>
        </div>
        <WaveDivider position="bottom" fillColor="fill-cream" />
      </section>

      <section className="relative max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <DottedSquare className="absolute top-10 right-8 text-brand/20" />
        <DottedSquare className="absolute bottom-8 left-10 text-brand/20" />
        
        <div className="relative z-10 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-brand/10 bg-cream p-8 md:p-10 shadow-soft reveal-from-left">
            <h2 className="font-display text-2xl font-bold uppercase">CONTACT INFORMATION</h2>
            <div className="mt-6 space-y-5 text-base">
              <p className="flex items-center gap-3">
                <span className="text-2xl text-accent">☎</span> +91 98765 43210 / +91 12345 67890
              </p>
              <p className="flex items-center gap-3">
                <span className="text-2xl text-accent">✉</span> info@robbinhospitality.com
              </p>
              <p className="flex items-start gap-3">
                <span className="text-2xl text-accent">⌖</span> Bhiwadi, Rajasthan, India (Services Available Pan-India)
              </p>
            </div>
          </div>

          <form className="rounded-3xl border border-brand/10 bg-cream p-8 md:p-10 shadow-soft space-y-4 reveal-from-right" onSubmit={(e) => e.preventDefault()}>
            <h2 className="font-display text-2xl font-bold uppercase">SEND A MESSAGE</h2>
            <div>
              <label className="block text-xs font-semibold uppercase mb-1">Company / Factory Name</label>
              <input type="text" placeholder="Your Factory Name" className="w-full rounded-xl border border-brand/20 p-3 text-sm outline-none focus:border-accent" />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase mb-1">Email Address</label>
              <input type="email" placeholder="email@company.com" className="w-full rounded-xl border border-brand/20 p-3 text-sm outline-none focus:border-accent" />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase mb-1">Message</label>
              <textarea rows={4} placeholder="Tell us your daily meal requirements..." className="w-full rounded-xl border border-brand/20 p-3 text-sm outline-none focus:border-accent" />
            </div>
            <button type="submit" className="btn-primary w-full py-3.5">Submit Request <span>→</span></button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
