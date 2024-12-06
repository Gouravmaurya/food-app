import { Heart, Mail, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">HealthyLife</h3>
            <p className="text-gray-400">Empowering you to make healthier choices for a better life.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/nutrition" className="text-gray-400 hover:text-white">Nutrition Guide</Link></li>
              <li><Link to="/recipes" className="text-gray-400 hover:text-white">Recipes</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-lg flex-1"
              />
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex items-center justify-center text-gray-400">
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500" /> © {currentYear} HealthyLife
          </p>
        </div>
      </div>
    </footer>
  );
}