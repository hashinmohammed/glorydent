import { ArrowUpRight, Clock, MapPin, Navigation, Phone } from "lucide-react";
import Reveal from "./Reveal";
import WhatsAppIcon from "./WhatsAppIcon";
import { CLINIC } from "../data/site";

const DETAILS = [
  { icon: Phone, label: "Call us", value: CLINIC.phoneDisplay, href: CLINIC.phoneHref },
  { icon: WhatsAppIcon, label: "WhatsApp", value: "Message us to book", href: CLINIC.whatsappHref, external: true },
  { icon: MapPin, label: "Visit us", value: CLINIC.address, href: CLINIC.mapsUrl, external: true },
  { icon: Clock, label: "Open hours", value: CLINIC.hours },
];

const Contact = () => (
  <section id="contact" className="bg-brand-cream py-20 sm:py-28">
    <div className="container-x">
      <div className="overflow-hidden rounded-[2.5rem] bg-brand text-white shadow-[0_50px_100px_-40px_rgba(173,14,21,0.6)]">
        <div className="grid lg:grid-cols-[1.1fr_1fr]">
          <div className="relative p-8 sm:p-12 lg:p-16">
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 text-brand-deep"
              viewBox="0 0 200 200"
              fill="none"
            >
              <path d="M20 100 C 20 20, 180 20, 180 100 S 60 200, 100 140" stroke="currentColor" strokeWidth="28" strokeLinecap="round" />
            </svg>

            <Reveal className="relative">
              <span className="eyebrow !text-white/80 before:!bg-white/50">Book an appointment</span>
              <h2 className="h-section mt-5">Ready when your smile is.</h2>
              <p className="mt-5 max-w-md text-white/80">
                Call or WhatsApp to book your visit. If your preferred time isn&apos;t free, we&apos;ll suggest the
                closest one that is.
              </p>
            </Reveal>

            <ul className="relative mt-10 space-y-3">
              {DETAILS.map((d, i) => {
                const Icon = d.icon;
                const body = (
                  <>
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/15">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs uppercase tracking-[0.16em] text-white/65">{d.label}</span>
                      <span className="mt-0.5 block font-semibold">{d.value}</span>
                    </span>
                    {d.href && (
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-white/60 transition group-hover:rotate-45 group-hover:text-white" />
                    )}
                  </>
                );
                return (
                  <Reveal as="li" key={d.label} delay={0.1 + i * 0.08}>
                    {d.href ? (
                      <a
                        href={d.href}
                        target={d.external ? "_blank" : undefined}
                        rel={d.external ? "noopener noreferrer" : undefined}
                        className="group flex items-center gap-4 rounded-2xl bg-white/10 p-4 transition hover:bg-white/20"
                      >
                        {body}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4">{body}</div>
                    )}
                  </Reveal>
                );
              })}
            </ul>

            <Reveal delay={0.35} className="relative mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={CLINIC.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-brand shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                <Phone className="h-4 w-4" />
                Call {CLINIC.phoneDisplay}
              </a>
              <a
                href={CLINIC.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-4 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={CLINIC.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-4 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                <Navigation className="h-4 w-4" />
                Get directions
              </a>
            </Reveal>
          </div>

          <div className="relative min-h-[320px] bg-brand-deep lg:min-h-full">
            <iframe
              title="GloryDent on Google Maps"
              src={CLINIC.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0 grayscale-[30%]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
