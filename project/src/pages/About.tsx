export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About HealthyLife</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-6">
          At HealthyLife, we're passionate about helping people make informed decisions about their nutrition 
          and overall well-being. Our mission is to provide reliable information and practical guidance for 
          maintaining a healthy lifestyle through proper nutrition and mindful eating habits.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">Why Choose Healthy Food?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-medium mb-3">Physical Benefits</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Maintain a healthy weight</li>
              <li>Boost energy levels</li>
              <li>Strengthen immune system</li>
              <li>Improve heart health</li>
              <li>Better digestion</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-3">Mental Benefits</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Enhanced mood</li>
              <li>Better concentration</li>
              <li>Reduced stress</li>
              <li>Improved sleep quality</li>
              <li>Greater mental clarity</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-green-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
        <p className="text-gray-700">
          Stay updated with the latest nutrition tips, recipes, and health advice. Together, 
          we can build a healthier future through better food choices and lifestyle habits.
        </p>
      </div>
    </div>
  );
}