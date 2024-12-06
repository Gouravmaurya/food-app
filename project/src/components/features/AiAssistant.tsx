import { useState } from 'react';
import { Send, Bot, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export function AiAssistant() {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate AI response
    setTimeout(() => {
      setResponse(`Here's a healthy recipe based on your ingredients:
      
1. Start by preheating your oven to 375°F (190°C)
2. Combine your fresh vegetables in a large bowl
3. Add olive oil, herbs, and seasonings
4. Roast for 20-25 minutes until tender
      
Tips:
- Use fresh, seasonal ingredients
- Store leftovers in an airtight container
- Pair with whole grains for a complete meal`);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <Bot className="w-6 h-6 text-primary-600" />
        <h3 className="text-xl font-semibold">AI Recipe Assistant</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700 mb-2">
            Enter your ingredients or dietary preferences
          </label>
          <textarea
            id="ingredients"
            rows={3}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            placeholder="e.g., chicken, spinach, quinoa..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <Button 
          type="submit"
          disabled={isLoading || !query.trim()}
          className="w-full"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Generating recipe...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Get Recipe
            </>
          )}
        </Button>
      </form>

      {response && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-4 bg-primary-50 rounded-lg"
        >
          <pre className="whitespace-pre-wrap font-sans text-gray-700">{response}</pre>
        </motion.div>
      )}
    </div>
  );
}