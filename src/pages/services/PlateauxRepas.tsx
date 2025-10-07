import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Utensils, Phone, CheckCircle2 } from "lucide-react";
import serviceImage from "@/assets/service-buffet.jpg";

const PlateauxRepas = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Plateaux Repas Gironde | Au Bon Goût - Lapouyade</title>
        <meta
          name="description"
          content="Plateaux repas gourmands pour professionnels en Gironde. Livraison ponctuelle à Cavignac, Marcenais, Laruscade, Saint-Savin, Villegouge et Saint-Denis-de-Pile."
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
              <Utensils className="h-16 w-16 text-primary mx-auto mb-6" />
            </motion.div>
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 text-foreground font-playfair"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Plateaux Repas
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Solutions pratiques pour vos déjeuners d'affaires et événements professionnels
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
                alt="Plateaux repas gourmands"
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
                  Offrez-vous un moment de délice avec les services d'<strong>AU BON GOÛT</strong>, situé à 
                  LAPOUYADE, le traiteur expert en plateaux repas gourmands. Que ce soit pour une réunion 
                  d'affaires, un événement spécial ou simplement pour agrémenter votre quotidien, notre 
                  mission est de satisfaire vos papilles avec des options savoureuses et élégamment présentées.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Grâce à une livraison soignée couvrant les villes voisines telles que Cavignac, Marcenais, 
                  Laruscade, Saint-Savin, Villegouge et Saint-Denis-de-Pile, nous combinons proximité 
                  géographique et excellence culinaire. Chaque repas est soigneusement élaboré avec des 
                  ingrédients locaux de qualité pour assurer un goût authentique et une fraîcheur optimale.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Formules */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 to-accent/20">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center font-playfair">
              Nos Formules
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                "Sélection rigoureuse de produits locaux et de saison",
                "Menus adaptés intégrant options végétariennes",
                "Présentation raffinée pour éviter les repas ternes",
                "Livraison ponctuelle dans toute la Gironde",
                "Emballage écoresponsable pratique",
                "Solutions variées : cocktails, buffets, plateaux",
                "Service attentif de notre équipe",
                "Rapport qualité-prix optimal",
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
                  q: "Comment garantir la fraîcheur des aliments ?",
                  a: "Nous sélectionnons rigoureusement nos produits auprès de fournisseurs locaux pour assurer un goût authentique et fraîcheur optimale. En intégrant les ingrédients de qualité, nous vous assurons à la fois fraîcheur et saveur."
                },
                {
                  q: "Proposez-vous des menus personnalisés ?",
                  a: "Oui, nos menus sont conçus pour répondre à toutes vos attentes. Que ce soit pour un déjeuner végétarien, sans gluten ou allégé, nos chefs créent des options parfaites pour vos événements professionnels ou familiaux."
                },
                {
                  q: "Pourquoi choisir nos services traiteur ?",
                  a: "Nous offrons une solution complète et efficace. Nos réunions conviviales, événements privés ou réceptions nécessitent une attention particulière aux détails et service adapté à vos attentes. Contactez-nous pour des plateaux repas, buffets froids, ou portage de repas à domicile."
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
              Commandez Vos Plateaux Repas
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour un devis personnalisé
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
                className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
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

export default PlateauxRepas;
