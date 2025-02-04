import React from 'react';
import { ChevronDown } from 'lucide-react';

const articleTypes = [
  {
    value: 'original-research',
    label: 'Original Research',
    description: 'New research findings - Maximum 8,000 words'
  },
  {
    value: 'review',
    label: 'Review Article',
    description: 'Comprehensive analysis of existing research - Maximum 12,000 words'
  },
  {
    value: 'brief-report',
    label: 'Brief Report',
    description: 'Short communications of urgent findings - Maximum 4,000 words'
  },
  {
    value: 'technical-note',
    label: 'Technical Note',
    description: 'Description of new methods or techniques - Maximum 4,000 words'
  }
];

interface ArticleTypeSelectorProps {
  onSelect: (type: string) => void;
  onSubmit: () => void;
  selectedType: string;
}

export function ArticleTypeSelector({ onSelect, onSubmit, selectedType }: ArticleTypeSelectorProps) {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Select article type</h1>
      
      <div className="bg-white p-6 rounded-lg border mb-8">
        <h2 className="text-xl font-semibold mb-4">Start your submission</h2>
        <p className="text-gray-600 mb-4">
          Your manuscript should be prepared in line with the Wireless Networks{' '}
          <a href="/author-guidelines" className="text-blue-600 hover:underline">
            guidelines
          </a>
          .
        </p>
        <p className="text-gray-600 mb-6">
          It's best if your manuscript - including all text, figures and tables - is in one file.
        </p>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Article type:
          </label>
          <div className="relative">
            <select
              value={selectedType}
              onChange={(e) => onSelect(e.target.value)}
              className="block w-full pl-4 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 rounded-md"
            >
              <option value="">Select an article type</option>
              {articleTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
          {selectedType && (
            <p className="mt-2 text-sm text-gray-500">
              {articleTypes.find((t) => t.value === selectedType)?.description}
            </p>
          )}
        </div>

        <button
          onClick={onSubmit}
          disabled={!selectedType}
          className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Start submission
        </button>
      </div>
    </div>
  );
}