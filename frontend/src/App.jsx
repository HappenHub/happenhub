import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvider, useAuth } from "./context";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import EventDetails from "./pages/EventDetails";
import LoginUser from "./pages/LoginUser";
import LoginOrganiser from "./pages/LoginOrganiser";
import Signup from "./pages/Signup";

// Protected Route Component
const ProtectedRoute = ({ element: Element, allowedRoles = [] }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login/user" replace />;
  }

  if (allowedRoles.length && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return Element();
};

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            {/* Public auth routes */}
            <Route path="/login/user" element={<LoginUser />} />
            <Route path="/login/organiser" element={<LoginOrganiser />} />
            <Route path="/signup/:type" element={<Signup />} />
            
            {/* Protected routes */}
            <Route 
              path="/" 
              element={<ProtectedRoute element={() => <Home />} allowedRoles={['USER', 'ORGANIZER']} />}
            />
            <Route 
              path="/event/:id" 
              element={<ProtectedRoute element={() => <EventDetails />} allowedRoles={['USER', 'ORGANIZER']} />}
            />
            <Route 
              path="/dashboard" 
              element={<ProtectedRoute element={() => <Dashboard />} allowedRoles={['ORGANIZER']} />}
            />
            
            {/* Fallback route */}
            <Route path="*" element={
              <div className="text-center mt-8">
                <h2 className="text-2xl font-bold text-gray-800">Page Not Found</h2>
                <p className="text-gray-600 mt-2">Sorry, the page you are looking for does not exist.</p>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
