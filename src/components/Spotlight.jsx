import { useRef } from "react";
import { m, useScroll, useTransform } from "framer-motion";
import { Check, Phone } from "lucide-react";
import Reveal from "./Reveal";
import alignerImage from "../assets/smile.webp";
import mirrorImage from "../assets/smile2.webp";
import { CLINIC } from "../data/site";

const POINTS = [
  "Traditional braces and clear aligners",
  "Bite and alignment correction for teens and adults",
  "Retainers and follow-up to keep results lasting",
];

const Spotlight = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yBack = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const yFront = useTransform(scrollYProgress, [0, 1], [-30, 50]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-brand-ink py-20 text-white sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-brand/25 blur-[120px]"
      />

      <div className="container-x relative grid items-center gap-16 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="eyebrow !text-white/70 before:!bg-white/40">Orthodontics</span>
            <h2 className="h-section mt-5">
              Straighter teeth, <em className="text-brand">bigger smiles.</em>
            </h2>
            <p className="mt-5 max-w-lg text-white/65">
              Orthodontics is at the heart of what we do. Whether it&apos;s braces for your teenager or
              discreet aligners for you, we plan every step around your face, your bite and your life.
            </p>
          </Reveal>

          <ul className="mt-8 space-y-3">
            {POINTS.map((p, i) => (
              <Reveal as="li" key={p} delay={0.1 + i * 0.08} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-white/85">{p}</span>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.35} className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:flex sm:items-center sm:justify-between sm:gap-6">
            <div>
              <p className="font-display text-xl">We&apos;re welcoming new patients</p>
              <p className="mt-1 text-sm text-white/60">Call us and we&apos;ll find a time that suits you.</p>
            </div>
            <a href={CLINIC.phoneHref} className="btn-primary mt-5 w-full shrink-0 sm:mt-0 sm:w-auto">
              <Phone className="h-4 w-4" />
              Call now
            </a>
          </Reveal>
        </div>

        <div className="relative mx-auto h-[420px] w-full max-w-[520px] sm:h-[520px]">
          <m.img
            style={{ y: yBack }}
            src={mirrorImage}
            alt="Patient checking her new smile in a mirror"
            width="515"
            height="484"
            loading="lazy"
            decoding="async"
            className="absolute right-0 top-0 w-[72%] drop-shadow-2xl"
          />
          <m.img
            style={{ y: yFront }}
            src={alignerImage}
            alt="Smiling woman holding a clear aligner"
            width="515"
            height="484"
            loading="lazy"
            decoding="async"
            className="absolute bottom-0 left-0 w-[72%] drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Spotlight;
