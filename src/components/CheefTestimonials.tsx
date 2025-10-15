import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Marie L.",
    event: "Mariage - Juin 2023",
    rating: 5,
    text: "Prestations de qualité, service impeccable et une équipe aux petits soins. Nos invités sont encore sous le charme de ce merveilleux repas !",
  },
  {
    name: "Jean-Pierre D.",
    event: "Anniversaire - Mars 2023",
    rating: 5,
    text: "Hervé et son équipe ont su sublimer notre événement. Les plats étaient délicieux et le service irréprochable. Je recommande vivement !",
  },
  {
    name: "Sophie M.",
    event: "Événement d'entreprise - Septembre 2023",
    rating: 5,
    text: "Professionnalisme et qualité au rendez-vous. Nos collaborateurs ont été ravis de cette prestation. Un grand merci à toute l'équipe !",
  },
  {
    name: "Laurent B.",
    event: "Baptême - Mai 2023",
    rating: 5,
    text: "Service de portage de repas au top ! Des plats faits maison, équilibrés et délicieux livrés directement chez nous. Que demander de plus ?",
  },
  {
    name: "Catherine R.",
    event: "Réception associative - Octobre 2023",
    rating: 5,
    text: "Une cuisine d'exception pour notre association. Hervé a su s'adapter à notre budget tout en proposant des plats de grande qualité.",
  },
];

export const CheefTestimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-6 h-6 fill-[hsl(14,100%,57%)] text-[hsl(14,100%,57%)]" />
            <Star className="w-6 h-6 fill-[hsl(14,100%,57%)] text-[hsl(14,100%,57%)]" />
            <Star className="w-6 h-6 fill-[hsl(14,100%,57%)] text-[hsl(14,100%,57%)]" />
            <Star className="w-6 h-6 fill-[hsl(14,100%,57%)] text-[hsl(14,100%,57%)]" />
            <Star className="w-6 h-6 fill-[hsl(14,100%,57%)] text-[hsl(14,100%,57%)]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les avis de nos clients satisfaits
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="p-6 h-full bg-white hover:shadow-xl transition-all duration-300 border-gray-200">
                    <div className="flex flex-col h-full">
                      {/* Quote Icon */}
                      <Quote className="w-10 h-10 text-[hsl(195,85%,41%)] mb-4 opacity-30" />
                      
                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-[hsl(14,100%,57%)] text-[hsl(14,100%,57%)]"
                          />
                        ))}
                      </div>

                      {/* Text */}
                      <p className="text-gray-700 mb-6 flex-grow leading-relaxed">
                        "{testimonial.text}"
                      </p>

                      {/* Author */}
                      <div>
                        <p className="font-bold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.event}</p>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};
