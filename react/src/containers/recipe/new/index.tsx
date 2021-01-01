import React, { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import Card from '../../../conponents/card';
import FormField from '../../../conponents/forms/formfield';
import TextInput from '../../../conponents/forms/inputs/textInput';
import axiosApiGateway from '../../../lib/api-gateway/axiosApiGateway';
import { Ingredient } from '../../../lib/domain/ingredient';
import Recipe from '../../../lib/domain/recipe';
import Step from '../../../lib/domain/step';
import IngredientsList from '../ingredient/ingredientList';
import StepsList from '../step/stepList';
import { NewRecipeFormContainer, RecipeMainInfos } from './style';

const NewRecipeForm = () => {
    const [recipeName, setRecipeName] = useState('');
    const [source, setSource] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [steps, setSteps] = useState<Step[]>([]);

    const submitRecipe = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData();
        if (file) formData.append('thumbnail', file as Blob);
        formData.append('recipeName', recipeName);
        if (origin) formData.append('recipeOrigin', source);

        try {
            const recipe = await axiosApiGateway.post('/recipes', formData, { outType: Recipe }, 'multipart/form-data');
            axiosApiGateway.post(`/recipes/${recipe.id}/steps`, steps, { inType: Recipe });
            axiosApiGateway.post(`/recipes/${recipe.id}/ingredients`, ingredients, { inType: Ingredient });
            toast.success('Recipe created!');
        } catch {
            toast.error('Unexpected error during recipe creation :(');
        }
    };

    const updateIngredient = (ing: Ingredient, idx: number) => {
        const cpyIng = [...ingredients];
        cpyIng.splice(idx, 1, ing);
        setIngredients(cpyIng);
    };

    const updateStep = (stp: Step, idx: number) => {
        const cpyStp = [...steps];
        cpyStp.splice(idx, 1, stp);
        setSteps(cpyStp);
    };

    return (
        <NewRecipeFormContainer onSubmit={submitRecipe}>
            <h1>Create new recipe ...</h1>
            <Card>
                <Card>
                    <RecipeMainInfos>
                        <TextInput
                            label="Recipe Name: *"
                            required
                            value={recipeName}
                            onChange={(e) => setRecipeName(e.target.value)}
                        />
                        <TextInput label="Recipe source: " value={source} onChange={(e) => setSource(e.target.value)} />
                        <FormField fieldId="NewRecipeIMGForm" label="Upload thumbnail: ">
                            <input
                                type="file"
                                id="NewRecipeIMGForm"
                                accept="image/png, image/jpeg"
                                onChange={(e) => setFile(e.target.files?.item(0) ?? null)}
                            />
                        </FormField>
                    </RecipeMainInfos>
                </Card>
                <Card
                    title="Ingredients"
                    actions={
                        <button type="button" onClick={() => setIngredients([...ingredients, new Ingredient()])}>
                            +Add ingredient
                        </button>
                    }
                >
                    <IngredientsList ingredients={ingredients} onChange={updateIngredient} edit />
                </Card>
                <Card
                    title="Steps"
                    actions={
                        <button type="button" onClick={() => setSteps([...steps, new Step(steps.length)])}>
                            +Add Step
                        </button>
                    }
                >
                    <StepsList steps={steps} onChange={updateStep} edit />
                </Card>
                <button type="submit">Create</button>
            </Card>
        </NewRecipeFormContainer>
    );
};

export default NewRecipeForm;
