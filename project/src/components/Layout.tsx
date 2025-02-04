import React, { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Search, BookOpen, LogOut } from 'lucide-react';
import { AuthModal } from './AuthModal';
import { supabase } from '../lib/supabase';
import type { User } from '@supabase/supabase-js';

export function Layout() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-orange-600" />
              <div>
                <h1 className="text-xl font-bold">The Research Hub</h1>
                <p className="text-sm text-gray-500">Where Knowledge Meets Innovation</p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/articles" className="text-gray-600 hover:text-gray-900">Articles</Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
              <Link to="/submit" className="text-gray-600 hover:text-gray-900">Submit</Link>
              <Link to="/author-guidelines" className="text-gray-600 hover:text-gray-900">Author Guidelines</Link>
            </nav>
            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600">{user.email}</span>
                  <button
                    onClick={handleSignOut}
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <LogOut className="h-5 w-5 mr-1" />
                    Sign Out
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search within journal..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <Outlet />

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-4">About the Journal</h4>
              <p className="text-sm text-gray-600">
              The Research Hub is a premier journal focused on mobile communication, computation and information systems.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Authors</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link to="/submit" className="hover:text-orange-600">Submission Guidelines</Link></li>
                <li><Link to="/ethics" className="hover:text-orange-600">Publication Ethics</Link></li>
                <li><Link to="/open-access" className="hover:text-orange-600">Open Access Options</Link></li>
                <li><Link to="/charges" className="hover:text-orange-600">Article Processing Charges</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link to="/contact" className="hover:text-orange-600">Editorial Office</Link></li>
                <li><Link to="/support" className="hover:text-orange-600">Technical Support</Link></li>
                <li><Link to="/advertising" className="hover:text-orange-600">Advertising</Link></li>
                <li><Link to="/permissions" className="hover:text-orange-600">Rights & Permissions</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-gray-500">
            © 2024 The Research Hub Journal. All rights reserved.
          </div>
        </div>
      </footer>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </div>
  );
}