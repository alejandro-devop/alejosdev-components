import React from 'react';
import { InputBaseProps } from '../../types/input.types';
import { ActionItemVariantsType } from '../../types/common.types';
interface OptionsButtonProps extends InputBaseProps<HTMLInputElement> {
    options: {
        label: string;
        value: any;
    }[];
    horizontal?: boolean;
    variant?: ActionItemVariantsType;
}
declare const OptionsButton: React.FC<OptionsButtonProps>;
export default OptionsButton;
