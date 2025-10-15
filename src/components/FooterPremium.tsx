import { Facebook, Phone, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const FooterPremium = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-card to-background border-t border-primary/20">
      {/* Decorative top line with glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent shadow-[var(--shadow-glow)]" />
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary animate-pulse-glow" />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Au Bon Goût
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Traiteur d'exception en Gironde depuis 1999. Service sur-mesure pour tous vos événements.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold mb-6 text-xl text-foreground flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
              Contact
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>22 B Avenue de Verdun</li>
              <li>33620 Lapouyade</li>
              <li className="pt-2">
                <a href="tel:0557494130" className="hover:text-primary transition-all duration-300 flex items-center gap-2 group">
                  <Phone className="h-4 w-4 group-hover:animate-pulse" />
                  05 57 49 41 30
                </a>
              </li>
              <li>
                <a href="mailto:contact@aubongout-33.fr" className="hover:text-primary transition-all duration-300 flex items-center gap-2 group">
                  <Mail className="h-4 w-4 group-hover:animate-pulse" />
                  contact@aubongout-33.fr
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold mb-6 text-xl text-foreground flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
              Nos Services
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              {["Mariages & Événements", "Portage de repas", "Cocktails & Réceptions", "Buffets personnalisés", "Plateaux repas"].map((service, i) => (
                <li key={i} className="flex items-center gap-2 group hover:text-primary transition-colors duration-300">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover:shadow-[var(--shadow-glow)] transition-all duration-300" />
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-bold mb-6 text-xl text-foreground flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
              Suivez-nous
            </h4>
            <div className="space-y-4">
              <a
                href="https://www.facebook.com/aubongout33"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:shadow-[var(--shadow-glow)] transition-all duration-300">
                  <Facebook className="h-5 w-5 group-hover:animate-pulse" />
                </div>
                <span className="font-medium">Facebook</span>
              </a>
              <a
                href="tel:0557494130"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:shadow-[var(--shadow-glow)] transition-all duration-300">
                  <Phone className="h-5 w-5 group-hover:animate-pulse" />
                </div>
                <span className="font-medium">05 57 49 41 30</span>
              </a>
              <a
                href="mailto:contact@aubongout-33.fr"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:shadow-[var(--shadow-glow)] transition-all duration-300">
                  <Mail className="h-5 w-5 group-hover:animate-pulse" />
                </div>
                <span className="font-medium">Email</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-primary/20 pt-10 space-y-4">
          <div className="text-center text-muted-foreground">
            <p className="mb-3 text-base">
              &copy; {new Date().getFullYear()} Au Bon Goût - Hervé Godinaud. Tous droits réservés.
            </p>
            <p className="text-sm flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-primary animate-pulse-glow" />
              <span className="text-primary font-semibold">
                Médaillé Saveurs d'Or 1999 - Concours de produits régionaux Saveurs de Poitou Charentes
              </span>
              <Sparkles className="w-4 h-4 text-primary animate-pulse-glow" />
            </p>
          </div>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Mentions légales
            </a>
            <span className="text-primary/50">•</span>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
