import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const RecipesHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const NewRecipeLink = styled(Link)`
    text-decoration: none;
    background-color: navy;
    color: white;
    border-radius: 5px;
    padding: 5px 10px;
`;
