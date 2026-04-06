"use client";

export default function LogoSVG({ className = "", size = 36 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Hexagon base */}
      <path
        d="M18 2L32 10V26L18 34L4 26V10L18 2Z"
        fill="url(#logo-bg)"
        stroke="url(#logo-border)"
        strokeWidth="1"
      />
      {/* Neural arc top */}
      <path
        d="M11 14 Q18 9 25 14"
        stroke="#39FF14"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      {/* M letter */}
      <text
        x="18"
        y="23"
        textAnchor="middle"
        fill="#39FF14"
        fontFamily="system-ui, sans-serif"
        fontWeight="900"
        fontSize="14"
        letterSpacing="-0.5"
      >
        M
      </text>
      {/* Pulse dot */}
      <circle cx="26" cy="10" r="2" fill="#39FF14" opacity="0.9">
        <animate attributeName="opacity" values="0.9;0.2;0.9" dur="2s" repeatCount="indefinite" />
      </circle>
      <defs>
        <linearGradient id="logo-bg" x1="4" y1="2" x2="32" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0a1628" />
          <stop offset="100%" stopColor="#050d1a" />
        </linearGradient>
        <linearGradient id="logo-border" x1="4" y1="2" x2="32" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#39FF14" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#39FF14" stopOpacity="0.15" />
        </linearGradient>
      </defs>
    </svg>
  );
}
