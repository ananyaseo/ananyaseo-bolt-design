import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1200&dpr=2"
          alt="Modern office skyline"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/70 to-blue-900/80"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 py-20">
        <div className="max-w-3xl text-center space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight font-['Inter']">
            Leading SEO Company in India
          </h1>

          <h2 className="text-2xl md:text-3xl lg:text-4xl text-emerald-300 font-semibold">
            Digital Marketing & PPC Advertising Experts
          </h2>

          <p className="text-xl md:text-2xl text-gray-100">
            Your One-Stop Solution for Digital Marketing Success
          </p>

          <p className="text-lg md:text-xl text-gray-200">
            Affordable Digital Marketing Solutions for Nonprofits, NGOs, Startups & Small Businesses
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center px-10 py-4 bg-white/15 hover:bg-white/25 text-white font-bold rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/30 text-lg"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

