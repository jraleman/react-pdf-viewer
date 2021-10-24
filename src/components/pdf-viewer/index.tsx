import { useEffect, useState, MouseEvent } from 'react';
import { Document, Page, PDFPageProxy } from 'react-pdf';
import { IPdfViewer } from '../../@interfaces/PdfViewer';

const PdfViewer = ({ 
  pdfPath = '',
  timeout = 0,
  opacity = 1.0,
  disableCopy = false,
  scale = 1.0,
  rotate = 0,
  maxPages = undefined,
}: IPdfViewer) => {
  const [hide, setHide] = useState<boolean>(false);
  const [numPages, setNumPages] = useState<number>(1);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(maxPages || numPages);
  };

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

  const handleOnClick = (event: MouseEvent, page: PDFPageProxy) => {
    if (disableCopy) {
      event.preventDefault();
      window.alert('You shall not copy');
      console.log({ page });
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
    const preventCtxMenu = (event: Event) => event.preventDefault();
    disableCopy && document.addEventListener('contextmenu', preventCtxMenu);
    return () => {
      disableCopy && document.removeEventListener('contextmenu', preventCtxMenu);
    }
  }, [disableCopy])

  const userSelect = disableCopy ? 'none' : 'auto';

  if (hide) {
    return null;
  }
  return (
    <div>
      <p>Page {pageNumber} of {numPages}</p>
      <button onClick={handlePrevPage}>Prev</button>
      <button onClick={handleNextPage}>Next</button>
      <div style={{ opacity, userSelect }}>
        <Document
          file={pdfPath}
          rotate={rotate}
          error={DisplayError}
          loading={DisplayLoading}
          noData={DisplayNoData}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page scale={scale} pageNumber={pageNumber} onClick={handleOnClick} />
        </Document>
      </div>
    </div>
  );
};

const DisplayError = () => <div>An error has occured!</div>

const DisplayLoading = () => <div>Loading... please wait</div>

const DisplayNoData = () => <div>Not found!</div>

export default PdfViewer;
