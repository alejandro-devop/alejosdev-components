import { icons } from '../utils/available-icons'

export type ActionItemVariantsType =
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'danger'
    | 'warning'
    | 'light'
    | 'dark'
    | 'flat'

export type IconNameType = (typeof icons)[number]
