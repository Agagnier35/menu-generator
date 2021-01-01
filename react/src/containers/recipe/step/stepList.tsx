import React from 'react';
import Step from '../../../lib/domain/step';
import StepComp from './step';

interface StepsListProps {
    steps: Step[];
    onChange?(stp: Step, idx: number): void;
    edit?: boolean;
}

const StepsList = ({ steps, onChange, edit }: StepsListProps) => {
    return (
        <>
            {steps.length > 0 ? (
                steps.map((stp, i) => (
                    <StepComp key={stp.stepId} step={stp} onChange={(newStp) => onChange?.(newStp, i)} edit={edit} />
                ))
            ) : (
                <div>No steps</div>
            )}
        </>
    );
};

export default StepsList;
