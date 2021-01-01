import React, { ReactNode } from 'react';
import { Label } from './label';
import { StyledFormFieldInline } from './style';

export interface FormFieldProps {
    children: ReactNode;
    fieldId: string;
    label?: string;
    valid: boolean;
    inverted?: boolean;
    validationErrorMessage?: string;
}

const FormFieldInline = ({
    children,
    fieldId,
    label,
    valid,
    validationErrorMessage = '',
    inverted = false,
    ...props
}: FormFieldProps) => {
    return !inverted ? (
        <StyledFormFieldInline {...props} valid={valid}>
            {label && <Label forId={fieldId}>{label}</Label>}
            {!valid && <span style={{ color: 'red', fontSize: 'small' }}>{validationErrorMessage}</span>}
            {children}
        </StyledFormFieldInline>
    ) : (
        <StyledFormFieldInline {...props} valid={valid}>
            {children}
            {!valid && <span style={{ color: 'red', fontSize: 'small' }}>{validationErrorMessage}</span>}
            {label && <Label forId={fieldId}>{label}</Label>}
        </StyledFormFieldInline>
    );
};

export default FormFieldInline;
