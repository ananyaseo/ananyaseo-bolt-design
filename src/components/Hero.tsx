import { ArrowRight, Users, Clock, BarChart3 } from 'lucide-react';

export default function Hero() {
  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Clients Consulted',
    },
    {
      icon: Clock,
      number: '14+',
      label: 'Years of Digital Marketing Excellence',
    },
    {
      icon: BarChart3,
      number: '95%',
      label: 'Clients Retention Rate',
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://www.ananyaseo.com/wp-content/uploads/2026/02/Drone-View-of-Bangkok-Cityscape.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-slate-900/30 to-blue-900/40"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 py-20 pb-32">
        <div className="max-w-3xl mx-auto text-center space-y-8">
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

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,80 Q360,30 720,80 T1440,80 L1440,200 L0,200 Z" fill="white" strokeWidth="2" stroke="white"/>
        </svg>

        <div className="bg-white relative">
          <div className="container mx-auto px-6 lg:px-12 py-12 relative">
            <div className="bg-gradient-to-r from-blue-900/90 to-blue-800/90 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-blue-700/20">
              <div className="grid md:grid-cols-3 gap-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-4xl font-bold text-white mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-emerald-200 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
