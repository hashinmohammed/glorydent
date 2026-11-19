import { HeartHandshake, MessagesSquare, ShieldCheck, Users } from "lucide-react";
import Reveal from "./Reveal";
import clinicImage from "../assets/consultation.webp";
import { REASONS } from "../data/site";

const ICONS = { team: Users, sterile: ShieldCheck, comfort: HeartHandshake, honest: MessagesSquare };

const WhyUs = () => (
  <section id="why" className="relative overflow-hidden bg-brand-cream py-16 sm:py-28">
    <div className="container-x grid items-center gap-12 sm:gap-14 lg:grid-cols-2 lg:gap-20">
      <Reveal className="relative order-2 lg:order-1">
        <div
          aria-hidden="true"
          className="absolute -left-5 -top-5 h-40 w-40 rounded-3xl bg-[radial-gradient(#4A7A2E_1.6px,transparent_1.6px)] [background-size:16px_16px] opacity-35 sm:-left-8 sm:-top-8 sm:h-52 sm:w-52"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-6 -left-6 h-44 w-44 rounded-full bg-brand/15 blur-3xl"
        />
        <div className="relative z-10 overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(22,36,15,0.5)]">
          <img
            src={clinicImage}
            alt="Dentist explaining a patient's dental X-ray on screen"
            width="1800"
            height="1350"
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full object-cover lg:aspect-[4/5]"
          />
          {/* Cool grey concrete wall: a multiply wash warms it into the sage palette. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-bl from-[#D3E3C4] via-[#EAF2E3] via-40% to-white to-75% mix-blend-multiply"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-brand-deep/50 via-brand-deep/5 via-40% to-transparent"
          />
        </div>
        <div className="absolute -bottom-8 right-3 z-20 max-w-[200px] rounded-3xl surface-brand p-5 text-white shadow-2xl shadow-brand/30 sm:right-8 sm:max-w-[240px] sm:p-6">
          <p className="font-display text-xl italic leading-snug sm:text-2xl">“Your smile is our pride.”</p>
          <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/70">The GloryDent promise</p>
        </div>
      </Reveal>

      <div className="order-1 lg:order-2">
        <Reveal>
          <span className="eyebrow">Why GloryDent</span>
          <h2 className="h-section mt-5">
            Specialist care that feels <em className="text-brand">calm</em>, not clinical.
          </h2>
          <p className="mt-5 max-w-lg text-brand-ink/65">
            A collaborative team of specialists, hospital-grade hygiene and honest advice, all focused on
            healthy, beautiful smiles for the whole family.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
          {REASONS.map((r, i) => {
            const Icon = ICONS[r.key];
            return (
              <Reveal key={r.title} delay={i * 0.08}>
                <div className="group flex h-full gap-4 rounded-3xl border border-brand-ink/5 bg-white p-5 transition duration-300 sm:block sm:p-6 hover:-translate-y-1 hover:border-brand/20 hover:shadow-[0_20px_40px_-20px_rgba(74,122,46,0.35)]">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-blush text-brand transition duration-300 group-hover:bg-brand group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold sm:mt-4">{r.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-brand-ink/60 sm:mt-1.5">{r.text}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default WhyUs;
