import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1920')] opacity-5 bg-cover bg-center"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8 animate-fadeIn">
            <div className="inline-block">
              <img
                src="/Ananya_nospace_528x150.jpg"
                alt="Ananya SEO Services"
                className="h-12 md:h-16 w-auto mb-6"
                loading="eager"
              />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-['Inter']">
              Leading SEO Company in India
            </h1>

            <p className="text-xl md:text-2xl text-blue-200 font-light">
              Your One-Stop Solution for Digital Marketing Success
            </p>

            <p className="text-lg text-gray-300">
              Affordable Digital Marketing Solutions for Nonprofits, NGOs, Startups & Small Businesses
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/20"
              >
                Our Services
              </a>
            </div>

            <div className="flex items-center gap-8 pt-8 text-sm text-gray-300">
              <div>
                <div className="text-3xl font-bold text-emerald-400">14+</div>
                <div>Years Experience</div>
              </div>
              <div className="w-px h-12 bg-gray-600"></div>
              <div>
                <div className="text-3xl font-bold text-emerald-400">500+</div>
                <div>Projects Completed</div>
              </div>
            </div>
          </div>

          <div className="relative lg:h-[600px] h-[400px] animate-slideInRight">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>

            <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-slate-800/50 backdrop-blur-sm">
              <img
                src="https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Digital Marketing Workspace"
                className="w-full h-full object-cover"
                loading="lazy"
              />

              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-lg">Boost Your Rankings</div>
                    <div className="text-slate-600 text-sm">AI-Powered SEO for 2025</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
