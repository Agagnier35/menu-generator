import React, { FocusEvent, InputHTMLAttributes, ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import FormField from '../formfield';
import FormFieldInline from '../formfieldInline';
import { inputsStyle } from './inputs';

const Input = styled.input`
    ${inputsStyle}
`;

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    isValid?: boolean;
    validationErrorMessage?: string;
    inline?: boolean;

    onBlur?(event: FocusEvent<HTMLInputElement>): void;
}

const TextInput = React.forwardRef(
    (
        { onBlur, isValid = true, inline = false, ...props }: TextInputProps,
        ref: React.Ref<HTMLInputElement>,
    ): ReactElement => {
        const [{ validity }, setValidity] = useState({ validity: isValid });
        const id = uuid();

        function handleBlur(event: FocusEvent<HTMLInputElement>): void {
            setValidity({ validity: event.currentTarget.checkValidity() && isValid });

            if (onBlur) {
                onBlur(event);
            }
        }

        useEffect(() => {
            setValidity({ validity: isValid });
        }, [isValid]);

        const { label, type = 'text', validationErrorMessage, ...other } = props;

        return inline ? (
            <FormFieldInline
                fieldId={id}
                label={label}
                valid={validity}
                validationErrorMessage={validationErrorMessage || 'This text input is invalid'}
            >
                <Input {...other} id={id} ref={ref} onBlur={handleBlur} type={type} />
            </FormFieldInline>
        ) : (
            <FormField
                fieldId={id}
                label={label}
                valid={validity}
                validationErrorMessage={validationErrorMessage || 'This text input is invalid'}
            >
                <Input {...other} id={id} ref={ref} onBlur={handleBlur} type={type} />
            </FormField>
        );
    },
);

export default TextInput;
