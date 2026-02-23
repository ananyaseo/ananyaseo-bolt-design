import { Heart, Zap, Briefcase, GraduationCap, DollarSign, Home } from 'lucide-react';

export default function IndustriesServe() {
  const categories = [
    {
      title: 'Nonprofit & Social Sector',
      color: 'from-emerald-600 to-emerald-700',
      industries: [
        'NGOs & Charitable Organizations',
        'Educational Nonprofits',
        'Healthcare Nonprofits',
        'Environmental Organizations'
      ]
    },
    {
      title: 'Technology',
      color: 'from-cyan-600 to-cyan-700',
      industries: [
        'SaaS Companies',
        'IT Services',
        'Software Development',
        'Tech Startups'
      ]
    },
    {
      title: 'Local Businesses',
      color: 'from-amber-600 to-amber-700',
      industries: [
        'Restaurants & Hospitality',
        'Retail Stores',
        'Home Services',
        'Real Estate'
      ]
    },
    {
      title: 'Education',
      color: 'from-blue-600 to-blue-700',
      industries: [
        'Schools & Universities',
        'E-learning Platforms',
        'Coaching Institutes',
        'Educational Technology'
      ]
    }
  ];

  return (
    <section id="industries" className="py-20 lg:py-32 bg-slate-900">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Ananya SEO specializes in digital marketing for organizations across multiple sectors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br ${category.color} rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.industries.map((industry, indIndex) => (
                  <li key={indIndex} className="text-white text-sm leading-relaxed">
                    <span className="inline-block">• {industry}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
