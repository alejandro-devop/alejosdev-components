import React from 'react'
import cs from 'classnames'

interface RowProps {
    children?: React.ReactNode
    className?: string
}

const Row: React.FC<RowProps> = ({ children, className }) => {
    return <div className={cs('row', className)}>{children}</div>
}

export default Row
