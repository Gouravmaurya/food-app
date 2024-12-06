export default function Nutrition() {
  const nutritionGuides = [
    {
      category: "Fruits & Vegetables",
      description: "Rich in vitamins, minerals, and fiber. Aim for 5-9 servings daily.",
      examples: ["Leafy greens", "Berries", "Citrus fruits", "Cruciferous vegetables"],
      benefits: "Boost immune system, improve digestion, reduce inflammation"
    },
    {
      category: "Lean Proteins",
      description: "Essential for muscle maintenance and repair.",
      examples: ["Fish", "Chicken", "Legumes", "Tofu"],
      benefits: "Build and repair tissues, support immune function"
    },
    {
      category: "Whole Grains",
      description: "Complex carbohydrates for sustained energy.",
      examples: ["Quinoa", "Brown rice", "Oats", "Whole wheat"],
      benefits: "Provide sustained energy, support digestive health"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Nutrition Guide</h1>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Understanding Healthy Nutrition</h2>
        <p className="text-gray-700 mb-6">
          Proper nutrition is fundamental to maintaining good health and preventing various diseases. 
          Learn about essential food groups and their benefits for your body.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {nutritionGuides.map((guide) => (
          <div key={guide.category} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">{guide.category}</h3>
            <p className="text-gray-600 mb-4">{guide.description}</p>
            <div className="mb-4">
              <h4 className="font-medium mb-2">Common Examples:</h4>
              <ul className="list-disc list-inside text-gray-600">
                {guide.examples.map((example) => (
                  <li key={example}>{example}</li>
                ))}
              </ul>
            </div>
            <div className="text-green-600 font-medium">
              Benefits: {guide.benefits}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}