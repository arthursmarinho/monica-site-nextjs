import Link from "next/link";

type Variant = "primary" | "outline" | "outlineLight" | "white";

const variants: Record<Variant, string> = {
  primary:
    "bg-maven text-white border-maven hover:bg-deep hover:border-deep",
  outline:
    "bg-transparent text-maven border-maven hover:bg-maven hover:text-white",
  outlineLight:
    "bg-transparent text-white border-white/80 hover:bg-white hover:text-deepest",
  white:
    "bg-white text-deepest border-white hover:bg-lightest-green",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: Props) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-tiny border px-6 py-[0.63rem] text-center text-[1.05rem] font-medium leading-none transition-colors duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
