import React from 'react';

const DashboardSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
              alt="Health dashboard on tablet" 
              className="rounded-2xl shadow-2xl max-w-4xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;