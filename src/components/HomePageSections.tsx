import React from 'react';
import myImage from '../assets/images/unlocking.png';
import publish from '../assets/images/publishing.png';
import status from '../assets/images/check.png';
import articles from '../assets/images/headline.png';
import browse from '../assets/images/browsing.png';
import about from '../assets/images/information.png';

const HomePageSections = () => {
  const sections = [
    { title: 'Discover open access', image: myImage, link: '/discover' },
    { title: 'Publish with us', image: publish, link: '/publish' },
    { title: 'Track your research', image: status, link: '/track' },
    { title: 'Featured articles and journals', image: articles, link: '/featured' },
    { title: 'Browse by subject', image: browse, link: '/browse' },
    { title: 'About Springer Nature Link', image: about, link: '/about' },
  ];

  return (
    <div className=" bg-gradient-to-r from-blue-500 to-purple-600 flex justify-center items-center p-10">
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl font-bold text-white text-center mb-10">Home for All Research</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <a
              href={section.link}
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center transform transition-all hover:scale-105 hover:shadow-2xl"
            >
              <img src={section.image} alt={section.title} className="mb-4 rounded-md w-24 h-24" />
              <h3 className="text-xl font-semibold text-gray-800 text-center">{section.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePageSections;
