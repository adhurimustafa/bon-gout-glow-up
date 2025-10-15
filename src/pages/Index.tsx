import { Helmet } from "react-helmet";
import { CheefHeader } from "@/components/CheefHeader";
import { CheefHero } from "@/components/CheefHero";
import { CheefPrograms } from "@/components/CheefPrograms";
import { CheefExperts } from "@/components/CheefExperts";
import { CheefAdvantages } from "@/components/CheefAdvantages";
import { CheefProcess } from "@/components/CheefProcess";
import { CheefTestimonials } from "@/components/CheefTestimonials";
import { CheefCTA } from "@/components/CheefCTA";
import { CheefFooter } from "@/components/CheefFooter";
import { StickyCallButton } from "@/components/StickyCallButton";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Hervé Godinaud Traiteur - Traiteur d'Exception à Lapouyade</title>
        <meta 
          name="description" 
          content="Hervé Godinaud, traiteur événementiel à Lapouyade. Médaillé Saveurs d'Or 1999. Mariages, réceptions, portage de repas. Service personnalisé en Gironde." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <CheefHeader />
        <main className="pt-16">
          <CheefHero />
          <CheefPrograms />
          <CheefExperts />
          <CheefAdvantages />
          <CheefProcess />
          <CheefTestimonials />
          <CheefCTA />
        </main>
        <CheefFooter />
        <StickyCallButton />
        <Toaster />
      </div>
    </>
  );
};

export default Index;
