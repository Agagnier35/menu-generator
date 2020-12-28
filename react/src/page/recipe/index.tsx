import React from 'react';
import RecipesContainer from '../../containers/recipe';
import { PageContent } from '../style';

const RecipesPage = () => {
    return (
        <PageContent>
            <h1>Recipes</h1>
            <RecipesContainer />
        </PageContent>
    );
};

export default RecipesPage;
