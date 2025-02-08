import React from 'react';
import { BookOpen } from 'lucide-react';
import { Journal } from '../types';

interface JournalListProps {
  journals: Journal[];
}

export function JournalList({ journals }: JournalListProps) {
  return (
    <div className="col-span-3">
      <div className="space-y-4">
        {journals.map((journal, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-blue-600 hover:underline">
                  <a href="#">{journal.title}</a>
                </h3>
                <div className="flex items-center mt-2 space-x-2">
                  <span className="text-sm text-gray-600">Journal</span>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    {journal.type}
                  </span>
                </div>
              </div>
              <BookOpen className="text-gray-400" size={24} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}