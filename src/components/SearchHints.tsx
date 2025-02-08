import React from 'react';
import { Search, Filter } from 'lucide-react';

export function SearchHints() {
  return (
    <div className="space-y-2 text-sm text-blue-600">
      <p className="flex items-center gap-2">
        <Search size={16} />
        Are you looking for a specific article or book chapter? 
        <a href="#" className="underline">Use advanced search</a>
      </p>
      <p className="flex items-center gap-2">
        <Filter size={16} />
        Are you looking for a journal to publish your research? 
        <a href="#" className="underline">Select journals to compare</a>
      </p>
    </div>
  );
}