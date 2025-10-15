import { motion } from "framer-motion";
import { Truck, Users, Award, Clock, ChefHat, MapPin } from "lucide-react";

const advantages = [
  {
    icon: Truck,
    title: "Livraison offerte",
    description: "Dans un rayon de 200 km autour de Lapouyade",
  },
  {
    icon: Users,
    title: "Service personnalisé",
    description: "Accompagnement sur mesure pour chaque événement",
  },
  {
    icon: Award,
    title: "Expertise reconnue",
    description: "Médaillé Saveurs d'Or 1999",
  },
  {
    icon: Clock,
    title: "25+ ans d'expérience",
    description: "Plus de 1000 événements réalisés",
  },
  {
    icon: ChefHat,
    title: "Cuisine fait maison",
    description: "Produits frais et de qualité",
  },
  {
    icon: MapPin,
    title: "Large zone d'intervention",
    description: "Gironde et départements limitrophes",
  },
];

export const CheefAdvantages = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos avantages exclusifs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez ce qui fait la différence chez Hervé Godinaud Traiteur
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[hsl(195,85%,41%)] to-[hsl(195,85%,50%)] rounded-xl flex items-center justify-center mb-4">
                <advantage.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {advantage.title}
              </h3>
              <p className="text-gray-600">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
