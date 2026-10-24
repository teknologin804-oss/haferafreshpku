import { Quote } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-line bg-white py-16 sm:py-20">
      <div className="shell">
        <SectionHeading
          eyebrow="Testimoni"
          title="Cerita dari Mitra Bisnis Kami"
          description="Testimoni di bawah disampaikan oleh pelanggan yang telah menyetujui publikasi."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Reveal key={`${testimonial.name}-${testimonial.role}`} className="h-full">
              <figure className="card flex h-full flex-col p-6">
                <Quote className="h-6 w-6 text-gold-ink" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 font-serif text-lg leading-relaxed text-charcoal">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-5 border-t border-line pt-4 text-sm">
                  <span className="font-semibold text-deep">{testimonial.name}</span>
                  <span className="mt-0.5 block text-xs text-muted">
                    {testimonial.role}
                    {testimonial.business ? ` · ${testimonial.business}` : ""}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
