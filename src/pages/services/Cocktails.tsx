import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Wine, Phone, CheckCircle2 } from "lucide-react";
import serviceImage from "@/assets/service-cocktail.jpg";

const Cocktails = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Cocktails & Apéritifs | Au Bon Goût - Traiteur Gironde</title>
        <meta
          name="description"
          content="Organisation de cocktails apéritifs, déjeunatoires et dînatoires en Gironde. Service traiteur élégant pour vos réceptions d'exception."
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
              <Wine className="h-16 w-16 text-primary mx-auto mb-6" />
            </motion.div>
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 text-foreground font-playfair"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Vos Cocktails
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Cocktails apéritifs, déjeunatoires ou dînatoires pour sublimer vos réceptions
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
                alt="Cocktails et apéritifs élégants"
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
                  Découvrez avec <strong>AU BON GOÛT</strong> à LAPOUYADE l'excellence d'un service traiteur 
                  dédié à sublimer vos événements. Notre équipe passionnée par l'art culinaire et la 
                  satisfaction client propose des cocktails dînatoires uniques et un service sur-mesure 
                  qui ravira vos convives.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Présents sur Bordeaux, Saint-André-de-Cubzac, Libourne, Izon, Galgon et Coutras, nous 
                  sommes le partenaire idéal pour transformer vos moments festifs en souvenirs inoubliables. 
                  Notre sélection rigoureuse d'ingrédients locaux garantit des bouchées savoureuses.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Types de Cocktails */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 to-accent/20">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center font-playfair">
              Nos Formules Cocktails
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                "Sélection minutieuse d'ingrédients locaux",
                "Menus personnalisés élaborés par nos chefs",
                "Présentation soignée et raffinée",
                "Dressage artistique et scénographie",
                "Service clé en main avec personnel formé",
                "Intégration de la mixologie pour cocktails signature",
                "Ouverture géographique stratégique en Gironde",
                "Matériel professionnel haut-de-gamme inclus",
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
                  q: "Pourquoi opter pour un cocktail thématique ?",
                  a: "Un cocktail thématique personnalise votre événement et le rend unique. Nos chefs adaptent chaque bouchée et boisson pour créer une harmonie parfaite entre décoration, scénographie et contenus culinaires."
                },
                {
                  q: "Quels services complémentaires proposez-vous ?",
                  a: "Nous utilisons des techniques avancées comme la mixologie pour des cocktails signature. Notre approche thématique combinée à notre expertise garantit une logistique impeccable, avec personal formé pour une expérience fluide et mémorable."
                },
                {
                  q: "Dans quelles zones intervenez-vous ?",
                  a: "Nous sommes présents à Bordeaux, Libourne, Ambarès-et-Lagrave, Fronsac, Izon-de-Coutran, et Blaye. Contactez-nous pour organiser vos cocktails à LAPOUYADE ou dans toute la Gironde."
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
              Organisez Votre Cocktail Sur-Mesure
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

export default Cocktails;
