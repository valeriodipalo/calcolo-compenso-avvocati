interface SectionBannerProps {
  image: string;
  alt: string;
  text: string;
}

export function SectionBanner({ image, alt, text }: SectionBannerProps) {
  return (
    <div className="relative overflow-hidden mb-6" style={{ borderRadius: "0.5rem" }}>
      <img src={image} alt={alt} className="w-full h-32 md:h-40 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.25_0.04_250)]/80 to-transparent flex items-center px-6">
        <p className="text-white text-lg md:text-xl max-w-md">{text}</p>
      </div>
    </div>
  );
}
