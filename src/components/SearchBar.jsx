import React from 'react';

function SearchBar({ placeholder, value, setValue }) {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default SearchBar;
