import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Sparkles } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

export const ContactPremium = () => {
  const handleCall = () => {
    window.location.href = "tel:0557494130";
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Premium festive background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      {/* Golden blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 relative z-10">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center mb-20">
            {/* Premium divider */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
              <Sparkles className="w-5 h-5 text-primary animate-pulse-glow" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Contactez-nous
            </h2>
            <p className="text-xl text-muted-foreground">
              Un projet ? Une question ? Notre équipe est à votre écoute pour vous accompagner
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {/* Contact Info with premium cards */}
          <div className="space-y-6">
            {[
              {
                icon: MapPin,
                title: "Adresse",
                content: (
                  <>
                    22 B Avenue de Verdun<br />
                    33620 Lapouyade<br />
                    Gironde, France
                  </>
                )
              },
              {
                icon: Phone,
                title: "Téléphone",
                content: (
                  <a href="tel:0557494130" className="hover:text-primary transition-colors">
                    05 57 49 41 30
                  </a>
                )
              },
              {
                icon: Mail,
                title: "Email",
                content: (
                  <a href="mailto:contact@aubongout-33.fr" className="hover:text-primary transition-colors">
                    contact@aubongout-33.fr
                  </a>
                )
              },
              {
                icon: Clock,
                title: "Zone d'intervention",
                content: (
                  <>
                    Rayon de 200 km autour de Lapouyade<br />
                    Bordeaux, Mérignac, Pessac, Talence, Bassin d'Arcachon...
                  </>
                )
              }
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:shadow-[var(--shadow-glow)] transition-all duration-500">
                    <item.icon className="h-6 w-6 text-primary group-hover:animate-pulse-glow" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}

            <AnimatedSection delay={0.4}>
              <div className="pt-6">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] text-black font-bold shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow-hover)] transition-all duration-500 py-7"
                  onClick={handleCall}
                >
                  <Phone className="mr-2 h-5 w-5 animate-pulse" />
                  Appelez-nous maintenant
                </Button>
              </div>
            </AnimatedSection>
          </div>

          {/* Contact Form with premium styling */}
          <AnimatedSection delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group h-full"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
              
              <div className="relative bg-card/80 backdrop-blur-sm p-10 rounded-3xl border border-border group-hover:border-primary/50 transition-all duration-500 h-full">
                <h3 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-primary animate-pulse-glow" />
                  Envoyez-nous un message
                </h3>
                <ContactForm />
              </div>
            </motion.div>
          </AnimatedSection>
        </div>

        {/* Google Maps with premium styling */}
        <AnimatedSection delay={0.3}>
          <div className="max-w-6xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
              
              <div className="relative rounded-3xl overflow-hidden border-2 border-border group-hover:border-primary/50 transition-all duration-500 h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2825.8469847631584!2d-0.25988!3d45.14!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDA4JzI0LjAiTiAwwrAxNSczNS42Ilc!5e0!3m2!1sfr!2sfr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation Au Bon Goût - Lapouyade"
                />
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
