import { h, Component } from "preact";
import PdfViewer from './components/pdf-viewer';

class Widget extends Component {
  render(props) {
    return (
      <div>
        <PdfViewer />
      </div>
    );
  }
}

export default Widget;
