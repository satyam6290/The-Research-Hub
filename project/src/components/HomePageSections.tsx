import React from 'react';

const HomePageSections = () => {
  const sections = [
    {
      title: 'Discover open access',
      description: ' ', // Add a suitable description if needed
      image: 'path/to/discover_image.jpg', // Replace with actual image paths
      link: '/discover', // Replace with actual link
    },
    {
      title: 'Publish with us',
      description: ' ',
      image: 'path/to/publish_image.jpg',
      link: '/publish',
    },
    {
      title: 'Track your research',
      description: ' ',
      image: 'path/to/track_image.jpg',
      link: '/track',
    },
    {
      title: 'Featured articles and journals',
      description: ' ',
      // You can add an icon here instead of an image if you prefer
      // icon: <LibraryIcon className="w-16 h-16 text-blue-500" />,  // Example with a placeholder icon
      link: '/featured',
    },
    {
      title: 'Browse by subject',
      description: ' ',
      // icon: <SubjectIcon className="w-16 h-16 text-blue-500" />, // Example with a placeholder icon
      link: '/browse',
    },
    {
      title: 'About Springer Nature Link',
      description: ' ',
      // icon: <AboutIcon className="w-16 h-16 text-blue-500" />, // Example with a placeholder icon
      link: '/about',
    },
  ];

  return (
    <div className="bg-transparent  p-4"> {/* Overall container */}
      <div className="max-w-4xl mx-auto"> {/* Center the content */}
        <div className="mb-8"> {/* "Home for all research" section */}
          <div className="bg-orange-100 border-orange-500 text-orange-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Home for all research</strong>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> {/* Grid for the 3x2 layout */}
          {sections.map((section, index) => (
            <a href={section.link} key={index} className="bg-white rounded-lg shadow p-6 flex flex-col items-center"> {/* Added flex and flex-col */}
              {section.image && <img src={section.image} alt={section.title} className="mb-4 rounded-md w-24 h-24" />} {/* Image if available */}
              {section.icon && <div className="mb-4">{section.icon}</div>} {/* Icon if available */}
              <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">{section.title}</h3> {/* Centered title */}
              <p className="text-gray-600 text-center text-sm">{section.description}</p> {/* Centered description */}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePageSections;