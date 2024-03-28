import React from 'react';
import { InputBaseProps } from '../input-base/input.types';
interface TextFieldProps extends InputBaseProps<HTMLInputElement> {
}
/**
 * Component documentation...
 * @returns React.FC
 */
declare const TextField: React.ForwardRefExoticComponent<TextFieldProps & React.RefAttributes<HTMLInputElement>>;
export default TextField;
