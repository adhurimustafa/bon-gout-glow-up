import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedSection } from "../AnimatedSection";
import { Sparkles, CheckCircle2, Clock, ChefHat, Truck } from "lucide-react";

export const ProcessTimeline = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);

  const steps = [
    {
      icon: Sparkles,
      title: "1. Premier Contact",
      description: "Vous nous contactez pour nous faire part de votre projet. Nous prenons le temps d'écouter vos envies, contraintes et budget.",
      color: "from-primary to-accent"
    },
    {
      icon: ChefHat,
      title: "2. Élaboration du Menu",
      description: "Notre chef conçoit un menu sur-mesure adapté à vos goûts et à votre événement. Dégustation possible sur demande.",
      color: "from-accent to-primary"
    },
    {
      icon: CheckCircle2,
      title: "3. Validation & Planification",
      description: "Validation du devis, planification logistique complète. Nous gérons tous les détails pour votre tranquillité.",
      color: "from-primary via-accent to-primary"
    },
    {
      icon: Clock,
      title: "4. Préparation",
      description: "Préparation méticuleuse de vos plats avec des ingrédients frais sélectionnés le jour même. Tout est fait maison.",
      color: "from-accent to-primary"
    },
    {
      icon: Truck,
      title: "5. Livraison & Service",
      description: "Installation sur site, service impeccable et animation selon vos besoins. Nous restons jusqu'à la fin de votre événement.",
      color: "from-primary to-accent"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-muted/30 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent shadow-[var(--shadow-glow)]" />

      <div className="container px-4 md:px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary" />
              <CheckCircle2 className="w-6 h-6 text-primary animate-pulse-glow" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary" />
            </div>

            <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Votre Événement Parfait
            </h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              De votre premier appel jusqu'au service, chaque étape est pensée pour votre satisfaction
            </p>
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <AnimatedSection key={index} delay={index * 0.15}>
              <motion.div
                style={{ opacity }}
                className="relative mb-16 last:mb-0"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Number & Icon */}
                  <div className="flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="relative group"
                    >
                      <div className={`absolute -inset-2 bg-gradient-to-r ${step.color} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500`} />
                      
                      <div className={`relative w-24 h-24 bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center shadow-[var(--shadow-glow)] group-hover:shadow-[var(--shadow-glow-hover)] transition-all duration-500`}>
                        <step.icon className="w-12 h-12 text-black" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <motion.div
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex-1 group"
                  >
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                      
                      <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 border border-border group-hover:border-primary/50 transition-all duration-500">
                        <h3 className="text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Connecting line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="absolute left-12 top-24 w-0.5 h-16 bg-gradient-to-b from-primary to-transparent ml-0 md:ml-0 hidden md:block" />
                )}
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.8}>
          <div className="text-center mt-20">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] text-black font-bold px-12 py-5 rounded-2xl shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow-hover)] transition-all duration-500 text-lg"
            >
              <Sparkles className="inline-block w-5 h-5 mr-2 animate-pulse-glow" />
              Lancez votre projet dès maintenant
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
