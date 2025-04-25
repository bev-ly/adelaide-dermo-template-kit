
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The care I received was exceptional. Dr. Smith was so thorough and kind during my skin check. I felt completely at ease.",
      author: "Emma R.",
    },
    {
      quote: "I had laser treatment for my acne scars, and the results were incredible. Highly recommend Adelaide Dermatology Associates.",
      author: "Michael P.",
    },
    {
      quote: "Everyone at the clinic is so welcoming. Dr. Doe did an amazing job with my Botox injections, and I couldn't be happier with the results!",
      author: "Chloe F.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <Navigation />
      
      <div className="pt-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-playfair text-4xl font-bold text-gray-900 mb-8">What Our Patients Say</h1>
          <p className="text-xl text-gray-600 mb-12">Real stories from our satisfied patients.</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <svg className="w-8 h-8 text-primary mb-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                  <p className="text-primary font-medium">– {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
