import React from 'react'
import classNames from 'classnames'

interface FieldsetProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {}

/**
 * Facade for the fieldset element. It's a simple fieldset element.
 * any common functinoality should be added here.
 * @returns React.FC
 */
const Fieldset: React.FC<FieldsetProps> = ({ children, className, ...otherProps }) => {
    return (
        <fieldset className={classNames(className)} {...otherProps}>
            {children}
        </fieldset>
    )
}

Fieldset.defaultProps = {}

export default Fieldset
