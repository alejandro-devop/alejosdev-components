import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import styles from './icon.module.scss'

interface IconProps {
    className?: string
    icon?: IconNameType
}

/**
 * Renders a FontAwesomeIcon with the given icon name.
 * check the list of available icons at https://fontawesome.com/v5.15/icons?d=gallery&p=2&m=free
 * and check @utils/icon-registry/icons-available.ts file to see the list of available icons or
 * check @utils/icon-registry/registerIcons.ts to see how to register new icons.
 * @param param0
 * @returns
 */
const Icon: React.FC<IconProps> = ({ className, icon = 'tag' }) => {
    return <FontAwesomeIcon icon={icon || ''} className={classNames(styles.root, className)} />
}

Icon.defaultProps = {
    className: '',
    icon: 'tag'
}

export default Icon
