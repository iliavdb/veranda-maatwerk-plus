import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Optimum from "./pages/products/Optimum";
import Premium from "./pages/products/Premium";
import LuxLine from "./pages/products/LuxLine";
import SlidingGlass from "./pages/products/SlidingGlass";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/over-ons" element={<About />} />
              <Route path="/galerij" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/producten/optimum" element={<Optimum />} />
              <Route path="/producten/premium" element={<Premium />} />
              <Route path="/producten/lux-line" element={<LuxLine />} />
              <Route path="/producten/sliding-glass" element={<SlidingGlass />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
