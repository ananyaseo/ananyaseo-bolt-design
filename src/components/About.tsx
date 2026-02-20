import { Target, Lightbulb, Heart } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-emerald-600 text-white rounded-full text-sm font-semibold mb-2">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Your Trusted Digital Marketing Partner Since 2010
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ananya SEO Services, established in 2010 in Bangalore, is a company committed to helping businesses succeed in the digital world. With a team of experienced professionals, we offer a range of digital marketing services, including search engine optimization, social media marketing, and Adwords PPC ads management.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to provide affordable, high-quality digital marketing solutions to businesses of all sizes. By leveraging our expertise in SEO and digital marketing, we help businesses increase their online visibility, attract more customers, and achieve their business goals.
            </p>

            <div className="grid md:grid-cols-3 gap-6 pt-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Our Mission</h3>
                <p className="text-sm text-gray-600">Delivering affordable excellence in digital marketing</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Innovation</h3>
                <p className="text-sm text-gray-600">Staying ahead with AI-powered SEO strategies</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Client Focus</h3>
                <p className="text-sm text-gray-600">Your success is our top priority</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
            <img
              src="https://images.pexels.com/photos/267415/pexels-photo-267415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="SEO Audit Workspace"
              className="relative rounded-3xl shadow-2xl w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
