'use client';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/videos/0715_compressed.webm" type="video/webm" />
          <source src="/videos/0715_compressed.mp4" type="video/mp4" />
          {/* Fallback für Browser die das Video nicht unterstützen */}
          Ihr Browser unterstützt das Video-Element nicht.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Landwirtschaftliche
          <br />
          <span className="text-green-400">Dienstleistungen Leipzig</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-6 text-gray-200 max-w-2xl mx-auto">
          Professionelle landwirtschaftliche Arbeiten, Transport und Winterdienst 
          in Leipzig und Umgebung mit modernen John Deere Maschinen
        </p>
        
        
        <p className="text-xl md:text-2xl mb-8 text-green-300 font-medium">
          Alle Geräte auch zur Miete verfügbar - mit oder ohne Fahrer
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToServices}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg"
          >
            Unsere Dienstleistungen
          </button>
          
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
          >
            Kontakt aufnehmen
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
