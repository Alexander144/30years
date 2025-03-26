const EventDetails = () => {
  return (
    <section id="event" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="chip mb-2">Informasjon</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
            Detaljer om arrangementet
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Her finner du all informasjon du trenger om feiringen. Jeg gleder
            meg til å se deg der!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="glossy-card bg-gray-50">
            <div className="shine-effect"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary/10">
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
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                  <line x1="16" x2="16" y1="2" y2="6"></line>
                  <line x1="8" x2="8" y1="2" y2="6"></line>
                  <line x1="3" x2="21" y1="10" y2="10"></line>
                  <path d="M8 14h.01"></path>
                  <path d="M12 14h.01"></path>
                  <path d="M16 14h.01"></path>
                  <path d="M8 18h.01"></path>
                  <path d="M12 18h.01"></path>
                  <path d="M16 18h.01"></path>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-medium mb-2">
                Dato og Tid
              </h3>
              <p className="text-gray-600 mb-4">Lørdag, 24. mai 2025</p>
              <p className="text-gray-600">10:00 - Sent</p>
            </div>
          </div>

          <div className="glossy-card bg-gray-50">
            <div className="shine-effect"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary/10">
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
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-medium mb-2">Lokasjon</h3>
              <p className="text-gray-600 mb-4">Hytta</p>
              <p className="text-gray-600">Kulaveien 115, 1821 Spydeberg</p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="font-serif text-2xl font-medium mb-8 text-center">
            Program for kvelden
          </h3>

          <div className="flex flex-col max-w-2xl mx-auto">
            <div
              className="event-timeline-item animate-slide-up opacity-0"
              style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
            >
              <div className="event-timeline-dot"></div>
              <h4 className="font-serif text-lg font-medium mb-1">
                10:00 - 13:00 - Ankomst og start på festen
              </h4>
              <p className="text-gray-600">
                Husk å kom før 13:00, slik at vi kan starte showet.
              </p>
            </div>

            <div
              className="event-timeline-item animate-slide-up opacity-0"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              <div className="event-timeline-dot"></div>
              <h4 className="font-serif text-lg font-medium mb-1">
                14:00 - Lunsj serveres
              </h4>
              <p className="text-gray-600">
                Lett grillmat.
              </p>
            </div>

            <div
              className="event-timeline-item animate-slide-up opacity-0"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              <div className="event-timeline-dot"></div>
              <h4 className="font-serif text-lg font-medium mb-1">
                15:00 - Celine´s leker
              </h4>
              <p className="text-gray-600">
                Celine kjører showet, deler oss inn i lag!
              </p>
            </div>

            <div
              className="event-timeline-item animate-slide-up opacity-0"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              <div className="event-timeline-dot"></div>
              <h4 className="font-serif text-lg font-medium mb-1">
                18:30 - Middag
              </h4>
              <p className="text-gray-600">
                Buffet med masse god mat.
              </p>
            </div>

            <div
              className="event-timeline-item animate-slide-up opacity-0"
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
            >
              <div className="event-timeline-dot"></div>
              <h4 className="font-serif text-lg font-medium mb-1">
                20:00 - Jeopardy
              </h4>
              <p className="text-gray-600">
                Vi avslutter kvelden med en runde Jeopardy.
              </p>
            </div>
            <div
              className="event-timeline-item animate-slide-up opacity-0"
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
            >
              <div className="event-timeline-dot"></div>
              <h4 className="font-serif text-lg font-medium mb-1">
                01:00 - Buss/Taxi
              </h4>
              <p className="text-gray-600">
                Vi har bestilt buss/taxi til de som ønsker å reise hjem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
