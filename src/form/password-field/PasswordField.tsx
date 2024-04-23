import React from 'react'
import { useState } from 'react'
import InputBase from '../input-base'
import { InputBaseProps } from '../../types/input.types'

const PasswordField: React.FC<InputBaseProps<HTMLInputElement>> = ({ ...props }) => {
    const [visible, setVisible] = useState(false)
    const toggleVisible = () => setVisible(!visible)
    return (
        <InputBase
            {...props}
            type={visible ? 'text' : 'password'}
            action={toggleVisible}
            actionIcon={visible ? 'eye-slash' : 'eye'}
        />
    )
}

PasswordField.defaultProps = {}

export default PasswordField
