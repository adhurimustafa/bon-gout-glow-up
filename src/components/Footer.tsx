export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-playfair">Au Bon Goût</h3>
            <p className="text-background/80 leading-relaxed">
              Traiteur d'exception en Gironde depuis 1999. Service sur-mesure pour tous vos événements.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <ul className="space-y-2 text-background/80">
              <li>22 B Avenue de Verdun</li>
              <li>33620 Lapouyade</li>
              <li className="pt-2">
                <a href="tel:0557494130" className="hover:text-primary transition-colors">
                  05 57 49 41 30
                </a>
              </li>
              <li>
                <a href="mailto:contact@aubongout-33.fr" className="hover:text-primary transition-colors">
                  contact@aubongout-33.fr
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Nos Services</h4>
            <ul className="space-y-2 text-background/80">
              <li>Mariages & Événements</li>
              <li>Portage de repas</li>
              <li>Cocktails & Réceptions</li>
              <li>Buffets personnalisés</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; {new Date().getFullYear()} Au Bon Goût - Hervé Godinaud. Tous droits réservés.</p>
          <p className="mt-2 text-sm">Médaillé Saveurs d'Or 1999</p>
        </div>
      </div>
    </footer>
  );
};
