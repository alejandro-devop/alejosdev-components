import * as React from 'react';
import { IconType } from './icons-types';
interface IconProps {
    className?: string;
    icon?: IconType;
}
/**
 * Renders a FontAwesomeIcon with the given icon name.
 * check the list of available icons at https://fontawesome.com/v5.15/icons?d=gallery&p=2&m=free
 * and check @utils/icon-registry/icons-available.ts file to see the list of available icons or
 * check @utils/icon-registry/registerIcons.ts to see how to register new icons.
 * @param param0
 * @returns
 */
declare const Icon: React.FC<IconProps>;
export default Icon;
