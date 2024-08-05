import React from 'react'
import styles from './alert.module.scss'
import cs from 'classnames'
import Icon from 'misc/icon'
import Button from 'buttons/button'
import { IconType } from 'types/icons-types'
import { ActionItemVariantsType } from '../../types/common.types'

interface AlertProps {
    icon?: IconType
    message?: string
    variant?: ActionItemVariantsType
    action?: () => void
    actionIcon?: IconType
    actionLabel?: string
    actionVariant?: ActionItemVariantsType
}

const Alert: React.FC<AlertProps> = ({
    action,
    actionIcon,
    actionLabel,
    actionVariant = 'primary',
    message,
    icon,
    variant = 'default'
}) => {
    return (
        <div
            className={cs(styles.root, {
                [styles.primary]: variant === 'primary',
                [styles.secondary]: variant === 'secondary',
                [styles.success]: variant === 'success',
                [styles.info]: variant === 'info',
                [styles.danger]: variant === 'danger',
                [styles.warning]: variant === 'warning'
            })}
        >
            {icon && (
                <div className={styles.iconWrapper}>
                    <Icon className={styles.icon} icon={icon} />
                </div>
            )}
            <div className={styles.content}>{message}</div>
            {Boolean(action) && (
                <Button
                    className={styles.actionButton}
                    variant={actionVariant}
                    icon={actionIcon}
                    onClick={action}
                >
                    {actionLabel}
                </Button>
            )}
        </div>
    )
}

export default Alert
