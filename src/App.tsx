import React from 'react';
import { pdfjs } from 'react-pdf';
// @ts-ignore
import pdfjsWorker from 'react-pdf/node_modules/pdfjs-dist/build/pdf.worker.entry';
import PdfViewer from './components/pdf-viewer';
import pdfSample from './assets/sample.pdf';
import pdfLittlePrince from './assets/the_little_prince.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const App = () => {
  const props = {
    pdfPath: pdfLittlePrince || pdfSample,
    timeout: 3600 / 4, // 15 mins
    disableCopy: true,
    maxPages: 10,
  };
  return (
    <div>
      <code>{JSON.stringify(props)}</code>
      <PdfViewer {...props} />
    </div>
  );
}

export default App;
