import { Users, Clock, BarChart3 } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Clients Consulted',
    },
    {
      icon: Clock,
      number: '14+',
      label: 'Years of Digital Marketing Excellence',
    },
    {
      icon: BarChart3,
      number: '95%',
      label: 'Clients Retention Rate',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-900">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mb-6 group-hover:shadow-2xl transition-all duration-300">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-5xl md:text-6xl font-bold text-emerald-400 mb-3">
                  {stat.number}
                </div>
                <div className="text-lg md:text-xl text-gray-200 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
