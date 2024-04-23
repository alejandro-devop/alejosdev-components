import React from 'react';
interface FieldsetProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
}
/**
 * Facade for the fieldset element. It's a simple fieldset element.
 * any common functinoality should be added here.
 * @returns React.FC
 */
declare const Fieldset: React.FC<FieldsetProps>;
export default Fieldset;
