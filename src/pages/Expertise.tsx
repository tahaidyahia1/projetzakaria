import { useState } from 'react';
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
  X,
} from 'lucide-react';

interface ExpertiseProps {
  onNavigate: (page: string) => void;
}

export default function Expertise({ onNavigate }: ExpertiseProps) {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: GraduationCap,
      title: 'Formation',
      description: 'Programmes de formation personnalisés pour développer les compétences de vos équipes',
      color: 'from-blue-500 to-blue-600',
      features: ['Formation sur mesure', 'E-learning', 'Certifications'],
      details: {
        intro: 'Nous développons des programmes de formation sur mesure pour renforcer les compétences de vos équipes et accélérer leur performance.',
        benefits: [
          'Identification précise des besoins en formation',
          'Programmes adaptés à votre secteur d\'activité',
          'Formation en présentiel, distanciel ou hybride',
          'Supports pédagogiques professionnels',
          'Évaluation et suivi post-formation',
          'Certifications reconnues'
        ],
        process: [
          'Audit des compétences et besoins',
          'Conception du programme personnalisé',
          'Animation par des experts métiers',
          'Évaluation des acquis',
          'Suivi et accompagnement'
        ]
      }
    },
    {
      icon: Shield,
      title: 'Gestion de risque',
      description: 'Identification, analyse et mitigation des risques stratégiques et opérationnels',
      color: 'from-red-500 to-red-600',
      features: ['Audit de risques', 'Plans de mitigation', 'Conformité'],
      details: {
        intro: 'Notre expertise en gestion des risques vous aide à identifier, évaluer et maîtriser les risques qui peuvent impacter votre organisation.',
        benefits: [
          'Cartographie complète des risques',
          'Évaluation quantitative et qualitative',
          'Plans de mitigation adaptés',
          'Mise en conformité réglementaire',
          'Culture de gestion des risques',
          'Tableaux de bord et reporting'
        ],
        process: [
          'Identification des risques',
          'Analyse et évaluation',
          'Élaboration des plans d\'action',
          'Mise en œuvre des mesures',
          'Suivi et révision continue'
        ]
      }
    },
    {
      icon: Brain,
      title: 'Intelligence artificielle',
      description: 'Solutions IA innovantes pour automatiser et optimiser vos processus métier',
      color: 'from-teal-500 to-teal-600',
      features: ['Machine Learning', 'Automatisation', 'Analytics'],
      details: {
        intro: 'Transformez votre entreprise avec des solutions d\'intelligence artificielle qui automatisent vos processus et génèrent de la valeur.',
        benefits: [
          'Automatisation intelligente des processus',
          'Analyse prédictive et prescriptive',
          'Optimisation des opérations',
          'Réduction des coûts opérationnels',
          'Amélioration de la prise de décision',
          'Avantage concurrentiel durable'
        ],
        process: [
          'Analyse du potentiel IA',
          'Conception de la solution',
          'Développement et entraînement',
          'Intégration et déploiement',
          'Optimisation continue'
        ]
      }
    },
    {
      icon: Zap,
      title: 'Audit énergie',
      description: 'Optimisation énergétique pour réduire coûts et empreinte environnementale',
      color: 'from-yellow-500 to-yellow-600',
      features: ['Audit énergétique', 'Optimisation', 'Économies'],
      details: {
        intro: 'Réduisez vos coûts énergétiques et votre empreinte carbone grâce à nos audits énergétiques complets et nos solutions d\'optimisation.',
        benefits: [
          'Diagnostic énergétique complet',
          'Identification des gisements d\'économie',
          'Plans d\'action priorisés',
          'Réduction significative des coûts',
          'Amélioration de l\'empreinte carbone',
          'Conformité énergétique'
        ],
        process: [
          'Analyse des consommations',
          'Audit sur site',
          'Modélisation énergétique',
          'Recommandations priorisées',
          'Accompagnement à la mise en œuvre'
        ]
      }
    },
    {
      icon: Users,
      title: 'Accompagnement et conseil',
      description: 'Conseil stratégique personnalisé pour guider votre transformation',
      color: 'from-green-500 to-green-600',
      features: ['Stratégie', 'Transformation', 'Coaching exécutif'],
      details: {
        intro: 'Bénéficiez d\'un accompagnement stratégique personnalisé pour piloter vos projets de transformation et atteindre vos objectifs.',
        benefits: [
          'Vision stratégique claire',
          'Conduite du changement',
          'Optimisation organisationnelle',
          'Amélioration de la performance',
          'Coaching des dirigeants',
          'Support opérationnel continu'
        ],
        process: [
          'Diagnostic stratégique',
          'Définition de la vision',
          'Plan de transformation',
          'Accompagnement opérationnel',
          'Mesure des résultats'
        ]
      }
    },
    {
      icon: Award,
      title: 'Qualité',
      description: 'Systèmes de management de la qualité et certifications ISO',
      color: 'from-slate-500 to-slate-600',
      features: ['ISO 9001', 'Amélioration continue', 'Audits qualité'],
      details: {
        intro: 'Mettez en place des systèmes de management de la qualité robustes et obtenez vos certifications ISO avec notre accompagnement expert.',
        benefits: [
          'Certification ISO 9001',
          'Amélioration de la satisfaction client',
          'Optimisation des processus',
          'Réduction des non-conformités',
          'Culture d\'amélioration continue',
          'Avantage commercial'
        ],
        process: [
          'Diagnostic initial',
          'Conception du système qualité',
          'Formation des équipes',
          'Mise en œuvre et documentation',
          'Audit et certification'
        ]
      }
    },
    {
      icon: TrendingUp,
      title: 'Coaching',
      description: 'Coaching professionnel pour leaders et équipes performantes',
      color: 'from-rose-500 to-rose-600',
      features: ['Leadership', 'Performance', 'Développement personnel'],
      details: {
        intro: 'Développez votre plein potentiel et celui de vos équipes grâce à un coaching professionnel adapté à vos enjeux.',
        benefits: [
          'Développement du leadership',
          'Amélioration de la performance',
          'Gestion du stress et des priorités',
          'Communication efficace',
          'Cohésion d\'équipe renforcée',
          'Atteinte des objectifs'
        ],
        process: [
          'Évaluation des besoins',
          'Définition des objectifs',
          'Sessions de coaching individuelles ou collectives',
          'Exercices pratiques et mise en situation',
          'Suivi et ajustement'
        ]
      }
    },
    {
      icon: Leaf,
      title: 'Développement durable',
      description: 'Stratégies RSE et développement durable pour un impact positif',
      color: 'from-emerald-500 to-emerald-600',
      features: ['RSE', 'Durabilité', 'Impact environnemental'],
      details: {
        intro: 'Construisez une stratégie de développement durable et de RSE qui crée de la valeur partagée pour votre entreprise et la société.',
        benefits: [
          'Stratégie RSE alignée sur votre activité',
          'Réduction de l\'impact environnemental',
          'Amélioration de l\'image de marque',
          'Engagement des parties prenantes',
          'Conformité réglementaire',
          'Création de valeur durable'
        ],
        process: [
          'Diagnostic RSE',
          'Définition de la stratégie',
          'Plan d\'action prioritaire',
          'Mise en œuvre des initiatives',
          'Reporting et communication'
        ]
      }
    },
    {
      icon: CheckCircle,
      title: 'Agrément ONSSA',
      description: 'Accompagnement pour l\'obtention des agréments ONSSA',
      color: 'from-orange-500 to-orange-600',
      features: ['Conformité ONSSA', 'Dossiers techniques', 'Suivi'],
      details: {
        intro: 'Obtenez votre agrément ONSSA avec notre accompagnement complet, de la préparation du dossier jusqu\'à l\'obtention de l\'agrément.',
        benefits: [
          'Maîtrise des exigences ONSSA',
          'Constitution du dossier technique',
          'Mise en conformité des installations',
          'Préparation aux audits',
          'Suivi de la procédure',
          'Taux de réussite élevé'
        ],
        process: [
          'Audit de conformité',
          'Plan de mise en conformité',
          'Constitution du dossier',
          'Accompagnement lors des visites',
          'Obtention de l\'agrément'
        ]
      }
    },
    {
      icon: Activity,
      title: 'Santé et sécurité',
      description: 'Systèmes de management santé-sécurité au travail',
      color: 'from-cyan-500 to-cyan-600',
      features: ['ISO 45001', 'Prévention', 'Culture sécurité'],
      details: {
        intro: 'Protégez vos collaborateurs et développez une culture de sécurité forte avec nos systèmes de management santé-sécurité au travail.',
        benefits: [
          'Réduction des accidents du travail',
          'Conformité réglementaire',
          'Certification ISO 45001',
          'Amélioration des conditions de travail',
          'Culture de prévention',
          'Réduction des coûts liés aux accidents'
        ],
        process: [
          'Évaluation des risques professionnels',
          'Plan de prévention',
          'Formation et sensibilisation',
          'Mise en place du système de management',
          'Audits et amélioration continue'
        ]
      }
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
                        onClick={() => setSelectedService(index)}
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

      {selectedService !== null && (() => {
        const service = services[selectedService];
        const ServiceIcon = service.icon;
        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={() => setSelectedService(null)}>
            <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-3d" onClick={(e) => e.stopPropagation()}>
              <div className={`relative bg-gradient-to-br ${service.color} p-8 rounded-t-3xl`}>
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:rotate-90"
                >
                  <X className="w-6 h-6 text-white" />
                </button>

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                    <ServiceIcon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="font-display font-bold text-4xl text-white">
                    {service.title}
                  </h2>
                </div>
                <p className="text-white/90 text-lg">
                  {service.description}
                </p>
              </div>

              <div className="p-8">
                <div className="mb-8">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {service.details.intro}
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="font-display font-bold text-2xl text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-primary" />
                    Bénéfices
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.details.benefits.map((benefit: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="font-display font-bold text-2xl text-gray-900 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-primary" />
                    Notre Processus
                  </h3>
                  <div className="space-y-3">
                    {service.details.process.map((step: string, idx: number) => (
                      <div key={idx} className="flex items-center gap-4 bg-gradient-to-r from-primary/5 to-transparent p-4 rounded-xl hover:from-primary/10 transition-colors">
                        <div className={`w-10 h-10 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <span className="text-white font-bold">{idx + 1}</span>
                        </div>
                        <span className="text-gray-700 font-medium">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setSelectedService(null);
                      onNavigate('contact');
                    }}
                    className="flex-1 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary-600 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    Demander un devis
                  </button>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="px-8 py-4 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}
