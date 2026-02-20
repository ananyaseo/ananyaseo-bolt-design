import { Search, Share2, MousePointer, PenTool, Globe, TrendingUp } from 'lucide-react';

export default function OurExpertise() {
  const services = [
    {
      icon: Search,
      title: 'SEO Services',
      description: 'AI-Powered Search Optimization, E-E-A-T Content Development, Featured Snippets, Local SEO, and Technical SEO Excellence.',
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Build authentic connections across Facebook, Instagram, LinkedIn, Twitter, Pinterest, and YouTube with engaging content strategies.',
      image: 'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: MousePointer,
      title: 'PPC Advertising',
      description: 'Expert Google Ads management including Search Ads, Display Network, Shopping Ads, Remarketing, and YouTube Video Advertising.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: PenTool,
      title: 'Content Marketing',
      description: 'SEO-optimized, conversion-focused content built for AI search engines with E-E-A-T principles and featured snippet optimization.',
      image: 'https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Globe,
      title: 'Local SEO',
      description: 'Dominate local search results with Google My Business optimization, local citations, and location-based marketing strategies.',
      image: 'https://images.pexels.com/photos/209151/pexels-photo-209151.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Reporting',
      description: 'Data-driven insights with comprehensive reporting, conversion tracking, and ROI analysis to optimize your digital marketing performance.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1920')] opacity-5 bg-cover bg-center"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-emerald-600/20 text-emerald-400 rounded-full text-sm font-semibold mb-4 border border-emerald-500/30">
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Comprehensive Digital Marketing Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From SEO to social media, we deliver integrated digital marketing solutions that drive real business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40"></div>
                </div>

                <div className="relative p-8 h-full flex flex-col">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 group-hover:text-gray-200 leading-relaxed transition-colors duration-300 flex-grow">
                    {service.description}
                  </p>

                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <a
                      href="#contact"
                      className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-semibold"
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
