import { useEffect, useState, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Document, Page, PDFPageProxy } from 'react-pdf';
import IPdfViewer from '../@interfaces/IPdfViewer';

const PdfViewer = ({ 
    pdfPath = '',
    timeout = 0,
    opacity = 1.0,
    disableCopy = false,
    scale = 1.0,
    rotate = 0,
    maxPages = undefined,
}: IPdfViewer) => {
    const [hide, setHide] = useState<boolean>(false);
    const [numPages, setNumPages] = useState<number>(1);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const { t } = useTranslation();

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(maxPages || numPages);
    };

    const handleNextPage = () => {
        if (numPages && numPages > pageNumber) {
            setPageNumber((n) => n += 1);
        }
    };

    const handlePrevPage = () => {
        if (pageNumber > 1) {
            setPageNumber((n) => n -= 1);
        }
    };

    const handleOnClick = (event: MouseEvent, page: PDFPageProxy) => {
        if (disableCopy) {
            event.preventDefault();
            console.log('You shall not copy', { page });
        }
    };

    useEffect(() => {
        if (timeout) {
            const seconds = timeout * 1000;
            setTimeout(() => {
                setHide(true);
            }, seconds);
        }
    }, [timeout]);

    useEffect(() => {
        const preventCtxMenu = (event: Event) => event.preventDefault();
        disableCopy && document.addEventListener('contextmenu', preventCtxMenu);
        return () => {
            disableCopy && document.removeEventListener('contextmenu', preventCtxMenu);
        }
    }, [disableCopy])

    const userSelect = disableCopy ? 'none' : 'auto';
    const prevBtnLabel = t('pagePrevious');
    const nextBtnLabel = t('pageNext');
    const pageIndicatorLabel = t('pageIndicator', { pageNumber, numPages });
    if (hide) {
        return null;
    }
    return (
        <>
            <DocumentController>
                <PageIndicator>{pageIndicatorLabel}</PageIndicator>
                <StyledButton onClick={handlePrevPage}>{prevBtnLabel}</StyledButton>
                <StyledButton onClick={handleNextPage}>{nextBtnLabel}</StyledButton>
            </DocumentController>
            <DocumentWrapper style={{ opacity, userSelect }}>
                <Document
                    file={pdfPath}
                    rotate={rotate}
                    error={DisplayError}
                    loading={DisplayLoading}
                    noData={DisplayNoData}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                <Page scale={scale} pageNumber={pageNumber} onClick={handleOnClick} />
                </Document>
            </DocumentWrapper>
        </>
    );
};

const DisplayError = () => <div>An error has occured!</div>

const DisplayLoading = () => <div>Loading... please wait</div>

const DisplayNoData = () => <div>Not found!</div>

const DocumentController = styled.div``;

const StyledButton = styled.button`
    overflow: visible;
    margin: 0;
    background: transparent;
    font: inherit;
    line-height: normal;
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    padding: 16px 36px 22px;
    background-color: #fff;
    color: #666;
    border: 2px solid #666;
    border-radius: 6px;
    margin-bottom: 16px;
    :hover {
        opacity: 0.75;
    }
`;

const PageIndicator = styled.p`
    text-transform: uppercase;
    font-weight: 500;
`;

const DocumentWrapper = styled.div`
    div {
        div {
            canvas {
                margin: 0 auto;
            }
        }
    }
`;

export default PdfViewer;
