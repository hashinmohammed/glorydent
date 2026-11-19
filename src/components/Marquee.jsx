const ITEMS = [
  "Digital Smile Designing",
  "Dental implants",
  "Clear aligners",
  "Braces",
  "Laser dental surgery",
  "Root canal therapy",
  "Children's dentistry",
  "Crowns & bridges",
  "Gum care",
  "Wisdom teeth",
];

const Marquee = () => (
  <div className="overflow-hidden border-y border-brand-deep bg-brand py-5 text-white" aria-hidden="true">
    <div className="flex w-max animate-marquee">
      {[...ITEMS, ...ITEMS].map((item, i) => (
        <span key={i} className="flex items-center whitespace-nowrap font-display text-xl italic sm:text-2xl">
          <span className="px-6">{item}</span>
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white/70">
            <path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.7 4.5c2.1 0 3.6 1.2 5.3 3 1.7-1.8 3.2-3 5.3-3 3.7 0 5.8 3.9 4.3 7.3C19.5 16.4 12 21 12 21z" />
          </svg>
        </span>
      ))}
    </div>
  </div>
);

export default Marquee;
