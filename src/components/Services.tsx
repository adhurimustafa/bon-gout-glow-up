import { Card, CardContent } from "@/components/ui/card";
import serviceTraiteur from "@/assets/service-traiteur.jpg";
import serviceLivraison from "@/assets/service-livraison.jpg";
import serviceCocktail from "@/assets/service-cocktail.jpg";

export const Services = () => {
  const services = [
    {
      image: serviceTraiteur,
      title: "Événements & Mariages",
      description: "Organisation complète de vos mariages, communions, baptêmes, séminaires. Service traiteur premium avec formules adaptées à votre budget.",
      features: ["Buffets personnalisés", "Service à table", "Décoration incluse"]
    },
    {
      image: serviceLivraison,
      title: "Portage de Repas à Domicile",
      description: "Livraison de repas de qualité directement chez vous. Menus variés et équilibrés, préparés avec soin pour une expérience culinaire unique.",
      features: ["Menus variés", "Ingrédients frais", "Livraison en Gironde"]
    },
    {
      image: serviceCocktail,
      title: "Cocktails & Réceptions",
      description: "Apéritifs dînatoires, cocktails déjeunatoires et réceptions associatives. Une cuisine raffinée pour sublimer vos événements professionnels.",
      features: ["Buffets froids", "Plateaux repas", "Formules sur-mesure"]
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Nos Services Traiteur
          </h2>
          <p className="text-lg text-muted-foreground">
            Des prestations sur-mesure pour tous vos événements en Gironde et départements limitrophes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-2 animate-scale-in border-0"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white">
                  {service.title}
                </h3>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
