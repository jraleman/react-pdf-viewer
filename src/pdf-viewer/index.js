import { useEffect, useState } from 'preact/hooks';
import { loadPdf } from '../utils';
import './style.css';

const PdfViewer = ({ 
  pdfPath = '',
  timeout = undefined,
  opacity = 1,
  disableRightClick = false,
}) => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const initPdf = async () => {
      const pdf = await loadPdf(pdfPath);
      document.getElementById('pdf').src = pdf;
    };
    initPdf();
  }, [pdfPath]);

  useEffect(() => {
    if (timeout !== undefined) {
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
      <iframe id="pdf" className="pdf-frame" />
    </div>
  );
}

export default PdfViewer;
