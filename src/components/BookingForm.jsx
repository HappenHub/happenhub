import React from 'react';
import BookingForm from "../components/BookingForm";
function BookingForm() {
  return (
    <div className="bg-cardBg text-textPrimary rounded-2xl shadow-lg p-6 w-full max-w-md mx-auto">
      <h3 className="text-btnPrimary font-bold text-2xl mb-4 text-center">Book Your Spot</h3>

      <input
        type="text"
        placeholder="Full Name"
        className="w-full mb-3 p-3 rounded-md bg-inputBg text-textPrimary placeholder-textSecondary outline-none focus:ring-2 focus:ring-btnPrimary"
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full mb-3 p-3 rounded-md bg-inputBg text-textPrimary placeholder-textSecondary outline-none focus:ring-2 focus:ring-btnPrimary"
      />

      <select
        className="w-full mb-4 p-3 rounded-md bg-inputBg text-textPrimary outline-none focus:ring-2 focus:ring-btnPrimary"
      >
        <option>General Admission</option>
        <option>VIP</option>
      </select>

      <button className="w-full bg-btnPrimary hover:bg-btnSecondary text-textPrimary font-semibold py-2 rounded-md transition-all duration-300">
        Book Now
      </button>
    </div>
  );
}

export default BookingForm;
