import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import OurExpertise from './components/OurExpertise';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <WhyChooseUs />
      <OurExpertise />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
