import React from 'react';
import { Download, ChevronRight, Users2, BarChart3, Calendar, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Latest Articles */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
          {[1, 2, 3].map((item) => (
            <article key={item} className="mb-6 p-6 bg-white border rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <Link to={`/articles/${item}`} className="text-lg font-semibold text-blue-600 hover:underline">
                    Advanced Wireless Network Security Protocols: A Comprehensive Review
                  </Link>
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
          <Link to="/articles" className="flex items-center text-orange-600 hover:text-orange-700 font-semibold">
            View all articles <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
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
              {[
                { text: 'Submit Manuscript', path: '/submit' },
                { text: 'Author Guidelines', path: '/author-guidelines' },
                { text: 'Editorial Board', path: '/editorial-board' },
                { text: 'Reviewer Guidelines', path: '/reviewer-guidelines' }
              ].map((link) => (
                <Link
                  key={link.text}
                  to={link.path}
                  className="flex items-center justify-between text-gray-600 hover:text-orange-600"
                >
                  {link.text}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}