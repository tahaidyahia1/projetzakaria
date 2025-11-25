export default function PartnerBanner() {
  const partners = [
    { name: 'CNRST', image: '/partners/cnrst.png' },
    { name: 'ONSSA', image: '/partners/onssa.png' },
    { name: 'ONHYM', image: '/partners/onhym.png' },
    { name: 'SRM', image: '/partners/srm.png' },
    { name: 'Société Régionale Multiservices Fès-Meknès', image: '/partners/fes-meknes.png' },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="w-full h-auto max-h-24 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
