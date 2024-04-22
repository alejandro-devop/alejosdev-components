import { ActionItemVariantsType } from 'types/common.types'

type ApplyButtonVariantStylesConfigType = {
    styles: { [k: string]: string }
    variant?: ActionItemVariantsType
    variantMapper?: {
        primary?: string
        secondary?: string
        warning?: string
        success?: string
        info?: string
        light?: string
        dark?: string
        flat?: string
    }
}

const defaultVariantMaps = {
    default: 'default',
    primary: 'primary',
    secondary: 'secondary',
    danger: 'danger',
    warning: 'warning',
    success: 'success',
    info: 'info',
    light: 'light',
    dark: 'dark'
}

export const applyButtonVariantStyles = (config: ApplyButtonVariantStylesConfigType) => {
    const { styles, variant, variantMapper = {} } = config
    const keys = {
        ...defaultVariantMaps,
        ...variantMapper
    }
    return {
        [styles[keys.default]]: variant === 'default',
        [styles[keys.primary]]: variant === 'primary',
        [styles[keys.secondary]]: variant === 'secondary',
        [styles[keys.danger]]: variant === 'danger',
        [styles[keys.warning]]: variant === 'warning',
        [styles[keys.success]]: variant === 'success',
        [styles[keys.info]]: variant === 'info',
        [styles[keys.light]]: variant === 'light',
        [styles[keys.dark]]: variant === 'dark'
    }
}
