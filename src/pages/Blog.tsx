import { Calendar, User, ArrowRight, TrendingUp, X } from 'lucide-react';
import { useState } from 'react';

interface BlogProps {
  onNavigate: (page: string) => void;
}

export default function Blog({ onNavigate }: BlogProps) {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);
  const articles = [
    {
      id: 1,
      title: 'Comment améliorer la qualité dans votre entreprise ?',
      excerpt: 'Découvrez les meilleures pratiques et méthodologies pour implémenter un système de management de la qualité efficace et durable dans votre organisation.',
      content: `La qualité est un facteur déterminant de la compétitivité des entreprises. Dans un contexte économique de plus en plus exigeant, mettre en place une démarche qualité structurée n'est plus une option mais une nécessité.

**Les fondamentaux d'une démarche qualité réussie**

1. **Engagement de la direction** : La démarche qualité doit être portée au plus haut niveau de l'entreprise. Sans cet engagement, les initiatives qualité risquent de manquer de ressources et de légitimité.

2. **Approche processus** : Identifier et cartographier les processus clés de votre organisation permet de mieux comprendre les interactions et d'optimiser les flux de travail.

3. **Implication du personnel** : Les collaborateurs sont au cœur de la qualité. Leur formation, leur sensibilisation et leur participation active sont essentielles.

**Mise en œuvre concrète**

- Réaliser un diagnostic initial pour identifier les axes d'amélioration
- Définir des objectifs qualité mesurables et réalistes
- Mettre en place des indicateurs de performance (KPI)
- Organiser des audits internes réguliers
- Instaurer une culture d'amélioration continue

**Les bénéfices tangibles**

Une démarche qualité bien menée génère des résultats concrets : réduction des coûts de non-qualité, amélioration de la satisfaction client, optimisation des processus, et valorisation de l'image de marque.

Chez CAP2A Consulting, nous accompagnons les entreprises dans la mise en place de systèmes de management de la qualité certifiables (ISO 9001, ISO 14001, ISO 45001) et adaptons nos méthodologies à votre contexte spécifique.`,
      author: 'Équipe CAP2A',
      date: '15 Janvier 2025',
      category: 'Qualité',
      readTime: '5 min',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: 2,
      title: 'L\'IA pour optimiser la gestion des risques',
      excerpt: 'L\'intelligence artificielle révolutionne la gestion des risques en entreprise. Explorez comment cette technologie peut transformer votre approche de la prévention et de la maîtrise des risques.',
      content: `L'intelligence artificielle (IA) transforme profondément la manière dont les entreprises identifient, évaluent et gèrent leurs risques. Cette révolution technologique offre des opportunités sans précédent pour améliorer la résilience organisationnelle.

**L'IA au service de l'identification des risques**

Les algorithmes d'apprentissage automatique peuvent analyser d'énormes volumes de données pour détecter des patterns et des signaux faibles qu'un analyste humain pourrait manquer. Cette capacité d'analyse prédictive permet d'anticiper les risques avant qu'ils ne se matérialisent.

**Applications concrètes**

1. **Analyse prédictive** : L'IA peut prédire les défaillances opérationnelles, les risques de conformité ou les fluctuations du marché avec une précision accrue.

2. **Surveillance continue** : Des systèmes automatisés surveillent en temps réel les indicateurs de risque et alertent immédiatement en cas d'anomalie.

3. **Simulation de scénarios** : Les modèles d'IA permettent de simuler différents scénarios de crise et d'évaluer l'impact potentiel sur l'organisation.

**Mise en œuvre stratégique**

L'intégration de l'IA dans la gestion des risques nécessite une approche méthodique :

- Audit des processus de gestion des risques existants
- Identification des cas d'usage prioritaires
- Sélection des technologies adaptées
- Formation des équipes
- Pilotage et amélioration continue

**Les défis à relever**

Si l'IA offre des possibilités remarquables, son déploiement soulève aussi des questions : qualité des données, biais algorithmiques, acceptabilité par les équipes, et gouvernance de l'IA.

**Notre expertise**

CAP2A Consulting accompagne les organisations dans l'intégration de solutions d'IA pour la gestion des risques. Nous combinons expertise métier et maîtrise technologique pour déployer des solutions pragmatiques et efficaces.

L'avenir de la gestion des risques est résolument technologique. Les entreprises qui sauront tirer parti de l'IA disposeront d'un avantage compétitif décisif.`,
      author: 'Équipe CAP2A',
      date: '10 Janvier 2025',
      category: 'Innovation',
      readTime: '6 min',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ];

  return (
    <div className="bg-white pt-32">
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-primary-600 text-white rounded-full text-sm font-semibold">
                Blog & Actualités
              </span>
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-gray-900 mb-6">
              Insights & Expertise
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez nos analyses, conseils et perspectives sur les enjeux du conseil stratégique et de la transformation digitale
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {articles.map((article, index) => (
              <article
                key={article.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-3d transition-all duration-500"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover min-h-[400px] group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Calendar size={16} />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <TrendingUp size={16} />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4 group-hover:text-primary transition-colors">
                      {article.title}
                    </h2>

                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>

                    <div className="prose prose-lg max-w-none mb-8">
                      {article.content.split('\n\n').slice(0, 2).map((paragraph, idx) => (
                        <p key={idx} className="text-gray-700 leading-relaxed mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                      <div className="flex items-center gap-3">
                        <User className="w-10 h-10 text-primary bg-primary-100 rounded-full p-2" />
                        <div>
                          <div className="font-semibold text-gray-900">{article.author}</div>
                          <div className="text-sm text-gray-500">Expert CAP2A</div>
                        </div>
                      </div>

                      <button
                        onClick={() => setSelectedArticle(article.id)}
                        className="group/btn flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-600 transition-all duration-300 hover:scale-105"
                      >
                        En savoir plus
                        <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
            Besoin d'un accompagnement personnalisé ?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Nos experts sont à votre disposition pour discuter de vos projets et défis
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="group px-10 py-5 bg-white text-primary rounded-full font-bold text-lg hover:bg-primary-50 transition-all duration-300 hover:scale-105 shadow-2xl inline-flex items-center gap-2"
          >
            Contactez-nous
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={22} />
          </button>
        </div>
      </section>

      {selectedArticle && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelectedArticle(null)}>
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-3xl" onClick={(e) => e.stopPropagation()}>
            {articles.filter(a => a.id === selectedArticle).map(article => (
              <div key={article.id}>
                <div className="relative h-[300px] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    <X size={24} className="text-gray-700" />
                  </button>
                </div>

                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar size={16} />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <TrendingUp size={16} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-6">
                    {article.title}
                  </h2>

                  <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-200">
                    <User className="w-12 h-12 text-primary bg-primary-100 rounded-full p-2" />
                    <div>
                      <div className="font-semibold text-gray-900">{article.author}</div>
                      <div className="text-sm text-gray-500">Expert CAP2A</div>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    {article.content.split('\n\n').map((paragraph, idx) => {
                      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                        return (
                          <h3 key={idx} className="font-display font-bold text-2xl text-gray-900 mt-8 mb-4">
                            {paragraph.replace(/\*\*/g, '')}
                          </h3>
                        );
                      }
                      if (paragraph.startsWith('1.') || paragraph.startsWith('2.') || paragraph.startsWith('3.') || paragraph.startsWith('-')) {
                        return (
                          <p key={idx} className="text-gray-700 leading-relaxed mb-3 ml-4">
                            {paragraph}
                          </p>
                        );
                      }
                      return (
                        <p key={idx} className="text-gray-700 leading-relaxed mb-6">
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>

                  <div className="mt-12 p-6 bg-primary-50 rounded-2xl">
                    <h3 className="font-display font-bold text-xl text-gray-900 mb-3">
                      Intéressé par nos services ?
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons vous accompagner.
                    </p>
                    <button
                      onClick={() => {
                        setSelectedArticle(null);
                        onNavigate('contact');
                      }}
                      className="group flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-600 transition-all duration-300 hover:scale-105"
                    >
                      Contactez-nous
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
