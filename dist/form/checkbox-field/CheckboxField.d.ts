import React from 'react';
import { InputBaseProps } from '../../types/input.types';
interface CheckBoxFieldProps extends InputBaseProps<HTMLInputElement> {
    className?: string;
    checked?: boolean;
    inline?: boolean;
}
declare const CheckBoxField: React.FC<CheckBoxFieldProps>;
export default CheckBoxField;
