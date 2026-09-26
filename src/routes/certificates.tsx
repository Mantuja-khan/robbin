import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { DottedSquare } from "@/components/DottedSquare";
import { WaveDivider } from "@/components/WaveDivider";
import { TextWordReveal } from "@/components/TextWordReveal";

export default function CertificatesPage() {
  useScrollReveal();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certificatePages = [
    {
      src: "/certificate-page-1.png",
    },
    {
      src: "/certificate-page-2.png",
    },
    {
      src: "/certificate-page-3.png",
    },
  ];

  return (
    <main className="min-h-screen bg-cream text-brand">
      <Navbar />
      {/* Header Banner with Custom Certificates Image & Top Dark Gradient for Navbar */}
      <section className="relative min-h-[48vh] sm:min-h-[52vh] flex items-center overflow-hidden bg-brand text-cream pt-32 pb-24 px-5 sm:px-8">
        <img
          src="/certificates-top-banner.png"
          alt="Robin Hospitality Certificates & Policy Standards Banner"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand/95 via-brand/75 to-transparent md:w-[65%]" />
        {/* Top Dark Overlay for Navbar contrast */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-brand/90 via-brand/40 to-transparent pointer-events-none z-10" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl text-left">
            <p className="eyebrow text-amber-400 font-semibold tracking-widest uppercase mb-3">
              <TextWordReveal text="GOVERNMENT RECOGNIZED & CERTIFIED" baseDelay={0.1} />
            </p>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white drop-shadow-md leading-tight uppercase">
              <TextWordReveal text="CERTIFICATES & POLICIES" accentWords={["POLICIES"]} baseDelay={0.2} stagger={0.08} />
            </h1>
            <p className="mt-4 text-cream/95 text-lg sm:text-xl font-medium leading-relaxed max-w-xl">
              <TextWordReveal
                text="Authorized by the Ministry of Micro, Small and Medium Enterprises (Government of India) & compliant with FSSAI hygiene standards."
                baseDelay={0.45}
                stagger={0.04}
              />
            </p>
          </div>
        </div>
        <WaveDivider position="bottom" fillColor="fill-cream" />
      </section>

      {/* Official MSME Udyam Registration Certificate Showcase */}
      <section className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-12">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal-on-scroll">
          <span className="text-accent font-bold uppercase tracking-widest text-xs sm:text-sm">
            Official Government Recognition
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-brand mt-2 uppercase">
            Udyam Registration Certificate
          </h2>
          <p className="mt-3 text-brand/80 text-base sm:text-lg">
            Government of India &bull; Ministry of Micro, Small and Medium Enterprises
          </p>

        </div>

        {/* Certificate Gallery Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certificatePages.map((cert, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-brand/15 bg-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-accent hover:-translate-y-1 flex flex-col"
            >
              {/* Image Preview Area */}
              <div
                onClick={() => setSelectedImage(cert.src)}
                className="relative cursor-pointer overflow-hidden bg-slate-100 aspect-[3/4] flex items-center justify-center p-3"
              >
                <img
                  src={cert.src}
                  alt={`Certificate Page ${index + 1}`}
                  className="h-full w-full object-contain rounded-lg shadow-sm transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-brand/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <span className="rounded-full bg-white text-brand px-4 py-2 text-xs sm:text-sm font-bold shadow-lg flex items-center gap-1.5">
                    🔍 Click to Enlarge
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox / Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl p-3 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-brand text-cream flex items-center justify-center font-bold text-lg hover:bg-accent transition-colors shadow-lg"
              aria-label="Close"
            >
              ✕
            </button>
            <div className="overflow-auto max-h-[82vh] p-2 flex justify-center">
              <img
                src={selectedImage}
                alt="Certificate Full View"
                className="max-h-[80vh] w-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}


      <Footer />
    </main>
  );
}
