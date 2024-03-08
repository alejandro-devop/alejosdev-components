import React from 'react';
interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    classes?: {
        label?: string;
        root?: string;
    };
    icon?: IconNameType;
    label?: string;
    variant?: ActionItemVariantsType;
}
declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default IconButton;
