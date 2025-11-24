import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div
            className="cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <h1
              className={`font-display font-bold text-2xl lg:text-3xl transition-colors ${
                isScrolled ? 'text-primary' : 'text-white'
              } group-hover:text-primary-400`}
            >
              CAP2A Consulting
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`font-medium text-sm lg:text-base transition-all duration-300 relative group ${
                  currentPage === item.id
                    ? isScrolled
                      ? 'text-primary'
                      : 'text-white'
                    : isScrolled
                    ? 'text-gray-600 hover:text-primary'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                    currentPage === item.id ? 'w-full' : ''
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            className={`md:hidden ${isScrolled ? 'text-primary' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl mt-2 rounded-b-2xl overflow-hidden animate-slide-up">
            <div className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left py-3 px-4 rounded-lg font-medium transition-all ${
                    currentPage === item.id
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:bg-primary-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
