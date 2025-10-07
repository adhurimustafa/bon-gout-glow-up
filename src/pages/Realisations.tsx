import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Lightbox } from "@/components/Lightbox";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
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
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Force scroll to top on mount
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Track carousel slide changes
  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };

    carouselApi.on("select", onSelect);
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

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
      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <Carousel
          setApi={setCarouselApi}
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
            {images.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle scrim overlay */}
                  <div 
                    className="absolute inset-0" 
                    style={{
                      background: 'linear-gradient(180deg, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.35) 100%)'
                    }}
                  />
                  
                  {/* Title Overlay - Centered */}
                  <div className="absolute inset-0 flex items-center justify-center text-center px-4 z-10">
                    <div>
                      <motion.h1
                        className="font-fraunces font-bold text-white mb-3 md:mb-4"
                        style={{
                          fontSize: 'clamp(32px, 5vw, 64px)',
                          letterSpacing: '0.3px',
                          textShadow: '0 0 6px rgba(212,165,116,0.65), 0 0 16px rgba(212,165,116,0.45)'
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                      >
                        Nos Réalisations
                      </motion.h1>
                      <motion.p
                        className="font-inter text-white/95 leading-relaxed max-w-3xl mx-auto"
                        style={{
                          fontSize: 'clamp(16px, 2.2vw, 22px)'
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      >
                        Découvrez nos plus belles créations culinaires et événements réalisés en Gironde
                      </motion.p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Arrows */}
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-200" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-200" />

          {/* Dot Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => carouselApi?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  currentSlide === index 
                    ? 'bg-white w-8' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Aller à l'image ${index + 1}`}
              />
            ))}
          </div>
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
                  className={`font-inter px-6 py-3 rounded-full transition-all duration-200 ${
                    (selectedCategory === category.name || (selectedCategory === null && category.name === "Tous"))
                      ? "bg-[#EED9C4] text-[#3B2C22] shadow-sm"
                      : "bg-card text-foreground shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)]"
                  }`}
                  style={{
                    transitionTimingFunction: 'ease-out'
                  }}
                >
                  <span className="font-medium">{category.name}</span>
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
              <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
                {images
                  .filter(img => !selectedCategory || img.category === selectedCategory)
                  .map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (index % 6) * 0.08 }}
                    className="break-inside-avoid rounded-2xl overflow-hidden cursor-pointer group"
                    style={{
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                      transition: 'transform 0.22s ease-out, box-shadow 0.22s ease-out'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.04)';
                      e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.12)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                    }}
                    onClick={() => openLightbox(index)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
