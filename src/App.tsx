import React from 'react';
import { pdfjs } from 'react-pdf';
// @ts-ignore
import pdfjsWorker from 'react-pdf/node_modules/pdfjs-dist/build/pdf.worker.entry';
import PdfViewer from './components/pdf-viewer';
import pdfSample from './assets/sample.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

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
