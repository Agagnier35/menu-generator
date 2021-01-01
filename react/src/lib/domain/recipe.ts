import { immerable } from 'immer';
import { Ingredient } from './ingredient';
import Step from './step';

export default class Recipe {
    [immerable] = true;

    public id: number = 0;
    public name: string = '';
    public origin?: string;
    public thumbnail?: string;
    public ingredients: Ingredient[] = [];
    public steps: Step[] = [];
}
