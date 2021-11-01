import styled from 'styled-components';
import IInputsController from "../@interfaces/IInputsController";

const InputsController = ({ inputs }: { inputs: IInputsController[] }) => (
    <> 
        {inputs.map(({
            key,
            type,
            label,
            value,
            onChange,
            disabled,
            min,
            max,
        }) => (
            <InputContainer key={key}>
                <label htmlFor={key}>{label}</label>
                <input 
                    name={key}
                    type={type}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    min={min}
                    max={max}
                />
            </InputContainer>
        ))}
    </>
);

const InputContainer = styled.div`
    margin: 2em;
    label {
        display: inline-block;
        text-align: left;
        font-weight: 600;
        width: 100%;
    }
    input {
        width: 50%;
    }
`;

export default InputsController;
