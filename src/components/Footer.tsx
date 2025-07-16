'use client';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Landwirtschaftsbetrieb Paul Hantusch</h3>
            <p className="text-gray-300 mb-4">
              Ihr zuverlässiger Partner für landwirtschaftliche Dienstleistungen, 
              Transport und Winterdienst in der Region.
            </p>
            <div className="text-gray-400 text-sm">
              <p>Standort: Leipzig</p>
              <p>Einsatzgebiet: 200km Umkreis</p>
              <p>Winterdienst: 24/7 Bereitschaft</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Unsere Dienstleistungen</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Arbeitskraft mit/ohne Traktor</li>
              <li>• Pflanzenschutz & Düngung</li>
              <li>• Bodenbearbeitung</li>
              <li>• Transport-Dienstleistungen</li>
              <li>• Winterdienst & Salzstreuen</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <div className="space-y-2 text-gray-300">
              <p>📞 +49 178 5613553</p>
              <p>✉️ paul.hantusch@hotmail.com</p>
              <p>🕒 Mo-Fr: 7:00-18:00 Uhr</p>
              <p className="text-red-300">🚨 Winterdienst: 24/7</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Landwirtschaftsbetrieb Paul Hantusch. Alle Rechte vorbehalten.
            </div>
            
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="/impressum" className="hover:text-white transition-colors">
                Impressum
              </a>
              <a href="/datenschutz" className="hover:text-white transition-colors">
                Datenschutz
              </a>
              <button className="hover:text-white transition-colors">
                AGB
              </button>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors duration-300 inline-flex items-center space-x-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span>Nach oben</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
