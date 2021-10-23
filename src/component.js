import { h } from 'preact';
import PDFViewer from './pdf-viewer';
import pdfFile from '../files/sample.pdf';
import "./style.css";

const App = (props) => {
    const pdfPath = pdfFile;
    return (
      <div>
          <PDFViewer pdfPath={pdfPath} />
      </div>
    );
};

export default App;
