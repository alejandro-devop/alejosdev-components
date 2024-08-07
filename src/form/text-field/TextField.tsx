import React from 'react'
import { forwardRef } from 'react'
import { InputBaseProps } from '../../types/input.types'
import InputBase from '../input-base'

interface TextFieldProps extends InputBaseProps<HTMLInputElement> {}

/**
 * Component documentation...
 * @returns React.FC
 */
const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({ ...props }, ref) => {
    return <InputBase ref={ref} {...props} />
})

export default TextField
