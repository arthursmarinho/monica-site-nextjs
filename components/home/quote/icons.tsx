type IconProps = { className?: string };

export function CheckIcon({ className = "" }: IconProps) {
  return (
    <svg
      width="12"
      height="10"
      viewBox="0 0 12 10"
      fill="none"
      aria-hidden
      className={`shrink-0 ${className}`}
    >
      <path
        d="M1 5L4.3 8.3L11 1.3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowIcon({ className = "" }: IconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={`shrink-0 ${className}`}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

const lineProps = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function PersonIcon() {
  return (
    <svg {...lineProps}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </svg>
  );
}

export function FamilyIcon() {
  return (
    <svg {...lineProps}>
      <circle cx="8" cy="7" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M2 21a6 6 0 0 1 12 0M13.5 21a4.5 4.5 0 0 1 8.5-2" />
    </svg>
  );
}

export function BuildingIcon() {
  return (
    <svg {...lineProps}>
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1M10 21v-3h4v3" />
    </svg>
  );
}

export const perfilIcons: Partial<Record<string, () => React.ReactElement>> = {
  Individual: PersonIcon,
  Familiar: FamilyIcon,
  Empresarial: BuildingIcon,
};
