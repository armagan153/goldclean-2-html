import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    {
      label: "Leistungen",
      path: "/technische-reinigung",
      hasDropdown: true,
      children: [
        { label: "Technische Reinigung", path: "/technische-reinigung" },
        { label: "Unterhaltsreinigung", path: "/unterhaltsreinigung" },
        { label: "Produktionsunterstützung", path: "/produktionsunterstuetzung" },
      ],
    },
    { label: "Referenzen", path: "/referenzen" },
    { label: "Karriere", path: "/karriere" },
    { label: "Über uns", path: "/ueber-uns" },
    { label: "Kontakt", path: "/kontakt" },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="hidden md:block bg-gray-100 py-2">
        <div className="container-custom flex justify-end items-center space-x-6 text-sm text-muted-foreground">
          <a href="tel:07731 1673836" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="h-4 w-4" />
            07731 1673836
          </a>
          <a href="mailto:info@bechler-servicesolutions.de" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="h-4 w-4" />
            info@bechler-servicesolutions.de
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="/images/logo.png"
              alt="Bechler Service Solutions GmbH"
              className="h-12 md:h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.path} className="relative group">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      className={`flex items-center gap-1 font-medium transition-colors ${
                        item.children?.some((c) => isActive(c.path))
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white shadow-lg rounded-md py-2 min-w-[220px]">
                        {item.children?.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`block px-4 py-2 hover:bg-gray-50 transition-colors ${
                              isActive(child.path) ? "text-primary" : "text-foreground"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`font-medium transition-colors ${
                      isActive(item.path) ? "text-primary" : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Contact Info Desktop */}
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <a href="tel:07731 1673836" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <Phone className="h-4 w-4" />
              07731 1673836
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            {navItems.map((item) => (
              <div key={item.path}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="flex items-center justify-between w-full py-3 font-medium"
                    >
                      {item.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isServicesOpen && (
                      <div className="pl-4 space-y-2">
                        {item.children?.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            onClick={() => setIsMenuOpen(false)}
                            className={`block py-2 ${isActive(child.path) ? "text-primary" : "text-muted-foreground"}`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-3 font-medium ${isActive(item.path) ? "text-primary" : ""}`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-4 pt-4 border-t space-y-3">
              <a href="tel:07731 1673836" className="flex items-center gap-2 text-primary">
                <Phone className="h-4 w-4" />
                07731 1673836
              </a>
              <a href="mailto:info@bechler-servicesolutions.de" className="flex items-center gap-2 text-primary">
                <Mail className="h-4 w-4" />
                info@bechler-servicesolutions.de
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
