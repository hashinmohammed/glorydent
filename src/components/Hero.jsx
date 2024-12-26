import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production';
//   import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [animating, setAnimating] = useState(false);

  const slides = [
    {
      title: "GLORYDENT DENTAL CARE",
      heading: "Local dentists who love to make you smile.",
      image: "src/assets/Image.png"
    },
    {
      title: "PROFESSIONAL DENTAL SERVICES",
      heading: "Advanced care for your entire family.",
      image: "src/assets/image2.jpg"
    },
    {
      title: "COMFORTABLE ENVIRONMENT",
      heading: "Modern facility with a gentle touch.",
      image: "src/assets/image3.jpg"
    }
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying && !animating) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, animating, slides.length]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-12 md:h-12">
          <path
            fill="currentColor"
            d="M12 2a4 4 0 0 1 4 4v2h2.5A2.5 2.5 0 0 1 21 10.5v8a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-8A2.5 2.5 0 0 1 5.5 8H8V6a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v2h4V6a2 2 0 0 0-2-2"
          />
        </svg>
      ),
      title: "Preventive Guidance",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit velit, sapien habitant integer sen.facilisis ex non nibh"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-12 md:h-12">
          <path
            fill="currentColor"
            d="M23 10a2 2 0 0 0-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32 0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.58C7.22 7.95 7 8.45 7 9v10a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2M1 21h4V9H1v12z"
          />
        </svg>
      ),
      title: "Friendly Service",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit velit, sapien habitant integer sen.facilisis ex non nibh"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-12 md:h-12">
          <path
            fill="currentColor"
            d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
          />
        </svg>
      ),
      title: "Dental Technology",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit velit, sapien habitant integer sen.facilisis ex non nibh"
    }
  ];

  const nextSlide = () => {
    if (animating) return;
    setAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => {
      setAnimating(false);
      setIsAutoPlaying(true);
    }, 500);
  };

  const prevSlide = () => {
    if (animating) return;
    setAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => {
      setAnimating(false);
      setIsAutoPlaying(true);
    }, 500);
  };

  return (
    <div className="w-full bg-white overflow-hidden">
      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 lg:pr-6 xl:pr-12">
            <div className="relative h-8">
              {slides.map((slide, index) => (
                <h2
                  key={index}
                  className={`text-red-600 font-medium uppercase tracking-wide text-sm sm:text-base absolute w-full transition-all duration-500 ${
                    currentSlide === index
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 -translate-y-4'
                  }`}
                >
                  {slide.title}
                </h2>
              ))}
            </div>
            
            <div className="relative h-32 sm:h-36 lg:h-18">
              {slides.map((slide, index) => (
                <h1
                  key={index}
                  className={`text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight absolute w-full transition-all duration-500 ${
                    currentSlide === index
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                >
                  {slide.heading}
                </h1>
              ))}
            </div>

            <p className="text-base sm:text-lg text-gray-600 relative">
              Discover a level of dental care like no other
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href='tel:7034391699'>
                <button  className="w-full sm:w-auto bg-red-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md hover:bg-red-700 transition-colors text-sm sm:text-base">
                Book an Appointment
              </button>
                </a>
             
                <a href="#services">
              <button className="w-full sm:w-auto border border-red-600 text-red-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-md hover:bg-red-50 transition-colors text-sm sm:text-base">

                Browse our service
              </button>
                </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative mt-6 lg:mt-0">
            <div className="relative rounded-lg overflow-hidden aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute w-full h-full transition-all duration-500 ${
                    currentSlide === index
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-full'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover border-2 p-1 rounded-lg border-l-red-100 border-r-red-100 border-t-red-100"
                  />
                </div>
              ))}
              <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-white to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 sm:w-24 sm:h-24 text-red-600">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  d="M0,50 Q25,0 50,50 T100,50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-3 sm:gap-4">
          <button
            onClick={prevSlide}
            disabled={animating}
            className="p-1.5 sm:p-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors disabled:opacity-50"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-6 sm:h-6">
              <path
                fill="currentColor"
                d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
              />
            </svg>
          </button>
          <div className="flex gap-1.5 sm:gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!animating) {
                    setAnimating(true);
                    setCurrentSlide(index);
                    setIsAutoPlaying(false);
                    setTimeout(() => {
                      setAnimating(false);
                      setIsAutoPlaying(true);
                    }, 500);
                  }
                }}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-red-600 scale-110' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            disabled={animating}
            className="p-1.5 sm:p-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors disabled:opacity-50"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-6 sm:h-6">
              <path
                fill="currentColor"
                d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Features Section */}
      {/* ... Features section remains the same ... */}
    </div>
  );
};

export default Hero;