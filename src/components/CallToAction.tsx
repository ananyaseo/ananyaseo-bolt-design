import { Phone, Mail } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2"
          alt="Business professional"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/85 to-slate-900/90"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Ready to Elevate Your Business?
          </h2>

          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            Transform your online presence with future-ready SEO strategies, result-driven PPC advertising, and comprehensive digital marketing services from Bangalore's trusted agency since 2010.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <a
              href="tel:9845038936"
              className="inline-flex items-center gap-3 px-10 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg"
            >
              <Phone className="w-6 h-6" />
              Call: 9845038936
            </a>

            <a
              href="mailto:anand@ananyaseo.com"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white hover:bg-gray-100 text-blue-900 font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg"
            >
              <Mail className="w-6 h-6" />
              Email: anand@ananyaseo.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
