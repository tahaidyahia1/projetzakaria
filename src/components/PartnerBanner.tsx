export default function PartnerBanner() {
  const partners = [
    { name: 'CNRST', image: '/partners/cnrst.png (CNRST logo).png' },
    { name: 'ONSSA', image: '/partners/onssa.png (ONSSA logo).png' },
    { name: 'ONHYM', image: '/partners/onhym.png (ONHYM logo).png' },
    { name: 'SRM', image: '/partners/srm.png (SRM logo).png' },
    { name: 'Fès-Meknès', image: '/logoooooo.png' },
    { name: 'Institut Pasteur', image: '/partners/institut pasteur (logo).png' },
    { name: 'Royaume du Maroc', image: '/partners/royaume(logo).jpeg' },
    { name: 'ANA', image: '/partners/ana (logo).jpeg' },
    { name: 'Diversey', image: '/partners/diversay(logo).png' },
    { name: 'Euromed', image: '/partners/euromed(logo).png' },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-2">
            ILS NOUS FONT{' '}
            <span className="text-primary">CONFIANCE</span>
          </h2>
        </div>

        <div className="relative bg-gray-50 rounded-2xl py-12 overflow-hidden">
          <div className="flex animate-scroll">
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center px-12"
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="h-20 md:h-24 lg:h-28 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          display: flex;
          animation: scroll 20s linear infinite;
          width: fit-content;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
