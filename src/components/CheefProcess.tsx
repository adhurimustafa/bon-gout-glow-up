import { motion } from "framer-motion";
import { MessageSquare, Calendar, ChefHat, Truck, PartyPopper } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "1",
    title: "Contactez-nous",
    description: "Parlez-nous de votre projet et de vos envies",
  },
  {
    icon: Calendar,
    number: "2",
    title: "Devis personnalisé",
    description: "Recevez rapidement votre devis sur mesure",
  },
  {
    icon: ChefHat,
    number: "3",
    title: "Préparation",
    description: "Notre équipe prépare vos plats avec soin",
  },
  {
    icon: Truck,
    number: "4",
    title: "Livraison & Service",
    description: "Nous livrons et assurons le service si besoin",
  },
  {
    icon: PartyPopper,
    number: "5",
    title: "Profitez !",
    description: "Savourez votre événement en toute sérénité",
  },
];

export const CheefProcess = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Comment ça fonctionne ?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Vous êtes prêt(e) à créer votre événement ? Voici comment se déroule notre collaboration :
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-[hsl(195,85%,41%)] via-[hsl(142,71%,45%)] to-[hsl(14,100%,57%)]" 
              style={{ top: '80px', left: '10%', right: '10%' }} 
            />

            {/* Steps Grid */}
            <div className="grid md:grid-cols-5 gap-8 relative">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon Circle */}
                  <div className="relative mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-32 h-32 bg-gradient-to-br from-[hsl(195,85%,41%)] to-[hsl(195,85%,50%)] rounded-full flex items-center justify-center shadow-lg relative z-10"
                    >
                      <step.icon className="w-12 h-12 text-white" />
                    </motion.div>
                    {/* Step Number */}
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[hsl(14,100%,57%)] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md z-20">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
