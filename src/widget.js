import { h, Component } from "preact";
import PdfViewer from './components/pdf-viewer';

class Widget extends Component {
    render(props) {
        const pdfPath = 'https://file-examples-com.github.io/uploads/2017/10/file-example_PDF_500_kB.pdf';
        return (
            <div>
                <PdfViewer {...props} pdfPath={pdfPath} />
            </div>
        );
    }
}

export default Widget;
