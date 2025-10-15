import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const HeaderPremium = () => {
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

  const navItems = [
    { label: "Accueil", path: "/" },
    { label: "Qui sommes-nous ?", path: "/qui-sommes-nous" },
    { label: "Nos services", path: "/nos-services" },
    { label: "Nos réalisations", path: "/nos-realisations" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-2xl shadow-[0_8px_32px_-8px_hsl(45_95%_65%_/_0.3)] h-16 border-b border-primary/20"
          : "bg-gradient-to-b from-black/80 via-black/60 to-transparent backdrop-blur-md h-20"
      }`}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo with premium styling */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Sparkles className="w-6 h-6 text-primary animate-pulse-glow" />
            <motion.h1
              className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={{
                textShadow: "0 0 30px hsl(45 95% 65% / 0.3)"
              }}
            >
              Au Bon Goût
            </motion.h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative px-5 py-2 text-sm font-semibold transition-all duration-300 hover:text-primary text-foreground group"
              >
                <span className="relative z-10">{item.label}</span>
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-lg shadow-[var(--shadow-glow)]"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
                  />
                )}
                {/* Hover underline effect */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Phone Popover - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative group text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  aria-label="Téléphone"
                >
                  <Phone className="h-5 w-5 transition-transform group-hover:scale-110 group-hover:animate-pulse-glow" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-4 bg-card/95 backdrop-blur-xl border-primary/20" align="end">
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    Appelez-nous :
                  </p>
                  <a
                    href="tel:0557494130"
                    className="flex items-center gap-2 text-primary hover:text-accent transition-all duration-300 hover:translate-x-1 group"
                  >
                    <Phone className="h-4 w-4 group-hover:animate-pulse" />
                    <span className="font-medium">05 57 49 41 30</span>
                  </a>
                  <a
                    href="tel:0682380204"
                    className="flex items-center gap-2 text-primary hover:text-accent transition-all duration-300 hover:translate-x-1 group"
                  >
                    <Phone className="h-4 w-4 group-hover:animate-pulse" />
                    <span className="font-medium">06 82 38 02 04</span>
                  </a>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
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
            className="lg:hidden bg-background/98 backdrop-blur-2xl border-t border-primary/20"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-5 py-4 rounded-lg transition-all duration-300 ${
                    location.pathname === item.path
                      ? "bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 text-primary font-bold shadow-[var(--shadow-glow)] border border-primary/30"
                      : "hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                size="lg"
                className="w-full mt-4 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] text-black font-bold shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow-hover)] transition-all duration-500"
                onClick={() => window.location.href = "tel:0557494130"}
              >
                <Phone className="mr-2 h-4 w-4" />
                05 57 49 41 30
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
