import React from 'react'
import ButtonBase from '../button-base'
import classNames from 'classnames'
import styles from './button.module.scss'
import Icon from '../../icon'
import { ButtonProps } from '../button-commons.types'

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
    ...props
}) => {
    return (
        <ButtonBase
            className={classNames(
                styles.button,
                {
                    [styles.default]: variant === 'default',
                    [styles.primary]: variant === 'primary',
                    [styles.secondary]: variant === 'secondary',
                    [styles.danger]: variant === 'danger',
                    [styles.info]: variant === 'info',
                    [styles.warning]: variant === 'warning',
                    [styles.success]: variant === 'success',
                    [styles.light]: variant === 'light',
                    [styles.dark]: variant === 'dark',
                    [styles.rounded]: rounded,
                    [styles.block]: block
                },
                className
            )}
            tabIndex={0}
            {...props}
        >
            {icon && (
                <i className={classNames(styles.iconWrapper, {})}>
                    <Icon icon={icon} className={classNames(styles.icon)} />
                </i>
            )}
            <span className={styles.buttonContent}>{loading ? 'loading ... ' : children}</span>
        </ButtonBase>
    )
}

Button.defaultProps = {
    tabIndex: 0
}

export default Button
