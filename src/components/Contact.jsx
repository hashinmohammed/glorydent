import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import Reveal from "./Reveal";
import WhatsAppIcon from "./WhatsAppIcon";
import { CLINIC } from "../data/site";

const SESSION_LABELS = ["Morning", "Evening"];

const DetailRow = ({ icon: Icon, title, children }) => (
  <div className="flex gap-4 py-6 first:pt-0 last:pb-0">
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-blush text-brand">
      <Icon className="h-5 w-5" aria-hidden="true" />
    </span>
    <div className="min-w-0 flex-1">
      <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-ink/50">{title}</h3>
      <div className="mt-2">{children}</div>
    </div>
  </div>
);

const Contact = () => (
  <section id="contact" className="bg-brand-cream py-20 sm:py-28">
    <div className="container-x">
      <Reveal className="overflow-hidden rounded-[2.5rem] bg-white shadow-[0_50px_100px_-50px_rgba(22,36,15,0.45)] ring-1 ring-brand-ink/5">
        <div className="grid lg:grid-cols-2 xl:grid-cols-[1fr_1.05fr_1.15fr]">
          {/* Call to action */}
          <div className="relative flex flex-col overflow-hidden bg-brand p-8 text-white sm:p-10">
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 text-brand-deep"
              viewBox="0 0 200 200"
              fill="none"
            >
              <path d="M20 100 C 20 20, 180 20, 180 100 S 60 200, 100 140" stroke="currentColor" strokeWidth="28" strokeLinecap="round" />
            </svg>

            <div className="relative">
              <span className="eyebrow !text-white/80 before:!bg-white/50">Book an appointment</span>
              <h2 className="mt-5 font-display text-3xl font-medium leading-[1.1] sm:text-4xl">
                Ready when your smile is.
              </h2>
              <p className="mt-4 text-white/80">
                Call, WhatsApp or walk in. If your preferred time isn&apos;t free, we&apos;ll suggest the closest one
                that is.
              </p>
            </div>

            <div className="relative mt-8 flex flex-col gap-3 lg:mt-auto lg:pt-10">
              <a
                href={CLINIC.phoneHref}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {CLINIC.phoneDisplay}
              </a>
              <a
                href={CLINIC.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Message on WhatsApp
              </a>
            </div>
          </div>

          {/* Details */}
          <div className="divide-y divide-brand-ink/10 p-8 sm:p-10">
            <DetailRow icon={Phone} title="Phone">
              <ul className="space-y-1">
                {CLINIC.phones.map((p) => (
                  <li key={p.href}>
                    <a
                      href={p.href}
                      className="whitespace-nowrap text-lg font-semibold tabular-nums transition hover:text-brand"
                    >
                      {p.display}
                    </a>
                  </li>
                ))}
              </ul>
            </DetailRow>

            <DetailRow icon={MapPin} title="Address">
              <address className="not-italic leading-relaxed text-brand-ink/80">
                <span className="font-semibold text-brand-ink">{CLINIC.fullName}</span>
                {CLINIC.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <a
                href={CLINIC.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
              >
                Get directions
                <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" aria-hidden="true" />
              </a>
            </DetailRow>

            <DetailRow icon={Clock} title={`Hours · ${CLINIC.hoursDays}`}>
              <dl className="space-y-1.5">
                {CLINIC.hoursSessions.map((session, i) => (
                  <div key={session} className="flex items-baseline justify-between gap-4">
                    <dt className="text-brand-ink/60">{SESSION_LABELS[i]}</dt>
                    <dd className="whitespace-nowrap font-semibold tabular-nums">{session}</dd>
                  </div>
                ))}
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-brand-ink/60">Sunday</dt>
                  <dd className="rounded-full bg-brand-ink/5 px-2.5 py-0.5 text-xs font-semibold text-brand-ink/60">
                    Closed
                  </dd>
                </div>
              </dl>
            </DetailRow>
          </div>

          {/* Map */}
          <div className="relative min-h-[320px] bg-brand-blush lg:col-span-2 lg:min-h-[380px] xl:col-span-1 xl:min-h-full">
            <iframe
              title="GloryDent on Google Maps"
              src={CLINIC.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Contact;
