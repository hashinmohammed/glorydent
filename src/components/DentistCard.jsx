import React from 'react';
// import { Phone, Mail, MapPin } from 'lucide-react';

const DentistCard = ({ name, designation, description, image }) => (
  <div data-aos="zoom-out-up" className="bg-white rounded-lg p-4 border-2 border-red-100 hover:border-red-500 transition-colors">
    <div className="aspect-w-3 aspect-h-4 mb-4">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
    <div className="text-center">
      <h3 className="text-xl font-serif">{name}</h3>
      <p className="text-red-600 text-sm mt-1">{designation}</p>
      <p className="text-gray-600 mt-2 text-sm">{description}</p>
    </div>
  </div>
);
export default DentistCard;