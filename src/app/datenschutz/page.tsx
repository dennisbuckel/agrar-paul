import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung - Landwirtschaftsbetrieb Paul Hantusch Leipzig',
  description: 'Datenschutzerklärung gemäß DSGVO für den Landwirtschaftsbetrieb Paul Hantusch in Leipzig.',
  robots: 'noindex, nofollow',
};

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Datenschutz auf einen Blick</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen 
                Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Datenerfassung auf dieser Website</h3>
              <h4 className="text-lg font-medium text-gray-800 mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
              <p>
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                können Sie dem Abschnitt &ldquo;Hinweis zur Verantwortlichen Stelle&rdquo; in dieser Datenschutzerklärung entnehmen.
              </p>

              <h4 className="text-lg font-medium text-gray-800 mb-2">Wie erfassen wir Ihre Daten?</h4>
              <p>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich 
                z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben oder uns per E-Mail zusenden.
              </p>
              <p>
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere 
                IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder 
                Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
              </p>

              <h4 className="text-lg font-medium text-gray-800 mb-2">Wofür nutzen wir Ihre Daten?</h4>
              <p>
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
                Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>

              <h4 className="text-lg font-medium text-gray-800 mb-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
              <p>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
                gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung 
                oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt 
                haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das 
                Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten 
                zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Hosting</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Vercel</h3>
              <p>
                Wir hosten unsere Website bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. 
                Vercel ist ein Cloud-Hosting-Service, der es uns ermöglicht, unsere Website schnell und 
                zuverlässig bereitzustellen.
              </p>
              <p>
                Wenn Sie unsere Website besuchen, werden automatisch Informationen über Ihren Besuch in 
                sogenannten Server-Log-Dateien gespeichert, die Vercel automatisch erstellt und speichert. 
                Dies sind:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p>
                Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes 
                Interesse liegt in der ordnungsgemäßen Funktion und Sicherheit unserer Website.
              </p>
              <p>
                Weitere Informationen zum Datenschutz bei Vercel finden Sie unter: 
                <a href="https://vercel.com/legal/privacy-policy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  https://vercel.com/legal/privacy-policy
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Datenschutz</h3>
              <p>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln 
                Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzbestimmungen 
                sowie dieser Datenschutzerklärung.
              </p>
              <p>
                Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. 
                Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. 
                Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. 
                Sie erläutert auch, wie und zu welchem Zweck das geschieht.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Hinweis zur verantwortlichen Stelle</h3>
              <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
              <div className="bg-gray-100 p-4 rounded-lg my-4">
                <p><strong>Paul Hantusch</strong><br />
                Landwirtschaftsbetrieb<br />
                Leipzig<br />
                Deutschland</p>
                <p>Telefon: +49 178 5613553<br />
                E-Mail: paul.hantusch@hotmail.com</p>
              </div>
              <p>
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam 
                mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten 
                (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Speicherdauer</h3>
              <p>
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, 
                verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. 
                Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung 
                widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für 
                die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche 
                Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
              <p>
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. 
                Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der 
                bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
              <p>
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer 
                Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres 
                Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht 
                unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Recht auf Datenübertragbarkeit</h3>
              <p>
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines 
                Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, 
                maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten 
                an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Auskunft, Löschung und Berichtigung</h3>
              <p>
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche 
                Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den 
                Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. 
                Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit 
                an uns wenden.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Recht auf Einschränkung der Verarbeitung</h3>
              <p>
                Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. 
                Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht 
                in folgenden Fällen:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten</li>
                <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht</li>
                <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, 
                    Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen</li>
                <li>Wenn Sie Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Datenerfassung auf dieser Website</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Server-Log-Dateien</h3>
              <p>
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten 
                Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p>
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
              </p>
              <p>
                Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. 
                Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung 
                und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Kontaktformular</h3>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben 
                wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, 
                sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung 
                vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung 
                auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten 
                Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) 
                sofern diese abgefragt wurde.
              </p>
              <p>
                Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur 
                Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die 
                Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). 
                Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Anfrage per E-Mail, Telefon oder Telefax</h3>
              <p>
                Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive 
                aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung 
                Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre 
                Einwilligung weiter.
              </p>
              <p>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, 
                sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung 
                vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung 
                auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten 
                Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) 
                sofern diese abgefragt wurde.
              </p>
              <p>
                Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns 
                zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für 
                die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). 
                Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. SSL- bzw. TLS-Verschlüsselung</h2>
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, 
                wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine 
                SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die 
                Adresszeile des Browsers von &ldquo;http://&rdquo; auf &ldquo;https://&rdquo; wechselt und an dem Schloss-Symbol in
                Ihrer Browserzeile.
              </p>
              <p>
                Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns 
                übermitteln, nicht von Dritten mitgelesen werden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Änderungen dieser Datenschutzerklärung</h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen 
                rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der 
                Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten 
                Besuch gilt dann die neue Datenschutzerklärung.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Stand: {new Date().toLocaleDateString('de-DE', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
