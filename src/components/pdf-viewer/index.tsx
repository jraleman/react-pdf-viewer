import { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
// @ts-ignore
import pdfjsWorker from 'react-pdf/node_modules/pdfjs-dist/build/pdf.worker.entry';
import './style.css';

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

interface IPdfViewer {
  pdfPath: string;
  timeout?: number;
  opacity?: number;
  disableRightClick?: boolean;
}

const PdfViewer = ({ 
  pdfPath = '',
  timeout = 0,
  opacity = 1,
  disableRightClick = false,
}: IPdfViewer) => {
  const [hide, setHide] = useState<boolean>(false);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };
  // useEffect(() => {
  //   const initPdf = async () => {
  //     const pdf = await loadPdf(pdfPath);
  //     document.getElementById('pdf').src = pdf;
  //   };
  //   initPdf();
  // }, [pdfPath]);

  const handleNextPage = () => {
    if (numPages && numPages > pageNumber) {
      setPageNumber((n) => n += 1);
    }
  };

  const handlePrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber((n) => n -= 1);
    }
  };

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
      <p>Page {pageNumber} of {numPages}</p>
      <button onClick={handlePrevPage}>Prev</button>
      <button onClick={handleNextPage}>Next</button>
      <Document
        file={pdfPath}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  );
}

export default PdfViewer;
