import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function Brand() {
  return (
    <img
      src="/brand-logo.png"
      alt="Robin Hospitality Services"
      className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105"
    />
  );
}

export function Navbar() {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Services",
      href: "/services",
      subItems: [
        { name: "Hospitality Services", href: "/hospitality" },
        { name: "Catering Services", href: "/catering" },
      ],
    },
    { name: "Certificates & Policies", href: "/certificates" },
    { name: "Gallery", href: "/gallery" },
    { name: "Clients", href: "/clients" },
    { name: "Career", href: "/career" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-cream/95 backdrop-blur-md border-b border-brand/10 shadow-md py-3"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" aria-label="Robin Hospitality Services home">
          <Brand />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1.5 text-xs font-bold uppercase tracking-wider lg:flex">
          {navLinks.map((link) => {
            const isActive = currentPath === link.href || (link.subItems && link.subItems.some((s) => currentPath === s.href));
            
            if (link.subItems) {
              return (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <Link
                    to={link.href}
                    className={`inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                      isScrolled
                        ? isActive
                          ? "text-accent bg-accent/15 font-extrabold"
                          : "text-brand hover:text-accent hover:bg-sage/40 font-semibold"
                        : isActive
                          ? "text-amber-400 bg-white/15 border border-white/20 font-extrabold"
                          : "text-white/95 hover:text-amber-300 hover:bg-white/10 font-semibold drop-shadow-sm"
                    }`}
                  >
                    {link.name}
                    <span className="text-[10px] transition-transform duration-200 group-hover:rotate-180">▼</span>
                  </Link>

                  {/* Desktop Dropdown Menu - Simple Square Design */}
                  <div
                    className={`absolute top-full left-0 mt-1 w-52 rounded-none border border-brand/20 bg-white p-1 shadow-md transition-all duration-200 ${
                      servicesDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"
                    }`}
                  >
                    {link.subItems.map((sub) => (
                      <Link
                        key={sub.href}
                        to={sub.href}
                        className={`block rounded-none px-3 py-2 text-xs font-semibold normal-case transition-colors ${
                          currentPath === sub.href
                            ? "bg-accent/15 text-accent font-bold"
                            : "text-brand hover:bg-sage/40 hover:text-accent"
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                to={link.href}
                className={`inline-flex items-center px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                  isScrolled
                    ? isActive
                      ? "text-accent bg-accent/15 font-extrabold"
                      : "text-brand hover:text-accent hover:bg-sage/40 font-semibold"
                    : isActive
                      ? "text-amber-400 bg-white/15 border border-white/20 font-extrabold"
                      : "text-white/95 hover:text-amber-300 hover:bg-white/10 font-semibold drop-shadow-sm"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link to="/contact" className="btn-primary text-xs uppercase tracking-wider px-5 py-2.5 shadow-sm hover:shadow-md">
            <span aria-hidden="true">✉</span> GET A QUOTE
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            isScrolled ? "text-brand hover:bg-sage/40" : "text-white hover:bg-white/10"
          }`}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Right Side Drawer covering 70% of screen with Close Button */}
      {mobileMenuOpen && (
        <>
          {/* Dark Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 lg:hidden animate-hero-fade"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Right Sliding Drawer Panel covering 70% width */}
          <div className="fixed top-0 right-0 bottom-0 z-50 w-[70%] max-w-xs h-full bg-cream shadow-2xl flex flex-col justify-between p-5 overflow-y-auto lg:hidden animate-hero-fade">
            <div>
              {/* Drawer Top Bar with Brand & Close Button */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-brand/15">
                <span className="font-display text-sm font-bold uppercase tracking-wider text-brand">MENU</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-full text-brand hover:bg-brand/10 transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Drawer Navigation Links */}
              <div className="space-y-2">
                {navLinks.map((link) => {
                  const isActive = currentPath === link.href || (link.subItems && link.subItems.some((s) => currentPath === s.href));
                  return (
                    <div key={link.name} className="space-y-1">
                      <Link
                        to={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block text-sm font-bold uppercase tracking-wider py-2.5 px-3 rounded-md transition-colors ${
                          isActive ? "bg-accent/15 text-accent font-extrabold" : "text-brand/90 hover:bg-sage/40"
                        }`}
                      >
                        {link.name}
                      </Link>
                      {link.subItems && (
                        <div className="pl-4 space-y-1 border-l-2 border-accent/20 ml-3">
                          {link.subItems.map((sub) => (
                            <Link
                              key={sub.href}
                              to={sub.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`block text-xs font-semibold py-1.5 px-2 rounded-md ${
                                currentPath === sub.href ? "text-accent font-bold bg-accent/10" : "text-brand/75 hover:text-accent"
                              }`}
                            >
                              • {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Quote Button */}
            <div className="pt-6 border-t border-brand/15">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary w-full text-center py-3 uppercase tracking-wider text-xs shadow-md"
              >
                GET A QUOTE <span>→</span>
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
