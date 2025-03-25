import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <a
          href="#hero"
          className="font-serif text-xl md:text-2xl font-medium tracking-tight transition-colors hover:text-gray-600"
        >
          30 ÅRS FEIRING
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#event"
            className="text-sm font-medium hover:text-gray-600 transition-colors"
          >
            Detaljer
          </a>
          <a
            href="#rsvp"
            className="text-sm font-medium hover:text-gray-600 transition-colors"
          >
            Svar
          </a>
        </nav>

        <a
          href="#rsvp"
          className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring btn-hover-effect"
        >
          Svar Her
        </a>
      </div>
    </header>
  );
};

export default Header;
