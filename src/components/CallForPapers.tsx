import React from 'react';
import { motion } from 'framer-motion';

const CallForPapers = () => {
  const calls = [
    {
      title: 'Edge-Computing AI for Medical Devices',
      deadline: '28 March 2025',
      description:
        'Electronic medical devices can be implantables, wearables, and remote. These devices can collect various multimodal and multigrain bio-signals invasively or non-invasively. This large heterogeneous data from medical devices contains tremendous information that can be analyzed...',
    },
    {
      title: 'Interruption of Amino Acids Supply as Anti-Tumor Strategy',
      deadline: '9 March 2025',
      description:
        'The interruption of amino acids supply has emerged as a promising anti-tumor strategy, with research focusing on the metabolic vulnerabilities of cancer cells. Depletion of essential amino acids necessary for tumor growth has shown potential in inhibiting cancer cell proliferation and...',
    },
    {
      title: 'Photothermal Membranes for Water Treatment',
      deadline: '23 June 2025',
      description:
        'This topical collection aims to showcase the latest developments in photothermal materials and their applications in solar-driven water treatment and desalination technologies. The journal will publish innovative research on the design, synthesis, and performance evaluation of various...',
    },
  ];

  return (
    <motion.div
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient"></div>
      <div className="absolute inset-0 h-1/2 bg-opacity-50 backdrop-blur-lg"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto p-8">
        <div className="flex justify-between items-center mb-6"> {/* Header section */}
          <div className="flex items-center">
            <div className="bg-white w-12 h-12 rounded-full shadow-lg mr-4"></div> {/* Placeholder for logo */}
            <div>
              <h2 className="text-3xl font-bold text-white">Calls for Papers</h2>
              <p className="text-lg text-gray-200">Log in for personalised recommendations.</p>
            </div>
          </div>
        </div>

        {/* Calls for papers list */}
        {calls.map((call, index) => (
          <motion.div
            key={index}
            className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 mb-6 transform transition duration-300 hover:scale-105 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{call.title}</h3>
              </div>
              <div className="text-gray-700 text-right">
                <span className="block text-sm">Submission deadline</span>
                <span className="font-semibold">{call.deadline}</span>
              </div>
            </div>
            <p className="text-gray-800">{call.description}</p>
          </motion.div>
        ))}

        {/* See all link */}
        <div className="mt-6 text-center">
          <a href="#" className="text-white text-lg font-semibold hover:underline">See all calls for papers →</a>
        </div>
      </div>
    </motion.div>
  );
};

export default CallForPapers;
