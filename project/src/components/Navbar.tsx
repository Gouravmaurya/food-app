import { Home, Apple, Salad, Info, Heart, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="w-6 h-6" />
            <span className="font-bold text-xl">HealthyLife</span>
          </Link>
          <div className="flex space-x-8">
            <Link to="/" className="flex items-center space-x-1 hover:text-green-200 transition">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link to="/nutrition" className="flex items-center space-x-1 hover:text-green-200 transition">
              <Apple className="w-4 h-4" />
              <span>Nutrition</span>
            </Link>
            <Link to="/recipes" className="flex items-center space-x-1 hover:text-green-200 transition">
              <Salad className="w-4 h-4" />
              <span>Recipes</span>
            </Link>
            <Link to="/meal-plans" className="flex items-center space-x-1 hover:text-green-200 transition">
              <DollarSign className="w-4 h-4" />
              <span>Meal Plans</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-1 hover:text-green-200 transition">
              <Info className="w-4 h-4" />
              <span>About</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}