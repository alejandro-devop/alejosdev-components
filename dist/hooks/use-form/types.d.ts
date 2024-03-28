import { ChangeEvent } from 'react';
import { InputBaseProps } from '../../form/input-base/input.types';
export interface SelectSourceFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    source: string;
    mapping?: {
        label: string;
        value: any;
    };
}
/**
 * Returned values from the hook
 */
export type UseFormHookReturnType<FT extends object = {}> = [
    Partial<Record<keyof FT, InputBaseProps<any> | any>>,
    FT,
    {
        onChange: (e: ChangeEvent<HTMLInputElement>) => void;
        isValidForm?: boolean;
        changeForm: (f?: any) => void;
        fieldsFilled: (fields?: string[], form?: {
            [k: string]: any;
        }) => boolean;
        clearForm: () => void;
    }
];
/**
 * Type to define rules for the fields
 */
export type RuleType = {
    email?: boolean | {};
    required?: boolean | {};
    min?: number | {};
    max?: number | {};
    match?: string | {};
} | string;
export type FormRenderersType = 'check' | 'date' | 'email' | 'boolean' | 'color' | 'file' | 'activity-type' | 'icon' | 'number' | 'options' | 'password' | 'select' | 'text-area' | 'text' | 'source';
/**
 * Type to define the configuration of the fields
 */
export type FieldConfigType = {
    label?: string;
    placeholder?: string;
    rules?: RuleType;
    processor?: any;
    default?: string | number | boolean;
    renderer?: FormRenderersType;
    inputProps?: InputBaseProps<any>;
    sourceProps?: SelectSourceFieldProps;
};
/**
 * Type to define the configuration of the hook
 */
export type UseFormHookConfigType<FT> = {
    defaultValues?: FT;
    rules?: Partial<Record<keyof FT, RuleType>>;
    fields?: Partial<Record<keyof FT, FieldConfigType>>;
    required?: Array<keyof FT>;
};
