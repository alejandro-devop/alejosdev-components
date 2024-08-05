import React from 'react'
import classNames from 'classnames'
import styles from './pill.module.scss'
import Icon from 'misc/icon/Icon'
import { PillConfigType } from './types'

interface PillProps extends PillConfigType {
    path?: string
    url?: string
    className?: string
}

/**
 * Generates a pill component,
 * which is a small rounded rectangle with a text inside or icon
 * @returns React.FC
 */
const Pill: React.FC<PillProps> = ({ label, variant = 'default', icon, value, className }) => {
    return (
        <div
            className={classNames(styles.root, className, {
                [styles.default]: variant === 'default',
                [styles.primary]: variant === 'primary',
                [styles.secondary]: variant === 'secondary',
                [styles.success]: variant === 'success',
                [styles.warning]: variant === 'warning',
                [styles.danger]: variant === 'danger',
                [styles.info]: variant === 'info',
                [styles.light]: variant === 'light',
                [styles.dark]: variant === 'dark'
            })}
        >
            {Boolean(icon) && <Icon className={styles.icon} icon={icon} />}
            <span className={styles.label}>{label}</span>
            {value && <span className={styles.value}>{value}</span>}
        </div>
    )
}

export default Pill
