import { Phone, Mail, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function TopBar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <>
      <div className="bg-blue-900 text-white py-3 text-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between flex-wrap gap-4">
          <div className="font-bold">
            SEO & DIGITAL MARKETING AGENCY INDIA | ANANYA SEO
          </div>
          <div className="flex items-center gap-8 flex-wrap">
            <a href="tel:+919845038936" className="flex items-center gap-2 hover:text-emerald-300 transition-colors">
              <Phone className="w-4 h-4" />
              +91 9845038936
            </a>
            <a href="mailto:sanand.rao@gmail.com" className="flex items-center gap-2 hover:text-emerald-300 transition-colors">
              <Mail className="w-4 h-4" />
              sanand.rao@gmail.com
            </a>
          </div>
        </div>
      </div>

      <nav className="bg-white shadow-md sticky top-12 z-40">
        <div className="container mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/Ananya_nospace_528x150.jpg" alt="Ananya SEO" className="h-10 w-auto" />
          </div>
          <div className="flex items-center gap-6">
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-900 font-medium transition-colors flex items-center gap-1 py-2">
                Home
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <a href="https://www.ananyaseo.com/about-us/" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">About Us</a>
                <a href="https://www.ananyaseo.com/testimonials/" className="block px-4 py-2 hover:bg-gray-100 text-gray-700 border-t border-gray-200">Testimonials</a>
              </div>
            </div>

            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-900 font-medium transition-colors flex items-center gap-1 py-2">
                Search Engine Optimization
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
                <Link to="/seo" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Search Engine Optimization</Link>
                <Link to="/seo-pricing" className="block px-4 py-2 hover:bg-gray-100 text-gray-700 border-t border-gray-200">SEO Pricing</Link>
                <a href="https://www.ananyaseo.com/local-seo-services/" className="block px-4 py-2 hover:bg-gray-100 text-gray-700 border-t border-gray-200">Local SEO Services</a>
                <a href="https://www.ananyaseo.com/faq-on-seo/" className="block px-4 py-2 hover:bg-gray-100 text-gray-700 border-t border-gray-200">FAQ on SEO</a>
                <a href="https://www.ananyaseo.com/google-penguin-penalty-recovery/" className="block px-4 py-2 hover:bg-gray-100 text-gray-700 border-t border-gray-200">Penguin Recovery</a>
                <a href="https://www.ananyaseo.com/digital-marketing-nonprofits/" className="block px-4 py-2 hover:bg-gray-100 text-gray-700 border-t border-gray-200">Digital Marketing for Nonprofits</a>
              </div>
            </div>

            <a href="https://www.ananyaseo.com/ppc-ad-management/" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">PPC Advertising</a>

            <a href="https://www.ananyaseo.com/social-media-marketing/" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Social Media Marketing</a>

            <a href="https://www.ananyaseo.com/website-development/" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Website Development</a>

            <a href="https://www.ananyaseo.com/contact/" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Contact</a>

            <Link to="/blog" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Blog</Link>
          </div>
        </div>
      </nav>
    </>
  );
}
