import { Award, Heart, Users } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Award,
      title: "Savoir-faire reconnu",
      description: "Médaillé Saveurs d'Or 1999 pour notre excellence culinaire"
    },
    {
      icon: Heart,
      title: "Passion & Qualité",
      description: "Ingrédients frais et soigneusement sélectionnés pour chaque prestation"
    },
    {
      icon: Users,
      title: "Service personnalisé",
      description: "Une équipe à votre écoute pour répondre à toutes vos envies"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Hervé Godinaud, Traiteur d'Exception
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            AU BON GOÛT, traiteur d'exception à Lapouyade, élabore des plats variés et équilibrés 
            pour répondre à toutes vos envies. Forts d'un savoir-faire et d'une expérience de 
            plusieurs années, M. Godinaud et son équipe vous assurent une qualité de service 
            irréprochable, que ce soit pour vos événements ou pour la livraison de repas à domicile en Gironde.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nous mettons tout en œuvre, avec nos moyens humains et logistiques, pour faire de 
            votre événement à Bordeaux (33) une expérience unique et inoubliable.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-card p-8 rounded-xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
