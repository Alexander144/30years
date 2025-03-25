import { useEffect, useRef } from "react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();

      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;

      const elements =
        containerRef.current.querySelectorAll(".parallax-element");
      elements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        const speed = parseFloat(htmlEl.dataset.speed || "0");

        htmlEl.style.transform = `translate(${x * speed * 50}px, ${
          y * speed * 50
        }px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gray-100 rounded-full opacity-30 blur-3xl translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gray-200 rounded-full opacity-30 blur-3xl -translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div
        className="parallax-element absolute top-10 right-10 w-36 h-32 rounded-full"
        data-speed="0.4"
      >
        <img className="" src="IMG_5826.JPG"></img>
      </div>
      <div
        className="parallax-element absolute bottom-11 left-20 w-40 h-40 rounded-full"
        data-speed="0.6"
      >
        <img className="rounded-full" src="IMG_5300.JPG"></img>
      </div>

      <div className="max-w-5xl mx-auto text-center z-10">
        <div
          className="inline-block mb-4 animate-fade-in opacity-0"
          style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
        >
          <span className="chip">30 år</span>
        </div>

        <h1
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight animate-fade-in opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          Du er invitert til min
          <br />
          hyttefest!
        </h1>

        <p
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 animate-fade-in opacity-0"
          style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
        >
          Vi feirer at jeg har rundet 30 år med en skikkelig fest på hytta mi på
          Lyseren.
          <br />
          Håper du har mulighet til å komme!
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in opacity-0"
          style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
        >
          <a
            href="#rsvp"
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring btn-hover-effect"
          >
            Svar på invitasjonen
          </a>
          <a
            href="#event"
            className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring btn-hover-effect"
          >
            Se detaljer
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
