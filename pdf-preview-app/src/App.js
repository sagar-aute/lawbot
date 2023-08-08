import React, { useState } from 'react';
import './App.css';
import FileUpload from './FileUpload';
import PdfPreview from './PdfPreview';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (file) => {
    setSelectedFile(URL.createObjectURL(file));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>PDF Preview</h1>
        <FileUpload onFileUpload={handleFileUpload} />
      </header>
      <main className="App-main">
        {selectedFile && <PdfPreview pdfUrl={selectedFile} />}
      </main>
    </div>
  );
}

export default App;
