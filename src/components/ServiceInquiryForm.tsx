import { useState } from "react";

interface ServiceInquiryFormProps {
  servicesOptions: string[];
  defaultService?: string;
}

export function ServiceInquiryForm({ servicesOptions, defaultService }: ServiceInquiryFormProps) {
  const [selectedService, setSelectedService] = useState(defaultService || servicesOptions[0] || "");
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [isCaptchaChecked, setIsCaptchaChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isCaptchaChecked) {
      alert("Please verify that you are not a robot.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto my-8">
      <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-brand text-center uppercase tracking-wider mb-8">
        INTERESTED IN OUR SERVICE?
      </h2>

      {isSubmitted ? (
        <div className="rounded-xl border border-green-300 bg-green-50 p-8 text-center text-green-900 animate-hero-fade">
          <span className="text-5xl">✓</span>
          <h3 className="mt-4 font-display text-2xl font-bold">Inquiry Sent Successfully!</h3>
          <p className="mt-2 text-sm text-green-800 max-w-lg mx-auto">
            Thank you for your interest in our <span className="font-bold">{selectedService}</span> solution. Our team will reach out to you within 24 hours.
          </p>
          <button
            type="button"
            onClick={() => setIsSubmitted(false)}
            className="mt-6 btn-primary text-xs uppercase tracking-wider px-6 py-2.5"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Row 1: First Name, Last Name, Email */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="sr-only" htmlFor="inquiryFirstName">First Name</label>
              <input
                id="inquiryFirstName"
                type="text"
                required
                placeholder="Enter Your First Name"
                className="w-full rounded-md border border-gray-300 bg-gray-50/90 px-4 py-3 text-sm text-brand placeholder-gray-400 outline-none focus:border-brand focus:bg-white focus:ring-1 focus:ring-brand transition-all"
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="inquiryLastName">Last Name</label>
              <input
                id="inquiryLastName"
                type="text"
                required
                placeholder="Enter Your Last Name"
                className="w-full rounded-md border border-gray-300 bg-gray-50/90 px-4 py-3 text-sm text-brand placeholder-gray-400 outline-none focus:border-brand focus:bg-white focus:ring-1 focus:ring-brand transition-all"
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="inquiryEmail">Email</label>
              <input
                id="inquiryEmail"
                type="email"
                required
                placeholder="Enter Your Email"
                className="w-full rounded-md border border-gray-300 bg-gray-50/90 px-4 py-3 text-sm text-brand placeholder-gray-400 outline-none focus:border-brand focus:bg-white focus:ring-1 focus:ring-brand transition-all"
              />
            </div>
          </div>

          {/* Row 2: Phone Number, Select Country, Select Services */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="sr-only" htmlFor="inquiryPhone">Phone Number</label>
              <input
                id="inquiryPhone"
                type="tel"
                required
                placeholder="Enter Your Phone Number"
                className="w-full rounded-md border border-gray-300 bg-gray-50/90 px-4 py-3 text-sm text-brand placeholder-gray-400 outline-none focus:border-brand focus:bg-white focus:ring-1 focus:ring-brand transition-all"
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="inquiryCountry">Select Country</label>
              <select
                id="inquiryCountry"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full rounded-md border border-gray-300 bg-gray-50/90 px-4 py-3 text-sm text-brand outline-none focus:border-brand focus:bg-white focus:ring-1 focus:ring-brand transition-all"
              >
                <option value="India">India</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="UAE">United Arab Emirates</option>
                <option value="Japan">Japan</option>
                <option value="Germany">Germany</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div>
              <label className="sr-only" htmlFor="inquiryServices">Select Services</label>
              <select
                id="inquiryServices"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full rounded-md border border-gray-300 bg-gray-50/90 px-4 py-3 text-sm text-brand outline-none focus:border-brand focus:bg-white focus:ring-1 focus:ring-brand transition-all"
              >
                <option value="">Select Services</option>
                {servicesOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 3: Message Textarea */}
          <div>
            <label className="sr-only" htmlFor="inquiryMessage">Message</label>
            <textarea
              id="inquiryMessage"
              rows={4}
              placeholder="Enter Your Message"
              className="w-full rounded-md border border-gray-300 bg-gray-50/90 px-4 py-3 text-sm text-brand placeholder-gray-400 outline-none focus:border-brand focus:bg-white focus:ring-1 focus:ring-brand transition-all resize-y"
            />
          </div>

          {/* Row 4: Captcha & Submit Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* reCAPTCHA Widget Box matching reference screenshot */}
            <div className="flex items-center justify-between rounded-md border border-gray-300 bg-gray-50 px-4 py-3 w-full sm:w-72 select-none shadow-sm">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isCaptchaChecked}
                  onChange={(e) => setIsCaptchaChecked(e.target.checked)}
                  className="h-6 w-6 rounded border-gray-300 text-brand focus:ring-brand"
                />
                <span className="text-sm font-medium text-gray-700">I'm not a robot</span>
              </label>
              <div className="flex flex-col items-center justify-center text-[10px] text-gray-400 leading-tight">
                <svg className="w-7 h-7 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" />
                  <path d="M12 6a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4V6z" />
                </svg>
                <span className="mt-0.5 font-sans">reCAPTCHA</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-64 rounded-md bg-brand hover:bg-brand/90 text-white font-display font-bold py-3.5 text-base tracking-wider uppercase transition-all shadow-md hover:shadow-lg disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
