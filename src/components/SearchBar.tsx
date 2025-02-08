import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
  return (
    <div className="relative mb-4">
      <input
        type="text"
        placeholder="Filter by journal or book title"
        className="w-full p-4 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
    </div>
  );
}