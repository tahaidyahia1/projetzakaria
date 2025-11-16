import { ArrowRight, Sparkles, TrendingUp, Users, Award } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;

      const shapes = heroRef.current.querySelectorAll('.floating-shape');
      shapes.forEach((shape, index) => {
        const factor = (index + 1) * 0.5;
        (shape as HTMLElement).style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'Solutions avant-gardistes adaptées à vos défis',
    },
    {
      icon: TrendingUp,
      title: 'Performance',
      description: 'Optimisation continue de vos processus',
    },
    {
      icon: Users,
      title: 'Accompagnement',
      description: 'Expertise dédiée à votre réussite',
    },
  ];

  return (
    <div className="bg-white">
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-700 to-primary-500"
      >
        <div className="floating-shape absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl transition-transform duration-300 ease-out" />
        <div className="floating-shape absolute top-40 right-20 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl transition-transform duration-300 ease-out" />
        <div className="floating-shape absolute bottom-20 left-1/3 w-80 h-80 bg-white/5 rounded-full blur-3xl transition-transform duration-300 ease-out" />

        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
              Transformez Votre
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-100 to-white">
                Vision en Réalité
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light">
              CAP2A Consulting accompagne votre entreprise vers l'excellence avec des solutions innovantes et sur mesure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => onNavigate('contact')}
                className="group px-8 py-4 bg-white text-primary rounded-full font-semibold text-lg hover:bg-primary-50 transition-all duration-300 hover:scale-105 shadow-2xl flex items-center gap-2"
              >
                Commencer
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button
                onClick={() => onNavigate('expertise')}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Nos Expertises
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4">
              Pourquoi Choisir CAP2A ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une expertise reconnue au service de votre croissance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '8+', label: 'Années d\'expérience' },
              { number: '200+', label: 'Clients satisfaits' },
              { number: '500+', label: 'Projets réalisés' },
              { number: '98%', label: 'Taux de satisfaction' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-white hover:shadow-3d transition-all duration-500 hover:scale-105"
              >
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="font-display font-bold text-5xl text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
            Prêt à Transformer Votre Entreprise ?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Discutons de vos projets et découvrez comment nous pouvons vous accompagner
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="group px-10 py-5 bg-white text-primary rounded-full font-bold text-lg hover:bg-primary-50 transition-all duration-300 hover:scale-105 shadow-2xl inline-flex items-center gap-2"
          >
            Démarrer votre projet
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={22} />
          </button>
        </div>
      </section>
    </div>
  );
}
