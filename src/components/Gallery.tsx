'use client';

import Image from 'next/image';
import { useState } from 'react';
import { services } from '@/data/services';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Filter out the placeholder image for bodenbearbeitung
  const galleryImages = services.filter(service => service.id !== 'bodenbearbeitung');

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Unsere Maschinen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Moderne und leistungsstarke Maschinen für alle landwirtschaftlichen Arbeiten. 
            Klicken Sie auf ein Bild für eine größere Ansicht.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((service) => (
            <div
              key={service.id}
              className="group cursor-pointer"
              onClick={() => openLightbox(service.image)}
            >
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                  <div className="p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-sm opacity-90">{service.description}</p>
                  </div>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 bg-white bg-opacity-80 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Missing Image Notice */}
        <div className="mt-12 text-center">
          <div className="bg-gray-100 rounded-xl p-8 max-w-md mx-auto">
            <div className="text-4xl mb-4">🚜</div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Horsch Tiger 6 AS
            </h3>
            <p className="text-gray-600 text-sm">
              Bild der Bodenbearbeitungsmaschine folgt in Kürze
            </p>
          </div>
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl max-h-full">
              <Image
                src={selectedImage}
                alt="Vergrößerte Ansicht"
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain"
              />
              
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
