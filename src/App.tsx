import React from 'react';
import logo from './logo.svg';
import './App.css';
import PdfViewer from './components/pdf-viewer';
import pdfSample from './assets/sample.pdf';

const App = () => {
  const pdfPath = pdfSample;
  const opacity = 0.8; // 80%
  const timeout = 3600 / 4; // 15 mins
  const disableRightClick = false;
  return (
    <div>
      <PdfViewer
        pdfPath={pdfPath}
        opacity={opacity}
        timeout={timeout}
        disableRightClick={disableRightClick}
      />
    </div>
  );
}

export default App;
