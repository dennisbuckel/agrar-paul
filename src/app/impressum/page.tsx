import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum - Landwirtschaftsbetrieb Paul Hantusch Leipzig',
  description: 'Impressum und rechtliche Angaben des Landwirtschaftsbetriebs Paul Hantusch in Leipzig',
  robots: 'index, follow'
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold text-green-600">
              Landwirtschaftsbetrieb Paul Hantusch
            </a>
            <a 
              href="/" 
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              ← Zurück zur Startseite
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Impressum</h1>
          
          <div className="space-y-8">
            {/* Angaben gemäß § 5 TMG */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-semibold text-lg mb-2">Paul Hantusch</p>
                <p className="text-gray-700 mb-1">Landwirtschaftsbetrieb</p>
                <p className="text-gray-700 mb-1">Einzelunternehmer</p>
                <p className="text-gray-700 mb-4">Leipzig, Deutschland</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Kontakt:</h3>
                    <p className="text-gray-700">Telefon: +49 178 5613553</p>
                    <p className="text-gray-700">E-Mail: paul.hantusch@hotmail.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Geschäftszeiten:</h3>
                    <p className="text-gray-700">Mo-Fr: 7:00-18:00 Uhr</p>
                    <p className="text-red-600 font-medium">Winterdienst: 24/7 Bereitschaft</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Berufsbezeichnung */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Berufsbezeichnung und berufsrechtliche Regelungen
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Berufsbezeichnung:</strong> Landwirt / Landwirtschaftlicher Dienstleister
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Zuständige Kammer:</strong> IHK Leipzig (Industrie- und Handelskammer zu Leipzig)
                </p>
                <p className="text-gray-700">
                  <strong>Berufsrechtliche Regelungen:</strong> Gewerbeordnung und berufsrechtliche Bestimmungen
                </p>
              </div>
            </section>

            {/* Umsatzsteuer-ID */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Umsatzsteuer-Identifikationsnummer
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                  <span className="font-mono bg-white px-2 py-1 rounded border">
                    [Wird bei Bedarf ergänzt]
                  </span>
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  * Als landwirtschaftlicher Betrieb können besondere steuerliche Regelungen gelten
                </p>
              </div>
            </section>


            {/* Streitschlichtung */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Streitschlichtung
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a 
                    href="https://ec.europa.eu/consumers/odr/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline ml-1"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p className="text-gray-700">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </section>

            {/* Haftung für Inhalte */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Haftung für Inhalte
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                  nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                  Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte 
                  fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine 
                  rechtswidrige Tätigkeit hinweisen.
                </p>
                <p className="text-gray-700">
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den 
                  allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch 
                  erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei 
                  Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
              </div>
            </section>

            {/* Haftung für Links */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Haftung für Links
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                  Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                  Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                  Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf 
                  mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der 
                  Verlinkung nicht erkennbar.
                </p>
              </div>
            </section>

            {/* Urheberrecht */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Urheberrecht
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                  dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                  der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                  Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind 
                  nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                </p>
              </div>
            </section>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              Stand: {new Date().toLocaleDateString('de-DE', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
