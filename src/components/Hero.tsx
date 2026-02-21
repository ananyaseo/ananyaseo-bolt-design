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
          <source src="https://videos.pexels.com/video-files/3183190/3183190-uhd_2560_1440_24fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/75 to-blue-900/85"></div>
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
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L1440 120L1440 0C1440 0 1080 80 720 80C360 80 0 0 0 0L0 120Z" fill="white"/>
        </svg>

        <div className="bg-white -mt-1">
          <div className="container mx-auto px-6 lg:px-12 py-12">
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-emerald-600">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-700 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
