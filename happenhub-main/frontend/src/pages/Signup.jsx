import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { api } from "../utils/api";

function Signup() {
  const navigate = useNavigate();
  const { type } = useParams(); // "user" or "organiser"
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    age: ''
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(null);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      await api.auth.signup(type === 'user' ? 'users' : 'organizers', {
        ...formData,
        role: type.toUpperCase()
      });
      navigate(`/login/${type}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#6F1D1B] flex items-center justify-center px-4 py-12">
      <div className="bg-[#FFB5A7] rounded-lg shadow-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-[#432818] text-center mb-8">
          {type === "user" ? "Create Account" : "Register as Organizer"}
        </h2>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSignup} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-[#432818] font-medium mb-2">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-white/90 border border-[#432818]/20 focus:outline-none focus:ring-2 focus:ring-[#9B2226]"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-[#432818] font-medium mb-2">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-white/90 border border-[#432818]/20 focus:outline-none focus:ring-2 focus:ring-[#9B2226]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-[#432818] font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-white/90 border border-[#432818]/20 focus:outline-none focus:ring-2 focus:ring-[#9B2226]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="phoneNumber" className="block text-[#432818] font-medium mb-2">
                Phone Number
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-white/90 border border-[#432818]/20 focus:outline-none focus:ring-2 focus:ring-[#9B2226]"
              />
            </div>
            <div>
              <label htmlFor="age" className="block text-[#432818] font-medium mb-2">
                Age
              </label>
              <input
                id="age"
                name="age"
                type="number"
                min="18"
                max="120"
                value={formData.age}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-white/90 border border-[#432818]/20 focus:outline-none focus:ring-2 focus:ring-[#9B2226]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-[#432818] font-medium mb-2">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-white/90 border border-[#432818]/20 focus:outline-none focus:ring-2 focus:ring-[#9B2226]"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-[#432818] font-medium mb-2">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-white/90 border border-[#432818]/20 focus:outline-none focus:ring-2 focus:ring-[#9B2226]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 px-6 rounded-md bg-[#9B2226] text-white font-medium hover:bg-[#6F1D1B] transition-colors
              ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-[#432818]">
            Already have an account?{' '}
            <Link 
              to={`/login/${type}`} 
              className="text-[#9B2226] hover:text-[#6F1D1B] font-medium"
            >
              Sign In
            </Link>
          </p>
          
          <button 
            onClick={() => navigate(`/signup/${type === 'user' ? 'organiser' : 'user'}`)}
            className="mt-4 text-[#432818] hover:text-[#9B2226] transition-colors"
          >
            {type === 'user' 
              ? 'Register as Event Organizer →'
              : 'Create User Account →'
            }
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
