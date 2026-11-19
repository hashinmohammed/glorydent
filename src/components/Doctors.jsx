import { m } from "framer-motion";
import Reveal from "./Reveal";
import { DOCTORS } from "../data/site";

const initials = (name) => {
  const parts = name.replace(/^Dr\.?\s*/, "").split(/\s+/);
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const Monogram = ({ name, large = false }) => (
  <span
    aria-hidden="true"
    className={`grid shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-deep font-display text-white shadow-lg shadow-brand/30 ${
      large ? "h-20 w-20 text-2xl" : "h-14 w-14 text-lg"
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

  return (
    <section id="doctors" className="bg-white py-20 sm:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Doctor profiles &amp; clinical team</span>
          <h2 className="h-section mt-5">
            The specialists behind <em className="text-brand">your smile.</em>
          </h2>
        </Reveal>

        <Reveal className="mt-14">
          <article className="relative overflow-hidden rounded-[2rem] bg-brand-ink p-7 text-white sm:p-10 lg:flex lg:items-center lg:gap-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/30 blur-[90px]"
            />
            <div className="relative flex items-center gap-5 lg:w-[42%] lg:shrink-0">
              <Monogram name={lead.name} large />
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-2xl sm:text-3xl">{lead.name}</h3>
                  <DegreeTag degree={lead.degree} dark />
                </div>
                <p className="mt-1.5 text-sm font-medium text-brand-light">{lead.role}</p>
              </div>
            </div>
            <p className="relative mt-6 leading-relaxed text-white/75 lg:mt-0 lg:border-l lg:border-white/10 lg:pl-10">
              {lead.about}
            </p>
          </article>
        </Reveal>

        <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((d, i) => (
            <m.li
              key={d.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col rounded-[2rem] border border-brand-ink/5 bg-brand-cream p-7 transition duration-300 hover:-translate-y-1 hover:border-brand/20 hover:bg-white hover:shadow-[0_24px_50px_-24px_rgba(74,122,46,0.35)]"
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
      </div>
    </section>
  );
};

export default Doctors;
