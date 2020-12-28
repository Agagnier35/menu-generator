import React, { useEffect, useState } from 'react';
import Card from '../../conponents/card';
import RecipeSummary from '../../conponents/recipe';
import axiosApiGateway from '../../lib/api-gateway/axiosApiGateway';
import Recipe from '../../lib/domain/recipe';

const RecipesContainer = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        axiosApiGateway.getArray('/recipes', { outType: Recipe }).then(setRecipes);
    }, []);

    return (
        <>
            {recipes.map((r) => (
                <Card key={r.id} onClick={() => {}}>
                    <RecipeSummary recipe={r} />
                </Card>
            ))}
        </>
    );
};

export default RecipesContainer;
