import React from 'react';
import { IconType } from '../../misc/icon/icons-types';
interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: IconType;
    children?: React.ReactNode;
    variant?: ActionItemVariantsType;
    label?: string;
    classes?: {
        label?: string;
        root?: string;
    };
}
declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default IconButton;
