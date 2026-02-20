import TopBar from './components/TopBar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import OurExpertise from './components/OurExpertise';
import WhyChooseUs from './components/WhyChooseUs';
import IndustriesServe from './components/IndustriesServe';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Hero />
      <Stats />
      <OurExpertise />
      <WhyChooseUs />
      <IndustriesServe />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
