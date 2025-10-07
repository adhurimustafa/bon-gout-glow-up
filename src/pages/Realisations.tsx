import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Lightbox } from "@/components/Lightbox";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Import gallery images
import buffet01 from "@/assets/gallery/aubon-gout-buffet-lapouyade-01.jpg";
import buffet02 from "@/assets/gallery/aubon-gout-buffet-lapouyade-02.jpg";
import buffet03 from "@/assets/gallery/aubon-gout-buffet-lapouyade-03.jpg";
import buffet04 from "@/assets/gallery/aubon-gout-buffet-lapouyade-04.jpg";
import buffet05 from "@/assets/gallery/aubon-gout-buffet-lapouyade-05.jpg";
import buffet06 from "@/assets/gallery/aubon-gout-buffet-lapouyade-06.jpg";
import cocktail01 from "@/assets/gallery/aubon-gout-cocktail-lapouyade-01.jpg";
import cocktail02 from "@/assets/gallery/aubon-gout-cocktail-lapouyade-02.jpg";
import reception01 from "@/assets/gallery/aubon-gout-reception-lapouyade-01.jpg";
import plats01 from "@/assets/gallery/aubon-gout-plats-lapouyade-01.jpg";
import plats02 from "@/assets/gallery/aubon-gout-plats-lapouyade-02.jpg";

const Realisations = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    { name: "Tous", count: 11 },
    { name: "Buffets", count: 6 },
    { name: "Cocktails", count: 2 },
    { name: "Réceptions", count: 3 },
  ];

  const images = [
    { src: buffet01, alt: "Buffet traiteur – Au Bon Goût Lapouyade", category: "Buffets" },
    { src: cocktail01, alt: "Cocktail dinatoire – Au Bon Goût Lapouyade", category: "Cocktails" },
    { src: buffet02, alt: "Buffet gastronomique – Au Bon Goût Lapouyade", category: "Buffets" },
    { src: buffet03, alt: "Buffet réception – Au Bon Goût Lapouyade", category: "Buffets" },
    { src: reception01, alt: "Réception traiteur – Au Bon Goût Lapouyade", category: "Réceptions" },
    { src: plats01, alt: "Plats traiteur – Au Bon Goût Lapouyade", category: "Réceptions" },
    { src: buffet04, alt: "Buffet froid – Au Bon Goût Lapouyade", category: "Buffets" },
    { src: cocktail02, alt: "Cocktail apéritif – Au Bon Goût Lapouyade", category: "Cocktails" },
    { src: buffet05, alt: "Buffet événement – Au Bon Goût Lapouyade", category: "Buffets" },
    { src: buffet06, alt: "Buffet mariage – Au Bon Goût Lapouyade", category: "Buffets" },
    { src: plats02, alt: "Cuisine française – Au Bon Goût Lapouyade", category: "Réceptions" },
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
      <Helmet>
        <title>Nos Réalisations | Au Bon Goût - Traiteur Gironde</title>
        <meta
          name="description"
          content="Découvrez nos plus belles réalisations traiteur : buffets, cocktails, réceptions et mariages en Gironde. Photos authentiques de nos prestations."
        />
      </Helmet>

      <Header />
      
      {/* Hero Carousel Section */}
      <section className="relative h-[56vh] md:h-[70vh] overflow-hidden">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full h-full"
        >
          <CarouselContent className="h-full">
            {images.slice(0, 6).map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="relative w-full h-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "auto"}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
                  
                  {/* Title Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <motion.h1
                      className="text-5xl md:text-7xl font-bold mb-4 text-white font-playfair drop-shadow-2xl"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      Nos Réalisations
                    </motion.h1>
                    <motion.p
                      className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-3xl drop-shadow-lg"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      Découvrez nos plus belles créations culinaires et événements réalisés en Gironde
                    </motion.p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
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
                  onClick={() => setSelectedCategory(category.name === "Tous" ? null : category.name)}
                  className={`px-6 py-3 rounded-full shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all ${
                    (selectedCategory === category.name || (selectedCategory === null && category.name === "Tous"))
                      ? "bg-primary text-white"
                      : "bg-card"
                  }`}
                >
                  <span className="font-semibold">{category.name}</span>
                  <span className="ml-2 opacity-80">({category.count})</span>
                </motion.button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <AnimatedSection>
            <div className="max-w-7xl mx-auto">
              <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {images
                  .filter(img => !selectedCategory || img.category === selectedCategory)
                  .map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (index % 6) * 0.08 }}
                    whileHover={{ scale: 1.04, y: -4 }}
                    className="break-inside-avoid rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition-all overflow-hidden cursor-pointer group"
                    onClick={() => openLightbox(index)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.div>
                ))}
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
