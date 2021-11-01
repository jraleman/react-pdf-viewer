import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import InputsController from './InputsController';
import ISettingsController from '../@interfaces/ISettingsController';
import IInputsController from '../@interfaces/IInputsController';

const SettingsController = ({ onSave = () => {} }: ISettingsController) => {
    const [pdfPath, setPdfPath] = useState<string>('');
    const [pdfTimeout, setPdfTimeout] = useState<number | undefined>(undefined);
    const [pdfOpacity, setPdfOpacity] = useState<number>(1.0);
    const [pdfScale, setPdfScale] = useState<number>(1.0);
    const [pdfRotate, setPdfRotate] = useState<number>(0);
    const [maxPages, setMaxPages] = useState<number | undefined>(undefined);
    const [disableCopy, setDisableCopy] = useState<boolean>(false);
    const { t } = useTranslation();
    
    const handleOnSave = () => {
        onSave({
            path: pdfPath,
            timeout: pdfTimeout,
            opacity: pdfOpacity,
            scale: pdfScale,
            rotate: pdfRotate,
            disableCopy,
            maxPages,
        });
    };

    const inputsArr: IInputsController[] = [
        {
            key: 'pdf-path',
            type: 'file',
            label: t('pdfPathInput'),
            value: pdfPath,
            onChange: (e: ChangeEvent<HTMLInputElement>) => setPdfPath(e.target.value),
            disabled: true,
        },
        {
            key: 'pdf-timeout',
            type: 'number',
            label:  t('timeoutInput'),
            value: pdfTimeout,
            onChange: (e: ChangeEvent<HTMLInputElement>) => setPdfTimeout(Number(e.target.value)),
        },
        {
            key: 'pdf-opacity',
            type: 'range',
            label:  t('opacityInput'),
            value: pdfOpacity,
            onChange: (e: ChangeEvent<HTMLInputElement>) => setPdfOpacity(Number(e.target.value)),
            min: 0,
            max: 10,
        },
        {
            key: 'pdf-scale',
            type: 'range',
            label: t('scaleInput'),
            value: pdfScale,
            onChange: (e: ChangeEvent<HTMLInputElement>) => setPdfScale(Number(e.target.value)),
            min: 1,
            max: 100,
        },
        {
            key: 'pdf-rotate',
            type: 'number',
            label: t('rotateInput'),
            value: pdfRotate,
            onChange: (e: ChangeEvent<HTMLInputElement>) => setPdfRotate(Number(e.target.value)),
        },
        {
            key: 'max-pages',
            type: 'number',
            label: t('maxPagesInput'),
            value: maxPages,
            onChange: (e: ChangeEvent<HTMLInputElement>) => setMaxPages(Number(e.target.value)),
        },
        {
            key: 'disable-copy',
            type: 'checkbox',
            label: t('disableCopyInput'),
            value: `${disableCopy}`,
            onChange: (e: ChangeEvent<HTMLInputElement>) => setDisableCopy(e.target.checked),
        },
    ];

    const titleLabel = t('settingsTitle');
    const saveButtonLabel = t('saveSettings');
    return (
        <SettingsContainer>
            <hr />
            <SettingsTitle>{titleLabel}</SettingsTitle>
            <InputsController inputs={inputsArr} />
            <SaveButton onClick={handleOnSave} disabled>
                {saveButtonLabel}
            </SaveButton>
        </SettingsContainer>
    );
};

const SaveButton = styled.button`
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

const SettingsTitle = styled.h3`
    color: #666666;
`;

const SettingsContainer = styled.div``;

export default SettingsController;
