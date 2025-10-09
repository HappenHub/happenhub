import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ title, date, mood, location, imageUrl, description, price, id, tags }) => {
  return (
    <div className="event-card bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src={imageUrl || '/default-event.jpg'} 
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">{mood}</span>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        {description && <p className="text-gray-600 mb-2">{description}</p>}
        <div className="flex justify-between items-center text-sm text-gray-600">
          <span>{location}</span>
          <span>{new Date(date).toLocaleDateString()}</span>
        </div>
        <div className="flex justify-between items-center mt-4">
          {price && <span className="text-primary font-medium">${price}</span>}
          <Link 
            to={`/event/${id}`}
            className="px-4 py-2 bg-[#9B2226] text-white rounded hover:bg-[#6F1D1B] transition-colors"
          >
            View Details
          </Link>
        </div>
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-gray-100 text-sm rounded-full text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;