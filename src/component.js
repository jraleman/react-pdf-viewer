import { h } from 'preact';
import PDFViewer from './pdf-viewer';
import pdfFile from '../files/sample.pdf';
import "./style.css";

const App = (props) => {
  const pdfPath = pdfFile;
  const timeout = 3600 / 4; // 15 mins
  const avoidCopy = true;
  const opacity = 0.8; // 20% transparent
  return (
    <div>
      <PDFViewer
        pdfPath={pdfPath}
        timeout={timeout}
        avoidCopy={avoidCopy}
        opacity={opacity}
      />
    </div>
  );
};

export default App;
