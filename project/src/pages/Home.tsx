import { Hero } from '../components/features/Hero';
import { Card } from '../components/ui/Card';
import { AiAssistant } from '../components/features/AiAssistant';
import { Leaf, Brain, Shield, Sparkles } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: <Leaf className="w-8 h-8 text-primary-600" />,
      title: "Better Energy",
      description: "Nutritious foods provide sustained energy throughout the day, helping you stay active and focused."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary-600" />,
      title: "Disease Prevention",
      description: "A healthy diet strengthens your immune system and reduces the risk of chronic diseases."
    },
    {
      icon: <Brain className="w-8 h-8 text-primary-600" />,
      title: "Mental Clarity",
      description: "Proper nutrition supports brain function, improving mood, memory, and cognitive performance."
    }
  ];

  return (
    <div className="space-y-16">
      <Hero />

      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Healthy Food?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6">
              <div className="flex flex-col items-center text-center">
                {feature.icon}
                <h3 className="text-xl font-semibold my-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16 bg-gradient-to-b from-white to-primary-50">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-primary-600" />
            <h2 className="text-3xl font-bold">AI-Powered Recipe Assistant</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get personalized recipe suggestions based on your ingredients and preferences. 
            Our AI assistant helps you create delicious, healthy meals with what you have.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <AiAssistant />
        </div>
      </section>
    </div>
  );
}