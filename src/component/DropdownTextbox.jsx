import React, { useState } from 'react';

const DropdownTextbox = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const options = ['Option 1', 'Option 2', 'Option 3'];

  const handleTextboxClick = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={selectedOption}
        onClick={handleTextboxClick}
        placeholder="Pilih opsi..."
        className="w-full h-10 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />

      {showOptions && (
        <div className="absolute mt-2 bg-white border border-gray-300 rounded-md shadow-md">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleOptionClick(option)}
              className="p-2 cursor-pointer hover:bg-gray-100"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownTextbox;
