import React from 'react';
import { ActionItemVariantsType } from '../../types/common.types';
import { IconType } from '../../types/icons-types';
interface DetailViewProps {
    title?: string;
    details?: ({
        icon?: IconType;
        title: string;
        description?: string;
    } | null)[];
    pills?: {
        icon?: IconNameType;
        title: string;
        variant?: ActionItemVariantsType;
    }[];
    children?: React.ReactNode;
}
declare const DetailView: React.FC<DetailViewProps>;
export default DetailView;
