import { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf';
import { IPdfViewer } from '../../@interfaces/PdfViewer';

const PdfViewer = ({ 
  pdfPath = '',
  timeout = 0,
  opacity = 1.0,
  scale = 1.0,
  rotate = 0,
  disableRightClick = false,
}: IPdfViewer) => {
  const [hide, setHide] = useState<boolean>(false);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
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

  const handleOnClick = () => {
    window.alert('You shall not copy');
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
        error={DisplayError}
        loading={DisplayLoading}
        noData={DisplayNoData}
        rotate={rotate}
        >
        <Page
          scale={scale}
          pageNumber={pageNumber}
          onClick={handleOnClick}
        />
      </Document>
    </div>
  );
};

const DisplayError = () => <div>An error has occured!</div>

const DisplayLoading = () => <div>Loading... please wait</div>

const DisplayNoData = () => <div>Not found!</div>

export default PdfViewer;
