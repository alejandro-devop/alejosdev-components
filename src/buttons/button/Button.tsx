import React, { useMemo } from 'react'
import ButtonBase from '../button-base'
import classNames from 'classnames'
import styles from './button.module.scss'
import Icon from 'misc/icon'
import { ButtonProps } from '../button-commons.types'
import { applyButtonVariantStyles } from '../button-utils'

/**
 * Button component which allows to include an icon inside it
 * it provides a set of variants and a rounded prop to make it rounded
 * @param param0
 * @returns
 */
const Button: React.FC<ButtonProps> = ({
    children,
    className,
    icon,
    rounded,
    block,
    variant,
    loading,
    size,
    flat,
    iconPosition,
    loadingLabel,
    ...props
}) => {
    const iconRenderer = useMemo(
        () => (
            <i
                className={classNames(styles.iconWrapper, {
                    [styles.iconEnd]: iconPosition === 'end',
                    [styles.iconLead]: iconPosition === 'lead'
                })}
            >
                <Icon icon={icon} className={classNames(styles.icon)} />
            </i>
        ),
        [icon, iconPosition]
    )
    return (
        <ButtonBase
            className={classNames(
                styles.button,
                {
                    ...applyButtonVariantStyles({
                        styles,
                        variant
                    }),
                    [styles.rounded]: rounded,
                    [styles.block]: block,
                    [styles.sm]: size === 'sm',
                    [styles.md]: size === 'md',
                    [styles.lg]: size === 'lg',
                    [styles.flat]: flat,
                    [styles.withIcon]: Boolean(icon),
                    [styles.iconLeading]: iconPosition === 'lead',
                    [styles.iconEnding]: iconPosition === 'end'
                },
                className
            )}
            tabIndex={0}
            {...props}
        >
            {icon && iconPosition === 'lead' && iconRenderer}
            <span className={styles.buttonContent}>
                {loading ? loadingLabel || 'loading...' : children}
            </span>
            {icon && iconPosition === 'end' && iconRenderer}
        </ButtonBase>
    )
}

Button.defaultProps = {
    iconPosition: 'lead',
    tabIndex: 0,
    rounded: true,
    size: 'md',
    variant: 'default'
}

export default Button
