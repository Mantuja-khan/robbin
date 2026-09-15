import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { DottedSquare } from "@/components/DottedSquare";
import { WaveDivider } from "@/components/WaveDivider";
import { TextWordReveal } from "@/components/TextWordReveal";
import { ServiceInquiryForm } from "@/components/ServiceInquiryForm";

export function HospitalityServicePage() {
  useScrollReveal();

  const HOSPITALITY_DIVISIONS = [
    {
      id: "catering",
      title: "CATERING",
      subtitle: "Specialized Indian & International Cuisines",
      image: "/service-catering.jpg",
      description:
        "Our goal is to satisfy each and every client with the services as per their demand and preferences. With trained chefs and cooks, we are specialized in catering variety of Indian and International cuisines made out of purest ingredients.",
    },
    {
      id: "front-desk",
      title: "FRONT DESK",
      subtitle: "Comfortable, Reliable & Friendly Atmosphere",
      image: "/hospitality-frontdesk.jpg",
      description:
        "The first and foremost thing that your guests are actively looking for is Hospitality, a comfortable, reliable and friendly atmosphere. We handpick best of professional personalities that are well aware with languages, body language, shares extensive experience and knowledge to provide comfort that your guests seek.",
    },
    {
      id: "house-keeping",
      title: "HOUSE KEEPING",
      subtitle: "Spotless, Hygienic Workspace Operations",
      image: "/hospitality-housekeeping.jpg",
      description:
        "The housekeeping department is crucial in any organization. The primary purpose is to offer a clean, hygienic workspace. Lucky for you, we have well-trained and well-experienced staff who can take care of daily hygiene tasks and offer you the cleanest work environment.",
    },
    {
      id: "pantry-services",
      title: "PANTRY SERVICES",
      subtitle: "Ultimate On-The-Go Pantry Care",
      image: "/hospitality-pantry.jpg",
      description:
        "No matter how small or big your kitchen size is, a pantry service is always a reliable and on-the-go option that most of the people look for. That's why we provide you with the ultimate pantry services that will satisfy your hunger desires and expectations with a smile.",
    },
    {
      id: "man-power",
      title: "MAN POWER",
      subtitle: "Perfection Through Specialized Dedicated Workforce",
      image: "/hospitality-manpower.jpg",
      description:
        "A dedicated staff will always give perfection in their work than a bunch of people given every task to perform. Get the Man Power for every service that you or your business needs, and see the positive changes in an instance.",
    },
  ];

  return (
    <main className="min-h-screen bg-cream text-brand relative overflow-hidden">
      <Navbar />

      {/* Top CTA Header Section */}
      <section className="relative min-h-[50vh] sm:min-h-[55vh] flex items-center overflow-hidden bg-brand text-cream pt-32 pb-24 px-5 sm:px-8">
        <img
          src="/hospitality-cta.png"
          alt="Robin Hospitality Management & Facilities Banner"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand/95 via-brand/80 to-transparent md:w-[65%]" />
        {/* Top Dark Overlay for Navbar contrast */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-brand/90 via-brand/40 to-transparent pointer-events-none z-10" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl text-left">
            <p className="eyebrow text-amber-400 font-semibold tracking-widest uppercase mb-3">
              <TextWordReveal text="Workplace Management • Housekeeping • Front Desk • Pantry" baseDelay={0.1} />
            </p>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white drop-shadow-md leading-tight uppercase">
              <TextWordReveal text="HOSPITALITY SERVICES" accentWords={["HOSPITALITY"]} baseDelay={0.2} stagger={0.08} />
            </h1>
            <p className="mt-4 text-cream/95 text-lg sm:text-xl font-medium leading-relaxed max-w-xl">
              <TextWordReveal
                text="Everlasting partnership with clients through superior hospitality, front desk care, housekeeping & dedicated workforce."
                baseDelay={0.45}
                stagger={0.04}
              />
            </p>
            <div className="mt-8 flex flex-wrap gap-4 animate-hero-fade" style={{ animationDelay: "0.85s" }}>
              <Link to="/contact" className="btn-primary uppercase tracking-wider text-xs px-6 py-3">
                Request a Quote <span>→</span>
              </Link>
              <Link to={"/catering" as any} className="btn-outline text-white border-white/60 hover:bg-white hover:text-brand uppercase tracking-wider text-xs px-6 py-3">
                Explore Catering Services
              </Link>
            </div>
          </div>
        </div>
        <WaveDivider position="bottom" fillColor="fill-cream" />
      </section>

      {/* Intro Pride Section - Unboxed Layout */}
      <section className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-8">
        <DottedSquare className="absolute top-6 right-8 text-brand/15" />
        
        {/* Background Thali Plate Image Element */}
        <img
          src="/thali-plate.jpg"
          alt="Indian Thali Platter background accent"
          className="absolute -top-10 left-4 w-44 sm:w-56 h-auto opacity-20 pointer-events-none rounded-full blur-[0.5px]"
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto reveal-on-scroll">
          <span className="text-accent font-bold uppercase tracking-widest text-xs sm:text-sm">Everlasting Client Partnerships</span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-brand mt-2 leading-tight uppercase">
            EXCELLENCE & ENTHUSIASM IN WORKPLACE HOSPITALITY
          </h2>
          <p className="mt-6 text-brand/85 text-lg sm:text-xl leading-relaxed font-medium">
            We take tremendous pride by saying that our enthusiasm to offer the best quality services is the base of our everlasting partnership with clients. Once you experience our hospitality, you’ll find our catering more delicious, front desk service friendlier, and staff more dedicated. Not only that, but our strict hygienic measures kept the workplace always clean.
          </p>
        </div>
      </section>

      {/* 5 Hospitality Divisions Deep-Dive Section - FREE OF BOXES & SQUARE UNROUNDED IMAGES */}
      <section className="relative max-w-7xl mx-auto px-5 sm:px-8 py-12 space-y-20">
        {/* Decorative background Thali element */}
        <img
          src="/thali-plate.jpg"
          alt="Indian Thali Platter background accent"
          className="absolute top-1/3 -right-16 w-60 sm:w-80 h-auto opacity-25 pointer-events-none rounded-full"
        />
        <img
          src="/thali-plate.jpg"
          alt="Indian Thali Platter background accent"
          className="absolute bottom-1/4 -left-16 w-60 sm:w-80 h-auto opacity-25 pointer-events-none rounded-full"
        />

        {HOSPITALITY_DIVISIONS.map((division, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={division.id}
              id={division.id}
              className={`relative z-10 grid gap-10 lg:grid-cols-2 items-center pb-16 border-b border-brand/15 last:border-0 ${
                isEven ? "" : "lg:grid-flow-dense"
              }`}
            >
              <div className={`space-y-4 ${isEven ? "reveal-from-left" : "reveal-from-right lg:col-start-2"}`}>
                <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-brand uppercase tracking-wide">
                  {division.title}
                </h3>
                <p className="text-accent font-semibold text-base">{division.subtitle}</p>
                <p className="text-brand/85 text-base sm:text-lg leading-relaxed">{division.description}</p>
              </div>

              {/* Square image display without rounded cut edges */}
              <div className={`overflow-hidden border-2 border-brand/20 shadow-lg rounded-none ${isEven ? "reveal-from-right" : "reveal-from-left lg:col-start-1"}`}>
                <img
                  src={division.image}
                  alt={division.title}
                  className="w-full h-80 sm:h-[380px] object-cover hover:scale-105 transition-transform duration-500 rounded-none"
                />
              </div>
            </div>
          );
        })}
      </section>

      {/* Service Inquiry Form */}
      <section className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-8">
        <ServiceInquiryForm
          servicesOptions={[
            "Catering",
            "Front Desk",
            "House Keeping",
            "Pantry Services",
            "Man Power",
          ]}
        />
      </section>

      {/* Bottom CTA Section */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-b from-white via-cream/90 to-white text-brand">
        <WaveDivider position="top" fillColor="fill-cream" />
        <div className="relative z-10 max-w-5xl mx-auto text-center px-5 sm:px-8 reveal-on-scroll">
          <p className="section-label justify-center">Workplace Excellence</p>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-brand mt-2 uppercase">
            <TextWordReveal text="ELEVATE YOUR WORKPLACE HOSPITALITY EXPERIENCE" accentWords={["HOSPITALITY"]} baseDelay={0.1} />
          </h2>
          <p className="mt-4 text-brand/80 text-lg max-w-2xl mx-auto">
            Contact us today to discuss your plant or corporate facility’s front desk, housekeeping, pantry, and manpower requirements.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Get Hospitality Quote <span>→</span>
            </Link>
            <Link to={"/catering" as any} className="btn-outline">
              View Catering Solutions
            </Link>
          </div>
        </div>
        <WaveDivider position="bottom" fillColor="fill-cream" />
      </section>

      <Footer />
    </main>
  );
}
