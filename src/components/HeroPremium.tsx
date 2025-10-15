import { Button } from "@/components/ui/button";
import { Phone, MapPin, Sparkles } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

// Import hero images
import heroImage from "@/assets/hero-restaurant.jpg";
import carousel1 from "@/assets/carousel-1.jpg";
import carousel2 from "@/assets/carousel-2.jpg";
import carousel3 from "@/assets/carousel-3.jpg";
import carousel4 from "@/assets/carousel-4.jpg";

export const HeroPremium = () => {
  const handleCall = () => {
    window.location.href = "tel:0557494130";
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const slides = [
    { image: heroImage, alt: "Plat gastronomique Au Bon Goût" },
    { image: carousel1, alt: "Buffet élégant" },
    { image: carousel2, alt: "Service traiteur premium" },
    { image: carousel3, alt: "Cocktail festif" },
    { image: carousel4, alt: "Réception d'exception" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0 z-0">
        <Carousel
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: false,
            }),
          ]}
          className="h-full w-full"
        >
          <CarouselContent className="h-full">
            {slides.map((slide, index) => (
              <CarouselItem key={index} className="h-screen p-0">
                <div className="relative h-full w-full">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                  {/* Dark luxury overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Animated golden particles effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Premium badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-2 mb-8 bg-primary/10 border border-primary/30 rounded-full backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-primary animate-pulse-glow" />
            <span className="text-primary font-semibold text-sm tracking-wider">
              MÉDAILLÉ SAVEURS D'OR 1999
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight tracking-tight"
            style={{
              textShadow: "0 0 30px hsl(45 95% 65% / 0.5), 0 0 60px hsl(45 95% 65% / 0.3)",
            }}
          >
            Au Bon Goût
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-2xl md:text-4xl text-primary/90 mb-4 font-light italic tracking-wide"
          >
            Le goût de la tradition, servi avec élégance
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Une équipe à votre écoute, un service sur-mesure et un savoir-faire reconnu.
            Profitez de la qualité et de la sérénité qu'offre notre service traiteur et livraison de repas à domicile en Gironde.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="relative group bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] text-black font-bold shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow-hover)] text-lg px-10 py-7 transition-all duration-500 animate-shimmer border-2 border-primary/50"
              onClick={handleCall}
            >
              <Phone className="mr-2 h-5 w-5 animate-pulse" />
              05 57 49 41 30
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary/50 bg-black/30 backdrop-blur-md text-white hover:bg-primary/10 hover:border-primary hover:shadow-[var(--shadow-glow)] text-lg px-10 py-7 transition-all duration-500"
              onClick={scrollToContact}
            >
              <MapPin className="mr-2 h-5 w-5" />
              Demander un devis
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator with glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2 shadow-[var(--shadow-glow)]">
          <motion.div
            className="w-1 h-3 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};
