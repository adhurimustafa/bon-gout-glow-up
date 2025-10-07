import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Award, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCallButton } from "@/components/StickyCallButton";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Helmet } from "react-helmet";

const Home = () => {
  const handleCall = () => {
    window.location.href = "tel:0557494130";
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      title: "Traiteur Événementiel",
      description: "Mariages, anniversaires, événements d'entreprise - nous créons des expériences culinaires mémorables",
      icon: Users,
      link: "/nos-services",
    },
    {
      title: "Portage de Repas",
      description: "Des plats équilibrés livrés directement à votre domicile, pour votre confort quotidien",
      icon: Clock,
      link: "/nos-services",
    },
    {
      title: "Excellence & Savoir-faire",
      description: "Médaillé Saveurs d'Or 1999 - Une expertise reconnue au service de votre gastronomie",
      icon: Award,
      link: "/qui-sommes-nous",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <HeroCarousel />

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-playfair">
              Notre Excellence à Votre Service
            </h2>
            <p className="text-lg text-muted-foreground">
              Trois piliers qui font notre réputation depuis 1999
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="bg-card p-8 rounded-2xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all h-full"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center font-playfair">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-center mb-6">
                    {service.description}
                  </p>
                  <Link to={service.link} className="block">
                    <Button variant="outline" className="w-full hover:bg-primary hover:text-white transition-all">
                      En savoir plus
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white font-playfair">
              Prêt à créer des souvenirs inoubliables ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour discuter de votre projet
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
                onClick={handleCall}
              >
                <Phone className="mr-2 h-5 w-5" />
                05 57 49 41 30
              </Button>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
                >
                  Demander un devis
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <Footer />
      <StickyCallButton />
    </div>
  );
};

export default Home;
