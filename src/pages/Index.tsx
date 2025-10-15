import { HeroPremium } from "@/components/HeroPremium";
import { HeaderPremium } from "@/components/HeaderPremium";
import { FooterPremium } from "@/components/FooterPremium";
import { StickyCallButton } from "@/components/StickyCallButton";
import { Toaster } from "@/components/ui/toaster";

// New premium sections
import { TeamSection } from "@/components/sections/TeamSection";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { MenuInteractif } from "@/components/sections/MenuInteractif";
import { PrestationsCarousel } from "@/components/sections/PrestationsCarousel";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { TestimonialsSlider } from "@/components/sections/TestimonialsSlider";
import { FloatingContact } from "@/components/sections/FloatingContact";
import { ContactPremium } from "@/components/ContactPremium";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeaderPremium />
      
      {/* Hero immersif avec carousel premium */}
      <HeroPremium />
      
      {/* Section équipe valorisée - NOUVEAU */}
      <TeamSection />
      
      {/* Valeurs & ADN - Section WOW #1 */}
      <ValuesSection />
      
      {/* Menu interactif avec tuiles animées - NOUVEAU */}
      <MenuInteractif />
      
      {/* Carousel prestations/animations - NOUVEAU */}
      <PrestationsCarousel />
      
      {/* Timeline du process - Section WOW #2 */}
      <ProcessTimeline />
      
      {/* Témoignages en slider horizontal - NOUVEAU */}
      <TestimonialsSlider />
      
      {/* Section contact élégante */}
      <ContactPremium />
      
      <FooterPremium />
      
      {/* Contact flottant avec panel - NOUVEAU */}
      <FloatingContact />
      
      <StickyCallButton />
      <Toaster />
    </main>
  );
};

export default Index;
