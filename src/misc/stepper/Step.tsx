import React from 'react'
import classNames from 'classnames'
import styles from './step.module.scss'

interface StepProps {
    children?: React.ReactNode
    description?: string
    title?: string
    className?: string
}

const Step: React.FC<StepProps> = ({ children, className, description, title }) => {
    return (
        <div className={classNames(styles.step, className)}>
            <h3>{title}</h3>
            <p className={styles.description}>{description}</p>
            {children}
        </div>
    )
}

export default Step
