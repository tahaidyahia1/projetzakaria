import { useState } from 'react';
import {
  Search,
  Users,
  TrendingUp,
  GraduationCap,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  FileText,
  Award,
  Building,
  Shield,
  Leaf,
  Zap,
  ClipboardCheck,
} from 'lucide-react';

interface ExpertiseProps {
  onNavigate: (page: string) => void;
}

export default function Expertise({ onNavigate }: ExpertiseProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const mainServices = [
    {
      id: 'audit',
      icon: Search,
      title: 'AUDIT',
      description: 'Évaluation approfondie de vos systèmes et processus pour identifier les écarts, les opportunités d\'amélioration et garantir la conformité aux référentiels internationaux.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 'conseil',
      icon: Users,
      title: 'CONSEIL',
      description: 'Accompagnement stratégique personnalisé pour définir et mettre en œuvre les solutions adaptées à vos enjeux organisationnels, réglementaires et de performance.',
      color: 'from-green-500 to-green-600',
    },
    {
      id: 'accompagnement',
      icon: TrendingUp,
      title: 'ACCOMPAGNEMENT',
      description: 'Support opérationnel continu dans la mise en place et l\'optimisation de vos projets de transformation, certification et amélioration continue.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 'formation',
      icon: GraduationCap,
      title: 'FORMATION',
      description: 'Programmes de formation sur mesure pour développer les compétences de vos équipes et renforcer leur maîtrise des normes, méthodes et outils de management.',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  const expertiseDomains = [
    {
      id: 'laboratoires',
      icon: FileText,
      title: 'Laboratoires',
      color: 'from-teal-500 to-teal-600',
      sections: [
        {
          title: 'Mise en place de Systèmes de Management',
          items: [
            {
              subtitle: '✔️ ISO 17025:2017 – Laboratoires d\'essais et d\'étalonnages',
              points: [
                'Diagnostic de conformité initiale',
                'Mise en place du système documentaire',
                'Validation des méthodes',
                'Traçabilité métrologique',
                'Évaluation des compétences',
                'Préparation à l\'accréditation',
              ],
            },
            {
              subtitle: '✔️ ISO 15189:2012 – Laboratoires de biologie médicale',
              points: [
                'Analyse initiale du fonctionnement du laboratoire et identification des écarts par rapport à la norm',
                'Mise en place ou réorganisation du système documentaire spécifique à la biologie médicale',
                'Définition des processus pré-analytiques, analytiques et post-analytiques conformes aux exigences ISO 15189',
                'Vérification et validation des méthodes d’analyse selon les contraintes biomédicales',
                'Renforcement de la maîtrise métrologique : équipements, étalonnages, contrôles internes et externes',
                'Mise en conformité du circuit du prélèvement à la validation biologique du résultat',
                'Audit internes et audit a blanc',
            },
          ],
        },
        {
          title: 'Participation et Gestion des Essais Interlaboratoires (EIL)',
          items: [
            {
              points: [
                'Organisation des essais interlaboratoires',
                'Analyse statistique',
                'Actions correctives',
              ],
            },
          ],
        },
        {
          title: 'Formations Techniques et Managériales',
          items: [
            {
              points: [
                'BPL',
                'Techniques d\'analyse',
                'Formations ISO (17025, 15189, 9001, 19011…)',
                'Gestion des risques',
                'Validation des méthodes',
              ],
            },
          ],
        },
        {
          title: 'Audits',
          items: [
            {
              points: [
                'Audits internes',
                'Préparation aux audits d\'accréditation',
                'Audit technique',
                'Audit blanc',
                'Réponses aux organismes d\'accréditation',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'agroalimentaire',
      icon: Award,
      title: 'Industrie Agroalimentaire',
      color: 'from-green-500 to-green-600',
      sections: [
        {
          title: 'Mise en place de Systèmes de Management',
          items: [
            {
              points: [
                'ISO 22000',
                'FSSC 22000',
                'ISO 9001',
                'ISO 14001',
                'ISO 45001',
                'ISO 50001',
              ],
            },
          ],
        },
        {
          title: 'Accompagnement ONSSA',
          items: [
            {
              points: ['Agréments et autorisations'],
            },
          ],
        },
        {
          title: 'Audits',
          items: [
            {
              points: [
                'Audit interne',
                'Audit de conformité réglementaire',
              ],
            },
          ],
        },
        {
          title: 'Formation',
          items: [
            {
              points: [
                'Formations ISO',
                'BPH',
                'HACCP',
                'Audit interne',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'administration',
      icon: Building,
      title: 'Administration Publique',
      color: 'from-blue-500 to-blue-600',
      sections: [
        {
          title: 'Gouvernance, Organisation & Performance',
          items: [
            {
              points: [
                'Diagnostic organisationnel',
                'Refonte des structures',
                'Cartographie des processus',
                'Outils de gouvernance',
                'Plans d\'action stratégiques',
              ],
            },
          ],
        },
        {
          title: 'Gestion de la Qualité & Systèmes de Management',
          items: [
            {
              subtitle: '✔️ Référentiels : ISO 9001, 14001, 45001, 27001, 37001, 50001',
              points: [],
            },
            {
              subtitle: '✔️ Accompagnement : diagnostic, revue documentaire, management des risques, audits internes, préparation certification',
              points: [],
            },
          ],
        },
        {
          title: 'Gestion des Risques, Audit & Contrôle Interne',
          items: [
            {
              points: [
                'Plan d\'audit',
                'Cartographie des risques',
                'Audit de maturité',
                'Conformité réglementaire',
              ],
            },
          ],
        },
        {
          title: 'Développement Durable & RSE',
          items: [
            {
              points: [
                'Stratégies RSE',
                'Plans climat',
                'Optimisation des ressources',
                'Programmes territoriaux',
              ],
            },
          ],
        },
        {
          title: 'Appui Réglementaire',
          items: [
            {
              points: [
                'Veille juridique',
                'Analyse de conformité',
                'Harmonisation des procédures',
              ],
            },
          ],
        },
        {
          title: 'Formation',
          items: [
            {
              points: [
                'Systèmes de management',
                'Gouvernance & leadership',
                'Développement personnel',
                'Anti-corruption',
                'Sécurité SI',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'sst',
      icon: Shield,
      title: 'Santé & Sécurité au Travail (SST)',
      color: 'from-red-500 to-red-600',
      sections: [
        {
          title: 'Mise en place et amélioration SST',
          items: [
            {
              subtitle: '✔️ ISO 45001',
              points: [
                'Diagnostic initial',
                'Système documentaire',
                'Gestion des risques',
                'Programme de maîtrise des dangers',
                'Accompagnement à la certification',
              ],
            },
            {
              subtitle: '✔️ Systèmes intégrés QSE',
              points: ['Intégration ISO 9001 – 14001 – 45001'],
            },
          ],
        },
        {
          title: 'Analyse et maîtrise des risques',
          items: [
            {
              points: [
                'Chimique, biologique, électrique, machines, incendie, RPS',
                'Plans d\'action',
              ],
            },
          ],
        },
        {
          title: 'Hygiène & sécurité',
          items: [
            {
              points: [
                'Programmes SSL',
                'EPI',
                'Aménagement des locaux',
                'Gestion des déchets',
              ],
            },
          ],
        },
        {
          title: 'Formations',
          items: [
            {
              points: [
                'SST',
                'ISO 45001',
              ],
            },
          ],
        },
        {
          title: 'Audits',
          items: [
            {
              points: [
                'Audit ISO 45001',
                'Conformité légale',
              ],
            },
          ],
        },
        {
          title: 'Outils d\'amélioration',
          items: [
            {
              points: [
                '5S',
                'Lean Safety',
                'Analyse d\'incidents',
                'Tableaux de bord',
              ],
            },
          ],
        },
        {
          title: 'Gouvernance',
          items: [
            {
              points: [
                'Politiques SST',
                'Comités HSE',
                'Culture sécurité',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'durable',
      icon: Leaf,
      title: 'Développement Durable',
      color: 'from-emerald-500 to-emerald-600',
      sections: [
        {
          title: 'RSU & RSO',
          items: [
            {
              points: [
                'Diagnostic',
                'ISO 26000',
                'Plans d\'action',
                'Reporting & conformité',
              ],
            },
          ],
        },
        {
          title: 'Formation',
          items: [
            {
              points: [
                'Développement durable',
                'ODD',
                'Sensibilisation des équipes',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'energie',
      icon: Zap,
      title: 'Énergie',
      color: 'from-yellow-500 to-yellow-600',
      sections: [
        {
          title: 'Stratégie & Management',
          items: [
            {
              subtitle: '✔️ ISO 50001',
              points: [
                'Diagnostic énergétique',
                'SMEn',
                'UES',
                'Plans de performance',
                'Accompagnement certification',
              ],
            },
          ],
        },
        {
          title: 'Audit & Optimisation',
          items: [
            {
              points: [
                'Audit énergétique industriel / tertiaire / public',
                'Installations CVC, éclairage, vapeur, air comprimé…',
                'Optimisation',
              ],
            },
          ],
        },
        {
          title: 'Décarbonation & Bilan Carbone',
          items: [
            {
              points: [
                'Bilan GES',
                'Stratégies de réduction',
                'Plans de décarbonation',
                'ENR',
              ],
            },
          ],
        },
        {
          title: 'Efficacité Énergétique',
          items: [
            {
              points: [
                'PEE',
                'Comptage intelligent',
                'Optimisation procédés',
                'Conformité AMEE / réglementaire',
              ],
            },
          ],
        },
        {
          title: 'Formation',
          items: [
            {
              points: [
                'ISO 50001',
                'Gestion de l\'énergie',
                'Transition énergétique',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'inspection',
      icon: ClipboardCheck,
      title: 'Organisme d\'Inspection',
      color: 'from-slate-500 to-slate-600',
      sections: [
        {
          title: '✔️ ISO 17020 – Inspection & contrôle officiel',
          items: [
            {
              points: [
                'Formation des inspecteurs',
                'Mise en place d\'un système d\'évaluation de la conformité',
              ],
            },
          ],
        },
      ],
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
              Notre Expertise
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Des solutions complètes et intégrées pour accompagner votre entreprise à chaque étape de sa transformation
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                  Notre Méthode
                </span>
              </div>
              <h2 className="font-display font-bold text-4xl text-gray-900">
                Une Approche 360°
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nous intervenons à tous les niveaux de votre organisation avec une méthodologie éprouvée qui combine audit, conseil, accompagnement et formation pour des résultats durables.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                De la conformité réglementaire à l'optimisation énergétique, en passant par la transformation digitale, nous possédons l'expertise multi-sectorielle pour répondre à tous vos défis.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <img
                src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Excellence opérationnelle et performance"
                className="relative rounded-3xl shadow-3xl w-full object-cover h-[400px]"
              />
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">
              NOS SERVICES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {mainServices.map((service, index) => (
              <div
                key={service.id}
                className="group perspective-1000"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-3d transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  <div className="relative p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="font-display font-bold text-2xl text-gray-900 mb-4 group-hover:text-primary transition-colors break-words">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700`} />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl text-gray-900 mb-4">
              NOS EXPERTISES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Laboratoire et recherche scientifique"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="font-display font-bold text-xl mb-2">Laboratoires</h4>
                  <p className="text-white/90">Accréditation ISO 17025 & 15189</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/5029857/pexels-photo-5029857.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Industrie agroalimentaire et qualité"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="font-display font-bold text-xl mb-2">Agroalimentaire</h4>
                  <p className="text-white/90">FSSC 22000, ISO 22000 & HACCP</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {expertiseDomains.map((domain) => (
              <div
                key={domain.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => toggleSection(domain.id)}
                  className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${domain.color} rounded-xl flex items-center justify-center shadow-md`}>
                      <domain.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="font-display font-bold text-2xl text-gray-900">
                      {domain.title}
                    </h2>
                  </div>
                  {expandedSection === domain.id ? (
                    <ChevronUp className="w-6 h-6 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </button>

                {expandedSection === domain.id && (
                  <div className="px-6 pb-6 space-y-6 animate-fade-in">
                    {domain.sections.map((section, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-xl p-6">
                        <h3 className="font-display font-bold text-xl text-gray-900 mb-4">
                          {section.title}
                        </h3>
                        <div className="space-y-4">
                          {section.items.map((item, itemIdx) => (
                            <div key={itemIdx}>
                              {item.subtitle && (
                                <p className="font-semibold text-gray-800 mb-2">
                                  {item.subtitle}
                                </p>
                              )}
                              {item.points.length > 0 && (
                                <ul className="space-y-2">
                                  {item.points.map((point, pointIdx) => (
                                    <li key={pointIdx} className="flex items-start gap-2">
                                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                      <span className="text-gray-700">{point}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
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
                Prêt à démarrer votre projet ?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons vous accompagner
              </p>

              <button
                onClick={() => onNavigate('contact')}
                className="px-10 py-5 bg-white text-primary rounded-full font-bold text-lg hover:bg-primary-50 transition-all duration-300 hover:scale-105 shadow-2xl inline-flex items-center gap-2"
              >
                Contactez-nous
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
