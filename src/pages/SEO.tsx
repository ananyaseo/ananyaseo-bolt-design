import { ArrowRight, CheckCircle, Zap, TrendingUp, BookOpen, Award } from 'lucide-react';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

export default function SEO() {
  const whySEOMattersList = [
    {
      title: 'AI-Powered Search (SGE & Overviews)',
      description: 'Google now answers questions directly using AI. We optimize your content so it can be cited inside these AI results.'
    },
    {
      title: 'E-E-A-T (Experience, Expertise, Authoritativeness, Trust)',
      description: 'Content quality is the new currency of visibility. We build trust signals into every page.'
    },
    {
      title: 'Featured Snippets & Rich Results',
      description: 'From lists and FAQs to videos and tables, we structure content to win zero-click searches.'
    },
    {
      title: 'Visual & Video Search',
      description: 'With more image packs and video carousels appearing in SERPs, we integrate visual SEO into your strategy.'
    }
  ];

  const services = [
    {
      icon: Zap,
      title: 'AI & Future-Ready SEO',
      points: [
        'Optimize for Google AI Overviews & SGE',
        'Content structured for featured snippets',
        'Schema markup for FAQs, reviews, products',
        'Short, authoritative answers built into pages'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Technical SEO Excellence',
      points: [
        'Core Web Vitals & site speed optimization',
        'Mobile-first and crawl budget optimization',
        'Fix broken links and duplicate content',
        'XML sitemaps, robots.txt, HTTPS, indexing'
      ]
    },
    {
      icon: BookOpen,
      title: 'Content & Topic Authority',
      points: [
        'Pillar + cluster model strategy',
        'Evergreen resources that stay relevant',
        'Visual and video content optimization',
        'Semantic keyword integration'
      ]
    },
    {
      icon: Award,
      title: 'Authority & Digital PR',
      points: [
        'High-quality link building via guest posts',
        'Local citations in trusted directories',
        'Industry mentions and media coverage',
        'Stronger domain authority signals'
      ]
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Keyword Research & Topic Clustering',
      description: 'Identify high-intent keywords, research AI Overview triggers, map search intent, and create topical authority clusters'
    },
    {
      step: 2,
      title: 'Technical SEO',
      description: 'Fix crawlability issues, optimize Core Web Vitals, implement security measures, and ensure mobile-first indexing'
    },
    {
      step: 3,
      title: 'On-Page Optimization',
      description: 'Optimize titles, meta descriptions, headings, content structure, image optimization, and semantic keyword integration'
    },
    {
      step: 4,
      title: 'Content Strategy',
      description: 'Create evergreen content, case studies, FAQ sections, how-to guides, and content optimized for featured snippets'
    },
    {
      step: 5,
      title: 'Schema & Structured Data',
      description: 'Implement comprehensive schema markup for organization, services, FAQs, reviews, and local business information'
    },
    {
      step: 6,
      title: 'Local & Reviews',
      description: 'Google Business Profile optimization, citation building, review management, and location-based content creation'
    },
    {
      step: 7,
      title: 'Analytics & Monitoring',
      description: 'GA4 setup, Search Console monitoring, ROI tracking, monthly reports on rankings, traffic, and conversions'
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
              Affordable Search Engine Optimization (SEO) Services
            </h1>
            <p className="text-xl text-emerald-300 font-semibold">
              Future-Ready SEO That Delivers Visibility, Traffic & Conversions
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why SEO Matters More in 2026</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {whySEOMattersList.map((item, index) => (
                <div key={index} className="border-l-4 border-emerald-600 pl-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="bg-blue-900 text-white rounded-2xl p-8">
              <p className="text-lg mb-4">
                Search has changed. Ranking in Google is no longer just about being on page one — it's about being the definitive answer across AI Overviews, featured snippets, video carousels, and local results.
              </p>
              <p className="text-lg mb-4">
                At Ananya SEO, we help businesses future-proof their online presence with strategies built for 2025 and beyond.
              </p>
              <p className="text-lg">
                Our SEO approach blends technical excellence, authoritative content, and AI-driven optimization to ensure your brand shows up wherever your customers are searching — whether in Google's AI results, voice search, or traditional rankings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Our SEO Services</h2>
            <p className="text-lg text-gray-700 text-center">
              Comprehensive SEO Strategy for 2026 and beyond. Modern SEO isn't just about keywords anymore. It's about understanding the customer journey and optimizing for AI-powered search results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                      <ul className="space-y-2">
                        {service.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700">
                            <span className="text-emerald-600 font-bold mt-1">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our SEO Strategy</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-center mb-8">
              We start by mapping your customer journey across four critical stages: unaware, awareness, research/consideration, and purchase. This allows us to create targeted content that attracts prospects at every stage and guides them toward conversion through strategic keyword targeting and content optimization.
            </p>
            <div className="bg-emerald-600 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">AI Search Optimization (SGE)</h3>
              <p>
                Search Generative Experience optimization ensures your content gets cited in Google's AI-generated answers. We optimize for AI Overviews, structure content for better AI parsing, and implement schema markup for enhanced visibility in the new search landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our SEO Process</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">{item.step}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Local SEO Domination</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-900 text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Strategic Local Presence</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-300 flex-shrink-0 mt-1" />
                    <span>Google Business Profile optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-300 flex-shrink-0 mt-1" />
                    <span>Location-based landing pages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-300 flex-shrink-0 mt-1" />
                    <span>Reviews management with schema markup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-300 flex-shrink-0 mt-1" />
                    <span>Citations across all major platforms</span>
                  </li>
                </ul>
              </div>
              <div className="bg-emerald-50 rounded-2xl p-8 border-2 border-emerald-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Multi-Platform Coverage</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Yelp & Bing Places</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Apple Maps & Google Maps</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>YellowPages & trusted directories</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Industry-specific directories</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Dominate Online Search?</h2>
            <p className="text-xl text-emerald-300">
              Let's build a strategy that makes your brand the definitive answer online
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
