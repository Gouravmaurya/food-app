import { RecipeCard } from '../components/features/RecipeCard';
import { Search } from 'lucide-react';

export default function Recipes() {
  const recipes = [
    {
      title: "Mediterranean Quinoa Bowl",
      time: "25 mins",
      difficulty: "Easy",
      servings: 2,
      ingredients: [
        "1 cup quinoa",
        "Cherry tomatoes",
        "Cucumber",
        "Feta cheese",
        "Olive oil",
        "Lemon juice"
      ],
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80"
    },
    {
      title: "Green Smoothie Bowl",
      time: "10 mins",
      difficulty: "Easy",
      servings: 1,
      ingredients: [
        "Spinach",
        "Banana",
        "Almond milk",
        "Chia seeds",
        "Honey",
        "Berries"
      ],
      image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&q=80"
    },
    {
      title: "Grilled Salmon with Asparagus",
      time: "30 mins",
      difficulty: "Medium",
      servings: 2,
      ingredients: [
        "Salmon fillet",
        "Asparagus",
        "Lemon",
        "Garlic",
        "Olive oil",
        "Fresh herbs"
      ],
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Healthy Recipes</h1>
          <p className="text-gray-700">Discover delicious and nutritious recipes that are easy to prepare.</p>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search recipes..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.title} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}