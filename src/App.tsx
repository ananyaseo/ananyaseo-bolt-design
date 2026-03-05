import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import OurExpertise from './components/OurExpertise';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import IndustriesServe from './components/IndustriesServe';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import SEO from './pages/SEO';
import SEOPricing from './pages/SEOPricing';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

function HomePage() {
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/seo" element={<SEO />} />
        <Route path="/seo-pricing" element={<SEOPricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/page:page" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
