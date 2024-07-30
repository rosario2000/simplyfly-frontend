import React, { useState } from "react";
import "./DropDownTextInput.css";

const DropdownInput = ({ label, placeholder, onSendData }) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const items = [
    "DEL", // delhi
    "BLR", //bengaluru
    "GOX", // goa
    "AMD", //ahmedabad
    "BOM", // bombay
    "IXA", // agartala
    "AYJ", // ayodhya
    "BHU", // bhubaneshwar
    "CHN", // chennai
    "GUW", // guwahati
    "HYD", // hyderabad
    "LKO", // lucknow
    "PNQ", // pune
    "COX", // kochi
    "SRN", // srinagar
  ];

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length > 0) {
      const filteredSuggestions = items.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    onSendData(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div>
      <label>{label}</label>
      <div className="dropdown-input">
        <input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
          onBlur={() => setShowSuggestions(false)}
          onFocus={() => inputValue && setShowSuggestions(true)}
        />
        {showSuggestions && (
          <div className="suggestions-list">
            {suggestions.map((suggestion, index) => (
              <div
                className="suggestion"
                key={index}
                onMouseDown={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownInput;
