import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Marie & Thomas",
      event: "Mariage",
      rating: 5,
      text: "Un service exceptionnel pour notre mariage ! Les plats étaient délicieux et la présentation impeccable. Tous nos invités ont été ravis. Merci à toute l'équipe pour cette prestation de qualité."
    },
    {
      name: "Sophie Durand",
      event: "Réception d'entreprise",
      rating: 5,
      text: "Professionnalisme et qualité au rendez-vous. Les cocktails dînatoires ont fait l'unanimité lors de notre séminaire. Service irréprochable, je recommande vivement !"
    },
    {
      name: "Jean-Pierre M.",
      event: "Portage de repas",
      rating: 5,
      text: "Je bénéficie du service de portage de repas depuis plusieurs mois. Les menus sont variés, équilibrés et vraiment savoureux. Un vrai plaisir quotidien !"
    }
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Ils nous font confiance
          </h2>
          <p className="text-lg text-muted-foreground">
            Découvrez les retours de nos clients satisfaits
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-all duration-300 animate-scale-in border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <Quote className="h-10 w-10 text-primary/20 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
