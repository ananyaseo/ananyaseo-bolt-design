import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  const industries = [
    'Nonprofit & NGO Marketing',
    'Technology & SaaS',
    'Healthcare',
    'Education',
    'E-commerce',
    'Real Estate'
  ];

  const services = [
    'SEO Services',
    'Social Media Marketing',
    'PPC Advertising',
    'Content Marketing',
    'Local SEO',
    'Analytics & Reporting'
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div id="contact" className="container mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <img
              src="/Ananya_nospace_528x150.jpg"
              alt="Ananya SEO Services"
              className="h-12 w-auto mb-6"
            />
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading SEO company in India providing affordable digital marketing solutions since 2010. Trusted by nonprofits, NGOs, startups, and small businesses.
            </p>
            <div className="flex items-center gap-6">
              <a href="mailto:sanand.rao@gmail.com" className="w-10 h-10 bg-emerald-600 hover:bg-emerald-700 rounded-lg flex items-center justify-center transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:+919845038936" className="w-10 h-10 bg-emerald-600 hover:bg-emerald-700 rounded-lg flex items-center justify-center transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Industries</h3>
            <ul className="space-y-3">
              {industries.map((industry, index) => (
                <li key={index} className="text-gray-400 flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  {industry}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-12">
          <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Ready to Elevate Your Business?</h3>
                <p className="text-emerald-100">Get started with future-ready digital marketing today</p>
              </div>
              <a
                href="mailto:sanand.rao@gmail.com"
                className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center whitespace-nowrap"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <div className="font-semibold mb-1">Phone</div>
                <a href="tel:+919845038936" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  +91-9845038936
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <div className="font-semibold mb-1">Email</div>
                <a href="mailto:sanand.rao@gmail.com" className="text-gray-400 hover:text-emerald-400 transition-colors">
                 sanand.raogmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <div className="font-semibold mb-1">Location</div>
                <div className="text-gray-400">Bangalore, India</div>
              </div>
            </div>
          </div>

          <div className="text-center text-gray-400 text-sm pt-8 border-t border-gray-700">
            <p>© 2026 Ananya SEO Services. All rights reserved. | Leading SEO Company in India | Digital Marketing SEO, and PPC Advertising Experts</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
