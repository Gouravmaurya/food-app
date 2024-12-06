import { MealPlanCard } from '../components/features/MealPlanCard';
import { Dumbbell, GraduationCap } from 'lucide-react';

export default function MealPlans() {
  const mealPlans = {
    gym: {
      title: "Gym Enthusiast Meal Plan",
      description: "High-protein, nutrient-dense meals to support your workout routine",
      meals: [
        {
          name: "Breakfast",
          items: [
            "Oatmeal with protein powder and banana",
            "Greek yogurt with berries",
            "Whole grain toast with eggs"
          ],
          cost: 15
        },
        {
          name: "Pre-workout Snack",
          items: [
            "Apple with almond butter",
            "Protein bar",
            "Banana with peanut butter"
          ],
          cost: 10
        },
        {
          name: "Post-workout Meal",
          items: [
            "Grilled chicken breast",
            "Brown rice",
            "Steamed vegetables",
            "Protein shake"
          ],
          cost: 25
        }
      ],
      totalBudget: 100,
      tips: [
        "Buy protein in bulk",
        "Prep meals for the week",
        "Choose frozen vegetables",
        "Look for sales on lean meats"
      ]
    },
    student: {
      title: "Student Budget Meal Plan",
      description: "Affordable, nutritious meals that are easy to prepare",
      meals: [
        {
          name: "Breakfast",
          items: [
            "Overnight oats with fruit",
            "Whole grain cereal with milk",
            "Toast with peanut butter"
          ],
          cost: 10
        },
        {
          name: "Lunch",
          items: [
            "Tuna sandwich",
            "Rice and beans bowl",
            "Vegetable wrap"
          ],
          cost: 12
        },
        {
          name: "Dinner",
          items: [
            "Pasta with vegetables",
            "Stir-fry with tofu",
            "Lentil soup"
          ],
          cost: 15
        }
      ],
      totalBudget: 70,
      tips: [
        "Cook in batches",
        "Shop at discount stores",
        "Use dried beans instead of canned",
        "Buy seasonal produce"
      ]
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Personalized Meal Plans</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="col-span-2">
          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Choose Your Plan</h2>
            <p className="text-gray-700">
              We've created specialized meal plans that cater to different lifestyles and budgets. 
              Each plan is designed to provide optimal nutrition while keeping costs in mind.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <Dumbbell className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-semibold">For Gym Enthusiasts</h2>
          </div>
          <MealPlanCard plan={mealPlans.gym} />
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-semibold">For Students</h2>
          </div>
          <MealPlanCard plan={mealPlans.student} />
        </div>
      </div>
    </div>
  );
}