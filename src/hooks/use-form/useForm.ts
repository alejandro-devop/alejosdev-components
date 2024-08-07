import { ChangeEvent, useState, useMemo, useCallback, useRef } from 'react'
import {
    FieldConfigType,
    FormRenderersType,
    UseFormHookConfigType,
    UseFormHookReturnType
} from './types'
import { Validator } from './class'
import { InputBaseProps } from '../../types/input.types'

/**
 * Hook to manage forms
 * @param config
 * @returns
 */
const useForm = <FT extends Object = {}>(
    config?: UseFormHookConfigType<FT>
): UseFormHookReturnType<FT> => {
    const { defaultValues, fields, required } = config || { defaultValues: {} }
    const [form, setForm] = useState<FT>(defaultValues as FT)
    const validator = useRef(
        new Validator(fields as any, {
            required: required as string[]
        })
    ).current

    const processValue = useCallback(
        (processorConfig: {
            processor: string
            form: any
            field: string
            currentValue: any
            type?: string
            checked?: boolean
        }) => {
            const { processor, field, form, type, checked } = processorConfig
            const [processorName] = processor.split(':')

            if (processorName === 'switchGroup' && type === 'checkbox') {
                const otherFields = Object.keys(fields || {}).filter((key) => {
                    const fieldConfig = fields ? fields[key as keyof FT] : {}
                    return fieldConfig?.processor?.includes(processor)
                })
                const groupValue: any = otherFields.reduce(
                    (accu, currentKey) => ({
                        ...accu,
                        [currentKey]: false
                    }),
                    []
                )

                return { ...form, ...groupValue, [field]: checked }
            }
        },
        [fields]
    )

    /**
     * Handles the change of the form fields
     */
    const handleChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const { name, value, type, checked } = e.target
            const config = fields ? fields[name as keyof FT] : {}
            if (config?.processor) {
                const newValue = processValue({
                    processor: config?.processor,
                    form,
                    field: name,
                    currentValue: value,
                    type,
                    checked: Boolean(checked)
                })
                setForm(newValue)
            } else {
                setForm({
                    ...form,
                    [name]: value
                })
            }
        },
        [form, fields, processValue]
    )

    /**
     * Output configuration for the form
     */
    type ConfigType = Partial<
        Record<
            keyof FT,
            InputBaseProps<any> & {
                renderer?: FormRenderersType
                inputProps?: any
                sourceProps?: any
            }
        >
    >
    type FieldKeyType = keyof FT

    /**
     * Output form data buit from the configuration of the fields
     */
    const [formData, isValidForm, fieldsWithErrors]: [ConfigType, boolean, string[]] =
        useMemo(() => {
            const config: ConfigType = {}
            let hasError: boolean = false
            const fieldsWithErrors: string[] = []
            Object.entries(fields || {}).forEach((item) => {
                const [inputId, inputConfig] = item as [FieldKeyType, FieldConfigType]
                const rules = inputConfig?.rules
                let error: string | null = null
                const isRequired = required?.includes(inputId)
                if (rules || required?.includes(inputId)) {
                    error = validator.validate({
                        field: inputId as string,
                        value: (form || {})[inputId],
                        form
                    })
                }
                const defaultValue: any =
                    ((defaultValues || {}) as any)[inputId] || inputConfig?.default
                config[inputId] = {
                    id: inputId as string,
                    name: inputId as string,
                    label: inputConfig?.label || (inputId as string),
                    placeholder: inputConfig?.placeholder,
                    value: (form ? form[inputId] : defaultValue) as any,
                    onChange: handleChange,
                    renderer: inputConfig?.renderer,
                    inputProps: inputConfig?.inputProps,
                    sourceProps: inputConfig?.sourceProps,
                    required: isRequired,
                    error
                }
                if (!config[inputId]?.inputProps) {
                    delete config[inputId]?.inputProps
                }
                if (!config[inputId]?.sourceProps) {
                    delete config[inputId]?.sourceProps
                }
                if (Boolean(error)) {
                    fieldsWithErrors.push(inputId as string)
                }
                if (!hasError && Boolean(error)) {
                    hasError = true
                }
            })
            return [config, !hasError, fieldsWithErrors]
        }, [form, fields, handleChange, validator, defaultValues, required])

    const changeForm = useCallback(
        (newForm: any) => {
            setForm({
                ...form,
                ...newForm
            })
        },
        [form]
    )

    const clearForm = useCallback(() => {
        setForm(defaultValues as FT)
    }, [defaultValues])

    const fieldsFilled = useCallback(
        (fields?: string[], form?: { [k: string]: any }) => {
            let valid = true
            if (!fields) {
                return true
            }
            fields.forEach((field) => {
                if (!form?.[field] || fieldsWithErrors.includes(field)) {
                    valid = false
                }
            })
            return valid
        },
        [fieldsWithErrors]
    )

    delete (formData as any).isValidForm

    return [
        formData,
        form,
        {
            onChange: handleChange,
            isValidForm,
            changeForm,
            fieldsFilled,
            clearForm
        }
    ]
}

export default useForm
