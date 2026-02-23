import { Phone, Mail } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="relative py-12 lg:py-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2"
          alt="Business professional"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-blue-900/45 to-slate-900/50"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
            Ready to Elevate Your Business?
          </h2>

          <p className="text-lg md:text-lg text-gray-100 leading-relaxed">
            Transform your online presence with future-ready SEO strategies, result-driven PPC advertising, and comprehensive digital marketing services from Bangalore's trusted agency since 2010.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href="tel:9845038936"
              className="inline-flex items-center gap-2 px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-base"
            >
              <Phone className="w-5 h-5" />
              Call: 9845038936
            </a>

            <a
              href="mailto:sanand.rao@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white hover:bg-gray-100 text-blue-900 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-base"
            >
              <Mail className="w-5 h-5" />
              Email: sanand.rao@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
