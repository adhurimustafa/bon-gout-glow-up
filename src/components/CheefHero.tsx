import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-restaurant.jpg";

export const CheefHero = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden bg-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="Traiteur événementiel Lapouyade - Hervé Godinaud"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Traiteur d'exception à Lapouyade
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed">
            Hervé Godinaud, médaillé Saveurs d'Or 1999, met son expertise au service de vos événements
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-[hsl(14,100%,57%)] hover:bg-[hsl(14,100%,50%)] text-white text-lg px-8 py-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                Demander un devis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Button 
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6 rounded-lg transition-all duration-300"
              onClick={() => window.location.href = "tel:0557494130"}
            >
              <Phone className="mr-2 h-5 w-5" />
              05 57 49 41 30
            </Button>
          </div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 flex items-center gap-6 text-white/90"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[hsl(142,71%,45%)] rounded-full" />
              <span className="text-sm font-medium">25+ ans d'expérience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[hsl(142,71%,45%)] rounded-full" />
              <span className="text-sm font-medium">200 km de rayon</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
