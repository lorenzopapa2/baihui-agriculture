import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface SectionTitleProps {
  subtitle: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionTitle({ subtitle, title, description, align = "center", light = false }: SectionTitleProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`mb-12 lg:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
        ${align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-xl"}`}
    >
      <span
        className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-3 ${light ? 'text-[#4ADE80]' : 'text-[#1B8A2E]'}`}
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {subtitle}
      </span>
      <h2
        className={`text-3xl lg:text-4xl xl:text-[2.75rem] font-bold leading-tight mb-4 ${light ? 'text-white' : 'text-[#1A1A1A]'}`}
        style={{ fontFamily: "'Playfair Display', 'Noto Serif SC', serif" }}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base lg:text-lg leading-relaxed ${light ? 'text-white/60' : 'text-[#6B7280]'}`}
          style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
        >
          {description}
        </p>
      )}
      <div className={`mt-6 mx-auto h-0.5 w-16 rounded-full ${align === "center" ? "" : "mx-0"} ${light ? 'bg-[#4ADE80]/40' : 'bg-[#1B8A2E]/30'}`} />
    </div>
  );
}
