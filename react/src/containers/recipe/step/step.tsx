import produce from 'immer';
import React from 'react';
import FormFieldInline from '../../../conponents/forms/formfieldInline';
import Step from '../../../lib/domain/step';
import { StepContainer, StepDescriptionInput } from './style';

interface StepCompProps {
    step: Step;
    onChange(i: Step): void;
    edit: boolean;
}

const StepComp = ({ step, onChange, edit }: StepCompProps) => {
    return (
        <StepContainer>
            {step.stepNumber}
            {edit ? (
                <FormFieldInline valid fieldId={`${step.stepId}-desc`}>
                    <StepDescriptionInput
                        id={`${step.stepId}-desc`}
                        value={step.description}
                        onChange={(e) =>
                            onChange(
                                produce(step, (draft) => {
                                    draft.description = e.target.value;
                                }),
                            )
                        }
                    />
                </FormFieldInline>
            ) : (
                step.description
            )}
        </StepContainer>
    );
};

export default StepComp;
