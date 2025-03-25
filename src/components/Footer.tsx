const Footer = () => {
  return (
    <footer className="bg-white py-12 px-6 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-6">
            <span className="font-serif text-xl font-medium text-primary">
              30 års feiring
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
            <a
              href="#hero"
              className="text-sm text-gray-600 hover:text-primary transition-colors"
            >
              Hjem
            </a>
            <a
              href="#event"
              className="text-sm text-gray-600 hover:text-primary transition-colors"
            >
              Detaljer
            </a>
            <a
              href="#rsvp"
              className="text-sm text-gray-600 hover:text-primary transition-colors"
            >
              Svar
            </a>
          </nav>

          <div className="divider"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
