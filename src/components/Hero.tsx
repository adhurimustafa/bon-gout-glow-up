import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-restaurant.jpg";

export const Hero = () => {
  const handleCall = () => {
    window.location.href = "tel:0557494130";
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Plat gastronomique Au Bon Goût"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(25_30%_15%_/_0.9)] to-[hsl(28_40%_25%_/_0.7)]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 text-center md:text-left">
        <div className="max-w-3xl mx-auto md:mx-0 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Au Bon Goût
          </h1>
          <p className="text-2xl md:text-3xl text-white/95 mb-4 font-light italic">
            Le goût de la tradition, servi avec élégance
          </p>
          <p className="text-lg md:text-xl text-white/85 mb-8 max-w-2xl leading-relaxed">
            Une équipe à votre écoute, un service sur-mesure et un savoir-faire reconnu. 
            Profitez de la qualité et de la sérénité qu'offre notre service traiteur et livraison de repas à domicile en Gironde.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white shadow-[var(--shadow-elegant)] text-lg px-8 py-6"
              onClick={handleCall}
            >
              <Phone className="mr-2 h-5 w-5" />
              05 57 49 41 30
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-foreground text-lg px-8 py-6"
              onClick={scrollToContact}
            >
              <MapPin className="mr-2 h-5 w-5" />
              Nous contacter
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};
