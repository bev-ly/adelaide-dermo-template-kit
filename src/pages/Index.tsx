import { MapPin, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BookingForm from '@/components/BookingForm';

const Index = () => {
  const services = [
    {
      title: "General Dermatology",
      description: "Skin checks, mole removal, acne treatments, and more.",
      icon: Clock,
    },
    {
      title: "Cosmetic Dermatology", 
      description: "Botox, dermal fillers, laser skin rejuvenation.",
      icon: Clock,
    },
    {
      title: "Skin Cancer Care",
      description: "Skin cancer detection, biopsy, and removal.",
      icon: Clock,
    },
    {
      title: "Pediatric Dermatology",
      description: "Treatment for children's skin conditions.",
      icon: Clock,
    },
    {
      title: "Hair Restoration",
      description: "Solutions for hair loss, including PRP therapy.",
      icon: Clock,
    },
  ];

  const team = [
    {
      name: "Dr. Jane Smith",
      title: "Lead Dermatologist",
      description: "Specializing in skin cancer treatment and cosmetic procedures.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300",
    },
    {
      name: "Dr. John Doe",
      title: "Cosmetic Dermatologist",
      description: "Expert in Botox, laser therapy, and advanced skincare.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300",
    },
    {
      name: "Nurse Sarah Lee",
      title: "Registered Nurse",
      description: "Experienced in laser treatments, skin rejuvenation, and patient care.",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300",
    },
  ];

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
    <div className="min-h-screen bg-gradient-to-b from-[#FEF7CD] to-[#F1F0FB]">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="relative pt-20 flex items-center px-4 md:px-8 min-h-[80vh] bg-[#FEC6A1]/10">
        <div className="w-full max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-[#333] mb-4">
              Adelaide Dermatology Associates
            </h1>
            <p className="text-xl text-[#666] mb-6">
              Your trusted dermatology specialists in Henley Beach.
            </p>
          </div>
          
          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="bg-[#FEC6A1] hover:bg-[#FEC6A1]/90 text-[#333]">
              Book Appointment
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 md:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-4xl font-bold text-[#333] mb-8">Our Expertise</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white/80">
                <CardHeader>
                  <service.icon className="w-8 h-8 text-[#FEC6A1] mb-2" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#666]">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 md:px-8 bg-[#FEF7CD]/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-4xl font-bold text-[#333] mb-8">Meet Your Experts</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white/80">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-[#FEC6A1] font-medium">{member.title}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-[#666]">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 md:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-4xl font-bold text-[#333] mb-8">What Our Patients Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white/80">
                <CardHeader>
                  <svg className="w-8 h-8 text-[#FEC6A1] mb-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <p className="text-[#666] mb-4">{testimonial.quote}</p>
                  <p className="text-[#FEC6A1] font-medium">– {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="book" className="py-20 px-4 md:px-8 bg-[#FEF7CD]/30">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-playfair text-4xl font-bold text-[#333] mb-8">Book Your Appointment</h2>
          <Card className="bg-white/80">
            <CardContent className="p-6">
              <BookingForm />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-4xl font-bold text-[#333] mb-8">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-[#FEC6A1] flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-[#333] mb-2">Location</h3>
                <p className="text-[#666]">
                  Western Hospital, Level 2/168 Cudmore Terrace, Henley Beach SA 5022, Australia
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-[#FEC6A1] flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-[#333] mb-2">Phone</h3>
                <p className="text-[#666]">+61 8 7119 8969</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-[#FEC6A1] flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-[#333] mb-2">Hours</h3>
                <p className="text-[#666]">
                  Monday – Friday: 8:30 AM – 5:30 PM<br />
                  Saturday – Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#333] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-playfair text-xl mb-4">Adelaide Dermatology</h3>
              <p className="text-gray-300">
                Professional dermatology care delivered with expertise and compassion.
              </p>
            </div>
            <div>
              <h3 className="font-playfair text-xl mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-300 hover:text-white">Services</a></li>
                <li><a href="#team" className="text-gray-300 hover:text-white">Our Team</a></li>
                <li><a href="#testimonials" className="text-gray-300 hover:text-white">Testimonials</a></li>
                <li><a href="#book" className="text-gray-300 hover:text-white">Book Appointment</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-playfair text-xl mb-4">Contact</h3>
              <p className="text-gray-300">
                Henley Beach SA 5022, Australia<br />
                Phone: +61 8 7119 8969<br />
                Email: contact@adelaidedermatology.com
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Adelaide Dermatology Associates. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
