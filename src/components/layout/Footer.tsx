import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-white relative">
      {/* Go to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg transition-colors"
        aria-label="Nach oben scrollen"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <Link to="/datenschutz" className="hover:text-white transition-colors">
              Datenschutzerklärung
            </Link>
            <Link to="/impressum" className="hover:text-white transition-colors">
              Impressum
            </Link>
          </div>
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Bechler Service Solutions GmbH
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
