import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Quels services propose CAP2A Consulting ?',
      answer: 'CAP2A Consulting propose une gamme complète de services en conseil stratégique : management de la qualité (ISO 9001, ISO 14001, ISO 45001), gestion des risques, amélioration continue, transformation digitale, et accompagnement dans la mise en place de systèmes de management intégré. Nous intervenons également dans l\'optimisation des processus, l\'audit organisationnel, et la formation des équipes.',
    },
    {
      question: 'Intervenez-vous partout au Maroc ?',
      answer: 'Oui, CAP2A Consulting intervient sur l\'ensemble du territoire marocain. Nous avons accompagné des entreprises dans toutes les régions du pays, de Tanger à Laâyoune. Notre équipe se déplace pour réaliser des diagnostics, des audits, des formations et assurer un suivi régulier de nos missions. Nous adaptons nos modalités d\'intervention à vos contraintes géographiques et opérationnelles.',
    },
    {
      question: 'Proposez-vous des formations certifiantes ?',
      answer: 'Oui, nous proposons des formations certifiantes dans plusieurs domaines : auditeur interne ISO 9001, ISO 14001, ISO 45001, gestion des risques, méthodes d\'amélioration continue (Lean, Six Sigma), et management de projets. Nos formations sont conçues pour être pratiques et opérationnelles, combinant théorie et études de cas réels. Nous adaptons également nos programmes aux besoins spécifiques de votre organisation avec des formations sur mesure.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-xl text-gray-600">
            Tout ce que vous devez savoir sur nos services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
              >
                <h3 className="font-display font-bold text-lg md:text-xl text-gray-900 pr-8 group-hover:text-primary transition-colors">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <div className="h-px bg-gradient-to-r from-primary-200 via-primary-300 to-primary-200 mb-6" />
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-gradient-to-br from-primary-50 to-white rounded-2xl text-center border border-primary-100">
          <p className="text-lg text-gray-700 mb-2">
            Vous avez d'autres questions ?
          </p>
          <p className="text-gray-600">
            Notre équipe est à votre disposition pour répondre à toutes vos interrogations.{' '}
            <a
              href="#contact"
              className="text-primary font-semibold hover:text-primary-600 transition-colors underline"
            >
              Contactez-nous
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
