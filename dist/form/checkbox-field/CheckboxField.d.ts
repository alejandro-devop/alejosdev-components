import React from 'react';
import { InputBaseProps } from '../input-base/input.types';
interface CheckboxFieldProps extends InputBaseProps<HTMLInputElement> {
    rounded?: boolean;
    classes?: {
        wrapper?: string;
    };
    variant?: 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark';
}
declare const CheckboxField: React.FC<CheckboxFieldProps>;
export default CheckboxField;
