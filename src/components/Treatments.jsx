import { useState } from "react";
import { m } from "framer-motion";
import { ArrowUpRight, Siren, Sparkles, Stethoscope } from "lucide-react";
import Reveal from "./Reveal";
import general from "../assets/general.webp";
import cosmetic from "../assets/dental.webp";
import emergency from "../assets/emergency.webp";

const TREATMENTS = [
  {
    title: "General dentistry",
    icon: Stethoscope,
    image: general,
    alt: "Young girl giving her dentist a high five",
    description:
      "Preventive and everyday care that keeps teeth and gums healthy for life, with a gentle touch for nervous patients and little ones.",
    tags: [
      "Examination, scale & clean",
      "Fillings",
      "Children's dentistry",
      "Gum disease",
      "Root canal therapy",
      "Wisdom teeth",
      "Mouthguards",
    ],
  },
  {
    title: "Cosmetic dentistry",
    icon: Sparkles,
    image: cosmetic,
    alt: "Patient admiring a brighter smile",
    description:
      "The first thing people notice is your smile. We design natural-looking results that let you smile with complete confidence.",
    tags: ["Teeth whitening", "Crowns", "Veneers", "Implants", "Invisalign"],
  },
  {
    title: "Emergency care",
    icon: Siren,
    image: emergency,
    alt: "Dentist treating a patient in the chair",
    description:
      "Knocked-out tooth or severe toothache? Don't wait it out. Call us and we'll see you as quickly as we can.",
    tags: ["Severe toothache", "Bleeding gums", "Broken teeth", "Sports trauma"],
  },
];

const Treatments = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="treatments" className="bg-white py-20 sm:py-28">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Treatments</span>
            <h2 className="h-section mt-5">
              Complete care for every smile, <em className="text-brand">every age.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="max-w-md text-brand-ink/65 lg:pb-2">
            We&apos;re a family practice that has earned our patients&apos; trust through honesty, careful work
            and clear communication at every step.
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col gap-5 lg:h-[560px] lg:flex-row">
          {TREATMENTS.map((t, i) => {
            const Icon = t.icon;
            const isActive = active === i;
            return (
              <m.article
                key={t.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                tabIndex={0}
                className={`group relative flex flex-col overflow-hidden rounded-[2rem] bg-brand-ink text-white outline-none transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:ring-4 focus-visible:ring-brand/40 lg:min-w-0 ${
                  isActive ? "lg:flex-[2.4]" : "lg:flex-1"
                }`}
              >
                <div className="relative h-56 shrink-0 overflow-hidden sm:h-72 lg:absolute lg:inset-0 lg:h-auto">
                  <img
                    src={t.image}
                    alt={t.alt}
                    width="373"
                    height="220"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/60 to-brand-ink/10 transition-opacity duration-700 ${
                      isActive ? "lg:opacity-100" : "lg:opacity-90"
                    }`}
                  />
                </div>

                <div className="relative flex flex-1 flex-col p-6 sm:p-8 lg:justify-end">
                  <div className="flex items-center justify-between gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand text-white shadow-lg shadow-brand/40">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-display text-sm text-white/50">0{i + 1}</span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl sm:text-3xl">{t.title}</h3>

                  <div
                    className={`grid transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isActive ? "lg:grid-rows-[1fr] lg:opacity-100" : "lg:grid-rows-[0fr] lg:opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="mt-3 max-w-lg text-white/75">{t.description}</p>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {t.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </m.article>
            );
          })}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <a href="#contact" className="btn-ghost group">
            Not sure what you need? Ask us
            <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Treatments;
