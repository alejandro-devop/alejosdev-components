import { ActionItemVariantsType } from 'types/common.types';
type ApplyButtonVariantStylesConfigType = {
    styles: {
        [k: string]: string;
    };
    variant?: ActionItemVariantsType;
    variantMapper?: {
        primary?: string;
        secondary?: string;
        warning?: string;
        success?: string;
        info?: string;
        light?: string;
        dark?: string;
        flat?: string;
    };
};
export declare const applyButtonVariantStyles: (config: ApplyButtonVariantStylesConfigType) => {
    [x: string]: boolean;
};
export {};
