/*
 * Hand-drawn margin doodles — stroke-based SVGs that inherit currentColor.
 * Size with className (h-*), tint with a text color, tilt with rotate.
 * Decorative only: every usage should be aria-hidden.
 */

type DoodleProps = { className?: string };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function Rocket({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 40 64" className={className} {...stroke}>
      <path d="M20 5c6 6 9 13 9 21 0 6-2 12-4 17H15c-2-5-4-11-4-17 0-8 3-15 9-21Z" />
      <circle cx="20" cy="23" r="4.5" />
      <path d="M11 37l-7 9 7-1" />
      <path d="M29 37l7 9-7-1" />
      <path d="M16 49c-1 4 0 8 4 11 4-3 5-7 4-11" />
    </svg>
  );
}

export function Gear({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...stroke}>
      <circle cx="24" cy="24" r="10" />
      <circle cx="24" cy="24" r="3.5" />
      <path d="M24 6v6M24 36v5M6 24h6M36 24h6M11 12l4 4M33 33l4 3M36 11l-4 4M15 33l-4 4" />
    </svg>
  );
}

export function Atom({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 56 56" className={className} {...stroke}>
      <ellipse cx="28" cy="28" rx="22" ry="8.5" />
      <ellipse cx="28" cy="28" rx="22" ry="8.5" transform="rotate(60 28 28)" />
      <ellipse cx="28" cy="28" rx="22" ry="8.5" transform="rotate(-60 28 28)" />
      <circle cx="28" cy="28" r="2.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PaperPlane({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 72 40" className={className} {...stroke}>
      <path d="M66 5 24 21l13 5 5 11Z" />
      <path d="M37 26 66 5" />
      <path d="M4 33c7 3 14-1 19-8" strokeDasharray="3 5" />
    </svg>
  );
}

export function Lightbulb({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 40 58" className={className} {...stroke}>
      <path d="M20 4c8 0 13 6 13 13 0 7-5 10-7 16H14c-2-6-7-9-7-16 0-7 5-13 13-13Z" />
      <path d="M16 33l2-6 2 4 2-4 2 6" />
      <path d="M15 38h10M16 43h8M17 48h6" />
    </svg>
  );
}

export function Bolt({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 32 48" className={className} {...stroke}>
      <path d="M18 3 5 27h9l-4 16 17-24h-9l6-16Z" />
    </svg>
  );
}

export function Heart({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 44 40" className={className} {...stroke}>
      <path d="M22 36C12 29 4 23 4 14 4 8 8 4 13 4c4 0 7 2 9 5 2-3 5-5 9-5 5 0 9 4 9 10 0 9-8 15-18 22Z" />
    </svg>
  );
}
