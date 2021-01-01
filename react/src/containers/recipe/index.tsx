/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../../conponents/card';
import RecipeSummary from '../../conponents/recipe';
import axiosApiGateway from '../../lib/api-gateway/axiosApiGateway';
import Recipe from '../../lib/domain/recipe';

const RecipesContainer = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const history = useHistory();

    useEffect(() => {
        axiosApiGateway.getArray('/recipes', { outType: Recipe }).then(setRecipes);
    }, []);

    return (
        <>
            {recipes.map((r) => (
                <Card key={r.id} onClick={() => history.push(`/recipes/${r.id}`)}>
                    <RecipeSummary recipe={r} />
                </Card>
            ))}
        </>
    );
};

export default RecipesContainer;
