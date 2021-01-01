import React from 'react';
import RecipesContainer from '../../containers/recipe';
import { PageContent } from '../style';
import { NewRecipeLink, RecipesHeader } from './style';

const RecipesPage = () => {
    return (
        <PageContent>
            <RecipesHeader>
                <h1>Recipes</h1>
                <NewRecipeLink to="/recipes/new">+New recipe</NewRecipeLink>
            </RecipesHeader>
            <RecipesContainer />
        </PageContent>
    );
};

export default RecipesPage;
