import React from 'react';
import { IconType } from 'types/icons-types';
import { ActionItemVariantsType } from '../../types/common.types';
interface AlertProps {
    icon?: IconType;
    message?: string;
    variant?: ActionItemVariantsType;
    action?: () => void;
    actionIcon?: IconType;
    actionLabel?: string;
    actionVariant?: ActionItemVariantsType;
}
declare const Alert: React.FC<AlertProps>;
export default Alert;
