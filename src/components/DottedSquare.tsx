export function DottedSquare({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none opacity-30 z-0 ${className}`}
    >
      <svg width="112" height="112" fill="none" viewBox="0 0 112 112">
        <pattern id="dotted-grid-pattern" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="2.2" fill="currentColor" />
        </pattern>
        <rect width="112" height="112" fill="url(#dotted-grid-pattern)" />
      </svg>
    </div>
  );
}
