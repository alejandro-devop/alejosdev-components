import React, { useMemo, forwardRef, useCallback } from 'react'
import Icon from 'misc/icon'
import styles from './icon-button.module.scss'
import cs from 'classnames'
import { applyButtonVariantStyles } from '../button-utils'

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
    classes?: {
        label?: string
        root?: string
    }
    icon?: IconNameType
    label?: string
    variant?: ActionItemVariantsType
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
    ({ children, classes, icon, label, variant, onClick, ...props }, ref) => {
        const handleClick = useCallback(
            (e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation()
                onClick?.(e)
            },
            [onClick]
        )

        const buttonRenderer = useMemo(() => {
            return (
                <button
                    ref={ref}
                    type="button"
                    className={cs(styles.root, classes?.root, props?.className, {
                        ...applyButtonVariantStyles({ variant, styles }),
                        [styles.disabled]: props?.disabled
                    })}
                    onClick={handleClick}
                    tabIndex={0}
                    {...props}
                >
                    {children ? children : <Icon className={styles.icon} icon={icon} />}
                </button>
            )
        }, [classes, props?.className, children])

        if (label) {
            return (
                <div className={styles.withLabelWrapper}>
                    {buttonRenderer}
                    <span className={cs(styles.label, classes?.label)}>{label}</span>
                </div>
            )
        }

        return buttonRenderer
    }
)

export default IconButton
