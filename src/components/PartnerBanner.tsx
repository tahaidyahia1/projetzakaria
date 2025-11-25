export default function PartnerBanner() {
  const partners = [
    { name: 'CNRST', image: '/partners/cnrst.png' },
    { name: 'ONSSA', image: '/partners/onssa.png' },
    { name: 'ONHYM', image: '/partners/onhym.png' },
    { name: 'SRM', image: '/partners/srm.png' },
    { name: 'Société Régionale Multiservices Fès-Meknès', image: '/partners/fes-meknes.png' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-2">
            ILS NOUS FONT{' '}
            <span className="text-primary">CONFIANCE</span>
          </h2>
        </div>

        <div className="relative overflow-hidden bg-gray-50 rounded-2xl py-12">
          <div className="flex items-center justify-center gap-12 md:gap-16 lg:gap-20 px-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="h-20 md:h-24 lg:h-28 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
