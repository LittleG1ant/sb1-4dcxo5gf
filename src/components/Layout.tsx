import React from 'react';
import { Menu, Home, Info, Briefcase, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center">
                <Menu className="h-6 w-6 text-gray-700" />
                <span className="ml-2 font-semibold text-gray-900">Dummy Site</span>
              </Link>
            </div>
            <div className="flex space-x-8">
              <Link
                to="/"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  isActive('/') ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Home className="h-4 w-4 mr-1" />
                Home
              </Link>
              <Link
                to="/about"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  isActive('/about') ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Info className="h-4 w-4 mr-1" />
                About
              </Link>
              <Link
                to="/services"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  isActive('/services') ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Briefcase className="h-4 w-4 mr-1" />
                Services
              </Link>
              <Link
                to="/contact"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  isActive('/contact') ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Phone className="h-4 w-4 mr-1" />
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>
    </div>
  );
};

export default Layout;