import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { Sparkles } from "lucide-react";
import serviceTraiteur from "@/assets/service-traiteur.jpg";
import serviceLivraison from "@/assets/service-livraison.jpg";
import serviceCocktail from "@/assets/service-cocktail.jpg";

export const ServicesPremium = () => {
  const services = [
    {
      image: serviceTraiteur,
      title: "Événements & Mariages",
      description: "Organisation complète de vos mariages, communions, baptêmes, séminaires. Service traiteur premium avec formules adaptées à votre budget.",
      features: ["Buffets personnalisés", "Service à table", "Décoration incluse"]
    },
    {
      image: serviceLivraison,
      title: "Portage de Repas à Domicile",
      description: "Livraison de repas de qualité directement chez vous. Menus variés et équilibrés, préparés avec soin pour une expérience culinaire unique.",
      features: ["Menus variés", "Ingrédients frais", "Livraison en Gironde"]
    },
    {
      image: serviceCocktail,
      title: "Cocktails & Réceptions",
      description: "Apéritifs dînatoires, cocktails déjeunatoires et réceptions associatives. Une cuisine raffinée pour sublimer vos événements professionnels.",
      features: ["Buffets froids", "Plateaux repas", "Formules sur-mesure"]
    }
  ];

  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

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
              Nos Services Traiteur
            </h2>
            <p className="text-xl text-muted-foreground">
              Des prestations sur-mesure pour tous vos événements en Gironde et départements limitrophes
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group h-full"
              >
                <Card className="overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:shadow-[var(--shadow-elegant)] transition-all duration-500 h-full relative">
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10" />
                  
                  <div className="relative h-72 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.6 }}
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Luxury gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    
                    {/* Title with golden glow */}
                    <h3 className="absolute bottom-6 left-6 right-6 text-3xl font-bold text-white"
                        style={{
                          textShadow: "0 0 20px hsl(45 95% 65% / 0.5), 0 2px 10px rgba(0,0,0,0.8)"
                        }}>
                      {service.title}
                    </h3>
                  </div>

                  <CardContent className="p-8 bg-gradient-to-b from-card to-muted/20">
                    <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center text-sm text-foreground group/item"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-3 group-hover/item:shadow-[var(--shadow-glow)] transition-all duration-300" />
                          <span className="group-hover/item:text-primary transition-colors duration-300">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
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
