import { ArrowLeft, CheckCircle } from 'lucide-react';
import { servicesData } from '../data/servicesData';

interface ServiceDetailProps {
  serviceId: string;
  onNavigate: (page: string) => void;
}

export default function ServiceDetail({ serviceId, onNavigate }: ServiceDetailProps) {
  const service = servicesData.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen pt-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl text-gray-900 mb-4">
            Service non trouvé
          </h1>
          <button
            onClick={() => onNavigate('expertise')}
            className="text-primary hover:text-primary-600 font-semibold"
          >
            Retour aux expertises
          </button>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="bg-white pt-32">
      <button
        onClick={() => onNavigate('expertise')}
        className="fixed top-32 left-6 lg:left-8 z-40 flex items-center gap-2 px-4 py-2 bg-white text-primary rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
      >
        <ArrowLeft size={20} />
        Retour
      </button>

      <section className={`py-20 bg-gradient-to-br ${service.color} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="inline-block w-24 h-24 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center mb-6 shadow-2xl">
              <Icon className="w-12 h-12 text-white" />
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="font-display font-bold text-3xl text-gray-900 mb-6">
                Description
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {service.fullDescription}
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8 shadow-lg">
              <h3 className="font-display font-bold text-2xl text-gray-900 mb-6">
                Avantages clés
              </h3>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100">
              <h3 className="font-display font-bold text-2xl text-gray-900 mb-6">
                Notre Approche
              </h3>
              <ol className="space-y-4">
                {service.approach.map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}>
                      {index + 1}
                    </div>
                    <div className="flex-1 pt-2">
                      <p className="text-gray-700 font-medium">{step}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100">
              <h3 className="font-display font-bold text-2xl text-gray-900 mb-6">
                Livrables
              </h3>
              <ul className="space-y-4">
                {service.deliverables.map((deliverable, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className={`w-2 h-2 bg-gradient-to-br ${service.color} rounded-full flex-shrink-0 mt-2`} />
                    <span className="text-gray-700">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={`py-20 bg-gradient-to-br ${service.color}`}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl text-white mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Nos experts sont à votre disposition pour discuter de vos besoins et vous proposer une solution sur mesure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="px-10 py-5 bg-white text-gray-900 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              Contactez-nous
            </button>
            <button
              onClick={() => onNavigate('expertise')}
              className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              Voir toutes nos expertises
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
