import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const CheefCTA = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[hsl(195,85%,41%)] via-[hsl(195,85%,45%)] to-[hsl(142,71%,45%)] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Prêt à créer votre événement d'exception ?
          </h2>
          <p className="text-xl md:text-2xl text-white/95 mb-10">
            Contactez-nous dès aujourd'hui pour un devis personnalisé et gratuit
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-white text-[hsl(195,85%,41%)] hover:bg-white/90 text-lg px-10 py-7 rounded-lg shadow-2xl font-semibold transition-all duration-300 hover:scale-105"
              >
                Demander un devis gratuit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Button 
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-[hsl(195,85%,41%)] text-lg px-10 py-7 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = "tel:0557494130"}
            >
              <Phone className="mr-2 h-5 w-5" />
              Appeler maintenant
            </Button>
          </div>

          {/* Trust indicator */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-white/90 text-sm"
          >
            ✓ Devis gratuit et sans engagement • ✓ Réponse sous 24h • ✓ Plus de 1000 événements réalisés
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
