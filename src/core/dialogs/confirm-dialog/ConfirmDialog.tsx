import React from 'react'
import Dialog from '../dialog'
import { DialogBaseProps } from '../dialog-base/types'
import styles from './confirm-dialog.module.scss'
import { Button } from '../../../buttons'
import { SpinnerLoader } from '../../../misc'

interface ConfirmDialogProps extends DialogBaseProps {
    message?: string
    onAccept?: () => void
    onCancel?: () => void
    acceptLabel?: string
    cancelLabel?: string
    disableAcctions?: boolean
    loading?: boolean
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
    children,
    disableAcctions,
    message,
    acceptLabel = 'Accept',
    cancelLabel = 'Cancel',
    onAccept,
    onCancel,
    onClose,
    loading,
    size = 'xs',
    ...props
}) => {
    return (
        <Dialog
            {...props}
            disableFooter
            onClose={onClose}
            disableClose
            size={size}
            classes={{
                overlay: styles.root,
                frame: styles.frame,
                header: styles.header
            }}
        >
            <p className="text-center textWithMode mb-4">{message}</p>
            {children && <div>{children}</div>}
            {loading && (
                <div className="flex justify-center mb-4">
                    <SpinnerLoader size="lg" />
                </div>
            )}
            {!disableAcctions && !loading && (
                <div className="flex justify-center">
                    <Button rounded variant="info" onClick={onCancel || onClose}>
                        {cancelLabel}
                    </Button>
                    <Button rounded variant="danger" onClick={onAccept}>
                        {acceptLabel}
                    </Button>
                </div>
            )}
        </Dialog>
    )
}

export default ConfirmDialog
