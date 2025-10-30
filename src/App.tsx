
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalState } from "./components/context"

// Import components
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Categories from './pages/Categories';
import RecipeDetail from './pages/RecipeDetail';
import NotFound from './pages/NotFound';
import  Footer  from '../src/components/Footer';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalState>
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
           <Footer/>
          </div>
        </Router>
      </TooltipProvider>
      </GlobalState>
    </QueryClientProvider>
  );
};

export default App;
