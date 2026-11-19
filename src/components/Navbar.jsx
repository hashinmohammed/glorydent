import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Clock, MapPin, Menu, Phone, X } from "lucide-react";
import logo from "../assets/logo.webp";
import { CLINIC, NAV_LINKS, SECTION_IDS } from "../data/site";
import useScrolledPast from "../hooks/useScrolledPast";
import useActiveSection from "../hooks/useActiveSection";
import WhatsAppIcon from "./WhatsAppIcon";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolledPast(24);
  const active = useActiveSection(SECTION_IDS);
  const menuButtonRef = useRef(null);
  const drawerRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const drawer = drawerRef.current;
    const trigger = menuButtonRef.current;
    const desktop = window.matchMedia("(min-width: 1024px)");

    const close = () => setOpen(false);
    const onKey = (e) => {
      if (e.key === "Escape") return close();
      if (e.key !== "Tab" || !drawer) return;
      // Keep keyboard focus inside the open drawer.
      const focusable = drawer.querySelectorAll("a[href], button");
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.body.style.overflow = "hidden";
    drawer?.querySelector("button")?.focus();
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", close);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", close);
      trigger?.focus({ preventScroll: true });
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-brand focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <div className="hidden bg-brand-ink text-white/80 lg:block">
        <div className="container-x flex h-10 items-center justify-between text-[13px]">
          <a
            href={CLINIC.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition hover:text-white"
          >
            <MapPin className="h-3.5 w-3.5 text-brand-light" aria-hidden="true" />
            {CLINIC.shortAddress}
          </a>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-brand-light" aria-hidden="true" />
              {CLINIC.hoursShort}
            </span>
            <a href={CLINIC.phoneHref} className="flex items-center gap-2 transition hover:text-white">
              <Phone className="h-3.5 w-3.5 text-brand-light" aria-hidden="true" />
              {CLINIC.phoneDisplay}
            </a>
            <a
              href={CLINIC.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition hover:text-white"
            >
              <WhatsAppIcon className="h-3.5 w-3.5 text-[#25D366]" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-brand-ink/5 bg-white/85 shadow-[0_8px_30px_-12px_rgba(22,36,15,0.18)] backdrop-blur-xl"
            : "bg-white"
        }`}
      >
        <div className="container-x flex h-[72px] items-center justify-between gap-6">
          <a href="#home" className="flex items-center gap-3" aria-label="GloryDent home">
            <img src={logo} alt="" width="44" height="44" className="h-11 w-11 rounded-xl object-contain" />
            <span className="leading-tight">
              <span className="block font-display text-xl font-semibold tracking-tight">
                Glory<span className="text-brand">Dent</span>
              </span>
              <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-brand-ink/55">
                {CLINIC.tagline}
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`group relative rounded-full px-4 py-2 text-sm font-medium transition hover:text-brand ${
                    isActive ? "text-brand" : "text-brand-ink/75"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-4 bottom-1 h-px origin-left bg-brand transition-transform duration-300 group-hover:scale-x-100 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a href={CLINIC.phoneHref} className="btn-primary hidden !py-3 sm:inline-flex">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Book a visit
            </a>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setOpen(true)}
              className="grid h-11 w-11 place-items-center rounded-full border border-brand-ink/10 text-brand-ink transition hover:border-brand hover:text-brand lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <m.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-brand-ink/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <m.aside
              ref={drawerRef}
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col overflow-y-auto bg-white p-6 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <div className="flex items-center justify-between">
                <img src={logo} alt="GloryDent" width="48" height="48" className="h-12 w-12 object-contain" />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="grid h-11 w-11 place-items-center rounded-full border border-brand-ink/10"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <nav className="mt-10 flex flex-col" aria-label="Mobile">
                {NAV_LINKS.map((link, i) => (
                  <m.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={active === link.href.slice(1) ? "location" : undefined}
                    className="border-b border-brand-ink/5 py-4 font-display text-2xl transition hover:text-brand aria-[current=location]:text-brand"
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                  >
                    {link.label}
                  </m.a>
                ))}
              </nav>

              <div className="mt-auto space-y-3 pt-8 text-sm text-brand-ink/70">
                <a href={CLINIC.phoneHref} className="btn-primary w-full">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call {CLINIC.phoneDisplay}
                </a>
                <a href={CLINIC.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-ghost w-full">
                  <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                  WhatsApp us
                </a>
                <p className="flex items-start gap-2 pt-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  {CLINIC.address}
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-brand" aria-hidden="true" />
                  {CLINIC.hoursShort}
                </p>
              </div>
            </m.aside>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
