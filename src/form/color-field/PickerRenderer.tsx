import React, { useState } from 'react'
import styles from './color-field.module.scss'
import { HexColorPicker } from 'react-colorful'
import { Dialog } from '../../core'

interface PickerRendererProps {
    currentColor: string
    handleChange: (color: string) => void
    onClose: () => void
    placeholder?: string
}

const PickerRenderer: React.FC<PickerRendererProps> = ({
    currentColor,
    handleChange,
    onClose,
    placeholder
}) => {
    const [newColor, setNewColor] = useState(currentColor)

    const handleDialogColorChange = (color: string) => {
        setNewColor(color)
    }

    const handleClose = () => {
        onClose()
    }

    const handleAccept = () => {
        handleChange(newColor)
        onClose()
    }

    return (
        <Dialog
            classes={{ frame: styles.dialogFrame, overlay: styles.dialogOverLay }}
            dialogBodyProps={{
                className: styles.dialogBody
            }}
            footerProps={{
                className: styles.dialogFooter
            }}
            hideCancel
            labels={{ accept: 'Pick' }}
            onClose={handleClose}
            size="xs"
            onAccept={handleAccept}
            open
            title={placeholder || 'Pick a color'}
        >
            <HexColorPicker color={newColor} onChange={handleDialogColorChange} />
        </Dialog>
    )
}

PickerRenderer.defaultProps = {}

export default PickerRenderer
