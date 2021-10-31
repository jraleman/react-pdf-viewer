import { ChangeEvent, ChangeEventHandler, useState } from 'react';
import styled from 'styled-components';

interface ISettingsController {
    onSave: Function;
}

interface IInputsController {
    key: string;
    type: 'file' | 'number' | 'checkbox' | 'input' | 'radio';
    label: string;
    value: string | number | undefined;
    onChange: ChangeEventHandler<HTMLInputElement>;
    disabled?: boolean;
}

const InputsController = ({ inputs }: { inputs: IInputsController[] }) => (
    <> 
        {inputs.map(({ key, type, label, value, onChange, disabled }) => (
            <div key={key}>
                <label htmlFor={key}>{label}</label>
                <input 
                    name={key}
                    type={type}
                    value={value}
                    onChange={onChange}
                    disabled={disabled} 
                />
            </div>
        ))}
    </>
);

const SettingsController = ({ onSave = () => {} }: ISettingsController) => {
    const [pdfPath, setPdfPath] = useState<string>('');
    const [pdfTimeout, setPdfTimeout] = useState<number | undefined>(undefined);
    const [pdfOpacity, setPdfOpacity] = useState<number>(1.0);
    const [pdfScale, setPdfScale] = useState<number>(1.0);
    const [pdfRotate, setPdfRotate] = useState<number>(0);
    const [maxPages, setMaxPages] = useState<number | undefined>(undefined);
    const [disableCopy, setDisableCopy] = useState<boolean>(false);
    
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
            label: 'PDF Path',
            value: pdfPath,
            onChange: (e: ChangeEvent<HTMLInputElement>) => setPdfPath(e.target.value),
            disabled: true,
        },
        {
            key: 'pdf-timeout',
            type: 'number',
            label: 'Timeout',
            value: pdfTimeout,
            onChange: (e: ChangeEvent<HTMLInputElement>) => setPdfTimeout(Number(e.target.value)),
        },
        {
            key: 'pdf-opacity',
            type: 'number',
            label: 'Opacity',
            value: pdfOpacity,
            onChange: (e: ChangeEvent<HTMLInputElement>) => setPdfOpacity(Number(e.target.value)),
        },
        {
            key: 'pdf-scale',
            type: 'number',
            label: 'Scale',
            value: pdfScale,
            onChange: (e: ChangeEvent<HTMLInputElement>) => setPdfScale(Number(e.target.value)),
        },
        {
            key: 'pdf-rotate',
            type: 'number',
            label: 'Rotate',
            value: pdfRotate,
            onChange: (e: ChangeEvent<HTMLInputElement>) => setPdfRotate(Number(e.target.value)),
        },
        {
            key: 'max-pages',
            type: 'number',
            label: 'Max Pages',
            value: maxPages,
            onChange: (e: ChangeEvent<HTMLInputElement>) => setMaxPages(Number(e.target.value)),
        },
        {
            key: 'disable-copy',
            type: 'checkbox',
            label: 'Disable Copy',
            value: `${disableCopy}`,
            onChange: (e: ChangeEvent<HTMLInputElement>) => setDisableCopy(e.target.checked),
        },
    ];
    

    return (
        <div>
            <div>Settings</div>
            <InputsController inputs={inputsArr} />
            <button onClick={handleOnSave}>Save Settings</button>
        </div>
    );
};

export default SettingsController;
