import { m } from "framer-motion";
import { ArrowUpRight, Clock, MapPin, Phone, ScanFace, ShieldCheck } from "lucide-react";
import heroImage from "../assets/Image.webp";
import familyImage from "../assets/image2.webp";
import { CLINIC } from "../data/site";

const ease = [0.22, 1, 0.36, 1];

const rise = (delay) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
});

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-brand-cream">
      {/* Ribbon echoing the logo, drawn in on load */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-full w-[900px] opacity-[0.14] lg:right-0"
        viewBox="0 0 900 800"
        fill="none"
      >
        <m.path
          d="M40 120 C 260 -20, 520 60, 600 240 S 860 520, 700 700 S 300 760, 260 560"
          stroke="#4A7A2E"
          strokeWidth="70"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.4, ease }}
        />
      </svg>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand/10 blur-3xl"
      />

      <div className="container-x relative grid items-center gap-14 pb-20 pt-12 sm:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-28 lg:pt-20">
        <div>
          <m.span {...rise(0.05)} className="eyebrow">
            {CLINIC.slogan}
          </m.span>

          <m.h1
            {...rise(0.15)}
            className="mt-6 font-display text-[2.6rem] font-medium leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.4rem]"
          >
            Where your smile{" "}
            <span className="relative inline-block italic text-brand">
              shines brightest.
              <svg
                aria-hidden="true"
                className="absolute -bottom-3 left-0 w-full"
                viewBox="0 0 300 20"
                preserveAspectRatio="none"
              >
                <m.path
                  d="M4 14 C 80 2, 200 2, 296 12"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.1, delay: 0.9, ease }}
                />
              </svg>
            </span>
          </m.h1>

          <m.p {...rise(0.3)} className="mt-8 max-w-xl text-lg leading-relaxed text-brand-ink/70">
            Comprehensive, gentle and modern dental care for the entire family, from a
            multi-specialist team in Karinkallathani.
          </m.p>

          <m.div {...rise(0.42)} className="mt-9 grid gap-3 sm:flex sm:flex-wrap sm:items-center">
            <a href={CLINIC.phoneHref} className="btn-primary">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Book an Appointment
            </a>
            <a
              href="#specialities"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand-ink shadow-sm ring-1 ring-brand-ink/10 transition hover:-translate-y-0.5 hover:text-brand hover:shadow-md hover:ring-brand/30 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand/20"
            >
              Explore Our Specialities
              <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" aria-hidden="true" />
            </a>
          </m.div>

          <m.ul
            {...rise(0.55)}
            className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-brand-ink/60"
          >
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-brand" aria-hidden="true" />
              {CLINIC.hoursShort}
            </li>
            <li aria-hidden="true" className="h-1 w-1 rounded-full bg-brand-ink/25" />
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand" aria-hidden="true" />
              {CLINIC.shortAddress}
            </li>
          </m.ul>
        </div>

        <div className="relative mx-auto w-full max-w-[520px]">
          <m.div
            aria-hidden="true"
            initial={{ opacity: 0, x: -12, y: 12 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease }}
            className="absolute -left-4 top-4 bottom-[-1rem] right-4 rounded-t-[999px] rounded-b-[2.75rem] border-2 border-brand/30 sm:-left-5 sm:top-5"
          />
          <m.div
            initial={{ scale: 0.94, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease }}
            className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2.5rem] bg-brand-blush shadow-[0_40px_80px_-30px_rgba(53,90,30,0.45)]"
          >
            <img
              src={heroImage}
              alt="Smiling patient relaxing after her dental visit"
              width="703"
              height="700"
              className="h-full w-full object-cover"
            />
            {/* Stock photo has a cool lavender wall; a multiply wash pulls it into the sage palette. */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-b from-[#D9E7CC] via-[#EEF4E8] via-45% to-white to-70% mix-blend-multiply"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-brand-deep/30 via-transparent to-transparent" />
          </m.div>

          <m.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.7, ease }}
            className="absolute -bottom-6 -left-4 h-32 w-32 overflow-hidden rounded-full border-[6px] border-brand-cream shadow-xl sm:-left-10 sm:h-40 sm:w-40"
          >
            <img
              src={familyImage}
              alt="Mother and daughter brushing their teeth together"
              width="1400"
              height="935"
              className="h-full w-full object-cover"
              decoding="async"
            />
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease }}
            className="absolute -right-2 top-10 sm:-right-8"
          >
            <m.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-3 rounded-2xl bg-white/95 p-3 pr-5 shadow-xl backdrop-blur"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand text-white">
                <ScanFace className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-sm leading-tight">
                <span className="block font-semibold">Digital Smile Designing</span>
                <span className="text-brand-ink/55">Preview your new smile</span>
              </span>
            </m.div>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease }}
            className="absolute -right-2 bottom-16 sm:-right-6"
          >
            <m.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-3 rounded-2xl bg-brand-ink p-3 pr-5 text-white shadow-xl"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-brand-light">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-sm leading-tight">
                <span className="block font-semibold">Hospital-grade sterilisation</span>
                <span className="text-white/60">Autoclaved, every time</span>
              </span>
            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
