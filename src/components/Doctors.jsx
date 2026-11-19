import { useRef } from "react";
import { m } from "framer-motion";
import Reveal from "./Reveal";
import SwipeDots from "./SwipeDots";
import { DOCTORS } from "../data/site";

const initials = (name) => {
  const parts = name.replace(/^Dr\.?\s*/, "").split(/\s+/);
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const Monogram = ({ name, large = false }) => (
  <span
    aria-hidden="true"
    className={`grid shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-deep font-display text-white shadow-lg shadow-brand/30 ${
      large ? "h-16 w-16 text-xl sm:h-20 sm:w-20 sm:text-2xl" : "h-14 w-14 text-lg"
    }`}
  >
    {initials(name)}
  </span>
);

const DegreeTag = ({ degree, dark = false }) => (
  <span
    className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wider ${
      dark ? "bg-white/10 text-white/80" : "bg-brand-blush text-brand-deep"
    }`}
  >
    {degree}
  </span>
);

const Doctors = () => {
  const [lead, ...team] = DOCTORS;
  const rowRef = useRef(null);

  return (
    <section id="doctors" className="bg-white py-16 sm:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Doctor profiles &amp; clinical team</span>
          <h2 className="h-section mt-5">
            The specialists behind <em className="text-brand">your smile.</em>
          </h2>
        </Reveal>

        <Reveal className="mt-10 sm:mt-14">
          <article className="relative overflow-hidden rounded-[1.75rem] bg-brand-ink p-6 text-white sm:rounded-[2rem] sm:p-10 lg:flex lg:items-center lg:gap-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/30 blur-[90px]"
            />
            <div className="relative flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5 lg:w-[42%] lg:shrink-0">
              <Monogram name={lead.name} large />
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-[1.4rem] max-sm:leading-tight sm:text-3xl">{lead.name}</h3>
                  <DegreeTag degree={lead.degree} dark />
                </div>
                <p className="mt-1.5 text-sm font-medium text-brand-light">{lead.role}</p>
              </div>
            </div>
            <p className="relative mt-5 text-sm leading-relaxed text-white/75 sm:mt-6 sm:text-base lg:mt-0 lg:border-l lg:border-white/10 lg:pl-10">
              {lead.about}
            </p>
          </article>
        </Reveal>

        <ul ref={rowRef} className="swipe-row mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((d, i) => (
            <m.li
              key={d.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="swipe-item group flex flex-col rounded-[1.75rem] border border-brand-ink/5 bg-brand-cream p-6 transition sm:rounded-[2rem] sm:p-7 duration-300 hover:-translate-y-1 hover:border-brand/20 hover:bg-white hover:shadow-[0_24px_50px_-24px_rgba(74,122,46,0.35)]"
            >
              <div className="flex items-center gap-4">
                <Monogram name={d.name} />
                <div className="min-w-0">
                  <h3 className="font-display text-xl leading-tight">{d.name}</h3>
                  <div className="mt-1.5">
                    <DegreeTag degree={d.degree} />
                  </div>
                </div>
              </div>
              <p className="mt-5 text-sm font-semibold text-brand">{d.role}</p>
              {d.about && <p className="mt-2 text-sm leading-relaxed text-brand-ink/65">{d.about}</p>}
            </m.li>
          ))}
        </ul>
        <SwipeDots targetRef={rowRef} count={team.length} />
      </div>
    </section>
  );
};

export default Doctors;
