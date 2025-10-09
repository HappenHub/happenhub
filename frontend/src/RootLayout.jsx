import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export function RootLayout({ children }) {
  const location = useLocation();
  const isAuthRoute = (pathname) => {
    return pathname.startsWith('/login/') || pathname.startsWith('/signup/');
  };

  return (
    <div className="app min-h-screen flex flex-col bg-[#6F1D1B]">
      {!isAuthRoute(location.pathname) && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {!isAuthRoute(location.pathname) && <Footer />}
    </div>
  );
}