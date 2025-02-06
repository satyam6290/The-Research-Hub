import React from 'react';

const CallForPapers = () => {
  const calls = [
    {
      title: 'Edge-Computing AI for Medical Devices',
      deadline: '28 March 2025',
      description: 'Electronic medical devices can be implantables, wearables, and remote. These devices can collect various multimodal and multigrain bio-signals invasively or non-invasively. This large heterogeneous data from medical devices contains tremendous information that can be analyzed...',
    },
    {
      title: 'Interruption of Amino Acids Supply as Anti-Tumor Strategy',
      deadline: '9 March 2025',
      description: 'The interruption of amino acids supply has emerged as a promising anti-tumor strategy, with research focusing on the metabolic vulnerabilities of cancer cells. Depletion of essential amino acids necessary for tumor growth has shown potential in inhibiting cancer cell proliferation and...',
    },
    {
      title: 'Photothermal Membranes for Water Treatment',
      deadline: '23 June 2025',
      description: 'This topical collection aims to showcase the latest developments in photothermal materials and their applications in solar-driven water treatment and desalination technologies. The journal will publish innovative research on the design, synthesis, and performance evaluation of various...',
    },
  ];

  return (
    <div className="bg-gray-100 p-8"> {/* Overall container */}
      <div className="max-w-4xl mx-auto"> {/* Center the content */}
        <div className="flex justify-between items-center mb-6"> {/* Header section */}
          <div className="flex items-center">
            <div className="bg-red-500 w-12 h-12 rounded-full mr-4"></div> {/* Placeholder for logo */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Calls for papers</h2>
              <p className="text-sm text-gray-600">Log in for personalised recommendations.</p>
            </div>
          </div>
        </div>

        {/* Calls for papers list */}
        {calls.map((call, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6 mb-4"> {/* Card styling */}
            <div className="flex justify-between items-start mb-4"> {/* Title and deadline */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{call.title}</h3>
              </div>
              <div className="text-gray-600">
                Submission deadline<br />
                {call.deadline}
              </div>
            </div>
            <p className="text-gray-700">{call.description}</p>
          </div>
        ))}

        {/* See all link */}
        <div className="mt-6 text-center">
          <a href="#" className="text-blue-500 hover:underline">See all calls for papers →</a>
        </div>
      </div>
    </div>
  );
};

export default CallForPapers;