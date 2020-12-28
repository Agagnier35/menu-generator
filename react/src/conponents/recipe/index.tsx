import React from 'react';
import Recipe from '../../lib/domain/recipe';
import { Origin, RecipeSummaryContainer } from './style';

const RecipeSummary = ({ recipe }: { recipe: Recipe }) => {
    return (
        <RecipeSummaryContainer>
            <img src={recipe.thumbnail} alt="image thumbnail" />
            <h2>{recipe.name}</h2>
            <Origin>{recipe.origin}</Origin>
        </RecipeSummaryContainer>
    );
};

export default RecipeSummary;
