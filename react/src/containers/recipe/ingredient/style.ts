import styled from 'styled-components';

export const EditIngredientWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: baseline;

    & > div {
        flex-grow: 1;
    }

    div:last-child {
        flex-grow: 25;
    }
`;
