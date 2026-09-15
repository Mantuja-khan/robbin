import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { DottedSquare } from "@/components/DottedSquare";
import { WaveDivider } from "@/components/WaveDivider";
import { TextWordReveal } from "@/components/TextWordReveal";

interface JobOpening {
  id: string;
  title: string;
  experience: string;
  location: string;
  description: string;
}

const JOB_OPENINGS: JobOpening[] = [
  {
    id: "accountant",
    title: "Accountant",
    experience: "3 - 5 Years",
    location: "Bhiwadi / NCR",
    description: "Responsible for managing daily financial transactions, ledger maintenance, billing, tax compliance (GST & Tally), and financial reporting for industrial catering operations.",
  },
  {
    id: "data-entry",
    title: "Data entry",
    experience: "1 - 3 Years",
    location: "Bhiwadi Office",
    description: "Maintain accurate records of inventory, daily meal counts, supplier invoices, staff attendance, and dispatch logs in computerized spreadsheets.",
  },
  {
    id: "operational-manager",
    title: "Operational Manager",
    experience: "3 - 5 Years",
    location: "Rajasthan / Haryana",
    description: "Oversee daily cafeteria operations across industrial client sites, manage kitchen supervisors, ensure timely meal dispatch, and enforce strict quality assurance.",
  },
  {
    id: "chef-industrial",
    title: "Chef For Industrial Canteen",
    experience: "2 - 4 Years",
    location: "Industrial Units Across India",
    description: "Prepare nutritious, hygienic, and large-quantity meals for factory workforces. Expert in North & South Indian regional cuisines and bulk kitchen management.",
  },
  {
    id: "housekeeping",
    title: "House keeping staff",
    experience: "0 - 2 Years",
    location: "Client Factory Sites",
    description: "Maintain strict cleanliness, sanitation, and hygiene across dining halls, dishwashing zones, and kitchen workstations according to FSSAI protocols.",
  },
  {
    id: "kitchen-helper",
    title: "Helper in industrial kitchen",
    experience: "0 - 2 Years",
    location: "Central Kitchen / On-site",
    description: "Assist head chefs with vegetable cutting, ingredient prep, kitchen equipment cleaning, food packing, and dishware hygiene.",
  },
  {
    id: "restaurant-chef",
    title: "Restaurant Chef",
    experience: "2 - 5 Years",
    location: "Hospitality Venues",
    description: "Specialize in multi-cuisine menu development, executive dining prep, live food counters, and presentation for corporate executive dining rooms.",
  },
  {
    id: "waiter",
    title: "Waiter",
    experience: "0 - 2 Years",
    location: "Executive Dining & Cafeterias",
    description: "Serve meals, beverages, and executive buffets with warm hospitality, clean table arrangements, and professional customer care.",
  },
];

export default function CareerPage() {
  useScrollReveal();
  const [activeOpening, setActiveOpening] = useState<string>("accountant");
  const [selectedJob, setSelectedJob] = useState<string>("Accountant");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isCaptchaChecked, setIsCaptchaChecked] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isCaptchaChecked) {
      alert("Please check the 'I'm not a robot' box before submitting.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-cream text-brand">
      <Navbar />

      {/* Header Banner with Custom Career Image & Top Dark Gradient for Navbar */}
      <section className="relative min-h-[48vh] sm:min-h-[52vh] flex items-center overflow-hidden bg-brand text-cream pt-32 pb-24 px-5 sm:px-8">
        <img
          src="/career-top-banner.png"
          alt="Robin Hospitality Careers & Team Banner"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand/95 via-brand/75 to-transparent md:w-[65%]" />
        {/* Top Dark Overlay for Navbar contrast */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-brand/90 via-brand/40 to-transparent pointer-events-none z-10" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl text-left">
            <p className="eyebrow text-amber-400 font-semibold tracking-widest uppercase mb-3">
              <TextWordReveal text="Join Our Growing Family" baseDelay={0.1} />
            </p>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white drop-shadow-md leading-tight">
              <TextWordReveal text="Careers at Robin Hospitality" accentWords={["Hospitality"]} baseDelay={0.2} stagger={0.08} />
            </h1>
            <p className="mt-4 text-cream/95 text-lg sm:text-xl font-medium leading-relaxed max-w-xl">
              <TextWordReveal
                text="Build a rewarding career with India's leading industrial catering & workplace hospitality team."
                baseDelay={0.45}
                stagger={0.04}
              />
            </p>
          </div>
        </div>
        <WaveDivider position="bottom" fillColor="fill-cream" />
      </section>

      {/* Main Career Section: OPENINGS & APPLY NOW Form */}
      <section className="relative max-w-7xl mx-auto px-5 sm:px-8 py-16 overflow-hidden">
        <DottedSquare className="absolute top-8 right-8 text-brand/15" />
        <DottedSquare className="absolute bottom-10 left-10 text-brand/15" />

        {/* Decorative background Thali image element (non-CTA) */}
        <img
          src="/thali-plate.jpg"
          alt="Indian Thali Platter background accent"
          className="absolute top-1/4 -right-16 w-60 sm:w-80 h-auto opacity-20 pointer-events-none rounded-full blur-[0.5px]"
        />
        <img
          src="/thali-plate.jpg"
          alt="Indian Thali Platter background accent"
          className="absolute bottom-10 -left-16 w-60 sm:w-80 h-auto opacity-20 pointer-events-none rounded-full blur-[0.5px]"
        />

        <div className="relative z-10 grid gap-12 lg:grid-cols-2">
          {/* Left Column: OPENINGS Accordion */}
          <div className="reveal-from-left">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand tracking-wider uppercase mb-6 flex items-center gap-3">
              <span className="h-7 w-2 rounded-full bg-accent inline-block" />
              OPENINGS
            </h2>

            <div className="space-y-3">
              {JOB_OPENINGS.map((job) => {
                const isOpen = activeOpening === job.id;
                return (
                  <div key={job.id} className="overflow-hidden rounded-md border border-gray-300 shadow-sm transition-all duration-200">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveOpening(isOpen ? "" : job.id);
                        setSelectedJob(job.title);
                      }}
                      className={`w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-base transition-colors duration-200 ${
                        isOpen
                          ? "bg-brand text-white"
                          : "bg-white text-brand hover:bg-sage/20"
                      }`}
                    >
                      <span className="font-display text-lg tracking-wide">{job.title}</span>
                      <span className="text-2xl font-bold leading-none">{isOpen ? "−" : "+"}</span>
                    </button>

                    {isOpen && (
                      <div className="bg-white p-5 border-t border-gray-200 text-brand/90 space-y-3 animate-hero-fade">
                        <p className="text-sm font-semibold text-accent">
                          Experience Required : <span className="text-brand font-medium">{job.experience}</span>
                        </p>
                        <p className="text-xs text-gray-600">
                          <span className="font-semibold">Location:</span> {job.location}
                        </p>
                        <p className="text-sm leading-relaxed text-gray-700">{job.description}</p>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedJob(job.title);
                            const formElement = document.getElementById("apply-form");
                            formElement?.scrollIntoView({ behavior: "smooth" });
                          }}
                          className="mt-2 text-xs font-bold text-accent uppercase tracking-wider hover:underline inline-flex items-center gap-1"
                        >
                          Apply for this position →
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: APPLY NOW Form */}
          <div id="apply-form" className="reveal-from-right">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand tracking-wider uppercase mb-6 flex items-center gap-3">
              <span className="h-7 w-2 rounded-full bg-accent inline-block" />
              APPLY NOW
            </h2>

            {isSubmitted ? (
              <div className="rounded-xl border border-green-300 bg-green-50 p-8 text-center text-green-900 shadow-soft animate-hero-fade">
                <span className="text-5xl">✓</span>
                <h3 className="mt-4 font-display text-2xl font-bold">Application Received!</h3>
                <p className="mt-2 text-sm text-green-800">
                  Thank you for applying for the <span className="font-bold">{selectedJob}</span> role at Robin Hospitality. Our HR team will review your details and contact you soon.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 btn-primary text-xs uppercase tracking-wider px-6 py-2.5"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="sr-only" htmlFor="firstName">First Name</label>
                    <input
                      id="firstName"
                      type="text"
                      required
                      placeholder="Enter Your First Name"
                      className="w-full rounded-md border border-gray-300 bg-gray-50/80 px-4 py-3 text-sm text-brand placeholder-gray-400 outline-none focus:border-brand focus:bg-white focus:ring-1 focus:ring-brand transition-all"
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="lastName">Last Name</label>
                    <input
                      id="lastName"
                      type="text"
                      required
                      placeholder="Enter Your Last Name"
                      className="w-full rounded-md border border-gray-300 bg-gray-50/80 px-4 py-3 text-sm text-brand placeholder-gray-400 outline-none focus:border-brand focus:bg-white focus:ring-1 focus:ring-brand transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="sr-only" htmlFor="selectOpening">Select Openings</label>
                    <select
                      id="selectOpening"
                      value={selectedJob}
                      onChange={(e) => setSelectedJob(e.target.value)}
                      className="w-full rounded-md border border-gray-300 bg-gray-50/80 px-4 py-3 text-sm text-brand outline-none focus:border-brand focus:bg-white focus:ring-1 focus:ring-brand transition-all"
                    >
                      <option value="">Select Openings</option>
                      {JOB_OPENINGS.map((j) => (
                        <option key={j.id} value={j.title}>
                          {j.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="experience">Experience</label>
                    <input
                      id="experience"
                      type="text"
                      required
                      placeholder="Experience"
                      className="w-full rounded-md border border-gray-300 bg-gray-50/80 px-4 py-3 text-sm text-brand placeholder-gray-400 outline-none focus:border-brand focus:bg-white focus:ring-1 focus:ring-brand transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="sr-only" htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="Enter Your Email"
                      className="w-full rounded-md border border-gray-300 bg-gray-50/80 px-4 py-3 text-sm text-brand placeholder-gray-400 outline-none focus:border-brand focus:bg-white focus:ring-1 focus:ring-brand transition-all"
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="resumeUpload">Choose File</label>
                    <div className="relative flex items-center rounded-md border border-gray-300 bg-gray-50/80 px-3 py-2 text-sm text-brand">
                      <input
                        id="resumeUpload"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                      />
                      <span className="rounded bg-gray-200 border border-gray-300 px-3 py-1 text-xs font-semibold text-gray-700 shrink-0 mr-3">
                        Choose File
                      </span>
                      <span className="text-xs text-gray-500 truncate">
                        {selectedFile ? selectedFile.name : "No file chosen"}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Enter Your Message"
                    className="w-full rounded-md border border-gray-300 bg-gray-50/80 px-4 py-3 text-sm text-brand placeholder-gray-400 outline-none focus:border-brand focus:bg-white focus:ring-1 focus:ring-brand transition-all resize-y"
                  />
                </div>

                {/* reCAPTCHA Mock Box */}
                <div className="flex items-center justify-between rounded-md border border-gray-300 bg-gray-50 p-4 max-w-sm">
                  <label className="flex items-center gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={isCaptchaChecked}
                      onChange={(e) => setIsCaptchaChecked(e.target.checked)}
                      className="h-6 w-6 rounded border-gray-300 text-brand focus:ring-brand"
                    />
                    <span className="text-sm font-medium text-gray-700">I'm not a robot</span>
                  </label>
                  <div className="flex flex-col items-center justify-center text-[10px] text-gray-400 leading-tight">
                    <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" />
                      <path d="M12 6a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4V6z" />
                    </svg>
                    <span className="mt-0.5">reCAPTCHA</span>
                    <span>Privacy - Terms</span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-md bg-brand hover:bg-brand/90 text-white font-display font-bold py-3.5 text-base tracking-wide transition-all shadow-md hover:shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

