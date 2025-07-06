import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your AI-powered longevity mentor
          </h2>
          <h3 className="text-2xl lg:text-3xl text-gray-600 mb-8">
            Personalized, predictive health guidance
          </h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Unify your health data—wearables, labs, and habits—into a single digital twin. Get predictive insights and clear milestones for a proactive approach to long-term well-being.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Personalized health timeline */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">
              Personalized health timeline
            </h4>
            <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden border-2 border-gray-300">
              <img 
                src="https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Health timeline interface" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Unified data from wearables & labs */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">
              Unified data from wearables & labs
            </h4>
            <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden border-2 border-gray-300">
              <img 
                src="https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Data visualization with DNA and charts" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* AI-driven risk and milestone insights */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">
              AI-driven risk and milestone insights
            </h4>
            <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden border-2 border-gray-300">
              <img 
                src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Meditation and wellness session" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Tailored health actions & goals */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">
              Tailored health actions & goals
            </h4>
            <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden border-2 border-gray-300">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Digital health interface" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;