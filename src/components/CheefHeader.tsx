import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Accueil", path: "/" },
  { name: "Nos Services", path: "/nos-services" },
  { name: "Qui sommes-nous", path: "/qui-sommes-nous" },
  { name: "Réalisations", path: "/nos-realisations" },
  { name: "Contact", path: "/contact" },
];

export const CheefHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg py-3"
          : "bg-white/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-[hsl(195,85%,41%)] to-[hsl(142,71%,45%)] bg-clip-text text-transparent">
              Hervé Godinaud
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant="ghost"
                    className={`relative px-4 py-2 text-base font-medium transition-colors ${
                      isActive
                        ? "text-[hsl(195,85%,41%)]"
                        : "text-gray-700 hover:text-[hsl(195,85%,41%)]"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[hsl(195,85%,41%)]"
                      />
                    )}
                  </Button>
                </Link>
              );
            })}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="border-[hsl(195,85%,41%)] text-[hsl(195,85%,41%)] hover:bg-[hsl(195,85%,41%)] hover:text-white transition-all duration-300"
              onClick={() => window.location.href = "tel:0557494130"}
            >
              <Phone className="mr-2 h-4 w-4" />
              05 57 49 41 30
            </Button>
            <Link to="/contact">
              <Button className="bg-[hsl(14,100%,57%)] hover:bg-[hsl(14,100%,50%)] text-white shadow-md">
                Devis gratuit
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <nav className="container px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div
                      className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                        isActive
                          ? "bg-[hsl(195,85%,41%)] text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {item.name}
                    </div>
                  </Link>
                );
              })}
              <div className="pt-4 space-y-2">
                <Button
                  variant="outline"
                  className="w-full border-[hsl(195,85%,41%)] text-[hsl(195,85%,41%)]"
                  onClick={() => {
                    window.location.href = "tel:0557494130";
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  05 57 49 41 30
                </Button>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-[hsl(14,100%,57%)] hover:bg-[hsl(14,100%,50%)] text-white">
                    Devis gratuit
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
