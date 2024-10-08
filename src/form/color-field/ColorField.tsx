import React, { useCallback, useMemo, useState } from 'react'
import styles from './color-field.module.scss'
import PickerRenderer from './PickerRenderer'
import { InputBaseProps } from '../../types/input.types'
import getContrastColor from '../../utils/getContrastColor'
// import { IconButton } from '../../buttons'
import cs from 'classnames'
// import Label from 'form/label'
import TextField from 'form/text-field'

interface ColorFieldProps extends InputBaseProps<HTMLInputElement> {}

const ColorField: React.FC<ColorFieldProps> = ({ onChange, value = '#ffffff', ...props }) => {
    const [colorToApply, setColorToApply] = useState<string>(`${value}`)
    const [opened, setOpened] = useState(false)
    const inlineStyles = useMemo(() => {
        const textColor = getContrastColor(colorToApply)
        return {
            '--color-to-apply': colorToApply,
            color: textColor
        } as React.CSSProperties
    }, [colorToApply])

    const handleChange = useCallback(
        (color: string) => {
            setColorToApply(color)
            onChange?.({
                target: {
                    name: props.name || 'color-field',
                    value: color
                }
            } as any)
        },
        [onChange, props.name]
    )

    return (
        <div className={cs(styles.root, props?.className)}>
            {/* <Label>Color picker</Label> */}
            <TextField
                {...props}
                className={styles.input}
                action={() => setOpened(!opened)}
                hideMax
                actionIcon="palette"
                onClick={() => setOpened(true)}
                onFocus={() => setOpened(true)}
                style={inlineStyles}
                value={colorToApply}
                readOnly
            />
            {/* <div className={styles.inputWrapper}>
                <input
                    className={styles.input}
                    style={inlineStyles}
                    value={colorToApply}
                    onFocus={() => setOpened(true)}
                    onClick={() => setOpened(true)}
                    readOnly
                />
                <IconButton icon="palette" onClick={() => setOpened(!opened)} />
            </div> */}
            {opened && (
                <PickerRenderer
                    currentColor={colorToApply}
                    handleChange={handleChange}
                    placeholder={props?.placeholder}
                    onClose={() => {
                        setOpened(false)
                    }}
                />
            )}
        </div>
    )
}

ColorField.defaultProps = {}

export default ColorField
