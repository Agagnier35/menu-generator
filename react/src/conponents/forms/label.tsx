import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
    font-size: 14px;
    font-weight: 400;
    margin: 0;

    input + & {
        margin-left: 0.5rem;
    }
`;

interface LabelProps {
    children: ReactNode;
    forId?: string;
}

const Label = ({ children, forId }: LabelProps) => <StyledLabel htmlFor={forId}>{children}</StyledLabel>;

export { Label };
