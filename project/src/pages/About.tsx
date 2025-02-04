import React from 'react';
import { Award, Users, BookOpen, TrendingUp } from 'lucide-react';

export function About() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">About the Journal</h1>
        
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-8">
            Wireless Networks is a premier, peer-reviewed journal dedicated to the latest advancements in wireless networking technologies, protocols, and applications. Our journal serves as a vital platform for researchers, academics, and industry professionals to share groundbreaking discoveries and innovations in the field of wireless communications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
            <div className="p-6 bg-white border rounded-lg">
              <Award className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">High Impact</h3>
              <p className="text-gray-600">Consistently ranked among top journals in wireless communications with an impact factor of 3.426</p>
            </div>
            <div className="p-6 bg-white border rounded-lg">
              <Users className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Expert Review</h3>
              <p className="text-gray-600">Rigorous peer-review process conducted by leading experts in the field</p>
            </div>
            <div className="p-6 bg-white border rounded-lg">
              <BookOpen className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Broad Scope</h3>
              <p className="text-gray-600">Covering all aspects of wireless networks, from theory to practical applications</p>
            </div>
            <div className="p-6 bg-white border rounded-lg">
              <TrendingUp className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Rapid Publication</h3>
              <p className="text-gray-600">Fast-track review process with average decision time of 30 days</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Scope</h2>
          <p className="text-gray-600 mb-6">
            The journal covers a wide range of topics including but not limited to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-8">
            <li>Wireless Network Architectures and Protocols</li>
            <li>Mobile Computing and Communications</li>
            <li>5G and Beyond Technologies</li>
            <li>Internet of Things (IoT) Networks</li>
            <li>Network Security and Privacy</li>
            <li>Cloud and Edge Computing</li>
            <li>Wireless Sensor Networks</li>
            <li>Cognitive Radio Networks</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Publication Ethics</h2>
          <p className="text-gray-600 mb-8">
            We are committed to maintaining the highest standards of publication ethics and follow the guidelines set by the Committee on Publication Ethics (COPE). All submitted manuscripts undergo rigorous peer review and plagiarism checking.
          </p>
        </div>
      </div>
    </main>
  );
}