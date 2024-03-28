import styles from './icon-button.module.scss'
import classNames from 'classnames'
import React, { forwardRef } from 'react'
import { Icon } from '../../misc'
import { IconType } from '../../misc/icon/icons-types'

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: IconType
    children?: React.ReactNode
    variant?: ActionItemVariantsType
    label?: string
    classes?: {
        label?: string
        root?: string
    }
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
    ({ icon, children, label, variant, onClick, classes, ...props }, ref) => {
        const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation()
            onClick?.(e)
        }
        const buttonRenderer = (
            <button
                {...props}
                ref={ref}
                type="button"
                className={classNames(styles.root, classes?.root, props?.className, {
                    [styles.primary]: variant === 'primary',
                    [styles.secondary]: variant === 'secondary',
                    [styles.danger]: variant === 'danger',
                    [styles.warning]: variant === 'warning',
                    [styles.success]: variant === 'success',
                    [styles.info]: variant === 'info',
                    [styles.light]: variant === 'light',
                    [styles.dark]: variant === 'dark',
                    [styles.flat]: variant === 'flat',
                    [styles.disabled]: props?.disabled
                })}
                onClick={handleClick}
                tabIndex={0}
            >
                {children ? children : <Icon className={styles.icon} icon={icon} />}
            </button>
        )

        if (label) {
            return (
                <div className={styles.withLabelWrapper}>
                    {buttonRenderer}
                    <span className={classNames(styles.label, classes?.label)}>{label}</span>
                </div>
            )
        }
        return buttonRenderer
    }
)

IconButton.defaultProps = {}

export default IconButton
