import { motion } from "framer-motion";
import { AnimatedSection } from "../AnimatedSection";
import { Heart, Award, Users, Leaf, Sparkles } from "lucide-react";

export const ValuesSection = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Médaillé Saveurs d'Or 1999, notre engagement pour la qualité et le savoir-faire culinaire est reconnu et récompensé.",
      color: "from-primary to-accent",
      stats: "Depuis 1999"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "La passion de la cuisine et du service est au cœur de chaque prestation. Nous aimons ce que nous faisons et ça se voit.",
      color: "from-accent to-primary",
      stats: "100% Fait maison"
    },
    {
      icon: Leaf,
      title: "Qualité",
      description: "Ingrédients frais et soigneusement sélectionnés pour chaque prestation. Nous travaillons exclusivement avec des produits de première qualité.",
      color: "from-primary via-accent to-primary",
      stats: "Produits frais"
    },
    {
      icon: Users,
      title: "Service",
      description: "Une équipe à votre écoute pour répondre à toutes vos envies. Service personnalisé et attention aux détails pour chaque événement.",
      color: "from-accent to-primary",
      stats: "Service sur-mesure"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-card/30" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary" />
              <Heart className="w-6 h-6 text-primary fill-primary animate-pulse-glow" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary" />
            </div>

            <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Notre ADN
            </h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              Les valeurs qui font notre différence et garantissent votre satisfaction
            </p>
          </div>
        </AnimatedSection>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <AnimatedSection key={index} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group h-full"
              >
                <div className="relative h-full">
                  {/* Glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${value.color} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500`} />
                  
                  <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-10 border border-border group-hover:border-primary/50 transition-all duration-500 h-full">
                    {/* Icon with animated badge */}
                    <div className="relative mb-8">
                      <div className="absolute -top-3 -right-3">
                        <Sparkles className="w-6 h-6 text-primary animate-pulse-glow" />
                      </div>
                      
                      <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-3xl flex items-center justify-center shadow-[var(--shadow-glow)] group-hover:shadow-[var(--shadow-glow-hover)] transition-all duration-500`}>
                        <value.icon className="w-10 h-10 text-black" />
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                        {value.title}
                      </h3>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        {value.description}
                      </p>

                      {/* Stats badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        <span className="text-primary font-semibold text-sm">
                          {value.stats}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Quote Section */}
        <AnimatedSection delay={0.6}>
          <div className="max-w-4xl mx-auto mt-20">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
              
              <div className="relative bg-gradient-to-br from-card/80 to-muted/50 backdrop-blur-sm rounded-3xl p-12 border border-border group-hover:border-primary/50 transition-all duration-500 text-center">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Sparkles className="w-8 h-8 text-primary animate-pulse-glow" />
                </div>

                <p className="text-2xl md:text-3xl font-light italic text-foreground leading-relaxed mb-6">
                  "Notre équipe talentueuse et qualifiée travaille exclusivement avec des ingrédients frais et de première qualité pour vous offrir des mets sublimes qui reflètent l'harmonie des saveurs."
                </p>
                
                <div className="flex items-center justify-center gap-2">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
                  <p className="text-primary font-bold text-lg">Hervé Godinaud</p>
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
