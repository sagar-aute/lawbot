import React, { useState } from 'react';
import axios from 'axios';
import './FileUpload.css';
import PdfPreview from './PdfPreview'; 

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await axios.post('/upload', formData);
        console.log('File uploaded successfully:', response.data);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  return (
    <div>
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
          <p className="file-selected">File Name: {selectedFile.name}</p>
        )}
      </div>
      {selectedFile && <PdfPreview selectedFile={selectedFile} />} {/* Pass selectedFile */}
    </div>
  );
};

export default FileUpload;
