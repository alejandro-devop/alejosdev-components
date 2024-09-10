import React, { useCallback, useEffect, useState } from 'react'
import DialogRenderer from '../DialogRenderer'
import { DialogBaseProps } from './types'
import cs from 'classnames'
import styles from './dialog-base.module.scss'
import { Button, IconButton } from '../../../buttons'
/**
 * The dialog is mounted using the open flag, if the flag
 * is false the dialog will be unmounted with the content inside it.
 *
 * @param param0
 * @returns
 */
const DialogBase: React.FC<DialogBaseProps> = ({
    disableClose,
    dialogBodyProps,
    footerProps,
    children,
    classes,
    title,
    labels,
    onClose,
    onAccept,
    disableFooter,
    disableHeader,
    open,
    size = 'sm',
    disableAccept,
    hideAccept,
    lock,
    hideCancel
}) => {
    /**
     * The flags are being stored in an object to avoid calling
     * multiple setState at the same time and generate multipe
     * render
     */
    const [flags, setFlags] = useState({
        closed: false,
        open: open
    })
    const { accept = 'Accept', cancel = 'Cancel' } = labels || {}

    /**
     * The close uses a timeout function to delay the unmounting and
     * give some time to execute the css animation.
     */
    const handleClose = useCallback(() => {
        onClose?.()
    }, [onClose])

    useEffect(() => {
        if (!flags.open && open === true && !flags.closed) {
            setFlags((prev) => ({ ...prev, open: true }))
        } else if (!flags.closed && !open && flags.open === true) {
            handleClose()
        }
    }, [flags, open, handleClose])

    useEffect(() => {
        const rootElement = document.body
        if (rootElement) {
            rootElement.classList.add('disableScroll')
        }
        return () => {
            rootElement?.classList?.remove('disableScroll')
        }
    }, [])

    if (!flags.open) {
        return null
    }

    return (
        <DialogRenderer>
            <div
                className={`${styles.dialogOverlay} ${flags?.closed ? styles.dialogClosed : ''} ${
                    classes?.overlay
                }`}
            >
                <div
                    className={cs(
                        styles.dialogFrame,
                        {
                            [styles.dialogFrameSmall]: size === 'sm',
                            [styles.dialogFrameMedium]: size === 'md',
                            [styles.dialogFrameLarge]: size === 'lg',
                            [styles.dialogFrameFull]: size === 'full',
                            [styles.dialogFrameXS]: size === 'xs'
                        },
                        classes?.frame
                    )}
                >
                    {!disableHeader && (
                        <div className={cs(styles.dialogHeader, classes?.header)}>
                            {title && <h3 className="textWithMode">{title}</h3>}
                            {!disableClose && (
                                <IconButton
                                    className={styles.closeButton}
                                    icon="times"
                                    onClick={handleClose}
                                />
                            )}
                        </div>
                    )}

                    <div
                        {...dialogBodyProps}
                        className={cs(styles.dialogBody, dialogBodyProps?.className)}
                    >
                        {children}
                    </div>
                    {!disableFooter && (
                        <div className={cs(styles.dialogFooter, footerProps?.className)}>
                            {!hideCancel && (
                                <Button
                                    disabled={flags?.closed}
                                    variant="light"
                                    rounded
                                    onClick={handleClose}
                                >
                                    {cancel}
                                </Button>
                            )}
                            {!hideAccept && (
                                <Button
                                    rounded
                                    disabled={flags?.closed || disableAccept}
                                    variant="primary"
                                    onClick={onAccept}
                                >
                                    {accept}
                                </Button>
                            )}
                        </div>
                    )}
                    {lock && <div className={styles.lockCurtain} />}
                </div>
            </div>
        </DialogRenderer>
    )
}

export default DialogBase
