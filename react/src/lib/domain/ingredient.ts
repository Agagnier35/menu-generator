import { immerable } from 'immer';

export class Ingredient {
    [immerable] = true;

    public ingredientId: number = Math.random();
    public name: string = '';
    public quantity: number = 0;
    public unit: string = '';
    public section?: string;
}
