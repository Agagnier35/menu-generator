import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: Open Sans, sans-serif;
        font-weight: normal;
        font-size: 12px;
        margin: 0;
        padding: 0;
        overflow: hidden;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
    }

    #root{
        height: 100vh;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
`;

export const Nav = styled.nav`
    background-color: navy;
    height: 4vh;

    ul {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin: 0;
        padding: 0;
        height: 100%;
        padding-left: 10px;

        li {
            padding: 5px;
            list-style: none;

            &:hover {
                border: 1px solid white;
                border-radius: 5px;
            }

            a {
                text-decoration: none;
                color: white;
                font-size: 16px;
            }
        }
    }
`;

export const PageContent = styled.div`
    padding: 0 8px;
`;
