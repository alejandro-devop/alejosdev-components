import React, { ChangeEventHandler, useCallback, useRef, useEffect } from 'react'
import TextField from '../text-field/TextField'
import styles from './number-field.module.scss'
import IconButton from 'buttons/icon-button'
import { InputBaseProps } from '../../types/input.types'
import { ActionItemVariantsType } from '../../types/common.types'

interface NumberFieldProps extends InputBaseProps<HTMLInputElement> {
    max?: number
    min?: number
    step?: number
    addVariant?: ActionItemVariantsType
    subVariant?: ActionItemVariantsType
}

const NumberField: React.FC<NumberFieldProps> = ({
    value: defValue,
    min = 0,
    max = 0,
    step = 1,
    onChange,
    name,
    addVariant,
    subVariant,
    ...props
}) => {
    const inputRef = useRef<any>({}).current
    const [value, setValue] = React.useState<number>(
        isNaN(defValue as any) ? 0 : parseInt(defValue as any, 10)
    )

    const triggerChange = useCallback(
        (newValue: any) => {
            onChange?.({
                target: {
                    name: name || '',
                    value: newValue as any
                }
            } as any)
        },
        [name, onChange]
    )

    const increase = useCallback(() => {
        let newValue: number = value + step
        if (newValue > max) {
            newValue = max
        }
        setValue(newValue)
        triggerChange(newValue)
    }, [max, value, step, triggerChange])

    const decrease = useCallback(() => {
        let newValue: number = value - step
        if (newValue < min) {
            newValue = min
        }
        setValue(newValue)
        triggerChange(newValue)
    }, [min, value, step, triggerChange])

    const handleChangeValue: ChangeEventHandler<HTMLInputElement> = useCallback(
        (e) => {
            const { value } = e?.target
            const valueToCheck = parseInt(value, 10)
            let newValue = valueToCheck
            // Validate if the value is a number so I can set the state
            if (!isNaN(valueToCheck)) {
                if (valueToCheck < max) {
                    newValue = valueToCheck
                    // setValue(valueToCheck);
                } else if (valueToCheck < min) {
                    // setValue(min);
                    newValue = min
                } else {
                    // setValue(max);
                    newValue = max
                }
            } else {
                // setValue(min);
                newValue = min
            }
            setValue(newValue)
            triggerChange(newValue)
        },
        [min, max, triggerChange]
    )

    const handleWheel = useCallback((e: WheelEvent) => {
        e.preventDefault()
    }, [])

    useEffect(() => {
        if (inputRef?.current) {
            inputRef?.current.addEventListener('wheel', handleWheel)
        }
        return () => {
            if (inputRef?.current) {
                inputRef?.current.removeEventListener('wheel', handleWheel)
            }
        }
    }, [handleWheel, inputRef])

    useEffect(() => {
        if (defValue !== value) {
            console.log('Changed value!')
            setValue(parseInt(defValue as any, 10))
        }
    }, [defValue, value])

    return (
        <TextField
            ref={(ref) => {
                inputRef.current = ref
            }}
            hideMax
            {...props}
            leadingComponent={
                <IconButton
                    tabIndex={-1}
                    className={styles.iconButton}
                    icon="minus"
                    disabled={value === min}
                    onClick={decrease}
                    variant={subVariant}
                />
            }
            type="number"
            onChange={handleChangeValue}
            trailingComponent={
                <IconButton
                    tabIndex={-1}
                    className={styles.iconButton}
                    icon="add"
                    disabled={value === max}
                    onClick={increase}
                    variant={addVariant}
                />
            }
            value={value.toString()}
        />
    )
}

NumberField.defaultProps = {
    max: 1000,
    min: 0,
    step: 1
}

export default React.memo(NumberField)
