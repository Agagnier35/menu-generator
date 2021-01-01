import { immerable } from 'immer';

export default class Step {
    [immerable] = true;

    public stepId: number = Math.random();
    public description: string = '';
    public section?: string;

    constructor(public stepNumber: number) {}
}
