import { motion } from "framer-motion";
import { AnimatedSection } from "../AnimatedSection";
import { Sparkles, Utensils, Wine, Cake } from "lucide-react";
import serviceTraiteur from "@/assets/service-traiteur.jpg";
import serviceLivraison from "@/assets/service-livraison.jpg";
import serviceCocktail from "@/assets/service-cocktail.jpg";
import buffetFroid from "@/assets/service-buffet-froid.jpg";
import specialites from "@/assets/service-specialites.jpg";
import dejeunatoire from "@/assets/service-dejeunatoire.jpg";

export const MenuInteractif = () => {
  const menuCategories = [
    {
      title: "Événements & Mariages",
      icon: Cake,
      image: serviceTraiteur,
      items: [
        "Buffets personnalisés sur-mesure",
        "Service à table raffiné",
        "Décoration florale incluse",
        "Coordination événementielle"
      ],
      color: "from-primary to-accent"
    },
    {
      title: "Cocktails Dînatoires",
      icon: Wine,
      image: serviceCocktail,
      items: [
        "Apéritifs dînatoires chics",
        "Cocktails déjeunatoires",
        "Réceptions associatives",
        "Formules sur-mesure"
      ],
      color: "from-accent to-primary"
    },
    {
      title: "Buffets Froids Premium",
      icon: Utensils,
      image: buffetFroid,
      items: [
        "Plateaux de fruits de mer",
        "Charcuteries artisanales",
        "Fromages d'exception",
        "Desserts raffinés"
      ],
      color: "from-primary via-accent to-primary"
    },
    {
      title: "Nos Spécialités",
      icon: Sparkles,
      image: specialites,
      items: [
        "Cuisine du terroir revisitée",
        "Plats signatures du chef",
        "Ingrédients frais de saison",
        "Créations gastronomiques"
      ],
      color: "from-accent to-primary"
    },
    {
      title: "Portage de Repas",
      icon: Utensils,
      image: serviceLivraison,
      items: [
        "Menus variés quotidiens",
        "Livraison à domicile",
        "Plats équilibrés",
        "Service en Gironde"
      ],
      color: "from-primary to-accent"
    },
    {
      title: "Cocktails Déjeunatoires",
      icon: Wine,
      image: dejeunatoire,
      items: [
        "Formules midi élégantes",
        "Animations culinaires",
        "Service traiteur complet",
        "Options végétariennes"
      ],
      color: "from-accent via-primary to-accent"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-card/30" />
      
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary" />
              <Utensils className="w-6 h-6 text-primary animate-pulse-glow" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary" />
            </div>

            <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Notre Carte Premium
            </h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              Des prestations sur-mesure élaborées avec des ingrédients frais et de première qualité
            </p>
          </div>
        </AnimatedSection>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {menuCategories.map((category, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -12, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group h-full"
              >
                <div className="relative h-full">
                  {/* Glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${category.color} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500`} />
                  
                  <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-border group-hover:border-primary/50 transition-all duration-500 h-full">
                    {/* Image header */}
                    <div className="relative h-56 overflow-hidden">
                      <motion.img
                        whileHover={{ scale: 1.15 }}
                        transition={{ duration: 0.6 }}
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                      
                      {/* Icon badge */}
                      <div className="absolute top-4 right-4">
                        <div className={`bg-gradient-to-r ${category.color} p-3 rounded-2xl shadow-[var(--shadow-glow)]`}>
                          <category.icon className="w-6 h-6 text-black" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3
                        className="absolute bottom-4 left-6 right-6 text-2xl font-bold text-white"
                        style={{
                          textShadow: "0 0 20px hsl(45 95% 65% / 0.5), 0 2px 10px rgba(0,0,0,0.8)"
                        }}
                      >
                        {category.title}
                      </h3>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <ul className="space-y-3">
                        {category.items.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-3 group/item"
                          >
                            <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full mt-2 flex-shrink-0 group-hover/item:shadow-[var(--shadow-glow)] transition-all duration-300`} />
                            <span className="text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                              {item}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Section */}
        <AnimatedSection delay={0.6}>
          <div className="text-center mt-16">
            <p className="text-xl text-muted-foreground mb-6">
              Toutes nos formules sont personnalisables selon vos envies et votre budget
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] text-black font-bold px-12 py-5 rounded-2xl shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow-hover)] transition-all duration-500 text-lg"
            >
              <Sparkles className="inline-block w-5 h-5 mr-2 animate-pulse-glow" />
              Demander un devis personnalisé
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
