import React from 'react';
interface TextAreaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string | null;
    max?: number;
    hideMax?: number | boolean;
    trimSpaces?: boolean;
    maxEndingSpaces?: number;
    classes?: {
        root?: string;
    };
}
declare const TextAreaField: React.ForwardRefExoticComponent<TextAreaFieldProps & React.RefAttributes<HTMLTextAreaElement>>;
export default TextAreaField;
