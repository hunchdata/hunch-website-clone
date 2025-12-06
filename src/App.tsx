import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Handle GitHub Pages SPA redirects
const GitHubPagesRedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Handle the redirect from 404.html for GitHub Pages
    const handleRedirect = () => {
      const l = window.location;
      if (l.search && l.search[0] === '?') {
        const searchParams = new URLSearchParams(l.search.slice(1));
        const path = searchParams.get('/');
        if (path) {
          const decodedPath = path.replace(/~and~/g, '&');
          navigate(decodedPath + (l.hash || ''), { replace: true });
        }
      }
    };

    handleRedirect();
  }, [navigate]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <GitHubPagesRedirectHandler />
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
