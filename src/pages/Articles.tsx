import React, {useState} from 'react';

import { SearchBar } from '../components/SearchBar';
import { SearchHints } from '../components/SearchHints';
import { Sidebar } from '../components/SideBar';
import { JournalList } from '../components/JournalList';
import { SAMPLE_JOURNALS } from '../data/journals';
import { PublicationTypes } from '../components/ui/index';

export function Articles() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Computer Science');
  const [publicationTypes, setPublicationTypes] = useState<PublicationTypes>({
    journals: true,
    books: false
  });

  const filteredJournals = SAMPLE_JOURNALS.filter(journal =>
    journal.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePublicationTypeChange = (type: keyof PublicationTypes) => {
    setPublicationTypes(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Showing {filteredJournals.length} journals</h1>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <SearchHints />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-4 gap-8">
          <Sidebar
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            publicationTypes={publicationTypes}
            onPublicationTypeChange={handlePublicationTypeChange}
          />
          <JournalList journals={filteredJournals} />
        </div>
      </div>
    </div>
  );
}
