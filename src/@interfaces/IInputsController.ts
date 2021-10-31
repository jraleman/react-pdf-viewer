import { ChangeEventHandler } from 'react';

interface IInputsController {
    key: string;
    type: 'file' | 'number' | 'checkbox' | 'input' | 'radio';
    label: string;
    value: string | number | undefined;
    onChange: ChangeEventHandler<HTMLInputElement>;
    disabled?: boolean;
}

export default IInputsController;
