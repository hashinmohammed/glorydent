import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { MapPin, Clock, Phone, Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpg'
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Top bar info
  const contactInfo = [
    { 
      icon: <MapPin className="w-4 h-4" />, 
      text: "PMH complex, Karinkallathani, Kerala 678583",
      href: "https://www.google.com/maps/place/GLORYDENT+dental+clinic/@10.9536023,76.3184573,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba7d3cda339be65:0x8b4c054859a590ad!8m2!3d10.9536023!4d76.3210322!16s%2Fg%2F11c1g5h29_?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" 
    },
    { 
      icon: <Clock className="w-4 h-4" />, 
      text: "Office Hour: 08:00am - 6:00pm" 
    },
    { 
      icon: <Phone className="w-4 h-4" />, 
      text: "07034391699",
      href: "tel:7034391699" 
    }
  ];

  // Navigation links
  const navLinks = [
    { text: "Home", href: "#home" },
    { text: "Services", href: "#services" },
    { text: "About Us", href: "#about" },
    { text: "Contact", href: "#contact" }
  ];

  return (
    <div id='home'   className="w-full">
      {/* Top Bar */}
      <div className="hidden lg:block bg-gray-100 py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-end gap-8">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="flex items-center text-sm text-gray-600 hover:text-red-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-red-500 mr-2">{info.icon}</span>
                {info.text}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border shadow-xl">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <a href="#home">

            <div className="flex items-center">
              <div className="w-12 h-12">
                <img src={logo} alt="GLORYDENT logo" />
              </div>
              <div className="ml-3">
                <h1 className="text-xl font-bold text-gray-800">GLORYDENT</h1>
                <p className="text-sm text-red-500">Dentistry and Orthodontics</p>
              </div>
            </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <HashLink
                  key={index}
                  smooth
                  to={link.href}
                  className="text-gray-600 hover:text-red-500 transition-colors font-medium"
                >
                  {link.text}
                </HashLink>
              ))}
              <a href="#contact">

              <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors">
                Book Appointment
              </button>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-red-500 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-4 py-3 space-y-4">
            {navLinks.map((link, index) => (
              <HashLink
                key={index}
                smooth
                to={link.href}
                className="block text-gray-600 hover:text-red-500 transition-colors"
              >
                {link.text}
              </HashLink>
            ))}
            <button className="w-full bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors">
              Book Appointment
            </button>
            <div className="space-y-3 border-t pt-3">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center text-sm text-gray-600 hover:text-red-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-red-500 mr-2">{info.icon}</span>
                  {info.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
