import { useId, useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";
import { CLINIC, FAQS } from "../data/site";

// Emitted from the same data as the accordion so Google's FAQ markup never drifts from the page.
const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

const Faq = () => {
  const [open, setOpen] = useState(0);
  const baseId = useId();

  return (
    <section id="faq" className="bg-white py-16 sm:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <div className="container-x grid gap-8 sm:gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <span className="eyebrow">Frequently asked questions</span>
          <h2 className="h-section mt-5">
            Questions, <em className="text-brand">answered.</em>
          </h2>
          <p className="mt-5 max-w-sm text-brand-ink/65">
            Can&apos;t find what you&apos;re looking for? Call us on{" "}
            <a href={CLINIC.phoneHref} className="font-semibold text-brand underline-offset-4 hover:underline">
              {CLINIC.phoneDisplay}
            </a>{" "}
            and we&apos;ll be happy to help.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="divide-y divide-brand-ink/10 border-y border-brand-ink/10">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              const panelId = `${baseId}-panel-${i}`;
              const buttonId = `${baseId}-button-${i}`;
              return (
                <li key={f.q}>
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="group flex w-full items-start justify-between gap-4 py-5 text-left sm:gap-6 sm:py-6 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand/20"
                    >
                      <span
                        className={`font-display text-[1.05rem] leading-snug transition sm:text-xl ${
                          isOpen ? "text-brand" : "group-hover:text-brand"
                        }`}
                      >
                        {f.q}
                      </span>
                      <span
                        className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full transition duration-300 ${
                          isOpen ? "rotate-45 bg-brand text-white" : "bg-brand-blush text-brand"
                        }`}
                      >
                        <Plus className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    aria-hidden={!isOpen}
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-5 text-[15px] leading-relaxed text-brand-ink/70 sm:pb-6 sm:pr-12 sm:text-base">{f.a}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default Faq;
