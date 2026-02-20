import { Award, TrendingUp, Shield, Users } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: '14+ Years of Digital Marketing Excellence',
      description: 'Established in 2010, we bring over a decade of proven expertise in SEO, PPC, and digital marketing strategies that deliver measurable results.'
    },
    {
      icon: Users,
      title: 'Specialized in Nonprofit & SMB Digital Marketing',
      description: 'We understand the unique challenges faced by nonprofits, NGOs, startups, and small businesses. Our tailored solutions maximize impact within your budget.'
    },
    {
      icon: Shield,
      title: 'Transparent Pricing – No Hidden Costs',
      description: 'Clear, upfront pricing with no surprises. We believe in building trust through transparency and delivering exceptional value for every rupee spent.'
    },
    {
      icon: TrendingUp,
      title: 'Future-Ready SEO – AI Overviews & SGE Optimization',
      description: 'Stay ahead with cutting-edge SEO strategies optimized for Google\'s AI Overviews, Search Generative Experience, and E-E-A-T principles for 2025 and beyond.'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-3xl blur-2xl"></div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Professional digital marketing team"
                className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              <div className="absolute top-8 left-8 bg-emerald-600 text-white px-6 py-4 rounded-2xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                <div className="text-4xl font-bold">14+</div>
                <div className="text-sm font-medium mt-1">Years Experience</div>
              </div>

              <div className="absolute bottom-8 right-8 bg-white px-6 py-4 rounded-2xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                <div className="text-4xl font-bold text-emerald-600">500+</div>
                <div className="text-sm font-medium text-gray-700 mt-1">Happy Clients</div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Affordable Excellence Since 2010
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                As a leading SEO company in India and trusted digital marketing company, Ananya SEO Services delivers exceptional results without the premium agency pricing.
              </p>
            </div>

            <div className="space-y-6">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={index}
                    className="flex gap-4 p-6 rounded-xl hover:bg-white transition-all duration-300 group border border-transparent hover:border-emerald-200 hover:shadow-lg"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                        {reason.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {reason.description}
                      </p>
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
