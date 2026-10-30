import logo from "../assets/logo.webp";
import { CLINIC, NAV_LINKS } from "../data/site";

const Footer = () => (
  <footer className="bg-brand-ink pb-28 pt-16 text-white/70 sm:pb-10">
    <div className="container-x">
      <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <a href="#home" className="inline-flex items-center gap-3">
            <img src={logo} alt="" width="48" height="49" loading="lazy" className="h-12 w-12 rounded-xl bg-white object-contain p-1" />
            <span className="font-display text-2xl text-white">
              Glory<span className="text-brand">Dent</span>
            </span>
          </a>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            {CLINIC.tagline}. Gentle, modern dental care for the whole family in Karinkallathani.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white">Explore</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition hover:text-brand">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white">Contact</p>
          <address className="not-italic">
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={CLINIC.phoneHref} className="transition hover:text-brand">
                  {CLINIC.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={CLINIC.whatsappHref} target="_blank" rel="noopener noreferrer" className="transition hover:text-brand">
                  WhatsApp {CLINIC.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={CLINIC.mapsUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-brand">
                  {CLINIC.address}
                </a>
              </li>
              <li>{CLINIC.hours}</li>
            </ul>
          </address>
        </div>
      </div>

      <p className="pt-8 text-xs text-white/45">
        © <span suppressHydrationWarning>{new Date().getFullYear()}</span> GloryDent Dental Care. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
