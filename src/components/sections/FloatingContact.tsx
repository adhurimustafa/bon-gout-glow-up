import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "../ContactForm";
import { useState } from "react";

export const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating CTA Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        className="fixed bottom-8 right-8 z-40"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="relative group"
        >
          {/* Pulsing ring */}
          <div className="absolute -inset-4 bg-primary/30 rounded-full animate-ping" />
          
          {/* Glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-primary rounded-full opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Button */}
          <div className="relative bg-gradient-to-r from-primary via-accent to-primary p-5 rounded-full shadow-[var(--shadow-glow-hover)]">
            <Sparkles className="w-8 h-8 text-black animate-pulse-glow" />
          </div>
        </motion.button>
      </motion.div>

      {/* Floating Contact Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full md:w-[600px] z-50 overflow-y-auto"
            >
              <div className="relative min-h-full">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-l from-primary via-accent to-primary opacity-20 blur-2xl" />
                
                <div className="relative bg-card/95 backdrop-blur-2xl h-full border-l border-primary/30">
                  {/* Header */}
                  <div className="sticky top-0 bg-gradient-to-b from-card to-card/80 backdrop-blur-xl border-b border-primary/20 p-6 z-10">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                        Contactez-nous
                      </h2>
                      
                      <button
                        onClick={() => setIsOpen(false)}
                        className="w-10 h-10 bg-muted/50 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors duration-300 group"
                      >
                        <X className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                      </button>
                    </div>

                    <p className="text-muted-foreground">
                      Parlez-nous de votre projet, nous sommes là pour vous accompagner
                    </p>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-8">
                    {/* Quick Actions */}
                    <div className="grid grid-cols-1 gap-4">
                      <motion.a
                        href="tel:0557494130"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group"
                      >
                        <div className="relative">
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
                          
                          <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border group-hover:border-primary/50 transition-all duration-500 flex items-center gap-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:shadow-[var(--shadow-glow)] transition-all duration-500">
                              <Phone className="w-7 h-7 text-primary group-hover:animate-pulse" />
                            </div>
                            
                            <div className="flex-1">
                              <p className="text-sm text-muted-foreground mb-1">Appelez-nous</p>
                              <p className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                                05 57 49 41 30
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.a>

                      <motion.a
                        href="mailto:contact@aubongout-33.fr"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group"
                      >
                        <div className="relative">
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-primary rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
                          
                          <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border group-hover:border-primary/50 transition-all duration-500 flex items-center gap-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl flex items-center justify-center group-hover:shadow-[var(--shadow-glow)] transition-all duration-500">
                              <Mail className="w-7 h-7 text-primary" />
                            </div>
                            
                            <div className="flex-1">
                              <p className="text-sm text-muted-foreground mb-1">Écrivez-nous</p>
                              <p className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                                contact@aubongout-33.fr
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.a>
                    </div>

                    {/* Address */}
                    <div className="bg-muted/30 rounded-2xl p-6 border border-primary/20">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-foreground mb-2">Notre Adresse</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            22 B Avenue de Verdun<br />
                            33620 Lapouyade<br />
                            Gironde, France
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Contact Form */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Sparkles className="w-5 h-5 text-primary animate-pulse-glow" />
                        <h3 className="text-2xl font-bold text-foreground">
                          Demander un devis
                        </h3>
                      </div>
                      
                      <ContactForm />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
