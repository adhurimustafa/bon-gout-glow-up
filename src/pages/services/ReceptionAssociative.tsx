import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Users, Phone, CheckCircle2 } from "lucide-react";
import serviceImage from "@/assets/service-reception.jpg";

const ReceptionAssociative = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Réception Associative | Au Bon Goût - Traiteur Gironde</title>
        <meta
          name="description"
          content="Organisation de réceptions associatives à Lapouyade et ses alentours. Service traiteur professionnel pour vos événements associatifs."
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
              <Users className="h-16 w-16 text-primary mx-auto mb-6" />
            </motion.div>
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 text-foreground font-playfair"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Réception Associative
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Des événements associatifs réussis avec un service traiteur d'exception
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
                alt="Réception associative élégante"
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
                  Organiser une réception associative à LAPOUYADE et ses alentours devient une expérience 
                  exceptionnelle avec <strong>AU BON GOÛT</strong>. Spécialiste dans les événements associés, 
                  notre traiteur s'engage à offrir un service gastronomique raffiné et un service de qualité 
                  pour émerveiller vos convives.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Que ce soit pour un cocktail dînatoire, une cérémonie de mariage, un anniversaire festif, 
                  notre savoir-faire en matière de portage de repas et gestion culinaire garantit une 
                  prestation sans égale. Nous intervenons dans les villes proches : Coutras, Saint-Savin, 
                  Coutras, Cavignac, Larusc​ade et Marsan.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 to-accent/20">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center font-playfair">
              Nos Services pour Associations
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                "Planification événements pensée dans les moindres détails",
                "Prestations flexibles : portage repas, buffets froids",
                "Adaptation au budget : formules équilibrées",
                "Sélection locale ingrédients frais authentiques",
                "Solutions variées : cocktails, plateaux traiteur, animations",
                "Expertise gastronomique raffinée adaptée",
                "Respect normes HACCP et sécurité alimentaire",
                "Présentation artistique et créative",
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
                  q: "Quels sont les avantages d'un traiteur pour vos événements associatifs ?",
                  a: "Un service traiteur comme AU BON GOÛT apporte bien plus qu'une simple prestation culinaire. Chaque détail est pris en compte pour transformer votre réception associative en une célébration mémorable. Nos cocktails apéritifs, buffets thématiques et repas en main sont conçus pour sublimer vos rassemblements."
                },
                {
                  q: "Comment organiser une réception associative mémorable ?",
                  a: "Le succès de notre réception associative nous travaillons étroitement avec vous, dès la conception du menu. Logistique sur site, animation gustative et présentation des mets. Nous gérons chaque aspect de votre réception : du respect normes HACCP, au dressage culinaire, en passant par gestion du timing au service attentif."
                },
                {
                  q: "Quels services complémentaires proposez-vous ?",
                  a: "Pour garantir la réussite de votre réception associative à LAPOUYADE ou dans ses environs, contactez AU BON GOÛT par téléphone en cliquant sur le bouton en haut à droite. Situé au 22 B AVENUE DE VERDUN à LAPOUYADE (33620), nous intervenons dans les villes voisines comme Saint-André-de-Cubzac, Libourne, Cavignac, Ambarès-et-Lagrave, Vayres et Saint-Loubès."
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
              Organisez Votre Événement Associatif
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour un devis adapté à votre association
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

export default ReceptionAssociative;
