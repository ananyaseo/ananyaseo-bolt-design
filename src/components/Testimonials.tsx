import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Karighar\'s Interior Designers',
      text: 'Ananya SEO Services has been instrumental in growing my business through their social media marketing strategies. They have helped me increase my brand visibility, engage with my target audience, and drive more traffic to my website. Their team is professional, knowledgeable, and always goes above and beyond to deliver exceptional results.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      name: 'Mamtha, C4D Partners',
      text: 'I have been working with Ananya SEO Services for the past year, and I am extremely impressed with their expertise in SEO. They have helped my website rank higher on search engine results, resulting in increased organic traffic and leads. I highly recommend their services to anyone looking to improve their online presence.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Read feedback from our valued clients who trust us with their digital marketing needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-teal-700 to-emerald-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <Quote className="w-12 h-12 text-emerald-300 mb-6 opacity-70" />

              <p className="text-white leading-relaxed mb-6 text-lg italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white/30"
                  loading="lazy"
                />
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="flex text-yellow-300 text-sm mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
