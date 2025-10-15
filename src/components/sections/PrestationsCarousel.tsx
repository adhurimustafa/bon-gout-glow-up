import { motion } from "framer-motion";
import { AnimatedSection } from "../AnimatedSection";
import { Sparkles, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Import gallery images
import gallery1 from "@/assets/gallery/aubon-gout-buffet-lapouyade-01.jpg";
import gallery2 from "@/assets/gallery/aubon-gout-buffet-lapouyade-02.jpg";
import gallery3 from "@/assets/gallery/aubon-gout-cocktail-lapouyade-01.jpg";
import gallery4 from "@/assets/gallery/aubon-gout-plats-lapouyade-01.jpg";
import gallery5 from "@/assets/gallery/aubon-gout-reception-lapouyade-01.jpg";
import mariage from "@/assets/service-mariage.jpg";
import reception from "@/assets/service-reception.jpg";

export const PrestationsCarousel = () => {
  const prestations = [
    {
      image: mariage,
      title: "Mariages de Prestige",
      description: "Organisation complète de vos mariages avec formules adaptées à votre budget",
      tags: ["Buffets personnalisés", "Service à table", "Décoration"]
    },
    {
      image: reception,
      title: "Réceptions Professionnelles",
      description: "Séminaires, cocktails d'entreprise et événements corporates haut de gamme",
      tags: ["Cocktails dînatoires", "Buffets froids", "Animation"]
    },
    {
      image: gallery1,
      title: "Buffets Gastronomiques",
      description: "Buffets froids et chauds avec présentation soignée et produits premium",
      tags: ["Produits frais", "Présentation raffinée", "Sur-mesure"]
    },
    {
      image: gallery3,
      title: "Cocktails & Apéritifs",
      description: "Apéritifs dînatoires et cocktails déjeunatoires pour vos événements",
      tags: ["Finger food", "Bars à thème", "Service premium"]
    },
    {
      image: gallery4,
      title: "Cuisine Live & Animation",
      description: "Live cooking, bars à huîtres, stations de découpe pour animer vos événements",
      tags: ["Live cooking", "Animations culinaires", "Interactions"]
    },
    {
      image: gallery5,
      title: "Événements Associatifs",
      description: "Réceptions associatives, communions, baptêmes avec service adapté",
      tags: ["Formules flexibles", "Grand volume", "Service efficace"]
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Premium background with pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-muted/20" />
      
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent shadow-[var(--shadow-glow)]" />

      <div className="container px-4 md:px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary" />
              <Sparkles className="w-6 h-6 text-primary animate-pulse-glow" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary" />
            </div>

            <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Nos Prestations Premium
            </h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              De l'organisation complète au service traiteur, découvrez nos prestations événementielles
            </p>
          </div>
        </AnimatedSection>

        {/* Carousel */}
        <AnimatedSection delay={0.2}>
          <div className="max-w-7xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 4000,
                  stopOnInteraction: true,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {prestations.map((prestation, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      whileHover={{ y: -8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="group h-full"
                    >
                      <div className="relative h-full">
                        {/* Glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                        
                        <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-border group-hover:border-primary/50 transition-all duration-500 h-full flex flex-col">
                          {/* Image */}
                          <div className="relative h-72 overflow-hidden">
                            <motion.img
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.6 }}
                              src={prestation.image}
                              alt={prestation.title}
                              className="w-full h-full object-cover"
                            />
                            
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                          </div>

                          {/* Content */}
                          <div className="p-8 flex-1 flex flex-col">
                            <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                              {prestation.title}
                            </h3>
                            
                            <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                              {prestation.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {prestation.tags.map((tag, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1.5 bg-primary/10 border border-primary/30 text-primary text-xs font-semibold rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            {/* CTA */}
                            <button
                              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                              className="flex items-center gap-2 text-primary hover:text-accent transition-all duration-300 font-semibold group/btn"
                            >
                              <span>En savoir plus</span>
                              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-12">
                <CarouselPrevious className="relative static translate-y-0 bg-card/80 backdrop-blur-sm border-primary/30 hover:bg-primary/20 hover:border-primary" />
                <CarouselNext className="relative static translate-y-0 bg-card/80 backdrop-blur-sm border-primary/30 hover:bg-primary/20 hover:border-primary" />
              </div>
            </Carousel>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
