import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Specialities from "./components/Specialities";
import WhyUs from "./components/WhyUs";
import Spotlight from "./components/Spotlight";
import Doctors from "./components/Doctors";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileCallBar from "./components/MobileCallBar";

function App() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <Specialities />
        <WhyUs />
        <Spotlight />
        <Doctors />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}

export default App;
