import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { DottedSquare } from "@/components/DottedSquare";
import { WaveDivider } from "@/components/WaveDivider";
import { TextWordReveal } from "@/components/TextWordReveal";

export default function GalleryPage() {
  useScrollReveal();

  return (
    <main className="min-h-screen bg-cream text-brand">
      <Navbar />
      {/* Header Banner with Custom Gallery Image & Top Dark Gradient for Navbar */}
      <section className="relative min-h-[48vh] sm:min-h-[52vh] flex items-center overflow-hidden bg-brand text-cream pt-32 pb-24 px-5 sm:px-8">
        <img src="/gallery-top-banner.png" alt="Robin Hospitality Kitchens & Logistics Gallery Banner" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand/95 via-brand/75 to-transparent md:w-[65%]" />
        {/* Top Dark Overlay for Navbar contrast */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-brand/90 via-brand/40 to-transparent pointer-events-none z-10" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl text-left">
            <p className="eyebrow text-amber-400 font-semibold tracking-widest uppercase mb-3">
              <TextWordReveal text="VISUAL SHOWCASE" baseDelay={0.1} />
            </p>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white drop-shadow-md leading-tight uppercase">
              <TextWordReveal text="OUR GALLERY" accentWords={["GALLERY"]} baseDelay={0.2} stagger={0.08} />
            </h1>
            <p className="mt-4 text-cream/95 text-lg sm:text-xl font-medium leading-relaxed max-w-xl">
              <TextWordReveal text="A glimpse into our central kitchens, food preparation, insulated delivery fleet & dining management." baseDelay={0.45} stagger={0.04} />
            </p>
          </div>
        </div>
        <WaveDivider position="bottom" fillColor="fill-cream" />
      </section>
      <section className="relative max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <DottedSquare className="absolute top-8 right-8 text-brand/20" />
        <DottedSquare className="absolute bottom-8 left-10 text-brand/20" />
        
        <div className="relative z-10 grid gap-5 grid-cols-2 md:grid-cols-4">
          {[
            "/hero-chef.jpg",
            "/service-catering.jpg",
            "/catering-corporate.jpg",
            "/service-hospitality.jpg",
            "/catering-cafeteria.jpg",
            "/catering-healthcare.jpg",
            "/catering-industries.jpg",
            "/catering-institution.jpg",
            "/hospitality-frontdesk.jpg",
            "/hospitality-housekeeping.jpg",
            "/hospitality-pantry.jpg",
            "/hospitality-manpower.jpg",
          ].map((imgSrc, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-2xl border border-brand/10 shadow-md reveal-on-scroll aspect-[4/3] group bg-black/10"
            >
              <img
                src={imgSrc}
                alt=""
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
