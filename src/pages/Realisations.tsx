import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Lightbox } from "@/components/Lightbox";
import { Camera } from "lucide-react";
import carousel1 from "@/assets/carousel-1.jpg";
import carousel2 from "@/assets/carousel-2.jpg";
import carousel3 from "@/assets/carousel-3.jpg";
import carousel4 from "@/assets/carousel-4.jpg";

const Realisations = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { name: "Mariages", count: 12 },
    { name: "Cocktails", count: 8 },
    { name: "Buffets", count: 10 },
    { name: "Événements Entreprise", count: 6 },
  ];

  const images = [
    { src: carousel1, alt: "Réalisation gastronomique" },
    { src: carousel2, alt: "Cocktails événement" },
    { src: carousel3, alt: "Buffet traiteur" },
    { src: carousel4, alt: "Mariage réception" },
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Camera className="h-16 w-16 text-primary mx-auto mb-6" />
            </motion.div>
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 text-foreground font-playfair"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Nos Réalisations
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Découvrez quelques-unes de nos plus belles créations et événements
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {categories.map((category, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-card rounded-full shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all"
                >
                  <span className="font-semibold">{category.name}</span>
                  <span className="ml-2 text-muted-foreground">({category.count})</span>
                </motion.button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.04 }}
                    className="aspect-square rounded-2xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all overflow-hidden cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <p className="text-muted-foreground text-lg">
                  Galerie photo en cours de préparation. Contactez-nous pour voir nos réalisations complètes.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Lightbox
        isOpen={lightboxOpen}
        images={images}
        currentIndex={currentImageIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={nextImage}
        onPrevious={prevImage}
      />

      <Footer />
    </div>
  );
};

export default Realisations;
