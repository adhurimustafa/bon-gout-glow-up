import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { UtensilsCrossed, Phone, CheckCircle2 } from "lucide-react";
import serviceImage from "@/assets/service-buffet-froid.jpg";

const BuffetFroid = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Buffet Froid & Lendemain Mariage | Au Bon Goût - Gironde</title>
        <meta
          name="description"
          content="Buffets froids raffinés et lendemains de mariage à Lapouyade. Spécialiste buffet froid en Gironde pour vos événements professionnels."
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
              <UtensilsCrossed className="h-16 w-16 text-primary mx-auto mb-6" />
            </motion.div>
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 text-foreground font-playfair"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Buffet Froid & Lendemain de Mariage
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Raffinement et convivialité pour prolonger la magie de votre événement
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
                alt="Buffet froid élégant"
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
                  Lorsque l'on parle de raffinement et de convivialité, <strong>AU BON GOÛT</strong>, 
                  situé à LAPOUYADE, s'impose comme un acteur incontournable. Spécialiste en buffet froid 
                  et lendemain de mariage, notre entreprise culinaire transforme vos réceptions en instants 
                  mémorables grâce à une organisation minutieuse et une sélection de mets savoureux.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Nous concevons des buffets froids qui allient esthétisme, praticité et excellence culinaire. 
                  Nos prestations sont pensées pour satisfaire tous vos invités, alliant variétés tranchées 
                  délicatement avec plats parfaitement assaisonnés. Nous intervenons à Libourne, Coutras, 
                  Saint-Denis-de-Pile, Abzac, Villegouge et Saint-Seurin-sur-l'Isle.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Prestations */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 to-accent/20">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center font-playfair">
              Nos Prestations Buffet
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                "Buffets froids alliant esthétisme et praticité",
                "Mise en scène culinaire professionnelle",
                "Respect du thème choisi avec distribution efficace",
                "Accompagnement artisanal créatif",
                "Logistique parfaitement orchestrée",
                "Coordination sur-mesure incluant suivi rigoureux",
                "Engagement envers la durabilité",
                "Solutions transport alimentaire sécurisées",
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
                  q: "Comment garantir un lendemain de mariage inoubliable ?",
                  a: "Le lendemain de mariage est une occasion spéciale qui mérite une attention particulière. AU BON GOÛT propose des formules brunch ou déjeuner sur-mesure, conçues pour prolonger l'enchantement de la veille en offrant un moment de détente avec buffets élégants, plats personnalisés et distribution efficace."
                },
                {
                  q: "Quels engagements pour vos prestations ?",
                  a: "Notre équipe se plait à votre satisfaction : sélection d'ingrédients premium, présentation soignée, mise en scène culinaire professionnelle, intégrant présentations élégantes sur assiettes, verrines, individuelle en tranches. Notre logistique parfaitement orchestrée, grâce à utilisation d'équipements isothermes et solutions de transport alimentaire sécurisées."
                },
                {
                  q: "Où intervenez-vous avec vos buffets froids ?",
                  a: "Pour garantir une réactivité et flexibilité adaptée à vos besoins, contactez-nous aujourd'hui pour discuter de vos besoins spécifiques et obtenir un devis personnalisé. Situé au 22 B AVENUE DE VERDUN à LAPOUYADE (33620), nous intervenons dans les villes voisines : Bordeaux, Libourne, Saint-Mélard-de-Guîtres, Pomerol, Mérignac et Bordeaux."
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
              Organisez Votre Buffet Froid
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour composer un buffet adapté à votre événement
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

export default BuffetFroid;
