
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Clock } from "lucide-react";

const Services = () => {
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-playfair text-4xl font-bold text-gray-900 mb-8">Our Expertise</h1>
          <p className="text-xl text-gray-600 mb-12">Specialized treatments for your skin health.</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
