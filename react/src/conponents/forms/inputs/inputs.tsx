import { css } from 'styled-components';

export const inputsStyle = css`
    background: transparent;
    color: black;
    border: 1px solid black;
    border-radius: 0.25rem;
    box-shadow: none;
    box-sizing: border-box;
    font-size: 12px; // override user-agent

    font-family: inherit;
    margin: 0;
    outline: none;
    padding: 1px 8px;
    flex: 1;
    min-height: 32px;
    max-height: 32px; // cant set height, or it will grow/shrink

    &::placeholder {
        color: lightgrey;
    }

    &:disabled {
        background-color: rgb(242, 243, 249);
        border-color: rgb(217, 221, 226);

        &,
        &::placeholder {
            color: rgb(156, 167, 180);
        }
    }

    &:focus {
        border-color: blue;
    }
`;
