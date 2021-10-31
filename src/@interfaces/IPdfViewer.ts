interface IPdfViewer {
    pdfPath: string;
    timeout?: number;
    opacity?: number;
    disableCopy?: boolean;
    maxPages?: number;
    scale?: number;
    rotate?: 0 | 90 | 180 | 270;
}

export default IPdfViewer;
