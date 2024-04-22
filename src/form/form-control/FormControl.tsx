import React from 'react'
import cs from 'classnames'
import styles from './form-control.module.scss'

interface FormControlProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode
    error?: string | null
    hideRequired?: boolean
}

const FormControl: React.FC<FormControlProps> = ({
    children,
    className,
    error,
    hideRequired,
    ...props
}) => {
    return (
        <div className={cs(styles.root, className)} {...props}>
            {children}
            {!hideRequired && <>{Boolean(error) && <p className={styles.error}>{error}</p>}</>}
        </div>
    )
}

export default FormControl
