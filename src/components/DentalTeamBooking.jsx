import { Phone, Mail, MapPin } from 'lucide-react';
import DentistCard from './DentistCard';
import ContactMethod from './ContactMethod';

const DentalTeamBooking = () => {
    const dentists = [
    {
      name: "Maria",
      designation: "BDS (GENERAL DENTIST)",
      description: "Quisque sed ex sed risus pellentesque pellentesque id nec purusestibulum",
      image: "src/assets/expert1.png"
    },
    {
      name: "Darla",
      designation: "BDS (GENERAL DENTIST)",
      description: "Quisque sed ex sed risus pellentesque pellentesque id nec purusestibulum",
      image: "src/assets/expert2.png"

    },
    {
      name: "Josh",
      designation: "BDS (GENERAL DENTIST)",
      description: "Quisque sed ex sed risus pellentesque pellentesque id nec purusestibulum",
      image: "src/assets/expert3.png"

    }
  ];

  return (
    <div className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Team Section */}
        <div className="text-center mb-12">
          <h2 className="text-red-600 text-sm uppercase tracking-wide mb-4">
            THE PROFESSIONAL BEHIND YOUR SMILE
          </h2>
          <h3 className="text-3xl lg:text-4xl font-serif mb-4">
            Meet your neighborhood dentists
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are excited to be your neighborhood dentist and take care of your
            family&apos;s dental needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {dentists.map((dentist, index) => (
            <DentistCard key={index} {...dentist} />
          ))}
        </div>

        {/* Insurance Logos */}
        {/* <div className="py-12 border-t border-b">
          <p className="text-center text-gray-600 mb-8">We accept your insurance</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex justify-center">
                <img
                  src="/api/placeholder/120/40"
                  alt={`Insurance ${i + 1}`}
                  className="h-8 w-auto grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div> */}

        {/* Booking Section */}
        <div className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif mb-4">
              Book Appointment
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Schedule your next dental appointment effortlessly, We will contact you to confirm
              your request or change the time or day if unavailable.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <ContactMethod
              icon={<Phone className="w-6 h-6 text-red-600" />}
              title="Give us a call"
              description="Lorem ipsum dolor sit amet, ut adipisim pellentesque"
              contact="(12) 345-67890"
              link="tel:(12)345-67890"
            />
            <ContactMethod
              icon={<Mail className="w-6 h-6 text-red-600" />}
              title="Send us an email"
              description="Lorem ipsum dolor sit amet, ut adipisim pellentesque"
              contact="contact@example.com"
              link="mailto:contact@example.com"
            />
            <ContactMethod
              icon={<MapPin className="w-6 h-6 text-red-600" />}
              title="Visit to clinic"
              description="Lorem ipsum dolor sit amet, ut adipisim pellentesque"
              contact="Karinkallathani"
              link="https://www.google.com/maps/place/GLORYDENT+dental+clinic/@10.9536023,76.3184573,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba7d3cda339be65:0x8b4c054859a590ad!8m2!3d10.9536023!4d76.3210322!16s%2Fg%2F11c1g5h29_?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
            />
          </div>

          {/* Booking Form */}
          {/* <form className="max-w-2xl mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="(123) 456 7890"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500">
                  <option>Ex. Dental Implants</option>
                  <option>General Checkup</option>
                  <option>Teeth Cleaning</option>
                  <option>Emergency Care</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Please describe what service you are interested in"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition-colors"
            >
              Submit
            </button>
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default DentalTeamBooking;