import React from 'react';
import { PublicationTypes } from '../types';

interface SidebarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  publicationTypes: PublicationTypes;
  onPublicationTypeChange: (type: keyof PublicationTypes) => void;
}

export function Sidebar({
  selectedCategory,
  onCategoryChange,
  publicationTypes,
  onPublicationTypeChange,
}: SidebarProps) {
  return (
    <div className="col-span-1 space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="font-semibold text-lg mb-4">Refine publications by</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select subject area</label>
            <select 
              className="w-full border border-gray-300 rounded-md p-2"
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
            >
              <option>Computer Science</option>
              <option>Engineering</option>
              <option>Mathematics</option>
            </select>
          </div>

          <div>
            <h3 className="font-medium mb-2">Publication type</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  className="rounded text-blue-600" 
                  checked={publicationTypes.journals}
                  onChange={() => onPublicationTypeChange('journals')}
                />
                <span className="ml-2">Journals</span>
              </label>
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  className="rounded text-blue-600"
                  checked={publicationTypes.books}
                  onChange={() => onPublicationTypeChange('books')}
                />
                <span className="ml-2">Books</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}