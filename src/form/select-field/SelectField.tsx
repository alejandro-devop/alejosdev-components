import React from 'react'
import Select from 'react-select'
import styles from './select-field.module.scss'

import { useMemo } from 'react'
import FormControl from '../form-control'
import Label from '../label'
import useDeviceMode from '../../hooks/use-device-mode'
interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string
    error?: string | null
    options?: { label: string; value: string }[]
    value?: any
    loading?: boolean
    placeholder?: string
}

const SelectField: React.FC<SelectFieldProps> = ({
    label: inputLabel,
    placeholder = '',
    error,
    id,
    onChange,
    name,
    options = [],
    value,
    loading
}) => {
    const { mode } = useDeviceMode()
    const handleChange = (data: any) => {
        onChange?.({
            target: {
                name: name || '',
                value: data.value
            }
        } as any)
    }
    const defaultSelected = useMemo(() => {
        return options?.find((item) => item.value === value)
    }, [options, value])

    return (
        <FormControl error={error} className={styles.root}>
            {inputLabel && (
                <Label htmlFor={id} className={styles.inputLabel}>
                    {inputLabel}
                </Label>
            )}
            {!loading && (
                <Select
                    placeholder={placeholder}
                    options={[
                        ...(Boolean(placeholder) ? [{ label: placeholder, value: '' }] : []),
                        ...options
                    ]}
                    classNamePrefix={'react-select-control__'}
                    onChange={handleChange}
                    isLoading={loading}
                    menuPortalTarget={document.body}
                    styles={{
                        control: (base) => ({
                            ...base,
                            borderRadius: 20,
                            border: mode === 'dark' ? '1px solid #8f8f8f' : '1px solid #b3b3b3',
                            outline: 'none',
                            backgroundColor: mode === 'dark' ? '#292929' : '#ffffff'
                        }),
                        input: (base) => ({
                            ...base,
                            color: mode === 'dark' ? '#FFF' : '#000'
                        }),
                        menuPortal: (base) => ({
                            ...base,
                            zIndex: 20000
                        })
                    }}
                    value={defaultSelected}
                />
            )}
        </FormControl>
    )
}

export default SelectField
