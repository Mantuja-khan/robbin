import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const selector = ".reveal-on-scroll, .reveal-from-left, .reveal-from-right";

    const revealElements = () => {
      const elements = document.querySelectorAll(selector);
      if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
              }
            });
          },
          {
            rootMargin: "0px 0px -20px 0px",
            threshold: 0.05,
          }
        );

        elements.forEach((el) => {
          // If element is already in viewport or near top, show immediately
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add("is-visible");
          } else {
            observer.observe(el);
          }
        });

        return observer;
      } else {
        elements.forEach((el) => el.classList.add("is-visible"));
        return null;
      }
    };

    const timer = setTimeout(() => {
      revealElements();
    }, 50);

    return () => clearTimeout(timer);
  }, []);
}

