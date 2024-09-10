import React, { useCallback, useRef, forwardRef } from 'react'
import Label from '../label'
import styles from './textarea.module.scss'
import FormControl from 'form/form-control'
import cs from 'classnames'

// const TEXT_AREA_INPUT_HEIGHT = 32

interface TextAreaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string
    error?: string | null
    max?: number
    hideMax?: number | boolean
    trimSpaces?: boolean
    maxEndingSpaces?: number
    classes?: {
        root?: string
    }
}

const TextAreaField = forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(
    (
        {
            label,
            error,
            value = '',
            max = 255,
            onChange,
            hideMax,
            trimSpaces = true,
            maxEndingSpaces = 4,
            className,
            classes,
            ...props
        },
        ref
    ) => {
        const defaultRef = useRef<HTMLTextAreaElement>(null)
        const textAreaRef: any = ref || defaultRef

        const trimEventSpaces = useCallback(
            (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
                if (trimSpaces && evt.target?.value?.length > 0) {
                    evt.target.value = evt.target?.value?.trimStart()
                }
                if (maxEndingSpaces > 0 && evt.target?.value?.length > 0) {
                    const [matches] = evt.target?.value?.match(/(\s|\r\n|\r|\n)+$/) || []
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

        // useLayoutEffect(() => {
        //     if (textAreaRef.current && textAreaRef.current.style) {
        //         textAreaRef.current.style.height = `${Math.max(
        //             textAreaRef.current.scrollHeight,
        //             TEXT_AREA_INPUT_HEIGHT
        //         )}px`
        //     }
        // }, [value])

        return (
            <FormControl className={cs(styles.textAreaRoot, classes?.root)}>
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
                    className={cs(styles.textArea, className)}
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
)

// const TextAreaField: React.FC<TextAreaFieldProps> = () => {

// }

export default TextAreaField
