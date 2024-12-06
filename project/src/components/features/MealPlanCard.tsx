import { Card } from '../ui/Card';
import { DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

interface MealPlanProps {
  plan: {
    title: string;
    description: string;
    meals: {
      name: string;
      items: string[];
      cost: number;
    }[];
    totalBudget: number;
    tips: string[];
  };
}

export function MealPlanCard({ plan }: MealPlanProps) {
  return (
    <Card className="h-full">
      <div className="p-6">
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-2xl font-semibold mb-3"
        >
          {plan.title}
        </motion.h3>
        <p className="text-gray-600 mb-4">{plan.description}</p>
        
        <div className="mb-6">
          <div className="flex items-center gap-2 text-green-600 font-semibold mb-4">
            <DollarSign className="w-5 h-5" />
            <span>Weekly Budget: ${plan.totalBudget}</span>
          </div>
          
          {plan.meals.map((meal) => (
            <div key={meal.name} className="mb-4">
              <h4 className="font-medium text-lg mb-2">{meal.name}</h4>
              <ul className="list-disc list-inside text-gray-600 mb-2">
                {meal.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-sm text-gray-500">Estimated cost: ${meal.cost}</p>
            </div>
          ))}
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-medium mb-2">Money-Saving Tips:</h4>
          <ul className="list-disc list-inside text-gray-600">
            {plan.tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}