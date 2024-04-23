import React from 'react';
import { InputBaseProps } from '../../types/input.types';
import { ActionItemVariantsType } from '../../types/common.types';
interface NumberFieldProps extends InputBaseProps<HTMLInputElement> {
    max?: number;
    min?: number;
    step?: number;
    addVariant?: ActionItemVariantsType;
    subVariant?: ActionItemVariantsType;
}
declare const _default: React.NamedExoticComponent<NumberFieldProps>;
export default _default;
