import {
  GraduationCap,
  Shield,
  Brain,
  Zap,
  Users,
  Award,
  TrendingUp,
  Leaf,
  CheckCircle,
  Activity,
} from 'lucide-react';

interface ExpertiseProps {
  onNavigate: (page: string) => void;
}

export default function Expertise({ onNavigate }: ExpertiseProps) {
  const services = [
    {
      icon: GraduationCap,
      title: 'Formation',
      description: 'Programmes de formation personnalisés pour développer les compétences de vos équipes',
      color: 'from-blue-500 to-blue-600',
      features: ['Formation sur mesure', 'E-learning', 'Certifications'],
    },
    {
      icon: Shield,
      title: 'Gestion de risque',
      description: 'Identification, analyse et mitigation des risques stratégiques et opérationnels',
      color: 'from-red-500 to-red-600',
      features: ['Audit de risques', 'Plans de mitigation', 'Conformité'],
    },
    {
      icon: Brain,
      title: 'Intelligence artificielle',
      description: 'Solutions IA innovantes pour automatiser et optimiser vos processus métier',
      color: 'from-purple-500 to-purple-600',
      features: ['Machine Learning', 'Automatisation', 'Analytics'],
    },
    {
      icon: Zap,
      title: 'Audit énergie',
      description: 'Optimisation énergétique pour réduire coûts et empreinte environnementale',
      color: 'from-yellow-500 to-yellow-600',
      features: ['Audit énergétique', 'Optimisation', 'Économies'],
    },
    {
      icon: Users,
      title: 'Accompagnement et conseil',
      description: 'Conseil stratégique personnalisé pour guider votre transformation',
      color: 'from-green-500 to-green-600',
      features: ['Stratégie', 'Transformation', 'Coaching exécutif'],
    },
    {
      icon: Award,
      title: 'Qualité',
      description: 'Systèmes de management de la qualité et certifications ISO',
      color: 'from-indigo-500 to-indigo-600',
      features: ['ISO 9001', 'Amélioration continue', 'Audits qualité'],
    },
    {
      icon: TrendingUp,
      title: 'Coaching',
      description: 'Coaching professionnel pour leaders et équipes performantes',
      color: 'from-pink-500 to-pink-600',
      features: ['Leadership', 'Performance', 'Développement personnel'],
    },
    {
      icon: Leaf,
      title: 'Développement durable',
      description: 'Stratégies RSE et développement durable pour un impact positif',
      color: 'from-emerald-500 to-emerald-600',
      features: ['RSE', 'Durabilité', 'Impact environnemental'],
    },
    {
      icon: CheckCircle,
      title: 'Agrément ONSSA',
      description: 'Accompagnement pour l\'obtention des agréments ONSSA',
      color: 'from-orange-500 to-orange-600',
      features: ['Conformité ONSSA', 'Dossiers techniques', 'Suivi'],
    },
    {
      icon: Activity,
      title: 'Santé et sécurité',
      description: 'Systèmes de management santé-sécurité au travail',
      color: 'from-cyan-500 to-cyan-600',
      features: ['ISO 45001', 'Prévention', 'Culture sécurité'],
    },
  ];

  return (
    <div className="bg-white pt-32">
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-medium border border-white/30">
                Nos Domaines d'Excellence
              </span>
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">
              Expertise Multi-Sectorielle
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Des solutions complètes et intégrées pour accompagner votre entreprise à chaque étape de sa transformation
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group perspective-1000"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-3d transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  <div className="relative p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="font-display font-bold text-2xl text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-gray-100">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <button
                        onClick={() => onNavigate('contact')}
                        className="w-full py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-600 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                      >
                        En savoir plus
                      </button>
                    </div>
                  </div>

                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-12 md:p-16 shadow-3d relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />

            <div className="relative z-10 text-center text-white">
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
                Une Approche Sur Mesure
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Chaque entreprise est unique. Nous créons des solutions personnalisées qui répondent précisément à vos besoins et objectifs stratégiques.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {[
                  { number: '01', title: 'Diagnostic', description: 'Analyse approfondie de vos besoins' },
                  { number: '02', title: 'Stratégie', description: 'Plan d\'action personnalisé' },
                  { number: '03', title: 'Exécution', description: 'Mise en œuvre et suivi' },
                ].map((step, index) => (
                  <div key={index} className="glass-effect rounded-2xl p-8 hover:bg-white/20 transition-all duration-500">
                    <div className="font-display font-bold text-5xl text-white/30 mb-4">
                      {step.number}
                    </div>
                    <h3 className="font-display font-bold text-2xl mb-3">
                      {step.title}
                    </h3>
                    <p className="text-white/80">{step.description}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="mt-12 px-10 py-5 bg-white text-primary rounded-full font-bold text-lg hover:bg-primary-50 transition-all duration-300 hover:scale-105 shadow-2xl inline-flex items-center gap-2"
              >
                Discutons de votre projet
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
