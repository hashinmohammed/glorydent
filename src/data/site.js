export const CLINIC = {
  name: "GloryDent",
  tagline: "Dentistry and Orthodontics",
  phoneDisplay: "+91 70343 91699",
  phoneHref: "tel:+917034391699",
  address: "PMH Complex, Karinkallathani, Kerala 678583",
  hours: "8:00 AM – 6:00 PM",
  whatsappHref: `https://wa.me/917034391699?text=${encodeURIComponent(
    "Hi GloryDent, I'd like to book an appointment."
  )}`,
  mapsUrl:
    "https://www.google.com/maps/place/GLORYDENT+dental+clinic/@10.9536023,76.3184573,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba7d3cda339be65:0x8b4c054859a590ad!8m2!3d10.9536023!4d76.3210322!16s%2Fg%2F11c1g5h29_",
  mapsEmbed: "https://www.google.com/maps?q=10.9536023,76.3210322&z=16&output=embed",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Treatments", href: "#treatments" },
  { label: "Why us", href: "#why" },
  { label: "Your visit", href: "#visit" },
  { label: "Contact", href: "#contact" },
];

export const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));
