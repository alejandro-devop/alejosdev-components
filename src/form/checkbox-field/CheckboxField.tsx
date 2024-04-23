import React, { useCallback, useMemo } from 'react'
import styles from './check-box-field.module.scss'
import cs from 'classnames'
import { InputBaseProps } from '../../types/input.types'

interface CheckBoxFieldProps extends InputBaseProps<HTMLInputElement> {
    className?: string
    checked?: boolean
}

const CheckBoxField: React.FC<CheckBoxFieldProps> = ({
    className,
    onChange,
    name,
    value,
    checked
}) => {
    const isChecked = useMemo(() => Boolean(value) || checked, [checked, value])
    const handleChange = useCallback(
        (e: React.MouseEvent) => {
            e.stopPropagation()
            onChange?.({
                target: {
                    name: name || '',
                    checked: !Boolean(isChecked)
                }
            } as any)
        },
        [onChange, name, isChecked]
    )
    return (
        <div className={cs(styles.root, className)}>
            {isChecked && <span className={styles.check}></span>}
            <input type="checkbox" />
            <label htmlFor="" onClick={handleChange} className={styles.control}></label>
        </div>
    )
}

export default CheckBoxField
