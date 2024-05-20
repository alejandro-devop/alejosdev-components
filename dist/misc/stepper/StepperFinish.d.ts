import React from 'react';
import { ButtonProps } from '../../buttons/button-commons.types';
interface StepperNextProps extends ButtonProps {
    label?: string;
}
declare const StepperFinish: React.FC<StepperNextProps>;
export default StepperFinish;
