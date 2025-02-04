import React from 'react';
import { Search, BookOpen, Download, ChevronRight, Users2, BarChart3, Calendar, ArrowUpRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-orange-600" />
              <div>
                <h1 className="text-xl font-bold">The Research Hub</h1>
                <p className="text-sm text-gray-500">Where Knowledge Meets Innovation</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900">Sign in</button>
              <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search within journal..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Latest Articles */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
            {[1, 2, 3].map((item) => (
              <article key={item} className="mb-6 p-6 bg-white border rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-600 hover:underline cursor-pointer">
                      Advanced Wireless Network Security Protocols: A Comprehensive Review
                    </h3>
                    <p className="text-sm text-gray-500 mt-2">
                      Authors: John Smith, Maria Garcia, Robert Johnson
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Published: March 15, 2024 | Pages: 127-145
                    </p>
                  </div>
                  <Download className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
                </div>
                <p className="mt-4 text-gray-700">
                  This paper presents a comprehensive analysis of modern wireless network security protocols...
                </p>
                <div className="mt-4 flex items-center space-x-4">
                  <span className="inline-flex items-center text-sm text-gray-500">
                    <Users2 className="h-4 w-4 mr-1" /> 142 Citations
                  </span>
                  <span className="inline-flex items-center text-sm text-gray-500">
                    <BarChart3 className="h-4 w-4 mr-1" /> Impact Factor: 3.42
                  </span>
                </div>
              </article>
            ))}
            <button className="flex items-center text-orange-600 hover:text-orange-700 font-semibold">
              View all articles <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Journal Metrics */}
            <div className="bg-white p-6 border rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Journal Metrics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Impact Factor</span>
                  <span className="font-semibold">3.426</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">5 Year IF</span>
                  <span className="font-semibold">3.962</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Acceptance Rate</span>
                  <span className="font-semibold">23%</span>
                </div>
              </div>
            </div>

            {/* Important Dates */}
            <div className="bg-white p-6 border rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Important Dates</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="font-medium">Next Issue</p>
                    <p className="text-sm text-gray-600">April 1, 2024</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="font-medium">Submission Deadline</p>
                    <p className="text-sm text-gray-600">May 15, 2024</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white p-6 border rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-3">
                {['Submit Manuscript', 'Author Guidelines', 'Editorial Board', 'Reviewer Guidelines'].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="flex items-center justify-between text-gray-600 hover:text-orange-600"
                  >
                    {link}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-4">About the Journal</h4>
              <p className="text-sm text-gray-600">
              The Research Hub is a premier journal focused on mobile communication, computation and information systems.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Authors</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Submission Guidelines</li>
                <li>Publication Ethics</li>
                <li>Open Access Options</li>
                <li>Article Processing Charges</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Editorial Office</li>
                <li>Technical Support</li>
                <li>Advertising</li>
                <li>Rights & Permissions</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-gray-500">
            © 2024 The Research Hub Journal. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;