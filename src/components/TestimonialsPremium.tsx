import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

export const TestimonialsPremium = () => {
  const testimonials = [
    {
      name: "Marie & Thomas",
      event: "Mariage",
      rating: 5,
      text: "Un service exceptionnel pour notre mariage ! Les plats étaient délicieux et la présentation impeccable. Tous nos invités ont été ravis. Merci à toute l'équipe pour cette prestation de qualité."
    },
    {
      name: "Sophie Durand",
      event: "Réception d'entreprise",
      rating: 5,
      text: "Professionnalisme et qualité au rendez-vous. Les cocktails dînatoires ont fait l'unanimité lors de notre séminaire. Service irréprochable, je recommande vivement !"
    },
    {
      name: "Jean-Pierre M.",
      event: "Portage de repas",
      rating: 5,
      text: "Je bénéficie du service de portage de repas depuis plusieurs mois. Les menus sont variés, équilibrés et vraiment savoureux. Un vrai plaisir quotidien !"
    }
  ];

  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      {/* Decorative golden blobs */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 relative z-10">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center mb-20">
            {/* Premium divider */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
              <Sparkles className="w-5 h-5 text-primary animate-pulse-glow" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Ils nous font confiance
            </h2>
            <p className="text-xl text-muted-foreground">
              Découvrez les retours de nos clients satisfaits
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-full group"
              >
                <Card className="relative overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:shadow-[var(--shadow-elegant)] transition-all duration-500 h-full">
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10" />
                  
                  <CardContent className="p-8 relative">
                    {/* Decorative quote with golden accent */}
                    <div className="absolute top-4 right-4">
                      <Quote className="h-12 w-12 text-primary/10 group-hover:text-primary/20 transition-colors duration-500" />
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star className="h-5 w-5 fill-primary text-primary group-hover:animate-pulse-glow" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Testimonial text */}
                    <p className="text-muted-foreground leading-relaxed mb-8 italic text-base relative z-10">
                      "{testimonial.text}"
                    </p>

                    {/* Author info with premium styling */}
                    <div className="border-t border-primary/20 pt-6 relative z-10">
                      <p className="font-bold text-foreground text-lg group-hover:text-primary transition-colors duration-300">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                        <span className="w-1 h-1 bg-primary rounded-full" />
                        {testimonial.event}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
