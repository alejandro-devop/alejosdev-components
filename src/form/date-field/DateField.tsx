// import 'react-datepicker/dist/react-datepicker.css'
import React from 'react'
// import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import DatePicker from 'react-datepicker'
// import styles from './date-field.module.scss'
// import moment from 'moment'
import { InputBaseProps } from '../../types/input.types'
// import InputBase from '../input-base'

interface DateFieldProps extends InputBaseProps<HTMLInputElement> {
    format?: string
}

const DateField: React.FC<DateFieldProps> = (
    {
        // format = 'YYYY-MM-DD',
        // name,
        // onChange,
        // value
        // ...props
    }
) => {
    // const initialDate = useRef(value ? moment(value as string, format) : moment()).current
    // const inputRef = useRef<HTMLInputElement>(null)
    // const [currentDate, setCurrentDate] = useState(initialDate.toDate())
    const handleChange = () => {
        // const handleChange = (date: any) => {
        // const parseDate = moment(date)
        // setCurrentDate(parseDate.toDate())
        // onChange?.({
        //     target: {
        //         name: name || '',
        //         value: parseDate.format('YYYY-MM-DD')
        //     }
        // } as any)
    }

    // const handleInputAction = useCallback(() => {
    //     if (inputRef?.current) {
    //         ;(inputRef?.current as any)?.deferFocusInput()
    //     }
    // }, [inputRef])

    // useEffect(() => {
    //     if (inputRef?.current) {
    //         ;(inputRef?.current as any)?.input?.setAttribute('readonly', 'true')
    //     }
    // }, [])

    // const strValueDate = useMemo(() => {
    //     return moment(value as any, format).format('YYYY-MM-DD')
    // }, [value, format])

    // const strCurrentDate = useMemo(() => {
    //     return moment(currentDate, format).format('YYYY-MM-DD')
    // }, [currentDate, format])

    // useEffect(() => {
    //     if (strValueDate !== strCurrentDate) {
    //         setCurrentDate(moment(value as string, format).toDate())
    //     }
    // }, [strValueDate, strCurrentDate, value, currentDate, format, onChange])

    return (
        <DatePicker
            // ref={inputRef as any}
            // wrapperClassName={styles.root}
            // selected={currentDate}
            onChange={handleChange}
            dateFormat={'yyyy-MM-dd'}
            // customInput={
            //     <InputBase
            //         className={styles.dateInput}
            //         disabled
            //         hideMax
            //         {...props}
            //         action={handleInputAction}
            //         actionIcon="calendar"
            //     />
            // }
        />
    )
}

DateField.defaultProps = {}

export default DateField
