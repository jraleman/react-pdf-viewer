import styled from 'styled-components';
import IInputsController from "../@interfaces/IInputsController";

const InputsController = ({ inputs }: { inputs: IInputsController[] }) => (
    <> 
        {inputs.map(({ key, type, label, value, onChange, disabled }) => (
            <InputContainer key={key}>
                <label htmlFor={key}>{label}</label>
                <input 
                    name={key}
                    type={type}
                    value={value}
                    onChange={onChange}
                    disabled={disabled} 
                />
            </InputContainer>
        ))}
    </>
);

const InputContainer = styled.div`
    label {
        display: inline-block;
    }
    input {
        width: 100%;
    }
`;

export default InputsController;
