import { m } from "framer-motion";
import Reveal from "./Reveal";

const STEPS = [
  {
    title: "Give us a call",
    text: "Tell us what's bothering you, or just that it's time for a check-up. We'll book a time that suits you.",
  },
  {
    title: "Relaxed consultation",
    text: "A thorough, gentle examination. We explain what we see in plain words and answer every question.",
  },
  {
    title: "Your treatment plan",
    text: "Clear options, timelines and costs up front, so you can decide with confidence.",
  },
  {
    title: "Smile & follow-up",
    text: "Treatment done with care, then we check in to make sure your smile stays healthy.",
  },
];

const VisitSteps = () => (
  <section id="visit" className="bg-white py-20 sm:py-28">
    <div className="container-x">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">Your visit</span>
        <h2 className="h-section mt-5">
          Simple from the <em className="text-brand">first call.</em>
        </h2>
      </Reveal>

      <div className="relative mt-16">
        <svg
          aria-hidden="true"
          className="absolute left-0 top-7 hidden h-4 w-full lg:block"
          viewBox="0 0 1000 16"
          preserveAspectRatio="none"
        >
          <m.path
            d="M60 8 C 250 -4, 400 20, 500 8 S 800 -4, 940 8"
            stroke="#E31E24"
            strokeWidth="2"
            strokeDasharray="6 8"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          />
        </svg>

        <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.12} className="relative text-center">
              <span className="relative mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand font-display text-xl text-white shadow-lg shadow-brand/30 ring-8 ring-white">
                {i + 1}
              </span>
              <h3 className="mt-6 font-display text-xl">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-brand-ink/60">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default VisitSteps;
