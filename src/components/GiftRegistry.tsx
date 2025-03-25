
import React from 'react';

const giftItems = [
  {
    id: 1,
    name: 'Opplevelser',
    description: 'Gavekort til restaurantbesøk, teater, konsert eller andre opplevelser.',
    icon: (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="text-primary"
      >
        <path d="M19.8 7.8C19.8 7.8 18 9 12 9C6 9 4.2 7.8 4.2 7.8"></path>
        <path d="M3 7.8C3 9.5 3 18 3 18C3 19.1 3.9 20 5 20C9 20 15 20 19 20C20.1 20 21 19.1 21 18C21 18 21 9.5 21 7.8"></path>
        <path d="M12 9V20"></path>
        <path d="M7.9 3.4C7.9 3.4 9 7.5 12 7.5C15 7.5 16.1 3.4 16.1 3.4"></path>
        <path d="M2 3H22V8H2V3Z"></path>
      </svg>
    )
  },
  {
    id: 2,
    name: 'Reise',
    description: 'Bidrag til en reiseopplevelse eller gavekort til reisebyråer.',
    icon: (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="text-primary"
      >
        <path d="M3 17h1m16 0h1M5 17H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5z"></path>
        <path d="M7 13h.01M17 13h.01"></path>
        <path d="M2 9.5h20"></path>
      </svg>
    )
  },
  {
    id: 3,
    name: 'Bøker',
    description: 'Bøker innen historie, biografi eller skjønnlitteratur.',
    icon: (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="text-primary"
      >
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
      </svg>
    )
  },
  {
    id: 4,
    name: 'Hjemmeinnredning',
    description: 'Kvalitetsdekorasjoner eller nyttige gjenstander til hjemmet.',
    icon: (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="text-primary"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    )
  }
];

const GiftRegistry = () => {
  return (
    <section id="gifts" className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="chip mb-2">Gaveønsker</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">Gaveforslag</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Din tilstedeværelse er den beste gaven, men hvis du ønsker å gi noe, 
            er her noen forslag til ting jeg ville satt pris på.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {giftItems.map((item, index) => (
            <div 
              key={item.id}
              className="glossy-card bg-white animate-slide-right opacity-0"
              style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'forwards' }}
            >
              <div className="shine-effect"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mr-4">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-xl font-medium">{item.name}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="glossy-card bg-white max-w-2xl mx-auto">
            <div className="shine-effect"></div>
            <div className="relative z-10">
              <h3 className="font-serif text-xl font-medium mb-4">Vipps eller kontanter</h3>
              <p className="text-gray-600 mb-6">
                Hvis du heller vil gi et bidrag til en reiseopplevelse eller lignende, 
                kan du bruke Vipps til <strong>12345678</strong> med melding "30-årsdag".
              </p>
              <div className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm">
                Vipps: 12345678
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftRegistry;
