import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';

interface NutritionCardProps {
  guide: {
    category: string;
    description: string;
    examples: string[];
    benefits: string;
  };
}

export function NutritionCard({ guide }: NutritionCardProps) {
  return (
    <Card className="h-full">
      <div className="p-6">
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-xl font-semibold mb-3"
        >
          {guide.category}
        </motion.h3>
        <p className="text-gray-600 mb-4">{guide.description}</p>
        <div className="mb-4">
          <h4 className="font-medium mb-2">Common Examples:</h4>
          <ul className="list-disc list-inside text-gray-600">
            {guide.examples.map((example) => (
              <li key={example}>{example}</li>
            ))}
          </ul>
        </div>
        <div className="text-green-600 font-medium mb-4">
          Benefits: {guide.benefits}
        </div>
        <Button variant="outline" className="w-full">
          Learn More
        </Button>
      </div>
    </Card>
  );
}