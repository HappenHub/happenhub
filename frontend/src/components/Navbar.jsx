import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              HappenHub
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-primary">
              Home
            </Link>
            {user && user.role === 'ORGANIZER' && (
              <Link to="/dashboard" className="text-gray-700 hover:text-primary">
                Dashboard
              </Link>
            )}
            {user ? (
              <>
                <span className="text-gray-700">Hi, {user.name || user.email}</span>
                <button
                  onClick={logout}
                  className="text-gray-700 hover:text-primary cursor-pointer"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login/user" className="text-gray-700 hover:text-primary">
                  Login
                </Link>
                <Link to="/signup/user" className="text-gray-700 hover:text-primary">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;