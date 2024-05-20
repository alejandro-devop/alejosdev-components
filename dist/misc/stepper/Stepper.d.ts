import React from 'react';
interface StepperProps {
    children?: React.ReactNode;
    onCompleted?: () => void;
    stepsValidation?: boolean[];
    initialStep?: number;
}
declare const Stepper: React.FC<StepperProps>;
export default Stepper;
