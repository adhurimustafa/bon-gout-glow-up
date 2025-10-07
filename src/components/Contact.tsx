import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  const handleCall = () => {
    window.location.href = "tel:0557494130";
  };

  const handleEmail = () => {
    window.location.href = "mailto:contact@aubongout-33.fr";
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Contactez-nous
          </h2>
          <p className="text-lg text-muted-foreground">
            Un projet ? Une question ? Notre équipe est à votre écoute pour vous accompagner
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Adresse</h3>
                <p className="text-muted-foreground">
                  22 B Avenue de Verdun<br />
                  33620 Lapouyade<br />
                  Gironde, France
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Téléphone</h3>
                <p className="text-muted-foreground">
                  <a href="tel:0557494130" className="hover:text-primary transition-colors">
                    05 57 49 41 30
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-muted-foreground">
                  <a href="mailto:contact@aubongout-33.fr" className="hover:text-primary transition-colors">
                    contact@aubongout-33.fr
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Zone d'intervention</h3>
                <p className="text-muted-foreground">
                  Rayon de 200 km autour de Lapouyade<br />
                  Bordeaux, Mérignac, Pessac, Talence, Bassin d'Arcachon...
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Button 
                size="lg" 
                className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white shadow-[var(--shadow-elegant)]"
                onClick={handleCall}
              >
                <Phone className="mr-2 h-5 w-5" />
                Appelez-nous maintenant
              </Button>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="animate-scale-in">
            <div className="bg-card p-8 rounded-xl shadow-[var(--shadow-card)]">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Envoyez-nous un message</h3>
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Google Maps - Full width */}
        <div className="max-w-6xl mx-auto animate-scale-in">
          <div className="rounded-xl overflow-hidden shadow-[var(--shadow-card)] h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2825.8469847631584!2d-0.25988!3d45.14!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDA4JzI0LjAiTiAwwrAxNSczNS42Ilc!5e0!3m2!1sfr!2sfr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation Au Bon Goût - Lapouyade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
