import React from 'react';
import { PillConfigType } from './types';
interface PillProps extends PillConfigType {
    path?: string;
    url?: string;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}
/**
 * Generates a pill component,
 * which is a small rounded rectangle with a text inside or icon
 * @returns React.FC
 */
declare const Pill: React.FC<PillProps>;
export default Pill;
