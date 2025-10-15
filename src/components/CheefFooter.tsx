import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

export const CheefFooter = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[hsl(195,85%,55%)] to-[hsl(142,71%,55%)] bg-clip-text text-transparent mb-4">
              Hervé Godinaud
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Traiteur d'exception depuis 1999. Médaillé Saveurs d'Or.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[hsl(195,85%,41%)] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[hsl(195,85%,41%)] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Nos Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/nos-services" className="text-gray-400 hover:text-white transition-colors">
                  Traiteur Événementiel
                </Link>
              </li>
              <li>
                <Link to="/nos-services/portage-repas" className="text-gray-400 hover:text-white transition-colors">
                  Portage de Repas
                </Link>
              </li>
              <li>
                <Link to="/nos-services/specialites" className="text-gray-400 hover:text-white transition-colors">
                  Nos Spécialités
                </Link>
              </li>
              <li>
                <Link to="/nos-services/mariage" className="text-gray-400 hover:text-white transition-colors">
                  Mariages
                </Link>
              </li>
            </ul>
          </div>

          {/* Liens Utiles */}
          <div>
            <h4 className="font-bold text-lg mb-4">Liens Utiles</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/qui-sommes-nous" className="text-gray-400 hover:text-white transition-colors">
                  Qui sommes-nous
                </Link>
              </li>
              <li>
                <Link to="/nos-realisations" className="text-gray-400 hover:text-white transition-colors">
                  Nos Réalisations
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-[hsl(195,85%,41%)]" />
                <span>Lapouyade, Gironde (33)</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[hsl(195,85%,41%)]" />
                <a href="tel:0557494130" className="text-gray-400 hover:text-white transition-colors">
                  05 57 49 41 30
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[hsl(195,85%,41%)]" />
                <a href="mailto:contact@herve-godinaud.fr" className="text-gray-400 hover:text-white transition-colors">
                  contact@herve-godinaud.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© 2024 Hervé Godinaud Traiteur. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
