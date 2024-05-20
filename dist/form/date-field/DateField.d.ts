import React from 'react';
import { InputBaseProps } from '../../types/input.types';
interface DateFieldProps extends InputBaseProps<HTMLInputElement> {
    format?: string;
}
declare const DateField: React.FC<DateFieldProps>;
export default DateField;
