import React from 'react';
import volehunt from '../assets/images/volehunt.jpg';
import emission from '../assets/images/emission.jpg';
import odor from '../assets/images/odor.jpg';

const TrendingResearch = () => {
  const researchItems = [
    {
      image: volehunt,
      title: 'Vole hunting: novel predatory and carnivorous behavior by California ground squirrels',
      journal: 'Journal of Ethology',
      type: 'Video Article',
      access: 'Open access',
      date: '18 December 2024',
    },
    {
      image: emission,
      title: 'Drivers of global tourism carbon emissions',
      journal: 'Nature Communications',
      type: 'Article',
      access: 'Open access',
      date: '10 December 2024',
    },
    {
      image: odor,
      title: 'Odor prediction of whiskies based on their molecular composition',
      journal: 'Communications Chemistry',
      type: 'Article',
      access: 'Open access',
      date: '19 December 2024',
    },
    {
      title: 'Associations of accelerometer-measured physical activity, sedentary behaviour, and sleep with next-day cognitive performance in older adults: a micro-longitudinal study',
      journal: 'International Journal of Behavioral Nutrition and Physical Activity',
      type: 'Research',
      access: 'Open access',
      date: '10 December 2024',
    },
    {
      title: 'Starvation remains the leading cause of death in Tigray, northern Ethiopia, after the Pretoria deal: a call for expedited action',
      journal: 'BMC Public Health',
      type: 'Research',
      access: 'Open access',
      date: '18 December 2024',
    },
    {
      title: 'Generative language models exhibit social identity biases',
      journal: 'Nature Computational Science',
      type: 'Analysis',
      access: 'Open access',
      date: '12 December 2024',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-gray-100 p-10 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <div className="bg-red-500 w-12 h-12 rounded-full mr-4 shadow-lg"></div>
            <h2 className="text-3xl font-bold text-gray-800">Trending Research</h2>
          </div>
        </div>

        {/* Grid for top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {researchItems.slice(0, 3).map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              {item.image && <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.journal}</p>
                <p className="text-gray-500 text-xs">{item.type} | {item.access} | {item.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* List for remaining items */}
        <div className="mt-10">
          {researchItems.slice(3).map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 mb-4 flex items-start hover:shadow-xl transition-all duration-300">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.journal}</p>
                <p className="text-gray-500 text-xs">{item.type} | {item.access} | {item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingResearch;
