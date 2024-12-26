import ContentSection from "./ContentSection";

const AboutSection = () => {
    return (
      <div id="about" className="bg-white">
        {/* About Us Section */}
        <ContentSection
          tag="ABOUT US"
          title="Your smile is our pride"
          description="We know the first thing people notice about you is smile, our expertise and experience, combined with technologies. We will ensure you have healthy, beautiful smiles"
          longDescription="Sed sollicitudin pellentesque urna, a suscipit metus imperdiet et. Curabitur consectetur auctor leo eu posuere. Fusce maximus purus ac enim tempor, eu consequat purus laoreet. Suspendisse elementum ligula vitae gravida aliquet."
          imageUrl="src/assets/smile.png"
        />
  
        {/* Decorative Curve */}
        <div className="hidden lg:block relative h-32 overflow-hidden">
          <svg 
            className="absolute w-full text-red-600 opacity-20" 
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 Q300,100 600,0 T1200,0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>
  
        {/* New Patients Section */}
        <ContentSection
          tag="NEW PATIENTS"
          title="We accept new patients"
          description="We are highly skilled in treating a wide range of dental concerns, and take pride in delivering outstanding patient care and exceptional results every time."
          longDescription="Sed sollicitudin pellentesque urna, a suscipit metus imperdiet et. Curabitur consectetur auctor leo eu posuere. Fusce maximus purus ac enim tempor, eu consequat purus laoreet. Suspendisse elementum ligula vitae gravida aliquet."
          imageUrl="src/assets/smile2.png"

          isReversed={true}
        />
      </div>
    );
  };
  
  export default AboutSection;