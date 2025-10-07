import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Cake, Phone, CheckCircle2 } from "lucide-react";
import serviceImage from "@/assets/service-mariage.jpg";

const Mariage = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Traiteur Mariage Gironde | Au Bon Goût - Lapouyade</title>
        <meta
          name="description"
          content="Excellence culinaire pour votre mariage à Lapouyade. Service traiteur sur-mesure dans toute la Gironde : Libourne, Saint-André-de-Cubzac, Coutras, Izon."
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
              <Cake className="h-16 w-16 text-primary mx-auto mb-6" />
            </motion.div>
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 text-foreground font-playfair"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Votre Mariage
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Faites de votre jour J un moment magique avec des menus raffinés et un service impeccable
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
                alt="Réception de mariage élégante"
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
                  Avec <strong>AU BON GOÛT</strong>, situé à LAPOUYADE, vivez l'expérience d'un mariage 
                  parfaitement orchestré grâce à un service traiteur qui allie excellence culinaire et 
                  proximité géographique.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Pour tout autre événement spécial, nous déployons notre expertise pour créer des souvenirs 
                  gustatifs inoubliables dans les villes comme Libourne, Saint-André-de-Cubzac, Coutras, 
                  Izon, Galgon et Ambarès-et-Lagrave. Nos chefs expérimentés élaborent des cocktails dînatoires 
                  innovants et des buffets froids raffinés.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Inclus */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 to-accent/20">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center font-playfair">
              Nos Prestations Mariage
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                "Sélection minutieuse de mets raffinés et personnalisés",
                "Réalisation sur place de pièces gastronomiques",
                "Serveurs professionnels pour une prestation fluide",
                "Cocktails apéritifs créatifs pour surprendre vos invités",
                "Location de vaisselle et nappages haut-de-gamme",
                "Coordination avec votre thème et vos prestataires",
                "Service rapide et parfaitement adapté",
                "Intervention en Gironde et départements limitrophes",
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
                  q: "Comment garantir la réussite de notre repas de mariage ?",
                  a: "La réussite de votre mariage repose sur une coordination experte et un service culinaire personnalisé. Nous sélectionnons les meilleurs produits et proposons une dégustation pour vous. Notre équipe intervient efficacement dans des zones proches comme Taron, Sauveterre-de-Guyenne, Créon ou Blaye."
                },
                {
                  q: "Proposez-vous des services annexes pour le mariage ?",
                  a: "Oui, nous proposons des services variés : conception de cocktails apéritifs uniques, buffets froids gourmands, plateaux repas pratiques pour vos moments festifs ou intimes, décoration des buffets et mise à disposition de matériel logistique."
                },
                {
                  q: "Quelle est votre zone d'intervention ?",
                  a: "Nous intervenons à proximité de Bordeaux, Libourne, Saint-André-de-Cubzac, et dans toutes les localités de Gironde. Contactez-nous au 05 57 49 41 30 pour un devis personnalisé."
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
              Créons Ensemble Votre Menu de Mariage
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour un devis personnalisé et gratuit
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

export default Mariage;
