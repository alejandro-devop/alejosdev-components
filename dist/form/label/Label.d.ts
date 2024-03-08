import React from 'react';
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
}
/**
 * Facade for label element. It's a simple label element.
 * any common functinoality should be added here.
 * @returns React.FC
 */
declare const Label: React.FC<LabelProps>;
export default Label;
