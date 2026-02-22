import { Mail, Phone, MapPin, ArrowRight, Facebook, Linkedin, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  const services = [
    'SEO Services',
    'Social Media Marketing',
    'PPC Advertising',
    'Content Marketing',
    'Website Development'
  ];

  const blogPosts = [
    'AI-Powered SEO: Future of Search Optimization',
    'How to Improve Core Web Vitals',
    'Social Media Marketing Strategies 2026',
    'Website Development Best Practices',
    'PPC Campaign Optimization Tips',
    'E-E-A-T Content Strategy Guide'
  ];

  const socialLinks = [
    { icon: Facebook, url: 'https://www.facebook.com/ananya.seo.services/', label: 'Facebook' },
    { icon: Linkedin, url: 'https://www.linkedin.com/company/ananya-seo-services', label: 'LinkedIn' },
    { icon: Instagram, url: 'https://www.instagram.com/ananyaseoservices/', label: 'Instagram' },
    { icon: Twitter, url: 'https://twitter.com/ananya_seo', label: 'Twitter' },
    { icon: Youtube, url: 'http://www.youtube.com/c/AnanyaseoservicesBengaluru', label: 'YouTube' }
  ];

  return (
    <footer className="bg-[#0B1A4A] text-white">
      <div id="contact" className="container mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <img
              src="/Ananya_nospace_528x150.jpg"
              alt="Ananya SEO Services"
              className="h-12 w-auto mb-6"
            />
            <p className="text-gray-300 mb-8 leading-relaxed">
              Leading SEO company in India providing affordable digital marketing solutions since 2010. Trusted by nonprofits, NGOs, startups, and small businesses.
            </p>
            <div className="flex items-center gap-6 mb-6">
              <a href="mailto:sanand.rao@gmail.com" className="w-10 h-10 bg-emerald-600 hover:bg-emerald-700 rounded-lg flex items-center justify-center transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:+919845038936" className="w-10 h-10 bg-emerald-600 hover:bg-emerald-700 rounded-lg flex items-center justify-center transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>
            <div className="border-t border-blue-800 pt-6">
              <h4 className="font-semibold mb-4 text-emerald-400">Follow Us</h4>
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.label}
                      className="w-10 h-10 bg-blue-700 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-emerald-400">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-emerald-400">Recent Blog Posts</h3>
            <ul className="space-y-3">
              {blogPosts.map((post, index) => (
                <li key={index} className="text-gray-300 hover:text-emerald-400 transition-colors flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  <span>{post}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-700 pt-12">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <div className="font-semibold mb-1">Phone</div>
                <a href="tel:+919845038936" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  +91-9845038936
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <div className="font-semibold mb-1">Email</div>
                <a href="mailto:sanand.rao@gmail.com" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  sanand.rao@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <div className="font-semibold mb-1">Location</div>
                <div className="text-gray-300">No. 49, 2nd Main, Arekere MICO Layout 1st Stage, Bangalore 560076</div>
              </div>
            </div>
          </div>

          <div className="text-center text-gray-400 text-sm pt-8 border-t border-blue-700">
            <p>© 2026 Ananya SEO Services. All rights reserved. | Leading SEO Company in India | Digital Marketing SEO, and PPC Advertising Experts</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
