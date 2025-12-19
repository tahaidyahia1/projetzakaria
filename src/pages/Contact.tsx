import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import FAQ from '../components/FAQ';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@cap2a-consulting.com',
      link: 'mailto:contact@cap2a-consulting.com',
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: ['+212 664-779420', '+212 663-587272'],
      link: null,
    },
    {
      icon: MapPin,
      title: 'Adresse',
      value: 'Mahaj riad , Appt 6 , Imm6 , Rabat , Maroc',
      link: null,
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
                Contactez-nous
              </span>
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">
              Parlons de Votre Projet
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Notre équipe d'experts est prête à vous accompagner. Contactez-nous pour une consultation gratuite.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-3d transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl text-gray-900 mb-2">
                  {info.title}
                </h3>
                {Array.isArray(info.value) ? (
                  <div className="space-y-1">
                    {info.value.map((val, idx) => (
                      <a
                        key={idx}
                        href={`tel:${val}`}
                        className="block text-primary hover:text-primary-600 font-medium transition-colors"
                      >
                        {val}
                      </a>
                    ))}
                  </div>
                ) : info.link ? (
                  <a
                    href={info.link}
                    className="text-primary hover:text-primary-600 font-medium transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-600 font-medium">{info.value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <h2 className="font-display font-bold text-3xl text-gray-900 mb-6">
                Envoyez-nous un message
              </h2>

              {isSubmitted ? (
                <div className="py-12 text-center animate-scale-in">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">
                    Message envoyé !
                  </h3>
                  <p className="text-gray-600">
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                      placeholder="+212 664-779420"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors resize-none"
                      placeholder="Décrivez votre projet ou vos besoins..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    Envoyer le message
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-8 md:p-10 text-white shadow-3d">
                <h3 className="font-display font-bold text-3xl mb-4">
                  Pourquoi nous contacter ?
                </h3>
                <ul className="space-y-4">
                  {[
                    'Consultation gratuite personnalisée',
                    'Expertise multi-sectorielle',
                    'Réponse rapide sous 24h',
                    'Accompagnement sur mesure',
                    'Équipe d\'experts dédiée',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-white/95">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Bureau moderne et professionnel"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-gray-900 mb-2">
                    Notre Bureau
                  </h3>
                  <p className="text-gray-600">
                    Mahaj riad appt 6 , Rabat , Maroc
                  </p>
                  <p className="text-sm text-gray-500 mt-4">
                    Nous sommes situés au cœur de Rabat pour mieux vous servir.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white shadow-3d">
                <h3 className="font-display font-bold text-2xl mb-4">
                  Horaires d'ouverture
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span className="font-medium">Lundi - Vendredi</span>
                    <span className="text-white/80">8h30 - 18h00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Samedi</span>
                    <span className="text-white/80">9h00 - 12h30</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </div>
  );
}
