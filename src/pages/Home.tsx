
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import { Link, Outlet, useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import CallForPapers from '../components/CallForPapers';
import TrendingResearch from './TrendingResearch'
import HomePageSections from '../components/HomePageSections'


export function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const stats = [
    { number: '200 million', label: 'monthly downloads' },
    { number: '24 million', label: 'monthly readers' },
    { number: '3 million', label: 'authors submit annually' }
  ];

  const subjects = [
    { name: 'Biological Sciences', icon: '🧬' },
    { name: 'Business and Management', icon: '💼' },
    { name: 'Chemistry', icon: '⚗️' },
    { name: 'Computer Science', icon: '💻' },
    { name: 'Earth Sciences', icon: '🌍' },
    { name: 'Health Sciences', icon: '🏥' },
    { name: 'Mathematics', icon: '📐' },
    { name: 'Physics', icon: '⚛️' }
  ];

  const featuredJournals = [
    {
      title: 'Artificial Intelligence Review',
      impactFactor: '10.7 (2023)',
      downloads: '1,537,425',
      description: 'Artificial Intelligence Review is a fully open access journal publishing state-of-the-art research in artificial intelligence and cognitive science.',
      coverImage: 'https://media.springernature.com/w180/springer-static/cover-hires/journal/10462'
    },
    {
      title: 'Discover Sustainability',
      impactFactor: '2.4 (2023)',
      downloads: '322,191',
      description: 'Discover Sustainability is an open access journal publishing research across all fields relevant to sustainability.',
      coverImage: 'https://media.springernature.com/w180/springer-static/cover-hires/journal/43621'
    },
    {
      title: 'Journal of Epidemiology and Global Health',
      impactFactor: '3.8 (2023)',
      downloads: '215,989',
      description: 'The Journal of Epidemiology and Global Health is an international peer reviewed journal which aims to impact global epidemiology.',
      coverImage: 'https://media.springernature.com/w180/springer-static/cover-hires/journal/44197'
    }
  ];

  const brands = [
    { name: 'Springer', logo: 'https://link.springer.com/oscar-static/images/springer-logo_75x20-124c0f1145.svg' },
    { name: 'Nature Portfolio', logo: 'https://link.springer.com/oscar-static/images/homepage/logo-nature-portfolio-stacked-fb6494d309.svg' },
    { name: 'BMC', logo: 'https://link.springer.com/oscar-static/images/homepage/logo-bmc-no-whitespace-29f5ee3fcf.svg' },
    { name: 'Apress', logo: 'https://link.springer.com/oscar-static/images/apress-logo-61fe25e18f.svg' },
    { name: 'Palgrave Macmillan', logo: 'https://link.springer.com/oscar-static/images/homepage/logo-palgrave-macmillan-stacked-c580f60cc5.svg' }
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="border-t container mx-auto px-4 py-4 flex items-center justify-center">
          <div className="flex items-center space-x-8">
           
            <nav className="hidden md:flex space-x-6">
              <Link to="/JournalFinder"  className="text-gray-600 hover:text-gray-900">Find a journal</Link>
              <Link to="/JournalFinder" className="text-gray-600 hover:text-gray-900">Publish with us</Link>
              <Link to="/JournalFinder" className="text-gray-600 hover:text-gray-900">Track research</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">

        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Search for research articles, academic books and more</h2>
            <div className="relative">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by keyword or author"
                className="w-full px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <FaSearch className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold">{stat.number}</div>
                  <div className="text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <HomePageSections/>
        </div>
        
      </section>
              
      {/* Brands Section */}
      <section className="py-12 bg-white">
        <h2 className="text-2xl font-bold text-center mb-8">Our brands</h2>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {brands.map((brand, index) => (
              <img 
                key={index}
                src={brand.logo}
                alt={brand.name}
                className="h-8 object-contain"
              />
            ))}
          </div>
        </div>
      </section>
            <CallForPapers/>
            <TrendingResearch/>
      {/* Featured Journals */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured journals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredJournals.map((journal, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={journal.coverImage} 
                  alt={journal.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{journal.title}</h3>
                  <p className="text-gray-600 mb-4">{journal.description}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Impact Factor: {journal.impactFactor}</span>
                    <span>Downloads: {journal.downloads}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="py-16 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-extrabold mb-12 text-center tracking-wide">
      Browse by Subject
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {subjects.map((subject, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-200 text-gray-800 flex items-center space-x-4"
        >
          <span className="text-3xl text-indigo-600">{subject.icon}</span>
          <h3 className="text-lg font-semibold">{subject.name}</h3>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">About The Research Hub Journal</h2>
            <p className="text-gray-600 mb-4">
              As part of The Research Hub Journal, The Research Hub Journal delivers fast access to the depth and breadth of our online collection of journals, eBooks, reference works and protocols across a vast range of subject disciplines.
            </p>
            <p className="text-gray-600">
            The Research Hub Journal is the reading platform of choice for hundreds of thousands of researchers worldwide.
            </p>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
}