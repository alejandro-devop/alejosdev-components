import React from 'react'
import classNames from 'classnames'
import styles from './spinner-loader.module.scss'

interface SpinnerLoaderProps {
    dark?: boolean
    size?: 'sm' | 'lg' | 'md'
}

const SpinnerLoader: React.FC<SpinnerLoaderProps> = ({ dark, size }) => {
    return (
        <div
            className={classNames(styles.loader, {
                [styles.dark]: dark,
                [styles.lg]: size === 'lg',
                [styles.md]: size === 'md'
            })}
        />
    )
}

SpinnerLoader.defaultProps = {
    size: 'md'
}

export default SpinnerLoader
