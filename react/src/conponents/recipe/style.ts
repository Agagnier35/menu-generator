import styled from 'styled-components';

export const RecipeSummaryContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;

    & > img {
        max-width: 100px;
        max-height: 75px;
        padding-right: 5px;
    }
`;

export const Origin = styled.p`
    margin: 0;
    margin-left: auto;
    font-style: italic;
`;
