import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ChefHat, Phone, CheckCircle2 } from "lucide-react";
import serviceImage from "@/assets/service-specialites.jpg";

const NosSpecialites = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Nos Spécialités | Au Bon Goût - Traiteur Gironde</title>
        <meta
          name="description"
          content="Découvrez les spécialités gourmandes de AU BON GOÛT, votre traiteur incontournable en Gironde et Nouvelle-Aquitaine."
        />
      </Helmet>

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
              <ChefHat className="h-16 w-16 text-primary mx-auto mb-6" />
            </motion.div>
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 text-foreground font-playfair"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Nos Spécialités
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Des créations gourmandes qui font notre réputation
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Image */}
      <section className="py-12 bg-background">
        <div className="container px-4 md:px-6">
          <AnimatedSection>
            <div className="max-w-5xl mx-auto">
              <img
                src={serviceImage}
                alt="Nos spécialités gourmandes"
                className="w-full h-[500px] object-cover rounded-2xl shadow-[var(--shadow-card)]"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Découvrez les spécialités gourmandes d'<strong>AU BON GOÛT</strong>, votre traiteur 
                  incontournable en Gironde. Nous sublimerons vos événements grâce à des prestations 
                  sur-mesure, alliant saveurs authentiques et présentation soignée.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Que ce soit pour un mariage, un anniversaire ou un cocktail dînatoire, notre expertise 
                  garantit une expérience culinaire inoubliable. Basés à LAPOUYADE, nous intervenons dans 
                  tous les départements limitrophes : Libourne, Saint-André-de-Cubzac, Coutras, Izon, 
                  Saint-Denis-de-Pile et Galgon.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Specialties List */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 to-accent/20">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center font-playfair">
              Ce que nous proposons
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                "Menus sur-mesure élaborés selon vos goûts et thèmes",
                "Cocktails apéritifs et dînatoires raffinés",
                "Buffets froids variés pour célébrations",
                "Plateaux repas gourmands livrés avec soin",
                "Portage de repas à domicile pour votre confort",
                "Créations gastronomiques uniques avec produits de saison",
                "Service professionnel dans toute la Gironde",
                "Devis gratuit et personnalisé",
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="flex items-start gap-3 bg-card p-4 rounded-xl shadow-[var(--shadow-card)]"
                >
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Mini FAQ */}
            <div className="mt-16 space-y-4">
              <h3 className="text-2xl font-bold mb-8 font-playfair">Questions Fréquentes</h3>
              {[
                {
                  q: "Dans quelles villes intervenez-vous ?",
                  a: "Nous intervenons à LAPOUYADE et dans toutes les villes environnantes : Bordeaux, Libourne, Saint-André-de-Cubzac, Coutras, Izon, Saint-Denis-de-Pile, Galgon, et tous les départements limitrophes."
                },
                {
                  q: "Comment choisir AU BON GOÛT comme traiteur ?",
                  a: "Notre expertise transforme vos envies en réalité avec des prestations adaptées à tous types d'événements. Chaque spécialité est pensée pour offrir une expérience sensorielle unique avec prise en charge complète."
                },
                {
                  q: "Proposez-vous des options végétariennes ?",
                  a: "Oui, nos menus s'adaptent à tous les goûts et régimes alimentaires. Nous créons des options végétariennes, véganes et sans gluten sur demande."
                },
              ].map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="bg-card p-6 rounded-xl shadow-[var(--shadow-card)]"
                >
                  <h4 className="font-semibold mb-2 text-foreground">{faq.q}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-r from-primary/90 to-primary">
          <div className="container px-4 md:px-6 text-center">
            <Phone className="h-12 w-12 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white font-playfair">
              Découvrez Nos Spécialités
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour découvrir notre carte et créer un menu personnalisé
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
                >
                  Demander un devis
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary text-lg px-8 py-6 transition-all duration-300"
                onClick={() => (window.location.href = "tel:0557494130")}
              >
                05 57 49 41 30
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default NosSpecialites;
