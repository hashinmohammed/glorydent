import { AnimatePresence, m } from "framer-motion";
import { Navigation, Phone } from "lucide-react";
import { CLINIC } from "../data/site";
import useScrolledPast from "../hooks/useScrolledPast";
import WhatsAppIcon from "./WhatsAppIcon";

const pastHero = (viewportHeight) => viewportHeight * 0.7;

// Phones only: keeps "call" one thumb-tap away once the hero buttons scroll out of view.
const MobileCallBar = () => {
  const show = useScrolledPast(pastHero);

  return (
    <AnimatePresence>
      {show && (
        <m.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: "spring", damping: 26, stiffness: 260 }}
          className="fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-40 flex gap-2 rounded-full bg-white/95 p-2 shadow-[0_10px_40px_-10px_rgba(22,36,15,0.45)] backdrop-blur sm:hidden"
        >
          <a href={CLINIC.phoneHref} className="btn-primary flex-1 !py-3">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call to book
          </a>
          <a
            href={CLINIC.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-brand-ink/10 text-[#25D366]"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <a
            href={CLINIC.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get directions (opens Google Maps)"
            className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-brand-ink/10 text-brand"
          >
            <Navigation className="h-5 w-5" aria-hidden="true" />
          </a>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default MobileCallBar;
