import styled from 'styled-components';

interface FieldContainerProps {
    valid: boolean;
}

export const StyledFormField = styled.div<FieldContainerProps>`
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    & + &,
    & + button {
        margin-top: 8px;
        margin-left: 8px;
    }

    input,
    select,
    textarea {
        display: block;
        border-color: black;
    }

    &:focus {
        border-color: blue;
    }
`;

export const StyledFormFieldInline = styled(StyledFormField)<FieldContainerProps>`
    display: flex;
    flex-direction: row;
    align-items: center;

    & + &,
    & + button {
        margin-top: 0;
        margin-left: 8px;
    }

    & > label {
        margin-right: 8px;
        white-space: nowrap;
        font-size: 14px;
        font-weight: normal;
    }

    input,
    select,
    textarea {
        display: inline-block;
        min-height: unset;
        max-height: unset;
    }
`;
