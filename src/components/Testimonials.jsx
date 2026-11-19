import { useRef } from "react";
import { m } from "framer-motion";
import { Quote } from "lucide-react";
import Reveal from "./Reveal";
import SwipeDots from "./SwipeDots";
import { TESTIMONIALS } from "../data/site";

const Testimonials = () => {
  const rowRef = useRef(null);

  return (
    <section id="testimonials" className="relative overflow-hidden bg-brand-cream py-16 sm:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Patient testimonials</span>
          <h2 className="h-section mt-5">
            Kind words from <em className="text-brand">our families.</em>
          </h2>
        </Reveal>

        <ul ref={rowRef} className="swipe-row mt-10 grid gap-5 sm:mt-14 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <m.li
              key={t.name}
              className="swipe-item"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <figure
                className={`flex h-full flex-col rounded-[1.75rem] p-6 sm:rounded-[2rem] sm:p-8 ${
                  i === 1 ? "surface-brand text-white shadow-2xl shadow-brand/25 lg:-translate-y-4" : "bg-white shadow-sm ring-1 ring-brand-ink/5"
                }`}
              >
                <Quote className={`h-8 w-8 ${i === 1 ? "text-white/40" : "text-brand/30"}`} aria-hidden="true" />
                <blockquote className="mt-4 flex-1 font-display text-base leading-relaxed sm:mt-5 sm:text-lg">{t.quote}</blockquote>
                <figcaption className={`mt-6 border-t pt-5 text-sm ${i === 1 ? "border-white/20" : "border-brand-ink/10"}`}>
                  <span className="font-semibold">{t.name}</span>
                  <span className={i === 1 ? "text-white/70" : "text-brand-ink/55"}> · {t.place}</span>
                </figcaption>
              </figure>
            </m.li>
          ))}
        </ul>
        <SwipeDots targetRef={rowRef} count={TESTIMONIALS.length} />
      </div>
    </section>
  );
};

export default Testimonials;
