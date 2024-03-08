import React from 'react';
interface FormControlProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    error?: string | null;
}
declare const FormControl: React.FC<FormControlProps>;
export default FormControl;
