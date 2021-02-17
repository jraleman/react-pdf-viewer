import { h, Component } from "preact";
import "./style.scss";

// const PdfViewer = (props) => {
class PdfViewer extends Component {
    render(props) {
        console.log('props:', props);
        return (
          <div>
            <p>pdf-viewer</p>
          </div>
        );
    }
}

export default PdfViewer;