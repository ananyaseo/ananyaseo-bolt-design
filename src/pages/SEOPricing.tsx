import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

export default function SEOPricing() {
  const packages = [
    {
      name: 'Starter',
      price: 450,
      highlighted: false,
      keywords: '10 Keywords',
      features: [
        'Website Audit & Optimization',
        'Keyword Research – 15 Keywords',
        'Canonical Error Fixing',
        'Schema Markup – Not Included',
        'Meta Tag Optimization – 10 Pages',
        'Blog Posts – 2 / Month',
        'Directory Submissions – 50',
        'Article Submissions – 5',
        'Google My Business Optimization – Not Included'
      ]
    },
    {
      name: 'Growth Plan',
      price: 600,
      highlighted: true,
      keywords: '20 Keywords',
      features: [
        'Website Audit & Optimization',
        'Keyword Research – 20 Keywords',
        'Canonical Error Fixing',
        'Schema Markup Implementation',
        'Speed & Performance Checks',
        'Meta Tag Optimization – 20 Pages',
        'Blog Posts – 4 / Month',
        'Directory Submissions – 100',
        'Article Submissions – 10',
        'Google My Business Optimization'
      ]
    },
    {
      name: 'Performance Plan',
      price: 800,
      highlighted: false,
      keywords: '40 Keywords',
      features: [
        'Website Audit & Optimization',
        'Keyword Research – 25 Keywords',
        'Canonical Error Fixing',
        'Schema Markup Implementation',
        'Speed & Performance Checks',
        'Meta Tag Optimization – 40 Pages',
        'Blog Posts – 8 / Month',
        'Directory Submissions – 200',
        'Article Submissions – 15',
        'Google My Business Optimization'
      ]
    }
  ];

  const approaches = [
    {
      icon: '📊',
      title: 'Understand Your Business',
      description: 'We focus on understanding your business, products/services, and target audience'
    },
    {
      icon: '🔍',
      title: 'Competitive Analysis',
      description: 'Conducting competitive analysis to identify strengths and opportunities'
    },
    {
      icon: '🎯',
      title: 'Keyword Research',
      description: 'Researching nationally focused keywords to form a strong campaign foundation'
    },
    {
      icon: '🚀',
      title: 'Implementation',
      description: 'Expert content optimization, technical SEO, and white-hat backlink building'
    }
  ];

  return (
    <>
      <TopBar />

      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="SEO Pricing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-slate-900/40 to-blue-900/50"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              SEO Pricing Packages in Bangalore
            </h1>
            <p className="text-xl text-emerald-300 font-semibold">
              90-day Performance Guarantee with all of our National SEO services
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                SEO Packages Tailored for First-Page Google Rankings
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Are you an e-commerce business targeting customers across India, or a nationwide service provider seeking a stronger online presence? Ananya SEO offers specialized National SEO Services designed to boost your organic search visibility, attract more customers, and grow your business.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We deliver stable and effective SEO and SEM solutions that enhance your brand's visibility while adhering to Google's guidelines. Our strategies ensure that your website remains protected against frequent algorithm updates.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Local SEO: Attract customers in your area.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">National SEO: Expand your reach for enterprise leads.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">eCommerce SEO: Increase product visibility and sales.</span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="SEO Strategy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            SEO Pricing Packages
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-2xl mx-auto">
            Choose from our range of flexible pricing options that cater to your specific needs.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ${
                  pkg.highlighted
                    ? 'ring-2 ring-emerald-600 transform scale-105 bg-emerald-50'
                    : 'bg-white'
                }`}
              >
                {pkg.highlighted && (
                  <div className="bg-emerald-600 text-white py-2 px-4 flex items-center justify-center gap-2">
                    <Star className="w-4 h-4" />
                    <span className="font-bold">MOST POPULAR</span>
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-emerald-600 mb-1">
                      ${pkg.price}
                      <span className="text-lg text-gray-600">/mo</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-700">{pkg.keywords}</p>
                  </div>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 mb-8 ${
                      pkg.highlighted
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    GET STARTED
                  </button>

                  <div className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className={`w-4 h-4 rounded-full mt-1 flex-shrink-0 ${pkg.highlighted ? 'bg-emerald-600' : 'bg-emerald-600'}`}></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Approach to National SEO
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            We create custom national SEO campaigns tailored to your business, focusing on key strategies and proven methodologies.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {approaches.map((approach, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{approach.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{approach.title}</h3>
                <p className="text-gray-700">{approach.description}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="SEO Analysis"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Reports"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Guaranteed ROI and Transparent Reporting</h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            We prioritize delivering a tangible return on investment. Our strategies are designed to drive measurable results, and we provide clear, transparent reporting. This includes detailed insights into links, published content, and campaign performance, ensuring complete clarity on your SEO investment.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Commitment & Performance Guarantee</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-bold">SEO requires time to deliver meaningful results.</span> All our National SEO Packages require a minimum commitment of 6 months.
            </p>
            <div className="bg-emerald-50 border-2 border-emerald-600 rounded-lg p-6">
              <p className="text-lg font-bold text-gray-900 mb-2">90-Day Performance Guarantee</p>
              <p className="text-gray-700">
                Our 90-Day Performance Guarantee ensures that if your keyword rankings don't improve within 90 days, we'll continue working for free until they do. Your success is our success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Grow Your Business?</h2>
            <p className="text-xl text-emerald-300">
              Partner with Ananya SEO to transform your online presence. Contact us today to learn more about our tailored SEO packages and take the first step towards dominating search engine rankings!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
              <a
                href="tel:+919845038936"
                className="inline-flex items-center justify-center px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
              >
                Call: 9845038936
              </a>
              <a
                href="mailto:sanand.rao@gmail.com"
                className="inline-flex items-center justify-center px-10 py-4 bg-white/15 hover:bg-white/25 text-white font-bold rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/30 text-lg"
              >
                Email: sanand.rao@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
