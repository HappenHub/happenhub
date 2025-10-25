import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#432818] text-white py-8 mt-auto">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">
              Happen<span className="text-[#FFB5A7]">Hub</span>
            </p>
            <p className="text-sm text-gray-400">© 2025 All rights reserved.</p>
          </div>
          
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-gray-400 hover:text-[#FFB5A7] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-[#FFB5A7] transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="text-sm text-gray-400 hover:text-[#FFB5A7] transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
