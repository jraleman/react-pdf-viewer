import { ChangeEventHandler } from 'react';

interface IInputsController {
    key: string;
    type: 'file' | 'number' | 'checkbox' | 'input' | 'radio' | 'range';
    label: string;
    value: string | number | undefined;
    onChange: ChangeEventHandler<HTMLInputElement>;
    disabled?: boolean;
    min?: number;
    max?: number;
}

export default IInputsController;
