import { ActionItemVariantsType } from '../../types/common.types'
import { IconType } from '../../types/icons-types'

export type PillConfigType = {
    label?: string
    icon?: IconType
    variant?: ActionItemVariantsType
    value?: any
}
