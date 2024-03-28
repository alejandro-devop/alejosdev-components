import { ActionItemVariantsType, IconNameType } from '../types/common.types'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    rounded?: boolean
    variant?: ActionItemVariantsType
    icon?: IconNameType
    block?: boolean
    loading?: boolean
    size?: 'sm' | 'md' | 'lg'
    flat?: boolean
}
