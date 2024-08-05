import * as React from 'react'
import Label from '../label'
import InputControl from './InputControl'
import styles from './time-field.module.scss'
import moment from 'moment'

const { useState, useCallback, useMemo } = React

interface TimeFieldProps extends React.HTMLAttributes<HTMLInputElement> {
    label?: string
    name?: string
    value?: string
}

const TimeField: React.FC<TimeFieldProps> = ({ value, onChange, name, label, ...props }) => {
    const defaultTime = useMemo(() => (value ? moment(value, 'HH:mm') : moment()), [value])
    const [minutes, setMinutes] = useState<string>(value ? defaultTime.format('mm') : '00')
    const [hours, setHours] = useState<string>(value ? defaultTime.format('HH') : '00')

    const formattedValue = useMemo(() => `${hours}:${minutes}`, [hours, minutes])

    const handleChange = useCallback(
        (newVal: string) => {
            onChange?.({
                target: {
                    name: name || '',
                    value: newVal
                }
            } as any)
        },
        [onChange, name]
    )

    const handleChangeMinutes = useCallback(
        (minutesVal: string) => {
            const newVal = `${hours}:${minutesVal}`
            setMinutes(minutesVal)
            handleChange(newVal)
        },
        [handleChange, hours]
    )

    const handleChangeHours = useCallback(
        (hoursVal: string) => {
            const newVal = `${hoursVal}:${minutes}`
            setHours(hoursVal)
            handleChange(newVal)
        },
        [minutes, handleChange]
    )

    React.useEffect(() => {
        if (value !== formattedValue) {
            console.log('The value changed!: ', value, formattedValue)
            const newTime = moment(value, 'HH:mm')
            setMinutes(newTime.format('mm'))
            setHours(newTime.format('HH'))
        }
    }, [formattedValue, value])

    return (
        <div className={styles.root}>
            <Label>{label}</Label>
            <input type="hidden" value={formattedValue} {...props} />
            <div className={styles.wrapper}>
                <InputControl
                    autoFocus={props?.autoFocus}
                    value={hours}
                    onChange={handleChangeHours}
                    oneDigitMax={9}
                    twoDigitMax={23}
                />
                <span className={styles.timeSeparator}>:</span>
                <InputControl value={minutes} onChange={handleChangeMinutes} />
            </div>
        </div>
    )
}

export default TimeField
