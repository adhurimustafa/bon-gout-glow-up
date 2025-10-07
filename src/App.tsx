import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Realisations from "./pages/Realisations";
import ContactPage from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Mariage from "./pages/services/Mariage";
import Cocktails from "./pages/services/Cocktails";
import PortageRepas from "./pages/services/PortageRepas";
import PlateauxRepas from "./pages/services/PlateauxRepas";
import NosSpecialites from "./pages/services/NosSpecialites";
import ReceptionAssociative from "./pages/services/ReceptionAssociative";
import CocktailAperitif from "./pages/services/CocktailAperitif";
import CocktailDejeunatoire from "./pages/services/CocktailDejeunatoire";
import BuffetFroid from "./pages/services/BuffetFroid";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/qui-sommes-nous" element={<About />} />
          <Route path="/nos-services" element={<Services />} />
        <Route path="/nos-services/nos-specialites" element={<NosSpecialites />} />
        <Route path="/nos-services/mariage" element={<Mariage />} />
        <Route path="/nos-services/cocktails" element={<Cocktails />} />
        <Route path="/nos-services/reception-associative" element={<ReceptionAssociative />} />
        <Route path="/nos-services/plateaux-repas" element={<PlateauxRepas />} />
        <Route path="/nos-services/cocktail-aperitif" element={<CocktailAperitif />} />
        <Route path="/nos-services/cocktail-dejeunatoire-ou-dinatoire" element={<CocktailDejeunatoire />} />
        <Route path="/nos-services/buffet-froid-lendemain" element={<BuffetFroid />} />
        <Route path="/nos-services/portage-repas-domicile" element={<PortageRepas />} />
          <Route path="/nos-realisations" element={<Realisations />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
