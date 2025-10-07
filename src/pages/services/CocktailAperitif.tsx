import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { GlassWater, Phone, CheckCircle2 } from "lucide-react";
import serviceImage from "@/assets/service-cocktail-aperitif.jpg";

const CocktailAperitif = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Cocktail Apéritif | Au Bon Goût - Traiteur Gironde</title>
        <meta
          name="description"
          content="Cocktails apéritifs sur-mesure à Lapouyade. Créations uniques pour émerveiller vos papilles et offrir une expérience culinaire mémorable."
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
              <GlassWater className="h-16 w-16 text-primary mx-auto mb-6" />
            </motion.div>
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 text-foreground font-playfair"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Cocktail Apéritif
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Des créations uniques pour commencer vos événements en beauté
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
                alt="Cocktails apéritifs élégants"
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
                  Découvrez les créations uniques d'<strong>AU BON GOÛT</strong> à LAPOUYADE, où chaque 
                  cocktail apéritif est conçu pour émerveiller les papilles et offrir une expérience 
                  culinaire mémorable. Située au cœur de la Gironde, cette entreprise excelle dans l'art 
                  gastronomique, proposant des prestations adaptées aux attentes les plus variées.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Que ce soit à Libourne, Saint-Denis-de-Pile, Coutras, Guitres, Saint-Sulpice-de-Faleyrens 
                  ou Abzac, nous sommes spécialistes de l'événementiel et intervenons avec efficacité pour 
                  transformer chaque réception en un moment exceptionnel.
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
              Nos Formules Apéritif
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                "Fraîcheur des ingrédients contribuant à la réussite",
                "Buffets personnalisés avec saveurs internationales",
                "Dégustation avant l'événement pour assurer le menu",
                "Suivi attentif et assuré par notre chef traiteur",
                "Solutions inclusives avec options alimentaires spécifiques",
                "Buffets thématiques créatifs pour événements variés",
                "Service complet incluant cocktails signature",
                "Expérience gustative enrichie pour vos convives",
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
                  q: "Comment garantir un cocktail apéritif exceptionnel ?",
                  a: "L'excellence de la fraîcheur des ingrédients constitue le socle des services d'AU BON GOÛT. Chaque amuse-bouche et boisson est élaboré avec soin pour répondre à des exigences élevées. Chefs privilégiant produits de saison et locaux pour garantir une expérience gustative."
                },
                {
                  q: "Quels services complémentaires proposez-vous ?",
                  a: "AU BON GOÛT propose un éventail de prestations : buffets personnalisés pour événements, dégustation proposée avant l'événement, des solutions inclusives et bien pensées répondant aux besoins alimentaires spécifiques."
                },
                {
                  q: "Où intervenez-vous pour vos cocktails ?",
                  a: "Nous intervenons dans les localités comme Saint-Savin, Larusc​ade, Izon-de-Coutran, Cadillac-en-Fronsadais, Saint-Michel-de-Fronsac et Diou. N'hésitez pas à consulter notre avis Google pour découvrir nos clients satisfaits."
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
              Créez Votre Cocktail Apéritif
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour composer un cocktail sur-mesure
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

export default CocktailAperitif;
