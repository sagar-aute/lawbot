import React from 'react';
import './PdfPreview.css';

const PdfPreview = ({ pdfUrl }) => {
  return (
    <div className="pdf-preview">
      <object
        data={pdfUrl}
        type="application/pdf"
      >
        <p>Your browser does not support PDF previews. Please download the PDF to view it.</p>
      </object>
    </div>
  );
};

export default PdfPreview;
