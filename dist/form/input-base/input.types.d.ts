/// <reference types="react" />
import { ActionItemVariantsType } from 'types/common.types';
import { IconType } from '../../types/icons-types';
export interface InputBaseProps<ElementType> extends React.InputHTMLAttributes<ElementType> {
    classes?: {
        wrapper?: string;
    };
    hideRequired?: boolean;
    /** Props to be passed to the fieldset or wrapper used by the input */
    fieldSetProps?: React.HTMLAttributes<HTMLFieldSetElement>;
    floatingLabel?: boolean;
    /** Text to be used  */
    label?: string;
    /** Props to be passed to the label component */
    labelProps?: React.HTMLAttributes<HTMLLabelElement>;
    /** A text to be printed as an error */
    error?: string | null;
    /** Maximum characters that the input will allow to allocate */
    max?: number;
    /** Minimum of characters that the input will allocate (A message will be displayed if under the limit) */
    min?: number;
    /** Control if hide the max label */
    hideMax?: boolean;
    /** Value passed to the input */
    value?: string | readonly string[] | number | undefined;
    /** Icon to be used at the begining of the input */
    leadingIcon?: IconType;
    /** Icon to be used at the end of the input */
    trailingIcon?: IconType;
    /** Icon to be used in the icon button */
    actionIcon?: IconType;
    /** Function to be executed in the by the action button */
    action?: () => void;
    /** Type of button used by the action button */
    actionVariant?: ActionItemVariantsType;
    /** If the action button should be disabled */
    disableAction?: boolean;
    /** If the value should be validated as numeric */
    isNumeric?: boolean;
    /** Render prop for a trailing component  */
    trailingComponent?: React.ReactNode;
    /** Render prop for a leading component */
    leadingComponent?: React.ReactNode;
    /** If true only the input will be returned, no label and no wrapper (fieldset) */
    onlyInput?: boolean;
    /** You can pass a reference that will be assigned to the action button */
    actionRef?: React.MutableRefObject<any>;
    /** If the input should trim ending spaces */
    trimSpaces?: boolean;
    /** Number of allowed ending spaces */
    maxEndingSpaces?: number;
}
