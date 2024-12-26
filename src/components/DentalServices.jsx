import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import StatisticItem from "./StatisticItem";
import ServiceCard from "./ServiceCard";

import happyFamily from "../assets/happy.png";
import happyFamily2 from "../assets/happy2.png";
import happyFamily3 from "../assets/happy3.png";
import happyFamily4 from "../assets/happy4.png";

const DentalServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100
    });
  }, []);

  const statistics = [
    { number: "20", label: "Years Of Experience" },
    { number: "200", label: "Satisfied Clients" },
    { number: "20", label: "Certified Dentist" },
  ];

  const services = [
    {
      title: "General Dentistry",
      image: "src/assets/general.png",
      description:
        "Our general dentistry services include a range of preventative and targeted treatments essential for maintaining healthy teeth and gums.",
      tags: [
        "Fillings",
        "Examination, scale & clean",
        "Children's dentistry",
        "Gum disease",
        "Root canal therapy",
        "Wisdom teeth",
        "Mouthguards",
      ],
    },
    {
      title: "Dental Cosmetic",
      image: "src/assets/dental.png",
      description:
        "We know the first thing people notice about you is your smile. We deliver incredible cosmetic results that will have you smiling with confidence.",
      tags: ["Teeth whitening", "Crowns", "Veneers", "Implants", "Invisalign"],
    },
    {
      title: "Emergency Care",
      image: "src/assets/emergency.png",
      description:
        "We provides emergency dental services if you have knocked out a tooth or are experiencing a severe toothache, do not delay seeking medical treatment.",
      tags: [
        "Severe toothache",
        "Bleeding gums",
        "Broken teeth",
        "Sports trauma",
      ],
    },
  ];

  return (
    <div className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Welcome Section */}
        <div 
          className="text-center max-w-3xl mx-auto mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-red-600 text-sm lg:text-base uppercase tracking-wide mb-4">
            WELCOME TO GLORYDENT DENTAL CARE
          </h2>
          <h1 className="text-3xl lg:text-4xl font-serif text-gray-900 mb-4">
            Creating beautiful smiles for all ages
          </h1>
          <p className="text-gray-600">
            We are a family dental practice that has earned the trust of our
            patients through honesty, efficiency, and good communication.
          </p>
        </div>

        {/* Statistics with Images */}
        <div className="relative mb-24">
          {/* Statistics */}
          <div className="grid grid-cols-3 gap-4 lg:gap-8 max-w-2xl mx-auto mb-16">
            {statistics.map((stat, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <StatisticItem
                  number={stat.number}
                  label={stat.label}
                />
              </div>
            ))}
          </div>

          {/* Decorative Images */}
          <div className="hidden lg:block absolute inset-0 -z-10">
            <div className="relative w-full h-full">
              <img
                src={happyFamily}
                alt="Happy family"
                className="absolute -top-12 left-0 w-60 h-80 object-cover rounded-lg shadow-lg"
                data-aos="fade-right"
                data-aos-delay="200"
              />
              <img
                src={happyFamily2}
                alt="Smiling woman"
                className="absolute top-8 left-1/3 w-60 h-80 object-cover rounded-lg shadow-lg"
                data-aos="fade-down"
                data-aos-delay="400"
              />
              <img
                src={happyFamily3}
                alt="Senior patient"
                className="absolute -top-12 right-1/3 w-60 h-80 object-cover rounded-lg shadow-lg"
                data-aos="fade-down"
                data-aos-delay="600"
              />
              <img
                src={happyFamily4}
                alt="Young man smiling"
                className="absolute top-8 right-0 w-60 h-80 object-cover rounded-lg shadow-lg"
                data-aos="fade-left"
                data-aos-delay="800"
              />
              {/* Decorative Lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 1000 400"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                <path
                  d="M200,200 Q400,100 600,200 T1000,200"
                  fill="none"
                  stroke="#DC2626"
                  strokeWidth="2"
                  className="opacity-50"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="space-y-12">
          <div 
            className="text-center max-w-3xl mx-auto"
            data-aos="fade-up"
          >
            <h2 className="text-red-600 text-sm lg:text-base uppercase tracking-wide mb-4">
              OUR SERVICES
            </h2>
            <h3 className="text-3xl lg:text-4xl font-serif text-gray-900 mb-4">
              Quality dental services
            </h3>
            <p className="text-gray-600">
              Our dentists provide a range of services to all ages and needs to
              keep their teeth and gums healthy for life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
            {services.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                className="h-full"
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentalServices;