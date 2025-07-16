'use client';

import Image from 'next/image';
import { services, categories } from '@/data/services';

const Services = () => {
  const groupedServices = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof services>);

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-green-50 to-amber-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-green-600">
          <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12,2L8,8H16L12,2M12,10L8,16H16L12,10M12,18L8,24H16L12,18Z"/>
          </svg>
        </div>
        <div className="absolute top-40 right-20 text-amber-600">
          <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
          </svg>
        </div>
        <div className="absolute bottom-20 left-1/4 text-green-600">
          <svg className="w-28 h-28" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7,2V4H8V18A4,4 0 0,0 12,22A4,4 0 0,0 16,18V4H17V2H7M9,4H15V18A2,2 0 0,1 12,20A2,2 0 0,1 10,18V4H9Z"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative">
            Unsere Dienstleistungen
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-green-600 to-amber-600 rounded-full"></div>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Von der Arbeitskraft bis zum Winterdienst - wir bieten Ihnen professionelle 
            landwirtschaftliche Dienstleistungen mit modernen Maschinen und erfahrener Bedienung.
          </p>
          <p className="text-lg text-green-600 font-semibold max-w-2xl mx-auto">
            Flexibel buchbar: Vollservice mit Fahrer oder nur Gerätevermietung
          </p>
        </div>

        {/* Service Categories */}
        <div className="space-y-20">
          {Object.entries(groupedServices).map(([categoryKey, categoryServices]) => {
            const category = categories[categoryKey as keyof typeof categories];
            return (
              <div key={categoryKey} className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-green-100 hover:shadow-2xl transition-all duration-500">
                {/* Category Header with enhanced design */}
                <div className={`${category.color} text-white py-12 px-8 relative overflow-hidden`}>
                  <div className="text-center">
                    <h3 className="text-3xl md:text-4xl font-bold mb-3">{category.title}</h3>
                    <div className="w-16 h-1 bg-white/50 mx-auto mb-4 rounded-full"></div>
                    <p className="text-lg md:text-xl opacity-90">{category.description}</p>
                  </div>
                </div>

                {/* Services in Category */}
                <div className="p-8 md:p-12">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoryServices.map((service) => (
                      <div key={service.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                        {/* Service Image */}
                        <div className="relative h-64 overflow-hidden">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          
                          {/* Overlay gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* Service Content */}
                        <div className="p-6">
                          <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                            {service.title}
                          </h4>
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {service.description}
                          </p>
                          
                          {/* Service Details */}
                          <ul className="space-y-2">
                            {service.details.map((detail, index) => (
                              <li key={index} className="flex items-start text-sm text-gray-700">
                                <svg className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-3xl p-12 max-w-3xl mx-auto shadow-2xl">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Interesse an unseren Dienstleistungen?
              </h3>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Rufen Sie uns an für ein unverbindliches Angebot oder bei Fragen zu unseren Leistungen. 
                Wir beraten Sie gerne persönlich!
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-green-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Jetzt Kontakt aufnehmen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
