export const CLINIC = {
  name: "GloryDent",
  fullName: "GloryDent Multispeciality Dental Clinic",
  tagline: "Multispeciality Dental Clinic",
  slogan: "The Complete Oral Care Solutions",
  phones: [
    { display: "+91 70343 91699", href: "tel:+917034391699" },
    { display: "+91 94972 76960", href: "tel:+919497276960" },
  ],
  phoneDisplay: "+91 70343 91699",
  phoneHref: "tel:+917034391699",
  addressLines: ["Paramount Trade Centre, near Jaram", "Mannarkkad Road, Karinkallathani", "Palakkad, Kerala 678583"],
  address: "Paramount Trade Centre, near Jaram, Mannarkkad Road, Karinkallathani, Palakkad, Kerala 678583",
  shortAddress: "Karinkallathani, Palakkad",
  hoursDays: "Monday – Saturday",
  hoursSessions: ["10:00 AM – 1:00 PM", "3:00 PM – 6:30 PM"],
  hoursShort: "Mon–Sat · 10 AM–1 PM, 3–6:30 PM",
  closed: "Sunday closed",
  whatsappHref: `https://wa.me/917034391699?text=${encodeURIComponent(
    "Hi GloryDent, I'd like to book an appointment."
  )}`,
  mapsUrl:
    "https://www.google.com/maps/place/GLORYDENT+dental+clinic/@10.9536023,76.3184573,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba7d3cda339be65:0x8b4c054859a590ad!8m2!3d10.9536023!4d76.3210322!16s%2Fg%2F11c1g5h29_",
  mapsEmbed: "https://www.google.com/maps?q=10.9536023,76.3210322&z=16&output=embed",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Specialities", href: "#specialities" },
  { label: "Why us", href: "#why" },
  { label: "Doctors", href: "#doctors" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

export const SPECIALITIES = [
  {
    key: "dsd",
    title: "Digital Smile Designing (DSD)",
    text: "State-of-the-art cosmetic smile simulations and customised makeovers to give you a natural, confident smile.",
  },
  {
    key: "implants",
    title: "Dental Implants & Implant-Supported Dentures",
    text: "Permanent, high-strength titanium implants and prosthetic solutions that restore chewing function and natural aesthetics for life.",
  },
  {
    key: "aligners",
    title: "Clear Aligners & Orthodontics",
    text: "Invisible, comfortable aligners and modern bracket systems to gently straighten teeth for adults and teens without dietary restrictions.",
  },
  {
    key: "laser",
    title: "Laser Dental Surgery",
    text: "Minimally invasive gum contouring, flap surgery and soft-tissue treatments with virtually no bleeding, minimal pain and rapid recovery.",
  },
  {
    key: "endo",
    title: "Advanced Endodontics (Root Canal Therapy)",
    text: "Precision rotary root canal treatments designed for rapid pain relief and single-sitting tooth preservation.",
  },
  {
    key: "pedo",
    title: "Pediatric Dental Care (Pedodontics)",
    text: "Gentle care designed specifically for children's developing teeth and preventive oral habits.",
  },
];

export const REASONS = [
  {
    key: "team",
    title: "Experienced multi-specialist team",
    text: "In-house dental surgeons, orthodontists, prosthodontists, implantologists and periodontists working collaboratively.",
  },
  {
    key: "sterile",
    title: "Hospital-grade sterilisation",
    text: "Affiliated with IMA IMAGE for eco-friendly biomedical waste management and strict autoclaving standards.",
  },
  {
    key: "comfort",
    title: "Advanced pain management",
    text: "Gentle techniques, digital imaging and laser surgery that prioritise patient comfort at every step.",
  },
  {
    key: "honest",
    title: "Transparent & personalised care",
    text: "Clear treatment explanations, customised and honest guidance tailored to your lifestyle and budget.",
  },
];

export const DOCTORS = [
  {
    name: "Dr. Priyas Chettiyamparambil",
    degree: "BDS",
    role: "Senior Consultant Dental Surgeon & Clinic Director",
    about:
      "With extensive experience in comprehensive general dentistry and restorative care, Dr. Priyas leads GloryDent with a commitment to patient-centred, compassionate treatment and advanced clinical standards.",
  },
  {
    name: "Dr. Afeefa Pottoor",
    degree: "BDS",
    role: "Chief Dental Surgeon",
  },
  {
    name: "Dr. Jabir Kottammal",
    degree: "MDS",
    role: "Consultant Oral & Maxillofacial Surgeon",
    about:
      "Surgical extractions, impacted wisdom teeth removal, facial trauma management and complex minor oral surgeries.",
  },
  {
    name: "Dr. Juraise M C",
    degree: "MDS",
    role: "Consultant Prosthodontist & Implantologist",
    about:
      "Advanced dental implant placement, full-mouth rehabilitations, crowns, bridges and implant-supported dentures.",
  },
  {
    name: "Dr. Shibin Mohammed",
    degree: "MDS",
    role: "Consultant Orthodontist",
    about:
      "Clear aligners, ceramic braces, self-ligating brackets and corrective jaw alignment for children and adults.",
  },
  {
    name: "Dr. Ashik Mohan",
    degree: "MDS",
    role: "Consultant Periodontist & Laser Surgeon",
    about: "Gum disease therapy, cosmetic gum contouring, bone grafting and laser-assisted periodontal treatments.",
  },
  {
    name: "Dr. Megha Kumar",
    degree: "MDS",
    role: "Consultant Pedodontist",
    about:
      "Infant and child preventive care, pulpectomy (root canal for children), fluoride treatments, pit and fissure sealants, and habit-breaking appliances for thumb sucking and tongue thrusting.",
  },
];

export const FAQS = [
  {
    q: "What is Digital Smile Designing, and how does it work?",
    a: "Digital Smile Designing (DSD) is an advanced cosmetic dentistry process that analyses your facial proportions, lips and teeth using digital photographs and scans. Before starting any treatment, we digitally simulate your ideal smile so you can preview and approve your new look before we begin procedures like veneers, whitening or alignment.",
  },
  {
    q: "Are dental implants painful to get?",
    a: "No. Implant procedures are performed under effective local anaesthesia, making the treatment virtually painless during placement. Most patients report feeling only mild pressure. Post-treatment recovery is typically smooth, with minimal discomfort easily managed with standard medication.",
  },
  {
    q: "How long does treatment with clear aligners usually take?",
    a: "Treatment time varies depending on the complexity of your alignment needs, typically ranging between 6 and 18 months. Because they are transparent, removable and custom-moulded, you can straighten your teeth discreetly while eating your favourite foods and maintaining normal brushing habits.",
  },
  {
    q: "How do you maintain hygiene and patient safety?",
    a: "GloryDent adheres to strict multi-tier sterilisation protocols, including hospital-grade autoclave cycles, disposable barrier materials, and certified biomedical waste disposal through the Indian Medical Association's IMAGE programme.",
  },
  {
    q: "How can I book an appointment, and what are your clinic hours?",
    a: "You can call us directly, message us on WhatsApp, or walk into our clinic at Paramount Trade Centre, Mannarkkad Road, Karinkallathani. We are open Monday to Saturday from 10:00 AM to 1:00 PM and 3:00 PM to 6:30 PM (closed on Sundays).",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "I was extremely nervous about my root canal treatment, but Dr. Priyas and the team made the entire procedure completely painless. The clinic is spotless and modern. Highly recommended!",
    name: "Anoop K.",
    place: "Karinkallathani",
  },
  {
    quote:
      "Getting my smile redesigned and corrected with clear aligners at GloryDent was the best decision. The results exceeded my expectations, and the consultations were clear and transparent throughout.",
    name: "Fathima S.",
    place: "Mannarkkad",
  },
  {
    quote:
      "Friendly doctors who genuinely take time to listen. We bring our entire family here for checkups and cleaning. The hygiene standards and professional care are exceptional.",
    name: "Suresh M.",
    place: "Alanallur",
  },
];
