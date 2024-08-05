import React, { useState } from 'react'
import { InputBaseProps } from '../../types/input.types'
import { ActionItemVariantsType } from '../../types/common.types'
import Label from '../label/Label'
import styles from './options-field.module.scss'
import classNames from 'classnames'

interface OptionsButtonProps extends InputBaseProps<HTMLInputElement> {
    options: { label: string; value: any }[]
    horizontal?: boolean
    variant?: ActionItemVariantsType
}

const OptionsButton: React.FC<OptionsButtonProps> = ({
    name,
    label,
    options = [],
    value,
    onChange,
    horizontal,
    variant = 'primary'
}) => {
    const [selected, setSelected] = useState<any>(value)

    const changeValue = (newValue: any) => {
        setSelected(newValue)
        onChange?.({
            target: {
                name: name || '',
                value: newValue
            }
        } as any)
    }
    return (
        <div className={styles.buttonsRoot}>
            {label && <Label className={styles.mainLabel}>{label}</Label>}
            <div
                className={classNames({
                    [styles.horizontal]: horizontal
                })}
            >
                {options.map((item, key) => (
                    <Label
                        key={`option-${key}`}
                        className={classNames(styles.label, {
                            [styles.primary]: variant === 'primary',
                            [styles.secondary]: variant === 'secondary',
                            [styles.danger]: variant === 'danger',
                            [styles.warning]: variant === 'warning',
                            [styles.success]: variant === 'success',
                            [styles.info]: variant === 'info',
                            [styles.light]: variant === 'light',
                            [styles.dark]: variant === 'dark'
                        })}
                    >
                        <input
                            type="radio"
                            name={name}
                            onClick={() => changeValue(item.value)}
                            onChange={() => null}
                            checked={selected === item.value}
                        />
                        <span className={styles.control}></span>
                        <span className={styles.label}>{item.label}</span>
                    </Label>
                ))}
            </div>
        </div>
    )
}

export default OptionsButton
