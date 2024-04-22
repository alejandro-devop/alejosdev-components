import React from 'react'
import Label from '../label'
import styles from './checkbox.module.scss'
import classNames from 'classnames'
import { InputBaseProps } from '../input-base/input.types'
import { useInputId } from 'hooks'
import FormControl from 'form/form-control'

interface CheckboxFieldProps extends InputBaseProps<HTMLInputElement> {
    rounded?: boolean
    classes?: {
        wrapper?: string
    }
    variant?:
        | 'default'
        | 'primary'
        | 'secondary'
        | 'success'
        | 'danger'
        | 'warning'
        | 'info'
        | 'dark'
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({
    label,
    error,
    value,
    checked = false,
    onChange,
    onClick,
    rounded,
    classes,
    ...props
}) => {
    const htmlID = useInputId({ id: props.id, name: props.name })

    const handleChange = () => {
        const newValue = !checked
        onChange?.({ target: { name: [props?.name], value: newValue } } as any)
    }

    return (
        <FormControl className={classNames(styles.wrapper, classes?.wrapper)}>
            <input
                id={htmlID}
                {...props}
                name={props?.name || htmlID}
                className={styles.input}
                type="checkbox"
                checked={Boolean(checked)}
                onClick={handleChange}
                onChange={() => null}
            />
            <Label
                className={classNames(styles.inputLabel, {
                    [styles.checked]: checked,
                    [styles.primary]: props.variant === 'primary',
                    [styles.secondary]: props.variant === 'secondary',
                    [styles.success]: props.variant === 'success',
                    [styles.danger]: props.variant === 'danger',
                    [styles.warning]: props.variant === 'warning',
                    [styles.info]: props.variant === 'info',
                    [styles.dark]: props.variant === 'dark',
                    [styles.rounded]: rounded
                })}
                onClick={handleChange}
            >
                {label}
            </Label>
        </FormControl>
    )
}

CheckboxField.defaultProps = {}

export default CheckboxField
