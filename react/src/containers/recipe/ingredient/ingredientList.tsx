import React from 'react';
import { Ingredient } from '../../../lib/domain/ingredient';
import IngredientComp from './ingredient';

interface IngredientsListProps {
    ingredients: Ingredient[];
    onChange(ing: Ingredient, idx: number): void;
    edit: boolean;
}

const IngredientsList = ({ ingredients, onChange, edit }: IngredientsListProps) => {
    return (
        <>
            {ingredients.map((ing, i) => (
                <IngredientComp
                    key={ing.ingredientId}
                    ingredient={ing}
                    onChange={(newIng) => onChange(newIng, i)}
                    edit={edit}
                />
            ))}
        </>
    );
};

export default IngredientsList;
