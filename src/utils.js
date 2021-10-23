import {
  PDFDocument,
  PDFName,
  NonFullScreenPageMode,
  ReadingDirection,
  PrintScaling,
  Duplex,
} from 'pdf-lib';

const loadPdf = async (url) => {
  // Gets and loads pdf file
  const url = pdfPath;
  const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer());
  console.log({ existingPdfBytes })
  const pdfDoc = await PDFDocument.load(existingPdfBytes, { ignoreEncryption: true });
  // Set viewer preferences
  const viewerPrefs = pdfDoc.catalog.getOrCreateViewerPreferences()
  viewerPrefs.setHideToolbar(true);
  viewerPrefs.setHideMenubar(true);
  viewerPrefs.setHideWindowUI(true);
  viewerPrefs.setFitWindow(true);
  viewerPrefs.setCenterWindow(true);
  viewerPrefs.setDisplayDocTitle(true);
  // Set the PageMode (otherwise setting NonFullScreenPageMode has no meaning)
  pdfDoc.catalog.set(PDFName.of('PageMode'), PDFName.of('FullScreen'))
  // Set what happens when fullScreen is closed
  viewerPrefs.setNonFullScreenPageMode(NonFullScreenPageMode.UseOutlines)
  viewerPrefs.setReadingDirection(ReadingDirection.L2R)
  viewerPrefs.setPrintScaling(PrintScaling.None)
  viewerPrefs.setDuplex(Duplex.DuplexFlipLongEdge)
  viewerPrefs.setPickTrayByPDFSize(true)
  // We can set the default print range to only the first page
  viewerPrefs.setPrintPageRange({ start: 0, end: 0 })
  // Renders pdf using iframe
  const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
  return pdfDataUri;
};
