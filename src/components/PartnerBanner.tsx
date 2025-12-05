export default function PartnerBanner() {
  const partners = [
    { name: 'Royaume du Maroc', image: 'https://www.maroc.ma/sites/default/files/armoiries-png.png' },
    { name: 'MarocPME', image: 'https://www.marocpme.ma/themes/custom/maroc_pme/logo.svg' },
    { name: 'Euromed', image: 'https://www.euromed-management.com/sites/default/files/logo-euromed-school-of-business.png' },
    { name: 'AMEE', image: 'https://www.amee.ma/sites/default/files/logo-amee.png' },
    { name: 'Institut Pasteur', image: 'https://www.pasteur.ma/sites/default/files/logo-institut-pasteur-maroc.png' },
    { name: 'ANA', image: 'https://www.onee.ma/sites/default/files/logo-ana.png' },
    { name: 'CNRST', image: 'https://www.cnrst.ma/sites/default/files/logo-cnrst.png' },
    { name: 'ONSSA', image: 'https://www.onssa.gov.ma/sites/default/files/logo-onssa.png' },
    { name: 'ONHYM', image: 'https://www.onhym.com/sites/default/files/logo-onhym.png' },
    { name: 'SRM', image: 'https://www.srmfqih.ma/sites/default/files/logo-srm.png' },
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
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 items-center justify-items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-full h-32 transition-transform hover:scale-110 duration-300 group"
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="max-h-24 max-w-full w-auto h-auto object-contain transition-all duration-300 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
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
