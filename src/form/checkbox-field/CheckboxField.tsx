import React, { useCallback, useMemo } from 'react'
import styles from './check-box-field.module.scss'
import cs from 'classnames'
import { InputBaseProps } from '../../types/input.types'
import FormControl from 'form/form-control'

interface CheckBoxFieldProps extends InputBaseProps<HTMLInputElement> {
    className?: string
    checked?: boolean
}

const CheckBoxField: React.FC<CheckBoxFieldProps> = ({
    className,
    onChange,
    name,
    value,
    checked,
    label,
    classes,
    disabled
}) => {
    const isChecked = useMemo(() => Boolean(value) || checked, [checked, value])
    const handleChange = useCallback(
        (e: React.MouseEvent) => {
            e.stopPropagation()
            if (!disabled) {
                onChange?.({
                    target: {
                        name: name || '',
                        checked: !Boolean(isChecked),
                        type: 'checkbox'
                    }
                } as any)
            }
        },
        [onChange, name, isChecked, disabled]
    )
    const inputRenderer = (
        <div
            className={cs(
                styles.root,
                {
                    [styles.disabled]: Boolean(disabled)
                },
                className
            )}
        >
            {isChecked && <span className={styles.check}></span>}
            <input type="checkbox" disabled={disabled} />
            <label htmlFor="" onClick={handleChange} className={styles.control}></label>
        </div>
    )
    if (!label) return inputRenderer

    return (
        <FormControl className={cs('flex items-center mb-2', classes?.wrapper)}>
            {inputRenderer}
            <span
                className="textWithMode block pl-2 ml-2 cursor-pointer z-1"
                tabIndex={0}
                onClick={handleChange}
            >
                {label}
            </span>
        </FormControl>
    )
}

export default CheckBoxField
