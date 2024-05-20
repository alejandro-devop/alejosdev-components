import React from 'react';
interface StepperActionsProps {
    children?: React.ReactNode;
    appendRender?: (values: {
        isInLastStep: boolean;
    }) => React.ReactNode;
}
declare const StepperActions: React.FC<StepperActionsProps>;
export default StepperActions;
