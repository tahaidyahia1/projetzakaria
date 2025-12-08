import { Target, Eye, Heart, CheckCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function About() {
  const [counters, setCounters] = useState({ years: 0, clients: 0, projects: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;

    const targets = { years: 8, clients: 200, projects: 500 };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounters({
        years: Math.floor(targets.years * progress),
        clients: Math.floor(targets.clients * progress),
        projects: Math.floor(targets.projects * progress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, increment);
  };

  const timeline = [
    { year: '2018', title: 'Fondation', description: 'Création de CAP2A Consulting avec une vision claire' },
    { year: '2020', title: 'Développement', description: 'Développement de nouveaux services et domaines d\'expertise' },
    { year: '2022', title: 'Innovation', description: 'Intégration de l\'IA et des technologies avancées' },
    { year: '2024', title: 'Excellence', description: 'Leader reconnu dans le conseil stratégique' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous visons la perfection dans chaque projet',
    },
    {
      icon: Heart,
      title: 'Engagement',
      description: 'Votre succès est notre priorité absolue',
    },
    {
      icon: CheckCircle,
      title: 'Intégrité',
      description: 'Transparence et honnêteté dans nos relations',
    },
    {
      icon: Eye,
      title: 'Innovation',
      description: 'Solutions créatives et avant-gardistes',
    },
  ];

  return (
    <div className="bg-white pt-32">
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="font-display font-bold text-5xl md:text-6xl text-gray-900 mb-6">
              À Propos de CAP2A
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Depuis 2018, CAP2A Consulting accompagne les entreprises dans leur transformation et leur croissance avec expertise et passion.
            </p>
          </div>

          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { value: counters.years, suffix: '+', label: 'Années d\'expertise' },
              { value: counters.clients, suffix: '+', label: 'Clients accompagnés' },
              { value: counters.projects, suffix: '+', label: 'Projets réussis' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-10 bg-white rounded-3xl shadow-3d hover:scale-105 transition-all duration-500"
              >
                <div className="font-display font-bold text-6xl text-primary mb-3">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-600 font-semibold text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                  Notre Mission
                </span>
              </div>
              <h2 className="font-display font-bold text-4xl text-gray-900 mb-6">
                Transformer les Défis en Opportunités
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Chez CAP2A Consulting, nous croyons que chaque entreprise possède un potentiel unique. Notre mission est de révéler ce potentiel en offrant des solutions de conseil stratégique personnalisées et innovantes.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nous combinons expertise technique, connaissance approfondie des secteurs et approche humaine pour garantir des résultats durables et mesurables.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-primary-200 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Vision stratégique et innovation"
                className="relative rounded-3xl shadow-3xl w-full object-cover h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4">
              Notre Histoire
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un parcours marqué par l'innovation et la croissance
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200 hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1 text-center md:text-right" style={index % 2 !== 0 ? { textAlign: 'left' } : {}}>
                    <div className="inline-block p-8 bg-white rounded-2xl shadow-3d hover:scale-105 transition-all duration-500">
                      <div className="font-display font-bold text-3xl text-primary mb-3">
                        {item.year}
                      </div>
                      <h3 className="font-display font-bold text-2xl text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg" />
                  </div>

                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
              <img
                src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Collaboration et travail d'équipe"
                className="relative rounded-3xl shadow-3xl w-full object-cover h-[400px]"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                  Notre Approche
                </span>
              </div>
              <h3 className="font-display font-bold text-3xl text-gray-900">
                Une Méthodologie solide, basée sur des bonnes pratiques internationales
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Notre méthodologie éprouvée combine analyse rigoureuse, expertise sectorielle et innovation continue. Nous travaillons main dans la main avec nos clients pour garantir des résultats mesurables et durables.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Chaque projet est unique, c'est pourquoi nous adaptons notre approche à vos besoins spécifiques tout en nous appuyant sur les meilleures pratiques internationales.
              </p>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident notre action au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-primary-50 to-white rounded-2xl hover:shadow-3d transition-all duration-500 hover:scale-105 hover:from-primary-100"
              >
                <value.icon className="w-14 h-14 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
