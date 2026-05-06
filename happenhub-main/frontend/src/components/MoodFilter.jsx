import React from 'react';

function MoodFilter({ selectedMood, setSelectedMood }) {
  const moods = [
    { label: 'Party', emoji: '🎉' },
    { label: 'Tech', emoji: '💻' },
    { label: 'Art', emoji: '🎨' },
    { label: 'Music', emoji: '🎵' },
    { label: 'Outdoor', emoji: '🏞️' },
  ];

  return (
    <div className="mood-filter flex gap-2 flex-wrap mb-6">
      {moods.map(mood => (
        <button
          key={mood.emoji}
          onClick={() => setSelectedMood(selectedMood === mood.label ? '' : mood.label)}
          className={`
            px-4 py-2 rounded-full flex items-center gap-2 
            transition-all duration-300 text-sm font-medium
            ${selectedMood === mood.label 
              ? 'bg-[#FFB5A7] text-black shadow-lg transform scale-105' 
              : 'bg-white text-black hover:bg-[#FFB5A7]'
            }
          `}
        >
          <span className="text-lg">{mood.emoji}</span>
          <span>{mood.label}</span>
        </button>
      ))}
      {selectedMood && (
        <button 
          className="px-4 py-2 rounded-full bg-[#9B2226] text-white hover:bg-[#6F1D1B] transition-colors duration-300 text-sm font-medium"
          onClick={() => setSelectedMood('')}
        >
          Reset Filter
        </button>
      )}
    </div>
  );
}

export default MoodFilter;
