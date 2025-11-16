import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '+212664779420';
  const message = 'Bonjour, je souhaiterais obtenir plus d\'informations sur vos services.';

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {isHovered && (
        <div className="animate-slide-in-right bg-white px-4 py-2 rounded-lg shadow-lg border border-gray-200">
          <p className="text-sm font-semibold text-gray-900 whitespace-nowrap">
            Besoin d'aide ? Contactez-nous
          </p>
        </div>
      )}

      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center justify-center animate-bounce-slow"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />

        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />

        <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" style={{ animationDuration: '2s' }} />
      </button>
    </div>
  );
}
