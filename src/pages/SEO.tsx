import { ArrowRight, CheckCircle, Users, TrendingUp, Zap, Shield } from 'lucide-react';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

export default function SEO() {
  const services = [
    {
      icon: Zap,
      title: 'Technical SEO',
      description: 'Optimize site structure, speed, and crawlability to improve search engine visibility'
    },
    {
      icon: TrendingUp,
      title: 'On-Page SEO',
      description: 'Strategic content optimization, meta tags, headers, and keyword placement'
    },
    {
      icon: Users,
      title: 'Link Building',
      description: 'Build high-quality backlinks and establish domain authority'
    },
    {
      icon: Shield,
      title: 'SEO Audits',
      description: 'Comprehensive analysis and actionable recommendations for improvement'
    }
  ];

  const benefits = [
    'Increased organic traffic and qualified leads',
    'Long-term sustainable results',
    'Improved brand visibility and credibility',
    'Better user experience and site performance',
    'Cost-effective compared to paid advertising',
    'Competitive advantage in your industry'
  ];

  const process = [
    {
      step: 1,
      title: 'SEO Audit',
      description: 'We analyze your current website performance and identify optimization opportunities'
    },
    {
      step: 2,
      title: 'Strategy Development',
      description: 'Create a customized SEO roadmap targeting your business goals and audience'
    },
    {
      step: 3,
      title: 'Implementation',
      description: 'Execute on-page, technical, and off-page optimization strategies'
    },
    {
      step: 4,
      title: 'Monitoring & Reporting',
      description: 'Track progress with detailed reports and continuous optimization'
    }
  ];

  return (
    <>
      <TopBar />

      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="SEO Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-slate-900/40 to-blue-900/50"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Search Engine Optimization Services
            </h1>
            <p className="text-xl text-emerald-300 font-semibold">
              Drive Organic Growth and Dominate Search Rankings
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What is SEO?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Search Engine Optimization (SEO) is the practice of optimizing your website to rank higher in search engine results pages (SERPs) for relevant keywords. It encompasses technical improvements, content strategy, and link building to increase organic visibility and drive qualified traffic to your site.
            </p>
            <p className="text-lg text-gray-700">
              In today's digital landscape, being found online is crucial. Our SEO experts work to ensure your business appears at the top of search results when potential customers are looking for your products or services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our SEO Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Benefits of SEO</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-emerald-300 flex-shrink-0 mt-1" />
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our SEO Process</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {process.map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">{item.step}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-emerald-600">
                      <ArrowRight className="w-6 h-6 rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Industries We Serve</h2>
            <p className="text-lg text-gray-700 mb-8">
              Our SEO expertise spans across multiple industries. Whether you're a B2B company, e-commerce business, service provider, or nonprofit, we have the experience to help your business succeed online.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Healthcare & Medical',
                'E-Commerce & Retail',
                'Legal Services',
                'Financial Services',
                'Technology & SaaS',
                'Real Estate',
                'Nonprofits & NGOs',
                'Hospitality & Tourism'
              ].map((industry, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-gray-700">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Boost Your Online Visibility?</h2>
            <p className="text-xl text-emerald-300">
              Let our SEO experts help you rank higher and drive more organic traffic to your website.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
            >
              Start Your SEO Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
