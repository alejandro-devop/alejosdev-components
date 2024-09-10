import React from 'react'
import DialogBase from '../dialog-base'
import { DialogBaseProps } from '../dialog-base/types'

interface DialogProps extends DialogBaseProps {}

const Dialog: React.FC<DialogProps> = ({ children, ...props }) => {
    return <DialogBase {...props}>{children}</DialogBase>
}

export default Dialog
