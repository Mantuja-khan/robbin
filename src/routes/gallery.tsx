import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { DottedSquare } from "@/components/DottedSquare";
import { WaveDivider } from "@/components/WaveDivider";
import { TextWordReveal } from "@/components/TextWordReveal";

export default function GalleryPage() {
  useScrollReveal();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Gallery images (gallery_1.jpg to gallery_10.jpg) in square aspect ratio with no borders
  const galleryImages: string[] = [
    "/gallery_1.jpg",
    "/gallery_2.jpg",
    "/gallery_3.jpg",
    "/gallery_4.jpg",
    "/gallery_5.jpg",
    "/gallery_6.jpg",
    "/gallery_7.jpg",
    "/gallery_8.jpg",
    "/gallery_9.jpg",
    "/gallery_10.jpg",
  ];

  return (
    <main className="min-h-screen bg-cream text-brand">
      <Navbar />
      {/* Header Banner with Custom Gallery Image & Top Dark Gradient for Navbar */}
      <section className="relative min-h-[48vh] sm:min-h-[52vh] flex items-center overflow-hidden bg-brand text-cream pt-32 pb-24 px-5 sm:px-8">
        <img
          src="/gallery-top-banner.png"
          alt="Robin Hospitality Kitchens & Logistics Gallery Banner"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
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
              <TextWordReveal
                text="A glimpse into our industrial catering, central kitchens, nutritious meal preparation & hospitality operations."
                baseDelay={0.45}
                stagger={0.04}
              />
            </p>
          </div>
        </div>
        <WaveDivider position="bottom" fillColor="fill-cream" />
      </section>

      {/* Gallery Section - Square Aspect Ratio with No Border Style */}
      <section className="relative max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <DottedSquare className="absolute top-8 right-8 text-brand/20" />
        <DottedSquare className="absolute bottom-8 left-10 text-brand/20" />

        <div className="relative z-10 grid gap-4 sm:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((imgSrc, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(imgSrc)}
              className="overflow-hidden shadow-md reveal-on-scroll aspect-square group bg-slate-100 cursor-pointer"
            >
              <img
                src={imgSrc}
                alt={`Robin Hospitality Gallery ${idx + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-108"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox / Modal for Gallery */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl p-2 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-brand text-cream flex items-center justify-center font-bold text-lg hover:bg-accent transition-colors shadow-lg"
              aria-label="Close"
            >
              ✕
            </button>
            <div className="overflow-auto max-h-[85vh] p-1 flex justify-center">
              <img
                src={selectedImage}
                alt="Gallery Full View"
                className="max-h-[82vh] w-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
