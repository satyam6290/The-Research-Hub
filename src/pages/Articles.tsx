import React from 'react';
import { Download, Users2, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Articles() {
  const articles = Array(10).fill(null).map((_, index) => ({
    id: index + 1,
    title: 'Advanced Wireless Network Security Protocols: A Comprehensive Review',
    authors: 'John Smith, Maria Garcia, Robert Johnson',
    date: 'March 15, 2024',
    pages: '127-145',
    abstract: 'This paper presents a comprehensive analysis of modern wireless network security protocols...',
    citations: 142,
    impactFactor: 3.42
  }));

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Latest Articles</h1>
        <div className="grid grid-cols-1 gap-6">
          {articles.map((article) => (
            <article key={article.id} className="p-6 bg-white border rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <Link to={`/articles/${article.id}`} className="text-lg font-semibold text-blue-600 hover:underline">
                    {article.title}
                  </Link>
                  <p className="text-sm text-gray-500 mt-2">
                    Authors: {article.authors}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Published: {article.date} | Pages: {article.pages}
                  </p>
                </div>
                <Download className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
              </div>
              <p className="mt-4 text-gray-700">
                {article.abstract}
              </p>
              <div className="mt-4 flex items-center space-x-4">
                <span className="inline-flex items-center text-sm text-gray-500">
                  <Users2 className="h-4 w-4 mr-1" /> {article.citations} Citations
                </span>
                <span className="inline-flex items-center text-sm text-gray-500">
                  <BarChart3 className="h-4 w-4 mr-1" /> Impact Factor: {article.impactFactor}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}