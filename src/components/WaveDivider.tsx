export function WaveDivider({
  className = "",
  fillColor = "fill-cream",
  position = "bottom",
}: {
  className?: string;
  fillColor?: string;
  position?: "top" | "bottom";
}) {
  return (
    <div
      aria-hidden="true"
      className={`absolute left-0 right-0 w-full overflow-hidden leading-none select-none pointer-events-none z-10 ${
        position === "top" ? "top-0 transform rotate-180" : "bottom-0"
      } ${className}`}
    >
      <svg
        className={`relative block w-full h-12 sm:h-20 md:h-24 ${fillColor}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M0,0 C200,110 420,-50 640,65 C860,160 1060,-10 1200,75 L1200,120 L0,120 Z" />
      </svg>
    </div>
  );
}
