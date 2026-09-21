import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { DottedSquare } from "@/components/DottedSquare";
import { WaveDivider } from "@/components/WaveDivider";
import { TextWordReveal } from "@/components/TextWordReveal";

export default function AboutPage() {
  useScrollReveal();

  return (
    <main className="min-h-screen bg-cream text-brand">
      <Navbar />

      {/* Header Banner with Custom Image & Left Aligned Content */}
      <section className="relative min-h-[50vh] sm:min-h-[55vh] flex items-center overflow-hidden bg-brand text-cream pt-32 pb-24 px-5 sm:px-8">
        <img src="/about-top-banner.png" alt="Robin Hospitality About Us Collage Banner" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand/95 via-brand/75 to-transparent md:w-[65%]" />
        {/* Top Dark Overlay for Navbar contrast */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-brand/90 via-brand/40 to-transparent pointer-events-none z-10" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl text-left">
            <p className="eyebrow text-amber-400 font-semibold tracking-widest uppercase mb-3">
              <TextWordReveal text="Nourishing Teams • Powering Factories" baseDelay={0.1} />
            </p>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white drop-shadow-md leading-tight">
              <TextWordReveal text="About Robin Hospitality" accentWords={["Hospitality"]} baseDelay={0.2} stagger={0.08} />
            </h1>
            <p className="mt-4 text-cream/95 text-lg sm:text-xl font-medium leading-relaxed max-w-xl">
              <TextWordReveal text="Delivering Excellence in Industrial Catering & Workplace Hospitality across India." baseDelay={0.5} stagger={0.04} />
            </p>
            <div className="mt-8 flex flex-wrap gap-4 animate-hero-fade" style={{ animationDelay: "0.85s" }}>
              <a href="/services" className="btn-primary uppercase tracking-wider text-xs px-6 py-3">Explore Services <span>→</span></a>
              <a href="/contact" className="btn-outline text-white border-white/60 hover:bg-white hover:text-brand uppercase tracking-wider text-xs px-6 py-3">Contact Us</a>
            </div>
          </div>
        </div>
        <WaveDivider position="bottom" fillColor="fill-cream" />
      </section>

      {/* Main About Section - Unboxed Layout */}
      <section className="relative max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <DottedSquare className="absolute top-8 right-6 text-brand/20" />
        <DottedSquare className="absolute bottom-12 left-10 text-brand/20" />

        <div className="relative z-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="reveal-from-left">
              <span className="text-accent font-bold uppercase tracking-widest text-sm">Our Story & Mission</span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold mt-2 text-brand">
                More Than Meals, <span className="text-accent">A Healthier Tomorrow</span>
              </h2>
              <p className="mt-4 body-copy">
                Robin Hospitality Services is dedicated to providing hygienic, nutritious, and high-quality meal solutions to manufacturing units and industrial environments across India.
              </p>
              <p className="mt-3 text-brand/80 text-base leading-relaxed">
                We understand that a well-nourished workforce is the backbone of every successful industry. From bulk kitchen operations to cafeteria management, we deliver care in every plate.
              </p>
            </div>
            <div className="reveal-from-right flex justify-center items-center">
              <img
                src="/about-delivery.png"
                alt="Robin Hospitality Delivery Fleet"
                className="w-full h-auto max-h-[460px] sm:max-h-[520px] md:max-h-[580px] max-w-xl object-contain mix-blend-multiply transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Mission & Vision Cards with Background Images */}
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Mission Box */}
            <div className="relative overflow-hidden rounded-3xl border border-brand/10 p-8 sm:p-10 text-cream shadow-xl reveal-from-left">
              <img src="/food.jpg" alt="Mission background" className="absolute inset-0 h-full w-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-br from-brand/95 via-brand/90 to-brand/85" />
              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-cream text-2xl font-bold">🎯</span>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-cream">Mission</h3>
                </div>
                <p className="mt-5 text-base sm:text-lg leading-relaxed text-cream/95 font-medium">
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
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-cream">Vision</h3>
                </div>
                <p className="mt-5 text-base sm:text-lg leading-relaxed text-cream/95 font-medium">
                  Our Vision is to be the only choice of clients/Customers when it comes to Hospitality Management, Catering & Restaurant in INDIA. Our only motto is <span className="text-accent font-bold">"Serving Quality Food With Smile"</span>.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-brand/10 p-6 bg-sage/30 reveal-from-left reveal-delay-100">
              <span className="text-3xl">🥗</span>
              <h3 className="font-bold text-xl mt-3">Quality food preparation</h3>
            </div>
            <div className="rounded-2xl border border-brand/10 p-6 bg-sage/30 reveal-on-scroll reveal-delay-200">
              <span className="text-3xl">🥗</span>
              <h3 className="font-bold text-xl mt-3">Proper food hygiene & cleanliness</h3>
            </div>
            <div className="rounded-2xl border border-brand/10 p-6 bg-sage/30 reveal-from-right reveal-delay-300">
              <span className="text-3xl">🥗</span>
              <h3 className="font-bold text-xl mt-3">Professional cooking & service
              </h3>
            </div>
            <div className="rounded-2xl border border-brand/10 p-6 bg-sage/30 reveal-from-right reveal-delay-300">
              <span className="text-3xl">🥗</span>
              <h3 className="font-bold text-xl mt-3">✓ Daily menu rotation

              </h3>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section with Light Background & Wave Divider */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-b from-white via-cream/90 to-white text-brand">
        <WaveDivider position="top" fillColor="fill-cream" />
        <img src="/food.jpg" alt="Industrial catering food" className="absolute inset-0 h-full w-full object-cover opacity-10 object-center" />
        <div className="relative z-10 max-w-5xl mx-auto text-center px-5 sm:px-8 reveal-on-scroll">
          <p className="section-label justify-center">Work With Us</p>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-brand mt-2">Partner With Robin Hospitality</h2>
          <p className="mt-4 text-brand/80 text-lg max-w-2xl mx-auto">Let us manage your industrial cafeteria so your team stays energized and productive every day.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="/contact" className="btn-primary">Contact Us Today <span>→</span></a>
            <a href="/services" className="btn-outline">Explore Services</a>
          </div>
        </div>
        <WaveDivider position="bottom" fillColor="fill-cream" />
      </section>

      <Footer />
    </main>
  );
}
