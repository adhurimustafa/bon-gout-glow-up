import { motion } from "framer-motion";
import { AnimatedSection } from "../AnimatedSection";
import { Star, Quote, Sparkles, Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const TestimonialsSlider = () => {
  const testimonials = [
    {
      name: "Marie & Thomas",
      event: "Mariage",
      rating: 5,
      text: "Un service exceptionnel pour notre mariage ! Les plats étaient délicieux et la présentation impeccable. Tous nos invités ont été ravis. Merci à toute l'équipe pour cette prestation de qualité.",
      role: "Mariés - Septembre 2024",
      avatar: "MT"
    },
    {
      name: "Sophie Durand",
      event: "Réception d'entreprise",
      rating: 5,
      text: "Professionnalisme et qualité au rendez-vous. Les cocktails dînatoires ont fait l'unanimité lors de notre séminaire. Service irréprochable, je recommande vivement !",
      role: "Directrice Marketing",
      avatar: "SD"
    },
    {
      name: "Jean-Pierre M.",
      event: "Portage de repas",
      rating: 5,
      text: "Je bénéficie du service de portage de repas depuis plusieurs mois. Les menus sont variés, équilibrés et vraiment savoureux. Un vrai plaisir quotidien !",
      role: "Client fidèle",
      avatar: "JP"
    },
    {
      name: "Isabelle & Marc",
      event: "Baptême",
      rating: 5,
      text: "Nous avons organisé le baptême de notre fils avec Au Bon Goût. L'équipe a été très à l'écoute de nos besoins et le buffet était magnifique. Nos invités ne tarissent pas d'éloges !",
      role: "Famille - Juin 2024",
      avatar: "IM"
    },
    {
      name: "Laurent Perrier",
      event: "Séminaire entreprise",
      rating: 5,
      text: "Pour notre séminaire annuel, nous avons fait appel à Hervé et son équipe. Prestation impeccable du début à la fin. La qualité des plats et le service ont vraiment marqué nos collaborateurs.",
      role: "CEO - Tech Solutions",
      avatar: "LP"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary" />
              <Star className="w-6 h-6 text-primary fill-primary animate-pulse-glow" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary" />
            </div>

            <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Ils Nous Font Confiance
            </h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez les retours de nos clients satisfaits
            </p>
          </div>
        </AnimatedSection>

        {/* Horizontal Slider */}
        <AnimatedSection delay={0.2}>
          <div className="max-w-7xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 5000,
                  stopOnInteraction: true,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-6">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="h-full group"
                    >
                      <div className="relative h-full">
                        {/* Glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                        
                        <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 border border-border group-hover:border-primary/50 transition-all duration-500 h-full flex flex-col">
                          {/* Header avec avatar et stars */}
                          <div className="flex items-start justify-between mb-6">
                            <div className="flex items-center gap-4">
                              {/* Avatar */}
                              <div className="w-14 h-14 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl flex items-center justify-center font-bold text-primary text-lg group-hover:shadow-[var(--shadow-glow)] transition-all duration-500">
                                {testimonial.avatar}
                              </div>
                              
                              <div>
                                <h4 className="font-bold text-foreground text-lg">
                                  {testimonial.name}
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                  {testimonial.role}
                                </p>
                              </div>
                            </div>

                            {/* Decorative quote */}
                            <Quote className="h-10 w-10 text-primary/20 group-hover:text-primary/30 transition-colors duration-500" />
                          </div>

                          {/* Stars */}
                          <div className="flex gap-1 mb-6">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-5 w-5 fill-primary text-primary group-hover:animate-pulse-glow"
                              />
                            ))}
                          </div>

                          {/* Testimonial text */}
                          <p className="text-muted-foreground leading-relaxed mb-6 italic flex-1">
                            "{testimonial.text}"
                          </p>

                          {/* Event tag */}
                          <div className="flex items-center gap-2 pt-4 border-t border-primary/20">
                            <span className="px-4 py-2 bg-primary/10 border border-primary/30 text-primary text-sm font-semibold rounded-full">
                              {testimonial.event}
                            </span>
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

        {/* Video testimonial section (placeholder for future video integration) */}
        <AnimatedSection delay={0.4}>
          <div className="max-w-4xl mx-auto mt-20">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
              
              <div className="relative bg-card/50 backdrop-blur-sm rounded-3xl p-12 border border-border group-hover:border-primary/50 transition-all duration-500 text-center">
                <Sparkles className="w-12 h-12 text-primary mx-auto mb-6 animate-pulse-glow" />
                
                <h3 className="text-3xl font-bold mb-4 text-foreground">
                  Témoignages Vidéo
                </h3>
                <p className="text-xl text-muted-foreground mb-8">
                  Découvrez bientôt les témoignages vidéo de nos clients satisfaits
                </p>

                <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] text-black font-bold rounded-2xl shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow-hover)] transition-all duration-500">
                  <Play className="w-5 h-5" />
                  <span>Voir les témoignages</span>
                </button>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
