import React, { useCallback, useRef, useLayoutEffect } from 'react'
import Label from '../label'
import styles from './textarea.module.scss'
import FormControl from 'form/form-control'

const TEXT_AREA_INPUT_HEIGHT = 32

interface TextAreaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string
    error?: string | null
    max?: number
    hideMax?: number | boolean
    trimSpaces?: boolean
    maxEndingSpaces?: number
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
    label,
    error,
    value,
    max,
    onChange,
    hideMax,
    trimSpaces,
    maxEndingSpaces = 4,
    ...props
}) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    const trimEventSpaces = useCallback(
        (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
            if (trimSpaces && evt.target?.value?.length > 0) {
                evt.target.value = evt.target?.value?.trimStart()
            }
            if (maxEndingSpaces > 0 && evt.target?.value?.length > 0) {
                const [matches] = evt.target?.value?.match(/\s+$/) || []
                if (matches && matches?.length >= maxEndingSpaces) {
                    evt.target.value = evt.target?.value?.trimEnd()
                }
            }
            return evt
        },
        [trimSpaces, maxEndingSpaces]
    )

    const handleChangeProxy = useCallback(
        (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
            onChange?.(trimEventSpaces(evt))
        },
        [onChange, trimEventSpaces]
    )

    useLayoutEffect(() => {
        if (textAreaRef.current && textAreaRef.current.style) {
            textAreaRef.current.style.height = `${Math.max(
                textAreaRef.current.scrollHeight,
                TEXT_AREA_INPUT_HEIGHT
            )}px`
        }
    }, [value])

    return (
        <FormControl className={styles.textAreaRoot}>
            {label && (
                <Label className={styles.inputLabel} htmlFor={props?.id}>
                    {label}
                    {error && <span className={styles.formErrorMsg}>{error}</span>}
                </Label>
            )}
            <textarea
                ref={textAreaRef}
                onChange={handleChangeProxy}
                maxLength={max}
                className={styles.textArea}
                value={value || ''}
                {...props}
            />

            {max && !hideMax && (
                <span className={styles.charCount}>
                    {`${value || ''}`?.length}/{max}
                </span>
            )}
        </FormControl>
    )
}

TextAreaField.defaultProps = {
    value: '',
    max: 255,
    trimSpaces: true
}

export default TextAreaField
