import produce from 'immer';
import React from 'react';
import TextInput from '../../../conponents/forms/inputs/textInput';
import { Ingredient } from '../../../lib/domain/ingredient';
import { EditIngredientWrapper } from './style';

interface IngredientCompProps {
    ingredient: Ingredient;
    onChange?(i: Ingredient): void;
    edit?: boolean;
}

const IngredientComp = ({ ingredient, onChange, edit }: IngredientCompProps) => {
    return edit ? (
        <EditIngredientWrapper>
            <TextInput
                label="Quantity: "
                value={ingredient.quantity}
                type="number"
                onChange={(e) =>
                    onChange?.(
                        produce(ingredient, (draft) => {
                            draft.quantity = e.target.valueAsNumber;
                        }),
                    )
                }
            />
            <TextInput
                label="Unit: "
                value={ingredient.unit}
                onChange={(e) =>
                    onChange?.(
                        produce(ingredient, (draft) => {
                            draft.unit = e.target.value;
                        }),
                    )
                }
            />
            <TextInput
                label="Name: "
                value={ingredient.name}
                onChange={(e) =>
                    onChange?.(
                        produce(ingredient, (draft) => {
                            draft.name = e.target.value;
                        }),
                    )
                }
            />
        </EditIngredientWrapper>
    ) : (
        <div>{`${ingredient.quantity} ${ingredient.unit} ${ingredient.name}`}</div>
    );
};

export default IngredientComp;
