import React from 'react'
import cs from 'classnames'
import styles from './label.module.scss'

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

/**
 * Facade for label element. It's a simple label element.
 * any common functinoality should be added here.
 * @returns React.FC
 */
const Label: React.FC<LabelProps> = ({ children, className, ...props }) => {
    return (
        <label className={cs(styles.root, className)} {...props}>
            {children}
        </label>
    )
}

export default Label
