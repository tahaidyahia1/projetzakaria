export default function PartnerBanner() {
  const partners = [
    { name: 'Royaume du Maroc', image: '/partners/royaume.png(logo).jpeg' },
    { name: 'Diversey', image: '/partners/diversay.png(logo).png' },
    { name: 'MarocPME', image: '/partners/mar.png(logo) copy.png' },
    { name: 'ANDA', image: '/partners/anda.png(logo) copy.png' },
    { name: 'Euromed', image: '/partners/euromed.png(logo).png' },
    { name: 'AMEE', image: '/partners/amee.gif' },
    { name: 'Institut Pasteur', image: '/partners/institut_pasteur.png_(logo) copy copy.png' },
    { name: 'SRM', image: '/partners/img_2608.jpeg(logo).jpeg' },
    { name: 'Euromed Logistics', image: '/partners/euromed.png(logo) copy.png' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-2">
            ILS NOUS FONT{' '}
            <span className="text-primary">CONFIANCE</span>
          </h2>
        </div>

        <div className="bg-gray-50 rounded-2xl py-16 px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-full h-32 transition-transform hover:scale-110 duration-300"
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="max-h-24 max-w-full w-auto h-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    console.error(`Failed to load: ${partner.image}`);
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
