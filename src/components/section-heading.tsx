import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  as?: "h2" | "h3";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
  as: Heading = "h2",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={cn(centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl", className)}>
      <p className={cn("eyebrow", tone === "light" && "eyebrow-invert", centered && "justify-center")}>
        {eyebrow}
      </p>
      <Heading
        className={cn(
          "mt-5 text-[1.9rem] leading-[1.12] sm:text-[2.35rem] lg:text-[2.7rem]",
          tone === "light" ? "text-ivory" : "text-charcoal",
        )}
      >
        {title}
      </Heading>
      {description ? (
        <div
          className={cn(
            "mt-5 text-[0.9375rem] leading-relaxed",
            tone === "light" ? "text-ivory/65" : "text-muted",
          )}
        >
          {description}
        </div>
      ) : null}
    </div>
  );
}
