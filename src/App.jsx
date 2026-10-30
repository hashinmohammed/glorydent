import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Treatments from "./components/Treatments";
import WhyUs from "./components/WhyUs";
import Spotlight from "./components/Spotlight";
import VisitSteps from "./components/VisitSteps";
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
        <Treatments />
        <WhyUs />
        <Spotlight />
        <VisitSteps />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}

export default App;
