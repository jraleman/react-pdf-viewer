type zeroToOne = 0.0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1.0;

export interface IPdfViewer {
    pdfPath: string;
    timeout?: number;
    opacity?: zeroToOne;
    scale?: zeroToOne;
    rotate?: 0 | 90 | 180 | 270;
    disableCopy?: boolean;
}
