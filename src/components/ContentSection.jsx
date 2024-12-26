import React from 'react';

const ContentSection = ({ 
  tag, 
  title, 
  description, 
  longDescription, 
  imageUrl, 
  isReversed = false 
}) => {
  return (
    <div className="py-12 lg:py-20">
      <div className={`max-w-7xl mx-auto px-4 ${isReversed ? 'lg:flex-row-reverse' : ''} lg:flex lg:items-center lg:gap-16`}>
        {/* Image Container */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <div className="relative">
            <div data-aos="fade-right" className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Border */}
            <div className="absolute -inset-4 border-2 border-red-600 rounded-lg -z-10 transform rotate-2" />
          </div>
        </div>

        {/* Content Container */}
        <div className="lg:w-1/2" data-aos="flip-up">
          <div className="max-w-xl">
            <span className="text-red-600 text-sm font-medium uppercase tracking-wide">
              {tag}
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-serif text-gray-900">
              {title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {description}
            </p>
            <p className="mt-4 text-gray-600">
              {longDescription}
            </p>
            <button className="mt-8 inline-flex items-center px-6 py-3 border-2 border-red-600 text-red-600 font-medium rounded-md hover:bg-red-50 transition-colors">
              Learn More
              <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;