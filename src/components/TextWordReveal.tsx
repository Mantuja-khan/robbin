import { useEffect, useState } from "react";

export function TextWordReveal({
  text,
  className = "",
  baseDelay = 0.1,
  stagger = 0.06,
  accentWords = [],
}: {
  text: string;
  className?: string;
  baseDelay?: number;
  stagger?: number;
  accentWords?: string[];
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, idx) => {
        const cleanWord = word.replace(/[^a-zA-Z&]/g, "");
        const isAccent = accentWords.includes(word) || accentWords.includes(cleanWord);
        const delay = (baseDelay + idx * stagger).toFixed(2);
        return (
          <span key={idx} className="inline-block overflow-hidden align-top mr-[0.24em] pb-[0.08em]">
            <span
              className={`inline-block transition-all duration-700 ease-out transform ${
                mounted
                  ? "opacity-100 translate-y-0 filter-none"
                  : "opacity-0 translate-y-8 blur-sm"
              } ${isAccent ? "text-amber-400" : ""}`}
              style={{
                transitionDelay: `${delay}s`,
              }}
            >
              {word}
            </span>
          </span>
        );
      })}
    </span>
  );
}
