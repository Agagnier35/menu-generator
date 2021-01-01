import React, { ReactNode } from 'react';
import { Label } from './label';
import { StyledFormField } from './style';

export interface FormFieldProps {
    children: ReactNode;
    fieldId: string;
    label?: string;
    valid?: boolean;
    validationErrorMessage?: string;
}

const FormField = ({
    children,
    fieldId,
    label,
    valid = true,
    validationErrorMessage = '',
    ...props
}: FormFieldProps) => {
    return (
        <StyledFormField {...props} valid={valid}>
            {label && <Label forId={fieldId}>{label}</Label>}
            {!valid && <span style={{ color: 'red', fontSize: 'small' }}>{validationErrorMessage}</span>}
            {children}
        </StyledFormField>
    );
};

export default FormField;
