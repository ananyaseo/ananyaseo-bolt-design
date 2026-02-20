import { Search, Share2, MousePointer, PenTool, Globe, TrendingUp } from 'lucide-react';

export default function OurExpertise() {
  const services = [
    {
      icon: Search,
      title: 'SEO Services',
      description: 'AI-Powered Search Optimization, E-E-A-T Content Development, Featured Snippets, Local SEO, and Technical SEO Excellence.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Build authentic connections across Facebook, Instagram, LinkedIn, Twitter, Pinterest, and YouTube with engaging content strategies.',
      image: 'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=1200',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: MousePointer,
      title: 'PPC Advertising',
      description: 'Expert Google Ads management including Search Ads, Display Network, Shopping Ads, Remarketing, and YouTube Video Advertising.',
      image: 'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1200',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: PenTool,
      title: 'Content Marketing',
      description: 'SEO-optimized, conversion-focused content built for AI search engines with E-E-A-T principles and featured snippet optimization.',
      image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1200',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Globe,
      title: 'Local SEO',
      description: 'Dominate local search results with Google My Business optimization, local citations, and location-based marketing strategies.',
      image: 'https://images.pexels.com/photos/207601/pexels-photo-207601.jpeg?auto=compress&cs=tinysrgb&w=1200',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Reporting',
      description: 'Data-driven insights with comprehensive reporting, conversion tracking, and ROI analysis to optimize your digital marketing performance.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200',
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-emerald-600/20 text-emerald-700 rounded-full text-sm font-semibold mb-4 border border-emerald-500/30">
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Comprehensive Digital Marketing Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From SEO to social media, we deliver integrated digital marketing solutions that drive real business growth.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={isEven ? 'order-1' : 'order-2'}>
                  <div className="relative group rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                <div className={isEven ? 'order-2' : 'order-1'}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-3xl font-bold mb-4 text-slate-900">
                    {service.title}
                  </h3>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <a
                    href="#contact"
                    className="inline-flex items-center px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Learn More
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
