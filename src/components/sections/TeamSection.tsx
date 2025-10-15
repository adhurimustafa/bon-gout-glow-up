import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Users, Calendar, Trophy, Star, Sparkles } from "lucide-react";
import { AnimatedSection } from "../AnimatedSection";
import { useEffect, useState } from "react";

export const TeamSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      
      {/* Decorative elements */}
      <motion.div
        style={{ y }}
        className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
      />

      <div className="container px-4 md:px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary" />
              <Trophy className="w-6 h-6 text-primary animate-pulse-glow" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary" />
            </div>

            <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Hervé Godinaud & Son Équipe
            </h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              Une expertise reconnue au service de vos événements d'exception
            </p>
          </div>
        </AnimatedSection>

        {/* Team Showcase avec portrait central */}
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto mb-20">
          {/* Portrait et présentation */}
          <AnimatedSection delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
              
              <div className="relative bg-card/50 backdrop-blur-sm rounded-3xl p-10 border border-border group-hover:border-primary/50 transition-all duration-500">
                {/* Badge médaille */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary via-accent to-primary p-4 rounded-2xl shadow-[var(--shadow-glow)]">
                    <Award className="w-8 h-8 text-black" />
                  </div>
                </div>

                <div className="text-center pt-8">
                  <h3 className="text-4xl font-bold mb-3 text-foreground">Hervé Godinaud</h3>
                  <p className="text-primary text-xl font-semibold mb-6">Traiteur d'Exception</p>
                  
                  <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
                    <p>
                      Fort d'un savoir-faire et d'une expérience de plusieurs années, Hervé Godinaud et son équipe vous assurent une qualité de service irréprochable.
                    </p>
                    <p className="text-primary font-semibold flex items-center justify-center gap-2">
                      <Star className="w-5 h-5 fill-primary animate-pulse-glow" />
                      Médaillé Saveurs d'Or 1999
                      <Star className="w-5 h-5 fill-primary animate-pulse-glow" />
                    </p>
                  </div>

                  {/* Citation */}
                  <div className="relative p-6 bg-muted/30 rounded-2xl border border-primary/20">
                    <Sparkles className="absolute -top-3 -right-3 w-6 h-6 text-primary animate-pulse-glow" />
                    <p className="italic text-foreground text-lg leading-relaxed">
                      "Nous mettons tout en œuvre, avec nos moyens humains et logistiques, pour faire de votre événement une expérience unique et inoubliable."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Chiffres clés animés */}
          <div className="space-y-6">
            {[
              { icon: Calendar, value: "25+", label: "Années d'expérience", suffix: "" },
              { icon: Users, value: "1000+", label: "Événements réalisés", suffix: "" },
              { icon: Trophy, value: "200", label: "Km de rayon d'action", suffix: "" },
              { icon: Star, value: "100%", label: "Satisfaction client", suffix: "" }
            ].map((stat, index) => (
              <AnimatedSection key={index} delay={0.1 * index}>
                <motion.div
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
                  
                  <div className="relative bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border group-hover:border-primary/50 transition-all duration-500 flex items-center gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:shadow-[var(--shadow-glow)] transition-all duration-500">
                      <stat.icon className="w-8 h-8 text-primary group-hover:animate-pulse-glow" />
                    </div>
                    
                    <div className="flex-1">
                      <CountUpNumber
                        end={parseInt(stat.value)}
                        suffix={stat.suffix || stat.value.replace(/[0-9]/g, '')}
                        className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1"
                      />
                      <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Zone d'intervention avec carte stylisée */}
        <AnimatedSection delay={0.4}>
          <div className="max-w-5xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
              
              <div className="relative bg-card/50 backdrop-blur-sm rounded-3xl p-12 border border-border group-hover:border-primary/50 transition-all duration-500 text-center">
                <h3 className="text-3xl font-bold mb-6 text-foreground flex items-center justify-center gap-3">
                  <Sparkles className="w-6 h-6 text-primary animate-pulse-glow" />
                  Notre Zone d'Intervention
                </h3>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Traiteur événementiel à Lapouyade, nous sommes au service des particuliers et entreprises dans toute la Gironde et les départements limitrophes.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { title: "Gironde", locations: ["Bordeaux", "Mérignac", "Pessac", "Talence"] },
                    { title: "Bassin d'Arcachon", locations: ["Arcachon", "La Teste", "Gujan-Mestras"] },
                    { title: "Départements limitrophes", locations: ["Charente", "Dordogne", "Landes"] }
                  ].map((zone, i) => (
                    <div key={i} className="bg-muted/30 rounded-2xl p-6 border border-primary/20 hover:border-primary/50 transition-all duration-300">
                      <h4 className="text-primary font-bold text-lg mb-4">{zone.title}</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        {zone.locations.map((loc, j) => (
                          <li key={j} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {loc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

// Composant pour animer les chiffres
const CountUpNumber = ({ end, suffix, className }: { end: number; suffix: string; className: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 2000;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end]);

  return <div className={className}>{count}{suffix}</div>;
};
