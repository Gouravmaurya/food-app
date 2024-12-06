import { Clock, ChefHat, Users } from 'lucide-react';
import { Card } from '../ui/Card';
import { motion } from 'framer-motion';

interface RecipeCardProps {
  recipe: {
    title: string;
    time: string;
    difficulty: string;
    servings: number;
    ingredients: string[];
    image: string;
  };
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Card>
      <div className="relative">
        <img 
          src={recipe.image} 
          alt={recipe.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <motion.div 
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 transition-opacity"
        >
          <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium">
            View Recipe
          </button>
        </motion.div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{recipe.title}</h3>
        <div className="flex items-center gap-4 text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{recipe.time}</span>
          </div>
          <div className="flex items-center gap-1">
            <ChefHat className="w-4 h-4" />
            <span>{recipe.difficulty}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{recipe.servings} servings</span>
          </div>
        </div>
        <div>
          <h4 className="font-medium mb-2">Ingredients:</h4>
          <ul className="list-disc list-inside text-gray-600">
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}