import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Award, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-restaurant.jpg";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCallButton } from "@/components/StickyCallButton";
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
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img
            src={heroImage}
            alt="Plat gastronomique Au Bon Goût"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(25_30%_15%_/_0.9)] to-[hsl(28_40%_25%_/_0.7)]" />
        </motion.div>

        <div className="container relative z-10 px-4 md:px-6 text-center md:text-left pt-20">
          <div className="max-w-3xl mx-auto md:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-playfair">
                Au Bon Goût
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-2xl md:text-3xl text-white/95 mb-4 font-light italic">
                Le goût de la tradition, servi avec élégance
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-lg md:text-xl text-white/85 mb-8 max-w-2xl leading-relaxed">
                Une équipe à votre écoute, un service sur-mesure et un savoir-faire reconnu. 
                Traiteur d'exception pour vos instants mémorables en Gironde.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white shadow-[var(--shadow-elegant)] text-lg px-8 py-6 transition-all hover:scale-105"
                onClick={handleCall}
              >
                <Phone className="mr-2 h-5 w-5" />
                Nous appeler
              </Button>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-foreground text-lg px-8 py-6 transition-all hover:scale-105"
                >
                  <MapPin className="mr-2 h-5 w-5" />
                  Demander un devis
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

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
