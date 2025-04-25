
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center px-4 md:px-8">
        <div className="w-full max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Adelaide Dermatology Associates
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Your trusted dermatology specialists in Henley Beach.
            </p>
          </div>
          
          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/services">View Services</Link>
            </Button>
            <Button asChild className="bg-accent hover:bg-accent/90">
              <Link to="/book">Book Appointment</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="flex items-start space-x-4">
            <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">
                Western Hospital, Level 2/168 Cudmore Terrace, Henley Beach SA 5022, Australia
              </p>
              <a href="https://maps.google.com" className="text-primary hover:underline mt-2 inline-block">
                Get Directions
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Phone className="w-6 h-6 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">+61 8 7119 8969</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Clock className="w-6 h-6 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Hours</h3>
              <p className="text-gray-600">
                Monday – Friday: 8:30 AM – 5:30 PM<br />
                Saturday – Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
