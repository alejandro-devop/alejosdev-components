import React from 'react'
import { useCallback } from 'react'
import styles from './input-control.module.scss'
import Icon from '../../misc/icon'

interface InputControlProps {
    value: string
    onChange: (newValue: string) => void
    twoDigitMax?: number
    oneDigitMax?: number
    autoFocus?: boolean
}

const InputControl: React.FC<InputControlProps> = ({
    value,
    onChange,
    twoDigitMax = 59,
    oneDigitMax = 5,
    autoFocus
}) => {
    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const { value } = e.target
            if (value.length > 2) return
            if (value.length === 2 && parseInt(value) > twoDigitMax) return
            if (value.length === 1 && parseInt(value) > oneDigitMax) return
            onChange(value)
        },
        [onChange, oneDigitMax, twoDigitMax]
    )

    const handleBlur = useCallback(() => {
        if (value.length === 1) {
            onChange(`0${value}`)
        }
    }, [value, onChange])

    const formatValue = (valueToFormat: number) => {
        return valueToFormat < 10 ? `0${valueToFormat}` : `${valueToFormat}`
    }

    const handleUp = useCallback(() => {
        let newValue = parseInt(value) + 1
        if (newValue > twoDigitMax) newValue = 0
        onChange(formatValue(newValue))
    }, [value, onChange, twoDigitMax])

    const handleDown = useCallback(() => {
        let newValue = parseInt(value) - 1
        if (newValue < 0) newValue = twoDigitMax
        onChange(formatValue(newValue))
    }, [value, onChange, twoDigitMax])

    return (
        <div className={styles.root}>
            <button tabIndex={-1} className={styles.actionButton} onClick={handleUp}>
                <Icon icon="chevron-up" />
            </button>
            <input
                tabIndex={0}
                autoFocus={autoFocus}
                placeholder="mm"
                value={value}
                onChange={handleChange}
                className={styles.input}
                onBlur={handleBlur}
            />
            <button tabIndex={-1} className={styles.actionButton} onClick={handleDown}>
                <Icon icon="chevron-down" />
            </button>
        </div>
    )
}

export default InputControl
