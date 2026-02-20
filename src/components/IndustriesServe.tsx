import { Heart, Zap, MapPin, BookOpen } from 'lucide-react';

export default function IndustriesServe() {
  const industries = [
    {
      icon: Heart,
      number: '1',
      title: 'Nonprofit & Social Sector',
      items: [
        'NGOs & Charitable Organizations',
        'Educational Nonprofits',
        'Healthcare Nonprofits',
        'Environmental Organizations'
      ]
    },
    {
      icon: Zap,
      number: '2',
      title: 'Technology',
      items: [
        'SaaS Companies',
        'IT Services',
        'Software Development',
        'Tech Startups'
      ]
    },
    {
      icon: MapPin,
      number: '3',
      title: 'Local Businesses',
      items: [
        'Restaurants & Hospitality',
        'Retail Stores',
        'Home Services',
        'Real Estate'
      ]
    },
    {
      icon: BookOpen,
      number: '4',
      title: 'Education',
      items: [
        'Schools & Universities',
        'E-learning Platforms',
        'Coaching Institutes',
        'Educational Technology'
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-600/20 text-blue-700 rounded-full text-sm font-semibold mb-4 border border-blue-500/30">
            Industries We Serve
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Trusted by Diverse Industries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ananya SEO specializes in digital marketing for organizations across multiple sectors
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-50 to-gray-100 rounded-3xl p-8 lg:p-10 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-blue-600 leading-none mb-2">
                      {industry.number}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {industry.title}
                    </h3>
                  </div>
                </div>

                <ul className="space-y-3">
                  {industry.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-3 text-lg text-gray-700">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
