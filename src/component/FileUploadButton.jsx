import React from 'react';

const FileUploadButton = () => {
  const handleFileChange = (e) => {
    // Handle file selection or use e.target.files for further processing
    console.log('Selected File:', e.target.files[0]);
  };

  return (
    <div>
      <label htmlFor="fileInput" className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
        Upload File
      </label>

      {/* Hidden file input to handle file selection */}
      <input
        type="file"
        id="fileInput"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileUploadButton;
