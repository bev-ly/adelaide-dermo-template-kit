
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Team', path: '/team' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Book Appointment', path: '/book' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="fixed right-0 top-0 h-full z-50">
      <Button
        variant="ghost"
        className="fixed right-4 top-4 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      <nav className={`bg-white h-full w-64 shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
      }`}>
        <div className="flex flex-col h-full py-20 px-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`py-3 px-4 mb-2 rounded-md text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200 ${
                item.name === 'Contact' ? 'mt-auto mb-8 bg-accent hover:bg-accent/90' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
