import { Heart, Zap, Briefcase, GraduationCap, DollarSign, Plane } from 'lucide-react';

export default function IndustriesServe() {
  const industries = [
    {
      icon: Zap,
      title: 'B2B Technology',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Heart,
      title: 'Healthcare',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Briefcase,
      title: 'Recruitment',
      color: 'from-amber-600 to-amber-700'
    },
    {
      icon: DollarSign,
      title: 'Finance',
      color: 'from-blue-700 to-blue-800'
    },
    {
      icon: Plane,
      title: 'B2C Travel and Tourism',
      color: 'from-yellow-600 to-yellow-700'
    },
    {
      icon: GraduationCap,
      title: 'Property',
      color: 'from-purple-600 to-purple-700'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-slate-900">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ananya SEO specializes in digital marketing for organizations across multiple sectors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className={`group bg-gradient-to-br ${industry.color} rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {industry.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
