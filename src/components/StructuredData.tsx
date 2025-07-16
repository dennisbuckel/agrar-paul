const StructuredData = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://landwirtschaft-paul-hantusch-leipzig.de/#business",
    "name": "Landwirtschaftsbetrieb Paul Hantusch",
    "alternateName": "Paul Hantusch Agrardienstleistungen",
    "description": "Professionelle landwirtschaftliche Dienstleistungen in Leipzig und Umgebung. Spezialisiert auf Pflanzenschutz, Düngung, Transport und Winterdienst mit modernen John Deere Maschinen.",
    "url": "https://landwirtschaft-paul-hantusch-leipzig.de",
    "telephone": "+49-178-5613553",
    "email": "paul.hantusch@hotmail.com",
    "founder": {
      "@type": "Person",
      "name": "Paul Hantusch",
      "jobTitle": "Geschäftsführer und Landwirt",
      "description": "Bachelor Agrarmanagement mit umfassender Erfahrung in der Landwirtschaft"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Leipzig",
      "addressRegion": "Sachsen",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.3397,
      "longitude": 12.3731
    },
    "areaServed": [
      {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 51.3397,
          "longitude": 12.3731
        },
        "geoRadius": "200000"
      },
      {
        "@type": "Place",
        "name": "Leipzig"
      },
      {
        "@type": "Place",
        "name": "Sachsen"
      },
      {
        "@type": "Place",
        "name": "Sachsen-Anhalt"
      },
      {
        "@type": "Place",
        "name": "Thüringen"
      },
      {
        "@type": "Place",
        "name": "Brandenburg"
      }
    ],
    "openingHours": "Mo-Fr 07:00-18:00",
    "priceRange": "€€",
    "image": [
      "https://landwirtschaft-paul-hantusch-leipzig.de/images/maschinen/john-deere-6250r.jpg",
      "https://landwirtschaft-paul-hantusch-leipzig.de/images/maschinen/inuma-spritze.jpg",
      "https://landwirtschaft-paul-hantusch-leipzig.de/images/maschinen/Paul.jpg"
    ],
    "logo": "https://landwirtschaft-paul-hantusch-leipzig.de/images/logo/logo.png",
    "sameAs": [],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Landwirtschaftliche Dienstleistungen",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pflanzenschutz",
            "description": "Professioneller Pflanzenschutz mit moderner Inuma Spritze, 36m Arbeitsbreite, GPS-Unterstützung"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Düngerstreuen",
            "description": "Gleichmäßige Düngerverteilung mit Rauch-Axera HEMC, bis 36m Arbeitsbreite"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Traktor mit Fahrer",
            "description": "John Deere 6.250 R mit 250 PS für alle landwirtschaftlichen Arbeiten"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Transport-Dienstleistungen",
            "description": "Schüttgut und Häckselgut-Transport mit 24-Kubik-Mulde und 40-Kubik-Häckselwagen"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Winterdienst",
            "description": "Schneeräumen und Salzstreuen, 24/7 Bereitschaft im Winter"
          }
        }
      ]
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://landwirtschaft-paul-hantusch-leipzig.de/#organization",
    "name": "Landwirtschaftsbetrieb Paul Hantusch",
    "url": "https://landwirtschaft-paul-hantusch-leipzig.de",
    "logo": "https://landwirtschaft-paul-hantusch-leipzig.de/images/logo/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+49-178-5613553",
      "contactType": "customer service",
      "availableLanguage": "German",
      "areaServed": "DE"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Leipzig",
      "addressRegion": "Sachsen",
      "addressCountry": "DE"
    },
    "founder": {
      "@type": "Person",
      "name": "Paul Hantusch"
    }
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://landwirtschaft-paul-hantusch-leipzig.de/#person",
    "name": "Paul Hantusch",
    "jobTitle": "Geschäftsführer und Landwirt",
    "description": "25 Jahre alt, Bachelor Agrarmanagement, umfassende Erfahrung in allen Bereichen der Landwirtschaft",
    "telephone": "+49-178-5613553",
    "email": "paul.hantusch@hotmail.com",
    "image": "https://landwirtschaft-paul-hantusch-leipzig.de/images/maschinen/Paul.jpg",
    "worksFor": {
      "@type": "Organization",
      "name": "Landwirtschaftsbetrieb Paul Hantusch"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Leipzig",
      "addressRegion": "Sachsen",
      "addressCountry": "DE"
    },
    "knowsAbout": [
      "Landwirtschaft",
      "Agrarmanagement", 
      "Pflanzenschutz",
      "Düngung",
      "Bodenbearbeitung",
      "Transport",
      "Winterdienst",
      "John Deere Traktoren"
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Startseite",
        "item": "https://landwirtschaft-paul-hantusch-leipzig.de"
      }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://landwirtschaft-paul-hantusch-leipzig.de/#website",
    "url": "https://landwirtschaft-paul-hantusch-leipzig.de",
    "name": "Landwirtschaftsbetrieb Paul Hantusch Leipzig",
    "description": "Professionelle landwirtschaftliche Dienstleistungen in Leipzig und Umgebung",
    "publisher": {
      "@id": "https://landwirtschaft-paul-hantusch-leipzig.de/#organization"
    },
    "inLanguage": "de-DE"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
    </>
  );
};

export default StructuredData;
