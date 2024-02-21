import React from 'react'

interface ButtonBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonBase: React.FC<ButtonBaseProps> = ({ children, ...props }) => {
    return <button {...props}>{children}</button>
}

export default ButtonBase
