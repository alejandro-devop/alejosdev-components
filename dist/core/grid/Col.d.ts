import React from 'react';
declare const colSizes: readonly ["xs", "sm", "md", "lg", "xl"];
type ColSizeType = (typeof colSizes)[number];
interface ColProps {
    children?: React.ReactNode;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    all?: number;
    applyFor?: Partial<Record<ColSizeType, number | undefined>>;
    applyFrom?: [ColSizeType, number | undefined];
    ascendingApply?: boolean;
}
declare const Col: React.FC<ColProps>;
export default Col;
