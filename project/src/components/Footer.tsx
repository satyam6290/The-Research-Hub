import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12"> {/* Enclose everything in a <footer> tag */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Discover content</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Journals A-Z</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Books A-Z</a></li>
            </ul>
          </div>
          {/* ... other divs */}
           <div>
              <h4 className="font-semibold mb-4">About the Journal</h4>
              <p className="text-sm text-gray-400">
              The Research Hub is a premier journal focused on mobile communication, computation and information systems.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Authors</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/submit" className="hover:text-orange-400">Submission Guidelines</Link></li>
                <li><Link to="/ethics" className="hover:text-orange-400">Publication Ethics</Link></li>
                <li><Link to="/open-access" className="hover:text-orange-400">Open Access Options</Link></li>
                <li><Link to="/charges" className="hover:text-orange-400">Article Processing Charges</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/contact" className="hover:text-orange-400">Editorial Office</Link></li>
                <li><Link to="/support" className="hover:text-orange-400">Technical Support</Link></li>
                <li><Link to="/advertising" className="hover:text-orange-400">Advertising</Link></li>
                <li><Link to="/permissions" className="hover:text-orange-400">Rights & Permissions</Link></li>
              </ul>
            </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 The Research Hub Journal. All rights reserved.</p>
        </div>
      </div>
    </footer> // Closing tag for the <footer>
  );
}