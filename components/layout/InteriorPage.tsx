import Image from "next/image";
import { Button } from "@/components/ui/Button";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description: string;
  image: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
  children?: React.ReactNode;
};

export function InteriorPage({
  eyebrow,
  title,
  description,
  image,
  primary,
  secondary,
  children,
}: Props) {
  return (
    <div className="bg-natural">
      <section className="relative min-h-[80svh] overflow-hidden pt-32">
        <div className="absolute inset-0">
          <Image src={image} alt="" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-deepest/55" />
        </div>
        <div className="container-site relative z-10 flex min-h-[70svh] items-end px-4 pb-16 md:px-6">
          <div className="max-w-3xl text-white">
            {eyebrow ? (
              <p className="mb-4 text-sm font-medium tracking-[0.16em] uppercase text-electric">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="display-heading text-4xl md:text-6xl">{title}</h1>
            <p className="mt-5 max-w-[46ch] text-lg font-light text-white/90">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {primary ? <Button href={primary.href}>{primary.label}</Button> : null}
              {secondary ? (
                <Button href={secondary.href} variant="outlineLight">
                  {secondary.label}
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </section>
      {children}
    </div>
  );
}
