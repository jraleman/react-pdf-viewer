import { useEffect } from 'preact/hooks';
import "./style.css";

const PdfViewer = ({ 
  pdfPath = '',
  timeout = 0,
  avoidCopy = false,
  opacity = 1,
}) => {
  useEffect(() => {
    const initPdf = async () => {
      const pdf = await loadPdf(pdfPath);
      document.getElementById('pdf').src = pdf;
    };
    initPdf();
  }, []);

  return (
    <div>
      <iframe id="pdf" className="pdf-frame" />
    </div>
  );
}

export default PdfViewer;
