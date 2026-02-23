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
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Tech office interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-slate-900/30 to-blue-900/40"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
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
      </section>

      <div className="bg-white relative -mt-20 pt-20 relative z-10">
        <div className="container mx-auto px-6 lg:px-12 pb-8">
          <div className="bg-gradient-to-r from-blue-900/90 to-blue-800/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-blue-700/20">
            <div className="grid md:grid-cols-3 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center mb-3 shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs text-emerald-200 font-medium">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
