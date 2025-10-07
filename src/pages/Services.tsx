import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { 
  Utensils, 
  Wine, 
  Home, 
  Users, 
  Cake,
  Building,
  ChefHat,
  Clock
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Cake,
      title: "Votre Mariage",
      description: "Faites de votre jour J un moment magique avec des menus raffinés et un service impeccable pour vous et vos convives.",
      features: ["Menus personnalisés", "Service complet", "Coordination événementielle"],
    },
    {
      icon: Wine,
      title: "Cocktails & Apéritifs",
      description: "Cocktails apéritifs, déjeunatoires ou dînatoires pour sublimer vos réceptions avec élégance et raffinement.",
      features: ["Cocktail apéritif", "Cocktail déjeunatoire", "Cocktail dînatoire"],
    },
    {
      icon: Users,
      title: "Buffets & Réceptions",
      description: "Buffets froids, lendemains de mariage et réceptions associatives avec des prestations adaptées à chaque occasion.",
      features: ["Buffets froids", "Lendemain de mariage", "Réceptions associatives"],
    },
    {
      icon: Home,
      title: "Portage de Repas à Domicile",
      description: "Des plats variés et équilibrés livrés directement chez vous pour votre confort quotidien.",
      features: ["Menus variés", "Livraison à domicile", "Ingrédients frais"],
    },
    {
      icon: Utensils,
      title: "Plateaux Repas",
      description: "Solutions pratiques pour vos déjeuners d'affaires, séminaires et événements professionnels.",
      features: ["Repas équilibrés", "Livraison ponctuelle", "Formules entreprise"],
    },
    {
      icon: ChefHat,
      title: "Nos Spécialités",
      description: "Découvrez nos créations gastronomiques élaborées avec passion et savoir-faire reconnu.",
      features: ["Recettes traditionnelles", "Produits de qualité", "Médaillé Saveurs d'Or"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Building className="h-16 w-16 text-primary mx-auto mb-6" />
            </motion.div>
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 text-foreground font-playfair"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Nos Services
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Des prestations sur-mesure pour tous vos événements et occasions spéciales
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card p-8 rounded-2xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] h-full flex flex-col"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 font-playfair">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6 flex-grow">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/contact">
                    <Button 
                      variant="outline" 
                      className="w-full hover:bg-primary hover:text-white transition-all"
                    >
                      Demander un devis
                    </Button>
                  </Link>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-r from-primary/90 to-primary">
          <div className="container px-4 md:px-6 text-center">
            <Clock className="h-12 w-12 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white font-playfair">
              Une Question ? Un Projet ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Notre équipe est à votre écoute pour créer ensemble le menu parfait pour votre événement
            </p>
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
              >
                Contactez-nous
              </Button>
            </Link>
          </div>
        </section>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default Services;
