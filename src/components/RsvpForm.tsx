import { useToast } from "@/hooks/use-toast";
import { initializeApp } from "firebase/app";
import { getDatabase, push, ref } from "firebase/database";
import React, { useState } from "react";

// Your Firebase config (Replace these with your actual Firebase credentials)
const firebaseConfig = {
  apiKey: "AIzaSyAkA95eeQeop7nXvZou8REIQpYz85WNA-c",
  authDomain: "hyttefest-defc9.firebaseapp.com",
  databaseURL:
    "https://hyttefest-defc9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hyttefest-defc9",
  storageBucket: "hyttefest-defc9.firebasestorage.app",
  messagingSenderId: "47499204287",
  appId: "1:47499204287:web:cf6bb9671f3b7d8c8b180a",
  measurementId: "G-PJT4S6NJ5H",
};

// Initialize Firebase app directly in the component
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const RsvpForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "yes",
    guests:
      "Reiser med bestilt buss/taxi som Alex har bestilt(100-200kr pr person)",
    dietaryRestrictions: "",
    message: "",
    fact: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare data to push to Firebase
    const dataToPush = {
      name: formData.name,
      transport: formData.guests,
      alergi: formData.message,
      fact: formData.fact,
    };

    // Push data to Firebase Realtime Database
    const rsvpRef = ref(database, "Persons");
    push(rsvpRef, dataToPush)
      .then(() => {
        toast({
          title: "JIPPI, DU ER MED!",
          description: "Gleder meg til å se deg!",
        });
      })
      .catch((error) => {
        toast({
          title: "Feil oppstod!",
          description: "Kunne ikke sende svar, si ifra til Alexander.",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
        setFormData({
          name: "",
          email: "",
          attending: "yes",
          guests:
            "Reiser med bestilt buss/taxi som Alex har bestilt(100-200kr pr person)",
          dietaryRestrictions: "",
          message: "",
          fact: "",
        });
      });
  };

  return (
    <section id="rsvp" className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="chip mb-2">Svar</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
            Vennligst svar på invitasjonen
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Jeg håper du kan være med på feiringen. Vennligst svar innen 25.
            april 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="glossy-card bg-white shadow-lg">
            <div className="shine-effect"></div>
            <div className="relative z-10">
              <h3 className="font-serif text-xl font-medium mb-6">
                Svarskjema
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Navn
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Ditt fulle navn"
                  />
                </div>

                <div className="space-y-2">
                  <div className="space-y-2">
                    <label htmlFor="guests" className="text-sm font-medium">
                      Transport hjem - Oslo S(Transport til så må du ta grønn buss og bli
                      hentet på Vågsenteret)
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      required
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option
                        value="Reiser med bestilt buss/taxi som Alex har
                        bestilt(100-200kr pr person)"
                      >
                        Reiser med bestilt buss/taxi som Alex har
                        bestilt(100-200kr pr person)
                      </option>
                      <option value="Skal ikke hjem">Skal ikke hjem</option>
                      <option value="Egen bil">Egen bil</option>
                      <option value="Fikser egen transport">
                        Fikser egen transport
                      </option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Allergi
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    required
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Jeg er allergisk mot nøtter"
                  ></textarea>
                </div>
                <div className="space-y-2">
                  <label htmlFor="fact" className="text-sm font-medium">
                    Skriv en fun fact om deg selv
                  </label>
                  <textarea
                    id="fact"
                    name="fact"
                    value={formData.fact}
                    onChange={handleChange}
                    rows={3}
                    required
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Jeg kan backflip"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring btn-hover-effect disabled:opacity-50 disabled:pointer-events-none"
                >
                  {isSubmitting ? "Sender..." : "Send svar"}
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-1">
            <div className="glossy-card bg-gray-50">
              <div className="shine-effect"></div>
              <div className="relative z-10">
                <h4 className="font-serif text-lg font-medium mb-2">
                  Svarfrist
                </h4>
                <p className="text-gray-600">
                  Vennligst svar på invitasjonen innen 25. april 2025 for å
                  hjelpe oss med planleggingen.
                </p>
              </div>
            </div>

            <div className="glossy-card bg-gray-50">
              <div className="shine-effect"></div>
              <div className="relative z-10">
                <h4 className="font-serif text-lg font-medium mb-2">
                  Klesstil
                </h4>
                <p className="text-gray-600">
                  Kle deg etter været. Vi skal være ute hele dagen, under et
                  party telt.
                </p>
              </div>
            </div>

            <div className="glossy-card bg-gray-50">
              <div className="shine-effect"></div>
              <div className="relative z-10">
                <h4 className="font-serif text-lg font-medium mb-2">
                  Hvordan kommer jeg meg til hyttefesten?
                </h4>
                <p className="text-gray-600">
                  Kan ta grønn buss 550 - Enebakk kirke og går av på
                  Vågsenteret(bussen går en gang i timen fra Oslo bussterminal
                  10:25, 11:25, 12:25), der er det vinmonopol og matbutikk.
                </p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.136449403917!2d11.04769751318166!3d59.723888874702716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46415fc06fcdf0bb%3A0x4beca9dc7e38ae5d!2sV%C3%A5gsenteret!5e1!3m2!1sno!2sno!4v1742923690928!5m2!1sno!2sno"
                  width="100%"
                  height="300"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg border"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RsvpForm;
