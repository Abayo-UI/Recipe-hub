
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import 'bootstrap/dist/css/bootstrap.min.css';

// Import components
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Categories from './pages/Categories';
import RecipeDetail from './pages/RecipeDetail';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <div className="min-vh-100 d-flex flex-column">
            <Navigation />
            <main className="flex-grow-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/recipe/:id" element={<RecipeDetail />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <footer className="bg-dark text-light py-4 mt-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <h5>🍳 RecipeHub</h5>
                    <p className="mb-0">Discover and share amazing recipes from around the world.</p>
                  </div>
                  <div className="col-md-6 text-md-end">
                    <p className="mb-0">&copy; 2025 RecipeHub.</p>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
