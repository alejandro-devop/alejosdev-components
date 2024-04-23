import React from 'react';
interface TextAreaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string | null;
    max?: number;
    hideMax?: number | boolean;
    trimSpaces?: boolean;
    maxEndingSpaces?: number;
}
declare const TextAreaField: React.FC<TextAreaFieldProps>;
export default TextAreaField;
