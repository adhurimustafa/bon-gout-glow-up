import { motion } from "framer-motion";
import { Award, Heart, Users, MapPin } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence & Savoir-faire",
      description: "Médaillé Saveurs d'Or 1999 au Concours de produits régionaux Saveurs de Poitou Charentes, notre expertise culinaire est reconnue et récompensée.",
    },
    {
      icon: Heart,
      title: "Passion & Authenticité",
      description: "Chaque plat est préparé avec amour et respect des traditions, en utilisant des ingrédients frais et de première qualité soigneusement sélectionnés.",
    },
    {
      icon: Users,
      title: "Service Sur-Mesure",
      description: "Une équipe dévouée à votre écoute pour créer des prestations personnalisées qui transforment vos événements en moments inoubliables.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 text-foreground font-playfair"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Qui sommes-nous ?
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Une histoire de passion, d'excellence et de tradition culinaire depuis 1999
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl font-bold mb-8 text-foreground font-playfair text-center">
                Notre Histoire
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="text-lg leading-relaxed">
                  <strong>Au Bon Goût</strong>, c'est l'histoire d'une passion transmise et d'un savoir-faire reconnu. 
                  Fondé par <strong>Hervé Godinaud</strong>, notre établissement est devenu une référence incontournable 
                  en matière de traiteur événementiel et de portage de repas à domicile en Gironde.
                </p>
                <p className="text-lg leading-relaxed">
                  Forts d'une expérience de plusieurs années et d'une reconnaissance officielle avec notre 
                  <strong> médaille Saveurs d'Or 1999</strong> au Concours de produits régionaux Saveurs de Poitou Charentes, 
                  nous mettons tout en œuvre, avec nos moyens humains et logistiques, pour faire de vos événements 
                  des expériences uniques et inoubliables.
                </p>
                <p className="text-lg leading-relaxed">
                  Situés à <strong>Lapouyade</strong>, au cœur de la Gironde, nous intervenons dans toute la région : 
                  Bordeaux, Mérignac, Pessac, Talence, le Bassin d'Arcachon et bien au-delà, dans un rayon de 200 km.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 to-accent/20">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-playfair">
              Nos Valeurs
            </h2>
            <p className="text-lg text-muted-foreground">
              Ce qui nous définit et guide notre travail au quotidien
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card p-8 rounded-2xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] h-full"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center font-playfair">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-4xl font-bold mb-6 text-foreground font-playfair">
                Zone d'Intervention
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Nous intervenons dans un rayon de 200 km autour de Lapouyade
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-[var(--shadow-card)]">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Notre équipe de passionnés se déplace dans toute la Gironde et les départements limitrophes 
                pour vous offrir un service irréprochable. Que ce soit pour un événement professionnel ou 
                une célébration personnelle, notre touche gastronomique unique s'adaptera parfaitement à 
                votre environnement et à vos besoins spécifiques.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Bordeaux et sa métropole</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Bassin d'Arcachon</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Mérignac, Pessac, Talence</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Départements limitrophes</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
