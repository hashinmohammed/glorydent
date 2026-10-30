import { Baby, HeartHandshake, MessagesSquare, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";
import clinicImage from "../assets/image3.webp";

const REASONS = [
  {
    icon: HeartHandshake,
    title: "Gentle, unhurried care",
    text: "We take time to listen, explain and make sure you're comfortable before anything begins.",
  },
  {
    icon: ShieldCheck,
    title: "Strict sterilisation",
    text: "Instruments are cleaned and sterilised for every single patient. No shortcuts, ever.",
  },
  {
    icon: Baby,
    title: "Family friendly",
    text: "From a toddler's first visit to grandparents' dentures, the whole family is in good hands.",
  },
  {
    icon: MessagesSquare,
    title: "Clear, honest advice",
    text: "You'll know your options and what they involve before you decide. No pressure, no surprises.",
  },
];

const WhyUs = () => (
  <section id="why" className="relative overflow-hidden bg-brand-cream py-20 sm:py-28">
    <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
      <Reveal className="relative order-2 lg:order-1">
        <div className="relative overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(43,7,9,0.5)]">
          <img
            src={clinicImage}
            alt="Sterilised instruments neatly organised in the clinic"
            width="1400"
            height="933"
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full object-cover lg:aspect-[4/5]"
          />
        </div>
        <div className="absolute -bottom-8 right-4 max-w-[240px] rounded-3xl bg-brand p-6 text-white shadow-2xl shadow-brand/30 sm:right-8">
          <p className="font-display text-2xl italic leading-snug">“Your smile is our pride.”</p>
          <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/70">The GloryDent promise</p>
        </div>
      </Reveal>

      <div className="order-1 lg:order-2">
        <Reveal>
          <span className="eyebrow">Why GloryDent</span>
          <h2 className="h-section mt-5">
            A clinic that feels <em className="text-brand">calm</em>, not clinical.
          </h2>
          <p className="mt-5 max-w-lg text-brand-ink/65">
            Our experience and modern techniques come together with one goal: healthy, beautiful smiles
            and patients who actually look forward to their next visit.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {REASONS.map((r, i) => {
            const Icon = r.icon;
            return (
              <Reveal key={r.title} delay={i * 0.08}>
                <div className="group h-full rounded-3xl border border-brand-ink/5 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/20 hover:shadow-[0_20px_40px_-20px_rgba(227,30,36,0.35)]">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-blush text-brand transition duration-300 group-hover:bg-brand group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-semibold">{r.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-brand-ink/60">{r.text}</p>
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
