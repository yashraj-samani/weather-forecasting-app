import React, { useState } from "react";

const SearchBar = ({ stateName, onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    const regex = /^[a-zA-Z\s]*$/;
    if (regex.test(value)) {
      setInputValue(value);
    }
  };

  const handleSearchClick = () => {
    onSearch(inputValue);
  };

  return (
    <div>
      <h3>{`Check the weather for any city in ${stateName}`}</h3>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter city name"
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default SearchBar;
