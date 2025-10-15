import { HeroPremium } from "@/components/HeroPremium";
import { AboutPremium } from "@/components/AboutPremium";
import { ServicesPremium } from "@/components/ServicesPremium";
import { TestimonialsPremium } from "@/components/TestimonialsPremium";
import { ContactPremium } from "@/components/ContactPremium";
import { FooterPremium } from "@/components/FooterPremium";
import { HeaderPremium } from "@/components/HeaderPremium";
import { StickyCallButton } from "@/components/StickyCallButton";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeaderPremium />
      <HeroPremium />
      <AboutPremium />
      <ServicesPremium />
      <TestimonialsPremium />
      <ContactPremium />
      <FooterPremium />
      <StickyCallButton />
      <Toaster />
    </main>
  );
};

export default Index;
