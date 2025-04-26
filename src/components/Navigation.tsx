
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '#' },
    { name: 'Services', path: '#services' },
    { name: 'Team', path: '#team' },
    { name: 'Testimonials', path: '#testimonials' },
    { name: 'Book Appointment', path: '#book' },
    { name: 'Contact', path: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="font-playfair text-xl font-semibold text-[#333]">
            Adelaide Dermatology
          </a>

          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>

          <nav className={`absolute md:relative top-16 md:top-0 left-0 right-0 bg-white/90 md:bg-transparent ${
            isOpen ? 'block' : 'hidden md:block'
          }`}>
            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 p-4 md:p-0">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => scrollToSection(e, item.path)}
                  className={`py-2 px-3 rounded-md text-[#333] hover:bg-[#FEC6A1]/10 transition-colors duration-200 ${
                    item.name === 'Contact' ? 'bg-[#FEC6A1]/20 hover:bg-[#FEC6A1]/30' : ''
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
