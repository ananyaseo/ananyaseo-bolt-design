import { Search, Share2, MousePointer, PenTool, Globe, CheckCircle } from 'lucide-react';

export default function OurExpertise() {
  const services = [
    {
      icon: Search,
      title: 'SEO Services',
      description: 'Future-ready search engine optimization built for Google\'s AI Overviews, SGE, and E-E-A-T principles. We help your business dominate search results in 2025 and beyond.',
      features: [
        'AI-Powered Search Optimization (SGE & Google AI Overviews)',
        'E-E-A-T Content Development (Experience, Expertise, Authority, Trust)',
        'Featured Snippets & Rich Results Optimization',
        'Visual & Video Search Integration',
        'Local SEO for Bangalore & India-wide businesses',
        'Technical SEO Excellence (Core Web Vitals, Mobile-First)'
      ],
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1200',
      color: 'from-blue-900 to-slate-900',
      bgClass: 'bg-gradient-to-br from-blue-900 to-slate-900'
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Build authentic connections and grow your brand across all major social platforms with data-driven content strategies that engage and convert.',
      features: [
        'Facebook & Instagram Marketing',
        'LinkedIn B2B Lead Generation',
        'Twitter/X Engagement Campaigns',
        'Pinterest Visual Marketing',
        'YouTube Video Marketing',
        'Social Media Analytics & Reporting'
      ],
      image: 'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=1200',
      color: 'from-blue-900 to-slate-900',
      bgClass: 'bg-white'
    },
    {
      icon: MousePointer,
      title: 'PPC Advertising Services',
      description: 'Maximize your ROI with expertly managed Google Ads campaigns. We create, optimize, and scale profitable advertising campaigns that deliver results.',
      features: [
        'Google Search Ads Management',
        'Display Network Advertising',
        'Google Shopping Ads',
        'Remarketing & Retargeting Campaigns',
        'YouTube Video Advertising',
        'Conversion Rate Optimization'
      ],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200',
      color: 'from-emerald-800 to-teal-900',
      bgClass: 'bg-gradient-to-br from-emerald-800 to-teal-900'
    },
    {
      icon: PenTool,
      title: 'Content Marketing',
      description: 'Create compelling, SEO-optimized content that ranks high in AI-powered search and converts visitors into customers. Built for humans and AI search engines.',
      features: [
        'SEO Blog Writing & Article Creation',
        'E-E-A-T Content Strategy',
        'Website Copywriting',
        'Landing Page Content',
        'Email Marketing Content',
        'Video Script Writing'
      ],
      image: 'https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&w=1200',
      color: 'from-blue-900 to-slate-900',
      bgClass: 'bg-white'
    },
    {
      icon: Globe,
      title: 'Website Development',
      description: 'At Ananya SEO, we build modern, fast, and SEO-optimized websites that not only look professional but also convert visitors into customers. Our websites are designed with search engines, users, and business growth in mind.',
      features: [
        'Business Websites & Corporate Sites',
        'Service-Based Websites',
        'NGO & Nonprofit Websites',
        'Lead Generation Platforms',
        'WordPress Development & Customization',
        'Performance & Scalability Optimization'
      ],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200',
      color: 'from-blue-900 to-slate-900',
      bgClass: 'bg-gradient-to-br from-blue-900 to-slate-900'
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12 mb-16">
        <div className="text-center">
          <div className="inline-block px-4 py-2 bg-emerald-600/20 text-emerald-700 rounded-full text-sm font-semibold mb-4 border border-emerald-500/30">
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Explore Our Comprehensive Digital Marketing Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From SEO to social media, we deliver integrated digital marketing solutions that drive real business growth.
          </p>
        </div>
      </div>

      <div className="space-y-0">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isEven = index % 2 === 0;
          const isDarkBg = service.bgClass.includes('blue-900') || service.bgClass.includes('emerald-800');

          return (
            <div key={index} className={service.bgClass}>
              <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={isEven ? 'order-1' : 'order-2'}>
                    <div className="relative group rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className={isEven ? 'order-2' : 'order-1'}>
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className={`text-3xl lg:text-4xl font-bold mb-4 ${isDarkBg ? 'text-white' : 'text-slate-900'}`}>
                      {service.title}
                    </h3>

                    <p className={`text-lg leading-relaxed mb-6 ${isDarkBg ? 'text-gray-200' : 'text-gray-700'}`}>
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className={`w-6 h-6 flex-shrink-0 mt-0.5 ${isDarkBg ? 'text-emerald-400' : 'text-emerald-600'}`} />
                          <span className={`text-base ${isDarkBg ? 'text-gray-100' : 'text-gray-700'}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      className={`inline-flex items-center px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
                        isDarkBg
                          ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                          : 'bg-blue-900 hover:bg-blue-800 text-white'
                      }`}
                    >
                      Learn More
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
