import { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { pdfjs } from 'react-pdf';
// @ts-ignore
import pdfjsWorker from 'react-pdf/node_modules/pdfjs-dist/build/pdf.worker.entry';
import PdfViewer from './components/PdfViewer';
import pdfSample from './assets/sample.pdf';
import pdfLittlePrince from './assets/the_little_prince.pdf';
import IPdfViewer from './@interfaces/IPdfViewer';
import SettingsController from './components/SettingsController';

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const App = () => {
    const [pdfProps, setPdfProps] = useState<IPdfViewer>({
        pdfPath: pdfLittlePrince || pdfSample,
        timeout: 3600 / 4, // 15 mins
        disableCopy: true,
        maxPages: 10,
        rotate: 0,
    });
    const { t } = useTranslation();

    // TODO: define PDFProps
    const onSave = (savedProps: any) => {
        setPdfProps({ ...savedProps });
    };

    const appTitleLabel = t('appTitle');
    return (
        <Container>
            <CodePreview>{JSON.stringify(pdfProps)}</CodePreview>
            <WidgetTitle>{appTitleLabel}</WidgetTitle>
            <WidgetWrapper>
                <PdfViewer {...pdfProps} />
            </WidgetWrapper>
            <SettingsController onSave={onSave} />
        </Container>
    );
};

const Container = styled.div`
    background-color: #afdde9;
    text-align: center;
    padding: 3em;
`;

const CodePreview = styled.code`
    padding: 1em;
    margin-bottom: 1em;
    color: #f9f9f9;
    background-color: #222222;
    display: block;
`;

const WidgetWrapper = styled.div`
    border-style: dotted;
    border-color: #666666;
    padding: 1em;
`;

const WidgetTitle = styled.h2`
    color: #666666;
`;

export default App;
