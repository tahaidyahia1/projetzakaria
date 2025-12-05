export default function PartnerBanner() {
  const partners = [
    { name: 'Royaume du Maroc', image: 'https://placehold.co/200x100/e8e8e8/666666?text=Royaume+du+Maroc' },
    { name: 'Diversey', image: 'https://placehold.co/200x100/e8e8e8/666666?text=Diversey' },
    { name: 'MarocPME', image: 'https://placehold.co/200x100/e8e8e8/666666?text=MarocPME' },
    { name: 'ANDA', image: 'https://placehold.co/200x100/e8e8e8/666666?text=ANDA' },
    { name: 'Euromed', image: 'https://placehold.co/200x100/e8e8e8/666666?text=Euromed' },
    { name: 'AMEE', image: 'https://placehold.co/200x100/e8e8e8/666666?text=AMEE' },
    { name: 'Institut Pasteur', image: 'https://placehold.co/200x100/e8e8e8/666666?text=Institut+Pasteur' },
    { name: 'ANA', image: 'https://placehold.co/200x100/e8e8e8/666666?text=ANA' },
    { name: 'CNRST', image: 'https://placehold.co/200x100/e8e8e8/666666?text=CNRST' },
    { name: 'ONSSA', image: 'https://placehold.co/200x100/e8e8e8/666666?text=ONSSA' },
    { name: 'ONHYM', image: 'https://placehold.co/200x100/e8e8e8/666666?text=ONHYM' },
    { name: 'SRM', image: 'https://placehold.co/200x100/e8e8e8/666666?text=SRM' },
    { name: 'Fes-Meknes University', image: 'https://placehold.co/200x100/e8e8e8/666666?text=Fes+Meknes' },
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
