import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-red-700 text-white py-4 px-4 md:px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-sm text-center md:text-left">
          © {currentYear} GLORYDENT Dental Care. All rights reserved.
        </div>
        
        <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
          <a 
            href="#" 
            className="hover:text-gray-200 transition-colors transform hover:scale-110 duration-200"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
          <a 
            href="#" 
            className="hover:text-gray-200 transition-colors transform hover:scale-110 duration-200"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
          <a 
            href="#" 
            className="hover:text-gray-200 transition-colors transform hover:scale-110 duration-200"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a 
            href="#" 
            className="hover:text-gray-200 transition-colors transform hover:scale-110 duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="#" 
            className="hover:text-gray-200 transition-colors transform hover:scale-110 duration-200"
            aria-label="YouTube"
          >
            <Youtube size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;