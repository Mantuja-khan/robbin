import { Link } from "react-router-dom";
import { Brand } from "./Navbar";
import { DottedSquare } from "./DottedSquare";

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* 4 White Dotted Squares placed at random locations */}
      <DottedSquare className="absolute top-8 left-6 text-white/20 pointer-events-none z-10" />
      <DottedSquare className="absolute top-10 right-28 text-white/20 pointer-events-none z-10" />
      <DottedSquare className="absolute bottom-16 left-1/3 text-white/15 pointer-events-none z-10" />
      <DottedSquare className="absolute bottom-12 right-10 text-white/20 pointer-events-none z-10" />

      <div className="footer-topline">
        <p className="script-note">Good Food<br />Stronger Industries</p>
        <p className="eyebrow">Nourishing People.<br />Powering Industries.</p>
      </div>
      <img src="/thali-plate.jpg" alt="Thali Plate" className="footer-food !border-none !bg-transparent !shadow-none object-contain" />
      <div className="relative mx-auto grid max-w-7xl gap-9 px-5 pb-8 pt-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.35fr_.9fr_1.05fr_1.05fr_1fr]">
        <div>
          <Brand />
          <p className="mt-1 text-xs text-primary-foreground/70">Good Food • Healthy Workforce • Brighter Tomorrow</p>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-primary-foreground/75">
            At Robin Hospitality Services, we deliver hygienic, nutritious and great-tasting food to factories and industrial workplaces, creating healthier, happier and more productive teams.
          </p>
          <div className="mt-5 flex gap-3">
            <a className="social-link" href="#contact" aria-label="Facebook">f</a>
            <a className="social-link" href="#contact" aria-label="Instagram">◎</a>
            <a className="social-link" href="#contact" aria-label="LinkedIn">in</a>
            <a className="social-link" href="#contact" aria-label="YouTube">▶</a>
          </div>
        </div>

        <div>
          <h3 className="footer-title">Quick Links</h3>
          <ul className="mt-6 space-y-3 text-sm text-primary-foreground/70">
            {([
              ["Home", "/"],
              ["About Us", "/about"],
              ["Services", "/services"],
              ["Certificates & Policies", "/certificates"],
              ["Gallery", "/gallery"],
              ["Clients", "/clients"],
              ["Career", "/career"],
              ["Contact Us", "/contact"],
            ] as const).map(([label, path]) => (
              <li key={path}>
                <Link to={path} className="transition-colors hover:text-accent">
                  › &nbsp;{label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer-title">Our Services</h3>
          <ul className="mt-6 space-y-3 text-sm text-primary-foreground/70">
            {["Catering Services", "Hospitality Services", "Industrial Meal Solutions", "Housekeeping Support", "Pantry & Dining Management", "Customized Menu Planning"].map((item) => (
              <li key={item}>
                <Link to="/services" className="transition-colors hover:text-accent">
                  › &nbsp;{item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer-title">Contact Us</h3>
          <div className="mt-6 space-y-5 text-sm leading-relaxed text-primary-foreground/80">
            <p className="footer-contact"><span>☎</span>+91 98765 43210<br />+91 12345 67890</p>
            <p className="footer-contact"><span>✉</span>info@robbinhospitality.com</p>
            <p className="footer-contact"><span>⌖</span>Bhiwadi, Rajasthan, India<br />(Service Available Across India)</p>
          </div>
        </div>


      </div>



      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-center text-xs text-primary-foreground/65 sm:px-8 md:flex-row">
        <p>© 2026 Robin Hospitality Services. All Rights Reserved.</p>
        <p>Privacy Policy &nbsp; | &nbsp; Terms &amp; Conditions &nbsp; | &nbsp; Cookie Policy &nbsp; | &nbsp; Sitemap</p>
        <p>Designed by  <span className="text-accent"><a href="https://www.vmsolutiions.com" target="_blank">VM Solutiions</a></span>  </p>
      </div>
    </footer>
  );
}
