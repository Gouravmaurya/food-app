import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Footer } from './components/layout/Footer';
import Home from './pages/Home';
import Nutrition from './pages/Nutrition';
import Recipes from './pages/Recipes';
import About from './pages/About';
import MealPlans from './pages/MealPlans';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/meal-plans" element={<MealPlans />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}