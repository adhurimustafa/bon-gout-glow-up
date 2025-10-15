import { Award, Heart, Users, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

export const AboutPremium = () => {
  const features = [
    {
      icon: Award,
      title: "Savoir-faire reconnu",
      description: "Médaillé Saveurs d'Or 1999 pour notre excellence culinaire"
    },
    {
      icon: Heart,
      title: "Passion & Qualité",
      description: "Ingrédients frais et soigneusement sélectionnés pour chaque prestation"
    },
    {
      icon: Users,
      title: "Service personnalisé",
      description: "Une équipe à votre écoute pour répondre à toutes vos envies"
    }
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Festive background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      {/* Decorative golden lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

      <div className="container px-4 md:px-6 relative z-10">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center mb-20">
            {/* Premium divider */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
              <Sparkles className="w-5 h-5 text-primary animate-pulse-glow" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Hervé Godinaud
              </span>
              <br />
              <span className="text-foreground">Traiteur d'Exception</span>
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="text-xl">
                AU BON GOÛT, traiteur d'exception à Lapouyade, élabore des plats variés et équilibrés
                pour répondre à toutes vos envies. Forts d'un savoir-faire et d'une expérience de
                plusieurs années, M. Godinaud et son équipe vous assurent une qualité de service
                irréprochable, que ce soit pour vos événements ou pour la livraison de repas à domicile en Gironde.
              </p>
              <p>
                Nous mettons tout en œuvre, avec nos moyens humains et logistiques, pour faire de
                votre événement à Bordeaux (33) une expérience unique et inoubliable.
              </p>
              <p>
                Traiteur événementiel à Lapouyade, nous sommes au service des particuliers et entreprises
                dans toute la Gironde et les départements limitrophes. Notre équipe talentueuse et qualifiée
                travaille exclusivement avec des ingrédients frais et de première qualité pour vous offrir
                des mets sublimes qui reflètent l'harmonie des saveurs.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Features Grid with premium cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                
                <div className="relative bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border group-hover:border-primary/50 transition-all duration-500 h-full">
                  {/* Icon with glow */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:shadow-[var(--shadow-glow)] transition-all duration-500">
                    <feature.icon className="h-8 w-8 text-primary group-hover:animate-pulse-glow" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-center text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
