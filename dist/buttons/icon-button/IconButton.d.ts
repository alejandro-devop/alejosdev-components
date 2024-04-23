import React from 'react';
import { IconType } from '../../types/icons-types';
import { ActionItemVariantsType } from '../../types/common.types';
interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: IconType;
    children?: React.ReactNode;
    variant?: ActionItemVariantsType;
    label?: string;
    size?: 'sm' | 'md' | 'lg';
    classes?: {
        label?: string;
        root?: string;
    };
}
declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default IconButton;
