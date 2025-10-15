import { motion } from "framer-motion";
import { Award, Star } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";
import aboutCuisine from "@/assets/about-cuisine.jpg";

export const CheefExperts = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Notre chef et notre équipe
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Un savoir-faire reconnu au service de vos événements d'exception
          </p>
        </motion.div>

        {/* Experts Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Hervé Godinaud */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="bg-gray-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500">
              {/* Badge */}
              <div className="absolute -top-4 left-8">
                <div className="bg-[hsl(195,85%,41%)] px-6 py-3 rounded-full flex items-center gap-2 shadow-lg">
                  <Award className="w-5 h-5 text-white" />
                  <span className="text-white font-bold text-sm">NOTRE CHEF</span>
                </div>
              </div>

              {/* Image */}
              <div className="mt-8 mb-6">
                <img 
                  src={aboutTeam}
                  alt="Hervé Godinaud - Chef traiteur"
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Hervé Godinaud
              </h3>
              <p className="text-[hsl(195,85%,41%)] font-semibold mb-4">
                Traiteur d'Exception
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Fort d'un savoir-faire et d'une expérience de plusieurs années, Hervé Godinaud et son équipe vous assurent une qualité de service irréprochable.
              </p>
              
              {/* Medal */}
              <div className="flex items-center gap-2 text-[hsl(14,100%,57%)] font-semibold">
                <Star className="w-5 h-5 fill-current" />
                <span>Médaillé Saveurs d'Or 1999</span>
                <Star className="w-5 h-5 fill-current" />
              </div>
            </div>
          </motion.div>

          {/* Notre Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="bg-gray-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500">
              {/* Badge */}
              <div className="absolute -top-4 left-8">
                <div className="bg-[hsl(142,71%,45%)] px-6 py-3 rounded-full flex items-center gap-2 shadow-lg">
                  <Award className="w-5 h-5 text-white" />
                  <span className="text-white font-bold text-sm">NOTRE EXPERTISE</span>
                </div>
              </div>

              {/* Image */}
              <div className="mt-8 mb-6">
                <img 
                  src={aboutCuisine}
                  alt="Cuisine d'exception"
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Une Cuisine d'Exception
              </h3>
              <p className="text-[hsl(142,71%,45%)] font-semibold mb-4">
                Savoir-faire traditionnel et innovation
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nous mettons tout en œuvre, avec nos moyens humains et logistiques, pour faire de votre événement une expérience unique et inoubliable.
              </p>

              {/* Quote */}
              <div className="bg-white rounded-xl p-4 border-l-4 border-[hsl(142,71%,45%)]">
                <p className="text-gray-700 italic">
                  "La passion de la gastronomie au service de vos moments précieux"
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
