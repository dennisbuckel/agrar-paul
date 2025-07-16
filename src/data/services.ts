export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'arbeitskraft' | 'landwirtschaft' | 'transport' | 'winterdienst';
  details: string[];
}

export const services: Service[] = [
  {
    id: 'paul-hantusch',
    title: 'Paul Hantusch',
    description: 'Geschäftsführer mit Bachelor Agrarmanagement und umfassender Erfahrung',
    image: '/images/maschinen/Paul.jpg',
    category: 'arbeitskraft',
    details: [
      '25 Jahre alt',
      'Geschäftsführer',
      'Bachelor Agrarmanagement',
      'Viel Erfahrung in allen Bereichen der Landwirtschaft',
      'Kompetente Beratung und Durchführung'
    ]
  },
  {
    id: 'traktor',
    title: 'Arbeitskraft mit Traktor',
    description: 'John Deere 6.250 R mit 250 PS für alle landwirtschaftlichen Arbeiten',
    image: '/images/maschinen/john-deere-6250r.jpg',
    category: 'arbeitskraft',
    details: [
      'John Deere 6.250 R Traktor',
      '250 PS Leistung',
      'Mit und ohne Arbeitsgeräte verfügbar',
      'Erfahrener Fahrer inklusive'
    ]
  },
  {
    id: 'pflanzenschutz',
    title: 'Pflanzenschutz',
    description: 'Professioneller Pflanzenschutz mit moderner Inuma Spritze',
    image: '/images/maschinen/inuma-spritze.jpg',
    category: 'landwirtschaft',
    details: [
      'Inuma 5036',
      '36m Arbeitsbreite',
      'Teilbreitenschaltung',
      'GPS-Unterstüzung',
      'Präzise Ausbringung',
      'Fachgerechte Durchführung'
    ]
  },
  {
    id: 'duengung',
    title: 'Düngerstreuen',
    description: 'Gleichmäßige Düngerverteilung mit Rauch-Axera HEMC',
    image: '/images/maschinen/rauch-axera-hemc.jpg',
    category: 'landwirtschaft',
    details: [
      'Rauch-Axera HEMC',
      'Gleichmäßige Verteilung',
      'bis 36m Arbeitsbreite',
    ]
  },
  {
    id: 'bodenbearbeitung',
    title: 'Strohstriegeln',
    description: '',
    image: '/images/maschinen/haeckselwagen-40-kubik.jpg',
    category: 'landwirtschaft',
    details: [
      'Claydon Strohstriegel',
      '7,5 m Arbeitsbreite',
      'bis 20 km/h möglich',
      '2-3 cm Bodeneingriff',
      'optimaler Stoppelsturz und Strohverteilung',
    ]
  },
  {
    id: 'schuettgut-transport',
    title: 'Schüttgut-Transport',
    description: 'Transport von Schüttgütern mit 24-Kubik-Mulde',
    image: '/images/maschinen/mulde-24-kubik.jpg',
    category: 'transport',
    details: [
      '24-Kubik-Mulde',
      'Schüttgut-Transport',
      'Getreide, Sand, Kies',
      'Zuverlässige Lieferung'
    ]
  },
  {
    id: 'haeckselgut-transport',
    title: 'Häckselgut-Transport',
    description: 'Transport von Häckselgut mit 40-Kubik-Häckselwagen',
    image: '/images/maschinen/placeholder.jpg',
    category: 'transport',
    details: [
      '40-Kubik-Häckselwagen',
      'Häckselgut-Transport',
      'Mais, Gras, Stroh',
      'Große Transportkapazität'
    ]
  },
  {
    id: 'winterdienst',
    title: 'Winterdienst',
    description: 'Schneeräumen und Salzstreuen mit Schneepflug-Schiebeschild',
    image: '/images/maschinen/schneepflug-schiebeschild.jpg',
    category: 'winterdienst',
    details: [
      'Schneepflug-Schiebeschild',
      'Schneeräumen',
      'Salzstreuen',
      '24/7 Bereitschaft im Winter'
    ]
  }
];

export const categories = {
  arbeitskraft: {
    title: 'Arbeitskraft',
    description: 'Mit und ohne Traktor verfügbar',
    color: 'bg-green-600'
  },
  landwirtschaft: {
    title: 'Landwirtschaftliche Arbeitsgeräte',
    description: 'Spritze, Düngerstreuer, Bodenbearbeitung, Häckselguttransport',
    color: 'bg-amber-600'
  },
  transport: {
    title: 'Transport-Dienstleistungen',
    description: 'Schüttgut und Häckselgut-Transport',
    color: 'bg-blue-600'
  },
  winterdienst: {
    title: 'Winterdienst',
    description: 'Schneeräumen und Salzstreuen',
    color: 'bg-slate-600'
  }
};
