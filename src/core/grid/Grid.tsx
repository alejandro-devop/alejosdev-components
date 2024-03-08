import React from 'react'
import cs from 'classnames'

interface GridProps {
    children?: React.ReactNode
    className?: string
}

const Grid: React.FC<GridProps> = ({ children, className }) => {
    return <div className={cs('grid-container', className)}>{children}</div>
}

export default Grid
