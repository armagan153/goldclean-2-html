import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TechnischeReinigung from "./pages/TechnischeReinigung";
import Unterhaltsreinigung from "./pages/Unterhaltsreinigung";
import Produktionsunterstuetzung from "./pages/Produktionsunterstuetzung";
import Referenzen from "./pages/Referenzen";
import Karriere from "./pages/Karriere";
import UeberUns from "./pages/UeberUns";
import Kontakt from "./pages/Kontakt";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/technische-reinigung" element={<TechnischeReinigung />} />
          <Route path="/unterhaltsreinigung" element={<Unterhaltsreinigung />} />
          <Route path="/produktionsunterstuetzung" element={<Produktionsunterstuetzung />} />
          <Route path="/referenzen" element={<Referenzen />} />
          <Route path="/karriere" element={<Karriere />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
