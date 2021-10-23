import { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdfjsWorker from "react-pdf/node_modules/pdfjs-dist/build/pdf.worker.entry";
import './style.css';

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const PdfViewer = ({ 
  pdfPath = '',
  timeout = 0,
  opacity = 1,
  disableRightClick = false,
}) => {
  const [hide, setHide] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  // useEffect(() => {
  //   const initPdf = async () => {
  //     const pdf = await loadPdf(pdfPath);
  //     document.getElementById('pdf').src = pdf;
  //   };
  //   initPdf();
  // }, [pdfPath]);

  useEffect(() => {
    if (timeout) {
      const seconds = timeout * 1000;
      setTimeout(() => {
        setHide(true);
      }, seconds);
    }
  }, [timeout]);

  useEffect(() => {
    // TODO: implement disableRightClick functionality
  }, [disableRightClick])

  if (hide) {
    return null;
  }
  return (
    <div style={{ opacity }}>
      <Document
        file={pdfPath}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  );
}

export default PdfViewer;
