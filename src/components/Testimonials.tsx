import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Amit delivered an exceptional website that exceeded our expectations. His attention to detail and technical expertise made our project a huge success.",
      author: "Priya Sharma",
      role: "CEO, Healthcare Startup",
      rating: 5,
    },
    {
      quote: "Working with Amit was a seamless experience. He understood our vision perfectly and delivered a high-performance e-commerce platform on time.",
      author: "Rahul Verma",
      role: "Founder, E-commerce Brand",
      rating: 5,
    },
    {
      quote: "His expertise in React and Next.js is remarkable. The web application he built for us has significantly improved our business operations.",
      author: "Anita Gupta",
      role: "Marketing Director",
      rating: 5,
    },
  ];

  return (
    <section className="section-padding bg-light-bg">
      <div className="container-narrow">
        <h2 className="section-title text-center mb-12">Client Testimonials</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="skill-card">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-body italic mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
