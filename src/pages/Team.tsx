
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Team = () => {
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

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <Navigation />
      
      <div className="pt-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-playfair text-4xl font-bold text-gray-900 mb-8">Meet Your Experts</h1>
          <p className="text-xl text-gray-600 mb-12">Our experienced team is dedicated to providing personalized care.</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-primary font-medium">{member.title}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
