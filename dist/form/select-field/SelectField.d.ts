import React from 'react';
interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: string | null;
    options?: {
        label: string;
        value: string;
    }[];
    value?: any;
    loading?: boolean;
    placeholder?: string;
}
declare const SelectField: React.FC<SelectFieldProps>;
export default SelectField;
