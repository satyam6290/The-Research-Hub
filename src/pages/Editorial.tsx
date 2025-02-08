import React from 'react';
import { Download, Mail, Globe, BookOpen } from 'lucide-react';

interface EditorialMember {
  id: number;
  name: string;
  role: string;
  affiliation: string;
  photo: string;
  expertise: string[];
  email: string;
  website?: string;
}

const editorialBoard: EditorialMember[] = [
  {
    id: 1,
    name: "Prof. ",
    role: "Editor-in-Chief",
    affiliation: "Stanford University, USA",
    photo: "https://randomuser.me/api/portraits/men/19.jpg",
    expertise: ["5G Networks", "Network Security", "IoT"],
    email: "sarah.chen@example.com",
    website: "https://example.com/sarah-chen"
  },
  {
    id: 2,
    name: "Dr. ",
    role: "Associate Editor",
    affiliation: "MIT, USA",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    expertise: ["Wireless Communications", "Signal Processing"],
    email: "james.wilson@example.com"
  },
  {
    id: 3,
    name: "Prof. ",
    role: "Associate Editor",
    affiliation: "Technical University of Madrid, Spain",
    photo: "https://randomuser.me/api/portraits/women/9.jpg",
    expertise: ["Network Protocols", "Mobile Computing"],
    email: "maria.garcia@example.com",
    website: "https://example.com/maria-garcia"
  }
];

export function Editorial() {
  const handleDownloadReview = (reviewId: string) => {
    // In a real application, this would make an API call to download the review
    console.log(`Downloading review ${reviewId}`);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Editorial Board Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Editorial Board</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our editorial board comprises leading experts in wireless networks and communications,
          ensuring the highest standards of peer review and scientific publishing.
        </p>
      </div>
{/* Editor-in-Chief Section */}
<div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Editor-in-Chief</h2>
        {editorialBoard.filter(member => member.role === "Editor-in-Chief").map(editor => (
          <div key={editor.id} className="bg-white border rounded-lg p-6 flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <img
                src={editor.photo}
                alt={editor.name}
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">{editor.name}</h3>
              <p className="text-gray-600 mb-2">{editor.affiliation}</p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Areas of Expertise:</h4>
                <div className="flex flex-wrap gap-2">
                  {editor.expertise.map((area, index) => (
                    <span
                      key={index}
                      className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href={`mailto:${editor.email}`}
                  className="flex items-center text-gray-600 hover:text-orange-600"
                >
                  <Mail className="h-4 w-4 mr-1" />
                  Email
                </a>
                {editor.website && (
                  <a
                    href={editor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-orange-600"
                  >
                    <Globe className="h-4 w-4 mr-1" />
                    Website
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Associate Editors Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Associate Editors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {editorialBoard.filter(member => member.role === "Associate Editor").map(editor => (
            <div key={editor.id} className="bg-white border rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={editor.photo}
                  alt={editor.name}
                  className="w-24 h-24 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-bold">{editor.name}</h3>
                  <p className="text-gray-600">{editor.affiliation}</p>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Areas of Expertise:</h4>
                <div className="flex flex-wrap gap-2">
                  {editor.expertise.map((area, index) => (
                    <span
                      key={index}
                      className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href={`mailto:${editor.email}`}
                  className="flex items-center text-gray-600 hover:text-orange-600"
                >
                  <Mail className="h-4 w-4 mr-1" />
                  Email
                </a>
                {editor.website && (
                  <a
                    href={editor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-orange-600"
                  >
                    <Globe className="h-4 w-4 mr-1" />
                    Website
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
       {/* Review System Section */}
       <div>
        <h2 className="text-2xl font-bold mb-6">Review System</h2>
        <div className="bg-white border rounded-lg p-6">
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">Review Guidelines</h3>
            <p className="text-gray-600 mb-4">
              Our peer review process ensures thorough evaluation of all submissions.
              Reviewers are asked to assess manuscripts based on:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Technical accuracy and methodology</li>
              <li>Originality and significance</li>
              <li>Clarity and presentation</li>
              <li>Relevance to the field</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Download Review Forms</h3>
            <div className="grid gap-4">
              <button
                onClick={() => handleDownloadReview('template')}
                className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 p-4 rounded-lg border"
              >
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 text-orange-600 mr-3" />
                  <div>
                    <h4 className="font-medium">Review Template</h4>
                    <p className="text-sm text-gray-500">Standard review form template</p>
                  </div>
                </div>
                <Download className="h-5 w-5 text-gray-400" />
              </button>

              <button
                onClick={() => handleDownloadReview('checklist')}
                className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 p-4 rounded-lg border"
              >
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 text-orange-600 mr-3" />
                  <div>
                    <h4 className="font-medium">Review Checklist</h4>
                    <p className="text-sm text-gray-500">Comprehensive review checklist</p>
                  </div>
                </div>
                <Download className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}