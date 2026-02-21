import TopBar from './components/TopBar';
import Hero from './components/Hero';
import OurExpertise from './components/OurExpertise';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import IndustriesServe from './components/IndustriesServe';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Hero />
      <OurExpertise />
      <About />
      <WhyChooseUs />
      <IndustriesServe />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
