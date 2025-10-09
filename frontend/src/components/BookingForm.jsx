import React, { useState } from 'react';

const BookingForm = ({ eventId, onSubmit }) => {
  const [formData, setFormData] = useState({
    numberOfTickets: 1,
    specialRequirements: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="form-card">
      <h2 className="text-2xl font-bold mb-6">Book Event</h2>
      
      <div className="mb-4">
        <label htmlFor="numberOfTickets" className="block text-gray-700 mb-2">
          Number of Tickets
        </label>
        <input
          type="number"
          id="numberOfTickets"
          name="numberOfTickets"
          min="1"
          value={formData.numberOfTickets}
          onChange={handleChange}
          className="input-field"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="specialRequirements" className="block text-gray-700 mb-2">
          Special Requirements
        </label>
        <textarea
          id="specialRequirements"
          name="specialRequirements"
          value={formData.specialRequirements}
          onChange={handleChange}
          className="input-field h-32"
          placeholder="Any special requirements or requests..."
        />
      </div>

      <button type="submit" className="btn-primary">
        Book Now
      </button>
    </form>
  );
};

export default BookingForm;