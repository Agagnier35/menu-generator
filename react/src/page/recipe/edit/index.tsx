import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Card from '../../../conponents/card';
import RecipeSummary from '../../../conponents/recipe';
import IngredientsList from '../../../containers/recipe/ingredient/ingredientList';
import StepsList from '../../../containers/recipe/step/stepList';
import axiosApiGateway from '../../../lib/api-gateway/axiosApiGateway';
import Recipe from '../../../lib/domain/recipe';

interface EditRecipePage {
    recipeId: string;
}

const EditRecipePage = ({ match, history }: RouteComponentProps<EditRecipePage>) => {
    const { recipeId } = match.params;
    const [recipe, setRecipe] = useState(new Recipe());

    useEffect(() => {
        fetchRecipe();
    }, []);

    const fetchRecipe = async () => {
        axiosApiGateway
            .get(`/recipes/${recipeId}`, { outType: Recipe })
            .then(setRecipe)
            .catch(() => history.push('/404'));
    };
    return (
        <>
            <Card actions={<button>Edit</button>}>
                <Card>
                    <RecipeSummary recipe={recipe} />
                </Card>
                <Card title="Ingredients">
                    <IngredientsList ingredients={recipe.ingredients} />
                </Card>
                <Card title="Steps">
                    <StepsList steps={recipe.steps} />
                </Card>
            </Card>
        </>
    );
};

export default EditRecipePage;
