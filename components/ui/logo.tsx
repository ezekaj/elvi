export function Logo({ className = '' }: { className?: string }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Geometric frame */}
      <rect
        x="2"
        y="2"
        width="36"
        height="36"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />

      {/* Inner geometric pattern - representing "Z.E" */}
      <path
        d="M10 12 L30 12 L10 20 L30 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />

      {/* Dot representing "." in Z.E */}
      <circle
        cx="20"
        cy="28"
        r="2"
        fill="currentColor"
      />

      {/* Corner accents */}
      <circle cx="2" cy="2" r="1.5" fill="currentColor" />
      <circle cx="38" cy="2" r="1.5" fill="currentColor" />
      <circle cx="2" cy="38" r="1.5" fill="currentColor" />
      <circle cx="38" cy="38" r="1.5" fill="currentColor" />
    </svg>
  );
}
