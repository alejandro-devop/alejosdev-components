import { IconType } from '../../types/icons-types'
import { ButtonProps } from '../../buttons/button-commons.types'

export type ActionType = {
    action: string
    icon?: IconType
    label?: string
    buttonProps?: ButtonProps
}
