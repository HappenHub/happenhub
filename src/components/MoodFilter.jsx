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
    <div className="mood-filter">
      {moods.map(mood => (
        <button
          key={mood.emoji}
          onClick={() => setSelectedMood(selectedMood === mood.emoji ? '' : mood.emoji)}
          className={selectedMood === mood.emoji ? 'mood-btn selected' : 'mood-btn'}
        >
          {mood.emoji} {mood.label}
        </button>
      ))}
      {selectedMood && (
        <button className="mood-btn reset" onClick={() => setSelectedMood('')}>Reset</button>
      )}
    </div>
  );
}

export default MoodFilter;
