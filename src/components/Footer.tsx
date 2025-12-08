import { Mail, Phone, MapPin, Linkedin, Facebook } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-display font-bold text-2xl mb-6">CAP2A Consulting</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Votre partenaire de confiance pour la transformation et l'excellence opérationnelle.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/cap2a-consulting-226aab253/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/cap2a/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Navigation</h4>
            <ul className="space-y-3">
              {['Accueil', 'À propos', 'Expertise', 'Contact'].map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() =>
                      onNavigate(
                        item === 'Accueil'
                          ? 'home'
                          : item === 'À propos'
                          ? 'about'
                          : item === 'Expertise'
                          ? 'expertise'
                          : 'contact'
                      )
                    }
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400">
              {['Audit', 'Conseil','Accompagnement', 'Formation'].map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigate('expertise')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:contact@cap2a-consulting.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  contact@cap2a-consulting.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a
                    href="tel:+212 664-779420"
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    +212 664-779420
                  </a>
                  <a
                    href="tel:+212 6 63 58 72 72"
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    +212 663-587272
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">Rabat , Maroc</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              {currentYear} CAP2A Consulting. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
