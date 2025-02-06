import React from 'react';

const TrendingResearch = () => {
  const researchItems = [
    {
      image: 'path/to/image1.jpg', // Replace with actual image paths
      title: 'Vole hunting: novel predatory and carnivorous behavior by California ground squirrels',
      journal: 'Journal of Ethology',
      type: 'Video Article',
      access: 'Open access',
      date: '18 December 2024',
    },
    {
      image: 'path/to/image2.jpg',
      title: 'Drivers of global tourism carbon emissions',
      journal: 'Nature Communications',
      type: 'Article',
      access: 'Open access',
      date: '10 December 2024',
    },
    {
      image: 'path/to/image3.jpg',
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
    <div className="bg-gray-100 p-8"> {/* Overall container */}
      <div className="max-w-4xl mx-auto"> {/* Center the content */}
        <div className="flex justify-between items-center mb-6"> {/* Header section */}
          <div className="flex items-center">
            <div className="bg-red-500 w-12 h-12 rounded-full mr-4"></div> {/* Placeholder for logo */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Trending research</h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> {/* Grid for top row */}
          {researchItems.slice(0, 3).map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              {item.image && <img src={item.image} alt={item.title} className="mb-4 rounded-md" />} {/* Image if available */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.journal}</p>
              <p className="text-gray-600 text-sm">{item.type} {item.access} {item.date}</p>
            </div>
          ))}
        </div>

        {/* List for remaining items */}
        <div className="mt-8">
          {researchItems.slice(3).map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6 mb-4 flex items-start"> {/* Added flex and items-start */}
              <div className="mr-4"> {/* Add margin to separate text and icons */}
                {/* You can add icons here if needed */}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.journal}</p>
                <p className="text-gray-600 text-sm">{item.type} {item.access} {item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingResearch;