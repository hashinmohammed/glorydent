import { m } from "framer-motion";
import { Activity, Anchor, Baby, Phone, ScanFace, Smile, Zap } from "lucide-react";
import Reveal from "./Reveal";
import WhatsAppIcon from "./WhatsAppIcon";
import cosmeticImage from "../assets/dental.webp";
import kidsImage from "../assets/general.webp";
import { CLINIC, SPECIALITIES } from "../data/site";

const ICONS = { dsd: ScanFace, implants: Anchor, aligners: Smile, laser: Zap, endo: Activity, pedo: Baby };

// Featured specialities get a photo and a wider tile.
const FEATURED = {
  dsd: { image: cosmeticImage, alt: "Patient admiring her redesigned smile" },
  pedo: { image: kidsImage, alt: "Young girl giving her dentist a high five" },
};

const tile = (i) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] },
});

const Specialities = () => (
  <section id="specialities" className="bg-white py-20 sm:py-28">
    <div className="container-x">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Specialities &amp; advanced treatments</span>
          <h2 className="h-section mt-5">
            Every speciality, <em className="text-brand">under one roof.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="max-w-md text-brand-ink/65 lg:pb-2">
          From digital smile design to implants, aligners and laser surgery, each treatment is led by a
          specialist in that field.
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SPECIALITIES.map((s, i) => {
          const Icon = ICONS[s.key];
          const featured = FEATURED[s.key];
          const number = String(i + 1).padStart(2, "0");

          if (featured) {
            return (
              <m.article
                key={s.key}
                {...tile(i)}
                className="group grid overflow-hidden rounded-[2rem] bg-brand-ink text-white md:col-span-2 sm:grid-cols-2"
              >
                <div className="flex flex-col p-7 sm:p-9">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand shadow-lg shadow-brand/40">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-display text-sm text-white/45">{number}</span>
                  </div>
                  <h3 className="mt-8 font-display text-2xl leading-snug sm:text-[1.7rem]">{s.title}</h3>
                  <p className="mt-3 text-white/70">{s.text}</p>
                </div>
                <div className="relative min-h-[220px] overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.alt}
                    width="373"
                    height="220"
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-ink via-brand-ink/10 to-transparent max-sm:bg-gradient-to-b" />
                </div>
              </m.article>
            );
          }

          return (
            <m.article
              key={s.key}
              {...tile(i)}
              className="group flex flex-col rounded-[2rem] border border-brand-ink/5 bg-brand-cream p-7 transition duration-300 hover:-translate-y-1 hover:border-brand/20 hover:bg-white hover:shadow-[0_24px_50px_-24px_rgba(74,122,46,0.35)] sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-brand shadow-sm transition duration-300 group-hover:bg-brand group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-display text-sm text-brand-ink/35">{number}</span>
              </div>
              <h3 className="mt-8 font-display text-xl leading-snug sm:text-[1.4rem]">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-ink/65">{s.text}</p>
            </m.article>
          );
        })}

        <m.aside
          {...tile(SPECIALITIES.length)}
          className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-brand p-7 text-white sm:p-8 md:col-span-2 lg:col-span-1"
        >
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 text-brand-deep"
            viewBox="0 0 200 200"
            fill="none"
          >
            <path d="M20 100 C 20 20, 180 20, 180 100 S 60 200, 100 140" stroke="currentColor" strokeWidth="28" strokeLinecap="round" />
          </svg>
          <div className="relative">
            <p className="font-display text-2xl leading-snug">Not sure which treatment you need?</p>
            <p className="mt-3 text-sm text-white/80">Tell us what&apos;s bothering you and we&apos;ll guide you to the right specialist.</p>
          </div>
          <div className="relative mt-8 flex flex-col gap-2.5">
            <a
              href={CLINIC.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {CLINIC.phoneDisplay}
            </a>
            <a
              href={CLINIC.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp us
            </a>
          </div>
        </m.aside>
      </div>
    </div>
  </section>
);

export default Specialities;
