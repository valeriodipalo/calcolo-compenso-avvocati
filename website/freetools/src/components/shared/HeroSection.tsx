import Image from "next/image";

interface HeroSectionProps {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description: string;
  reference?: string;
}

export function HeroSection({
  image,
  imageAlt,
  eyebrow,
  title,
  description,
  reference,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[oklch(0.25_0.04_250)]/80" />
      <div className="relative container py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="text-[oklch(0.75_0.10_85)] text-sm font-semibold uppercase tracking-widest mb-3">
            {eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4">
            {title}
          </h1>
          <p className="text-[oklch(0.75_0.05_250)] text-lg leading-relaxed max-w-2xl">
            {description}
          </p>
          {reference && (
            <p className="text-[oklch(0.60_0.05_250)] text-sm mt-4">{reference}</p>
          )}
        </div>
      </div>
    </section>
  );
}
