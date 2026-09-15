import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { DottedSquare } from "@/components/DottedSquare";
import { WaveDivider } from "@/components/WaveDivider";
import { TextWordReveal } from "@/components/TextWordReveal";
import { ServiceInquiryForm } from "@/components/ServiceInquiryForm";

export const Route = createFileRoute("/services/catering")({
  component: CateringServicePage,
});

export function CateringServicePage() {
  useScrollReveal();

  const CATERING_FACILITIES = [
    {
      id: "industries",
      title: "INDUSTRIES",
      subtitle: "High-Powered Industrial Cafeteria Solutions",
      image: "/catering-industries.jpg",
      description:
        "High powered Industrial settings require equally healthy meal options that are also an excellent cost-cutting option with easy operation process and go well with the work environment. Our Industrial Cafeteria provides a balanced meal that boosts employees energy, transferring into better productivity. Apart from the nutritional food, we handpick elements that can add local flavours, making the food tastier and also give vibes of homemade food.",
    },
    {
      id: "corporate-events",
      title: "CORPORATE EVENTS",
      subtitle: "Appetizing Hospitality for Executive Celebrations",
      image: "/catering-corporate.jpg",
      description:
        "Have a corporate event? Leave it on us and focus only on important things in your event! Be it your target achieve celebration, felicitation event, review meeting or any type of corporate event, we are always ready & capable to host it with our appetizing food & trained staff to minimize your event hassle.",
    },
    {
      id: "healthcare",
      title: "HEALTH CARE SERVICES",
      subtitle: "Hygienic & Patient-Nutritious Hospital Cafeterias",
      image: "/catering-healthcare.jpg",
      description:
        "Did we tell you that we specialize in managing Hospital Cafeterias too? We provide custom-food as per the nutritious requirement of the patient. Our hygiene and quality hospital cafeteria operations have made us earn respect and projects more than our competitors.",
    },
    {
      id: "cafeteria-snacks",
      title: "CAFETERIA / SNACKS BARS",
      subtitle: "Exclusive Non-Repetitive 30-Day Menus",
      image: "/catering-cafeteria.jpg",
      description:
        "With our capable team alongside us, we can manage the cafeteria at any given place. Be it a fast-paced corporate company, an educational institute, or a high-powered industrial venue. We offer an exclusive non-repetitive 30 days menu that can even be customized as per the client’s budget & requirement.",
    },
    {
      id: "institution",
      title: "INSTITUTION",
      subtitle: "Nourishing the Future of India",
      image: "/catering-institution.jpg",
      description:
        "How about healthy and tasty meal options for the future of India? Future of India deserves nutritious food for better health both, mentally and physically. We indulge nutrients with a flavourful variety of meals to offer a wholesome food experience that everyone will drool over.",
    },
  ];

  return (
    <main className="min-h-screen bg-cream text-brand relative overflow-hidden">
      <Navbar />

      {/* Top CTA Header Section */}
      <section className="relative min-h-[50vh] sm:min-h-[55vh] flex items-center overflow-hidden bg-brand text-cream pt-32 pb-24 px-5 sm:px-8">
        <img
          src="/catering-cta.jpg"
          alt="Robin Industrial Catering Services Banner"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand/95 via-brand/80 to-transparent md:w-[65%]" />
        {/* Top Dark Overlay for Navbar contrast */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-brand/90 via-brand/40 to-transparent pointer-events-none z-10" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl text-left">
            <p className="eyebrow text-amber-400 font-semibold tracking-widest uppercase mb-3">
              <TextWordReveal text="Bulk Cooking • FSSAI Certified • Daily Industrial Catering" baseDelay={0.1} />
            </p>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white drop-shadow-md leading-tight uppercase">
              <TextWordReveal text="CATERING SERVICES" accentWords={["SERVICES"]} baseDelay={0.2} stagger={0.08} />
            </h1>
            <p className="mt-4 text-cream/95 text-lg sm:text-xl font-medium leading-relaxed max-w-xl">
              <TextWordReveal
                text="Hygienic, nutritious, and delicious meal solutions for factory workforces, corporate events, healthcare centers, snack bars & educational institutions."
                baseDelay={0.45}
                stagger={0.04}
              />
            </p>
            <div className="mt-8 flex flex-wrap gap-4 animate-hero-fade" style={{ animationDelay: "0.85s" }}>
              <Link to="/contact" className="btn-primary uppercase tracking-wider text-xs px-6 py-3">
                Request a Catering Quote <span>→</span>
              </Link>
              <Link to={"/hospitality" as any} className="btn-outline text-white border-white/60 hover:bg-white hover:text-brand uppercase tracking-wider text-xs px-6 py-3">
                Explore Hospitality Services
              </Link>
            </div>
          </div>
        </div>
        <WaveDivider position="bottom" fillColor="fill-cream" />
      </section>

      {/* Intro Mission Section - Unboxed Layout */}
      <section className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-8">
        <DottedSquare className="absolute top-6 right-8 text-brand/15" />

        {/* Background Thali Plate Image Element */}
        <img
          src="/thali-plate.jpg"
          alt="Indian Thali Platter background accent"
          className="absolute -top-10 left-4 w-44 sm:w-56 h-auto opacity-20 pointer-events-none rounded-full blur-[0.5px]"
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto reveal-on-scroll">
          <span className="text-accent font-bold uppercase tracking-widest text-xs sm:text-sm">Dedicated Culinary Excellence</span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-brand mt-2 leading-tight uppercase">
            SERVING QUALITY FOOD WITH ENTHUSIASM & COMMITMENT
          </h2>
          <p className="mt-6 text-brand/85 text-lg sm:text-xl leading-relaxed font-medium">
            A team of enthusiastic and dedicated staff members that are committed in making your industry’s workplace more efficient, events more exciting, hospitals more hygienic, cafeterias more exclusive, and the next generation of India healthier with the love of serving food and exceptional customer service capabilities.
          </p>
        </div>
      </section>

      {/* 5 Catering Facilities Deep-Dive Section - FREE OF BOXES & SQUARE UNROUNDED IMAGES */}
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

        {CATERING_FACILITIES.map((facility, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={facility.id}
              id={facility.id}
              className={`relative z-10 grid gap-10 lg:grid-cols-2 items-center pb-16 border-b border-brand/15 last:border-0 ${isEven ? "" : "lg:grid-flow-dense"
                }`}
            >
              <div className={`space-y-4 ${isEven ? "reveal-from-left" : "reveal-from-right lg:col-start-2"}`}>
                <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-brand uppercase tracking-wide">
                  {facility.title}
                </h3>
                <p className="text-accent font-semibold text-base">{facility.subtitle}</p>
                <p className="text-brand/85 text-base sm:text-lg leading-relaxed">{facility.description}</p>
              </div>

              {/* Square image display without rounded cut edges */}
              <div className={`overflow-hidden border-2 border-brand/20 shadow-lg rounded-none ${isEven ? "reveal-from-right" : "reveal-from-left lg:col-start-1"}`}>
                <img
                  src={facility.image}
                  alt={facility.title}
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
            "Industries",
            "Corporate Events",
            "Health Care Services",
            "Cafeteria / Snacks Bars",
            "Institution",
          ]}
        />
      </section>

      {/* Bottom CTA Section */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-b from-white via-cream/90 to-white text-brand">
        <WaveDivider position="top" fillColor="fill-cream" />
        <div className="relative z-10 max-w-5xl mx-auto text-center px-5 sm:px-8 reveal-on-scroll">
          <p className="section-label justify-center">Nourishing Industry</p>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-brand mt-2 uppercase">
            <TextWordReveal text="GET A CUSTOMIZED CATERING PROPOSAL TODAY" accentWords={["CATERING"]} baseDelay={0.1} />
          </h2>
          <p className="mt-4 text-brand/80 text-lg max-w-2xl mx-auto">
            Whether you operate an industrial plant, hospital, corporate office, or educational institution, we provide tailored daily catering solutions.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Get Catering Quote <span>→</span>
            </Link>
            <Link to={"/hospitality" as any} className="btn-outline">
              View Hospitality Solutions
            </Link>
          </div>
        </div>
        <WaveDivider position="bottom" fillColor="fill-cream" />
      </section>

      <Footer />
    </main>
  );
}
