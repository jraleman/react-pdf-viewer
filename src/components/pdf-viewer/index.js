import { useEffect } from 'preact/hooks';
import {
  PDFDocument
} from 'pdf-lib';
import "./style.scss";

const PdfViewer = ({ pdfPath = '' }) => {

    useEffect(() => {
        const createPdf = async () => {
            // Gets and loads pdf file
            const url = pdfPath;
            const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer());
            const pdfDoc = await PDFLib.PDFDocument.load(existingPdfBytes, { ignoreEncryption: true });
            // Set viewer preferences
            const viewerPrefs = pdfDoc.catalog.getOrCreateViewerPreferences()
            viewerPrefs.setHideToolbar(true);
            viewerPrefs.setHideMenubar(true);
            viewerPrefs.setHideWindowUI(true);
            viewerPrefs.setFitWindow(true);
            viewerPrefs.setCenterWindow(true);
            viewerPrefs.setDisplayDocTitle(true);
            // Set the PageMode (otherwise setting NonFullScreenPageMode has no meaning)
            pdfDoc.catalog.set(PDFLib.PDFName.of('PageMode'), PDFLib.PDFName.of('FullScreen'))
            // Set what happens when fullScreen is closed
            viewerPrefs.setNonFullScreenPageMode(PDFLib.NonFullScreenPageMode.UseOutlines)
            viewerPrefs.setReadingDirection(PDFLib.ReadingDirection.L2R)
            viewerPrefs.setPrintScaling(PDFLib.PrintScaling.None)
            viewerPrefs.setDuplex(PDFLib.Duplex.DuplexFlipLongEdge)
            viewerPrefs.setPickTrayByPDFSize(true)
            // We can set the default print range to only the first page
            viewerPrefs.setPrintPageRange({ start: 0, end: 0 })
            // Renders pdf using iframe
            const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
            document.getElementById('pdf').src = pdfDataUri;
        };
        createPdf();
    }, []);

    return (
        <div>
            <iframe id="pdf" className="pdf-frame" />
        </div>
    );
}

export default PdfViewer;
