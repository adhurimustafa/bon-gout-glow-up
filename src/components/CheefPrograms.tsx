import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Clock, Award, Utensils, Wine, Cake } from "lucide-react";

const programs = [
  {
    title: "Traiteur Événementiel",
    subtitle: "Mariages, anniversaires, événements d'entreprise",
    color: "bg-[hsl(142,71%,45%)]",
    features: [
      { icon: Users, text: "Réceptions sur mesure" },
      { icon: Utensils, text: "Buffets chauds & froids" },
      { icon: Wine, text: "Service cocktail" },
    ],
    cta: "Voir nos prestations",
    link: "/nos-services",
  },
  {
    title: "Portage de Repas",
    subtitle: "Des plats équilibrés livrés chez vous",
    color: "bg-[hsl(14,100%,57%)]",
    features: [
      { icon: Clock, text: "Livraison à domicile" },
      { icon: Utensils, text: "Plats faits maison" },
      { icon: Award, text: "Qualité premium" },
    ],
    cta: "Découvrir le service",
    link: "/nos-services/portage-repas",
  },
  {
    title: "Nos Spécialités",
    subtitle: "Excellence culinaire reconnue",
    color: "bg-[hsl(195,85%,41%)]",
    features: [
      { icon: Award, text: "Médaillé Saveurs d'Or 1999" },
      { icon: Cake, text: "Pâtisseries artisanales" },
      { icon: Utensils, text: "Recettes traditionnelles" },
    ],
    cta: "Voir nos spécialités",
    link: "/nos-services/specialites",
  },
];

export const CheefPrograms = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Découvrez nos prestations selon votre événement
          </h2>
          <p className="text-lg text-gray-600">
            Pour chacun de vos projets, nous vous proposons un service personnalisé et une cuisine d'exception
          </p>
        </motion.div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Color Header */}
              <div className={`${program.color} p-6 text-white`}>
                <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                <p className="text-white/90 text-sm">{program.subtitle}</p>
              </div>

              {/* Features */}
              <div className="p-6 space-y-4">
                {program.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className={`${program.color} w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="p-6 pt-0">
                <Link to={program.link}>
                  <Button 
                    className={`w-full ${program.color} hover:opacity-90 text-white rounded-lg py-6 text-base font-semibold transition-all duration-300`}
                  >
                    {program.cta}
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
