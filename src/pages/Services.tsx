import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import serviceSpecialites from "@/assets/service-specialites.jpg";
import serviceMariage from "@/assets/service-mariage.jpg";
import serviceCocktail from "@/assets/service-cocktail.jpg";
import serviceReception from "@/assets/service-reception.jpg";
import servicePlateaux from "@/assets/service-buffet.jpg";
import serviceCocktailAperitif from "@/assets/service-cocktail-aperitif.jpg";
import serviceDejeunatoire from "@/assets/service-dejeunatoire.jpg";
import serviceBuffetFroid from "@/assets/service-buffet-froid.jpg";
import serviceLivraison from "@/assets/service-livraison.jpg";

const Services = () => {
  const services = [
    {
      image: serviceSpecialites,
      title: "Nos spécialités",
      description: "Découvrez les spécialités gourmandes de AU BON GOÛT, votre traiteur incontournable dans le département de la Gironde, en région Nouvelle-Aquitaine.",
      link: "/nos-services/nos-specialites"
    },
    {
      image: serviceMariage,
      title: "Votre mariage",
      description: "Avec AU BON GOÛT, situé à LAPOUYADE, vivez l'expérience d'un mariage parfaitement orchestré grâce à un service traiteur qui allie excellence culinaire et proximité géographique.",
      link: "/nos-services/mariage"
    },
    {
      image: serviceCocktail,
      title: "Vos cocktails",
      description: "Découvrez avec AU BON GOÛT à LAPOUYADE l'excellence d'un service traiteur dédié à sublimer vos événements.",
      link: "/nos-services/cocktails"
    },
    {
      image: serviceReception,
      title: "Réception associative",
      description: "Organiser une réception associative à LAPOUYADE et ses alentours devient une expérience exceptionnelle avec AU BON GOÛT.",
      link: "/nos-services/reception-associative"
    },
    {
      image: servicePlateaux,
      title: "Plateaux repas",
      description: "Offrez-vous un moment de délice avec les services de AU BON GOÛT, situé à LAPOUYADE, le traiteur expert en plateaux repas gourmands.",
      link: "/nos-services/plateaux-repas"
    },
    {
      image: serviceCocktailAperitif,
      title: "Cocktail apéritif",
      description: "Découvrez les créations uniques d'AU BON GOÛT à LAPOUYADE, où chaque cocktail apéritif est conçu pour émerveiller les papilles et offrir une expérience culinaire mémorable.",
      link: "/nos-services/cocktail-aperitif"
    },
    {
      image: serviceDejeunatoire,
      title: "Cocktail déjeunatoire ou dînatoire",
      description: "Avec AU BON GOÛT, situé à LAPOUYADE, découvrez l'art de sublimer vos moments importants grâce à des cocktails déjeunatoires ou dînatoires sur-mesure.",
      link: "/nos-services/cocktail-dejeunatoire-ou-dinatoire"
    },
    {
      image: serviceBuffetFroid,
      title: "Buffet froid et lendemain de mariage",
      description: "Lorsque l'on parle de raffinement et de convivialité, AU BON GOÛT, situé à LAPOUYADE, s'impose comme un acteur incontournable.",
      link: "/nos-services/buffet-froid-lendemain"
    },
    {
      image: serviceLivraison,
      title: "Livraison de repas à domicile",
      description: "À la recherche de saveurs exquises livrées directement à votre porte?",
      link: "/nos-services/portage-repas-domicile"
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Nos Services | Au Bon Goût - Traiteur Gironde</title>
        <meta
          name="description"
          content="Découvrez tous nos services traiteur : mariages, cocktails, portage de repas, buffets et plateaux repas en Gironde et départements limitrophes."
        />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 text-foreground font-playfair"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Nos Services
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Des prestations sur-mesure pour tous vos événements en Gironde
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Link 
                key={index}
                to={service.link}
                className="block group"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.32, delay: index * 0.08, ease: "easeOut" }}
                >
                  <div className="bg-card rounded-[28px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                    {/* Image */}
                    <div className="relative h-[280px] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent group-hover:from-primary/60 transition-all duration-300" />
                      
                      {/* Title Badge */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <span className="inline-block bg-[#f5f1e8] group-hover:bg-primary group-hover:text-white text-foreground px-6 py-3 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] font-playfair font-semibold text-lg transition-all duration-300">
                          {service.title}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7">
                      <p className="text-muted-foreground leading-[1.7] line-clamp-2 tracking-[0.2px] group-hover:text-foreground transition-colors duration-300">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
