import { Phone, Mail, MapPin } from 'lucide-react';

export default function TopBar() {
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
          <div className="flex items-center gap-12">
            <a href="#services" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">About Us</a>
            <a href="#industries" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Industries</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Contact</a>
          </div>
        </div>
      </nav>
    </>
  );
}
