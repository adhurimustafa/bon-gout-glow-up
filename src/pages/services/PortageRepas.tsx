import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Home, Phone, CheckCircle2 } from "lucide-react";
import serviceImage from "@/assets/service-portage.jpg";

const PortageRepas = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Livraison Repas à Domicile | Au Bon Goût - Gironde</title>
        <meta
          name="description"
          content="Service de livraison de repas à domicile en Gironde. Plats raffinés livrés à Lapouyade, Coutras, Guitres, Cavignac, Izon, Saint-Yzan-de-Soudiac et Abzac."
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
              <Home className="h-16 w-16 text-primary mx-auto mb-6" />
            </motion.div>
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 text-foreground font-playfair"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Portage de Repas à Domicile
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Une expérience culinaire de qualité directement chez vous
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
                alt="Livraison de repas à domicile"
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
                  À la recherche de saveurs exquises livrées directement à votre porte ? 
                  <strong> AU BON GOÛT</strong>, situé à LAPOUYADE, est votre partenaire culinaire pour 
                  des repas de qualité supérieure. Grâce à notre service de livraison de repas à domicile, 
                  nous apportons des plats raffinés et préparés avec soin, directement chez vous.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Profitez du confort et de la commodité tout en savourant une cuisine d'exception. Notre 
                  service de livraison s'étend à Lapouyade et à ses environs. Que vous habitiez à Coutras, 
                  Guitres, Cavignac, Izon-de-LAPOUYADE, Saint-Yzan-de-Soudiac ou Abzac, garantissons un 
                  service ponctuel et de qualité professionnelle.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 to-accent/20">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center font-playfair">
              Nos Avantages
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                "Service culinaire adapté aux seniors et personnes à mobilité réduite",
                "Technologie de transport avancée préservant fraîcheur",
                "Accompagnement anticipe personnalisé",
                "Gestion logistique experte et planification précise",
                "Ateliers culinaires et conseils techniques",
                "Recommandations ponctuelles sublimant chaque plat",
                "Menus incluant options végétariennes et sans gluten",
                "Saveur et qualité professionnelle garanties",
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
                  q: "La fraîcheur est-elle garantie ?",
                  a: "Chaque plat est élaboré avec des ingrédients frais puis transporté dans des véhicules réfrigérés assurant un respect total de la chaîne du froid, préservant la fraîcheur et les arômes des préparations jusqu'à votre livraison."
                },
                {
                  q: "Une prestation sur-mesure pour vos événements ?",
                  a: "AU BON GOÛT vous accompagne lors de vos occasions spéciales : mariages, anniversaires, réceptions professionnelles. Nous proposons menus variés personnalisables, plateaux savoureux et service de portage de repas à domicile, parfait pour allier pratique et raffinement."
                },
                {
                  q: "Pourquoi choisir AU BON GOÛT ?",
                  a: "Notre expertise transforme les repas en véritables expériences gastronomiques grâce à une maîtrise des processus, solutions techniques adaptées à vos besoins. Avec des repas frais et savoureux, vous profiterez d'une cuisine accessible adaptée à tous."
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
              Découvrez Nos Formules de Portage
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour plus d'informations sur nos services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
                >
                  Nous contacter
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

export default PortageRepas;
