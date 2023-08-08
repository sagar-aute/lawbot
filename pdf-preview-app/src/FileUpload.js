import React, { useState } from 'react';
import './FileUpload.css';

const FileUpload = ({ onFileUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    onFileUpload(file);
  };

  return (
    <div className="file-upload">
      <label htmlFor="pdf-upload" className="file-label">
        Upload PDF
      </label>
      <input
        type="file"
        accept=".pdf"
        id="pdf-upload"
        onChange={handleFileChange}
        className="file-input"
      />
      {selectedFile && (
        <p className="file-selected">Selected file: {selectedFile.name}</p>
      )}
    </div>
  );
};

export default FileUpload;
