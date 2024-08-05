import React, { forwardRef, useCallback, useMemo } from 'react'
import { useInputId } from 'hooks'
import { InputBaseProps } from '../../types/input.types'
import cs from 'classnames'
import styles from './input.module.scss'
import FormControl from 'form/form-control'
import Label from 'form/label'
import Icon from 'misc/icon'
import IconButton from 'buttons/icon-button'

const InputBase = forwardRef<HTMLInputElement, InputBaseProps<HTMLInputElement>>(
    (
        {
            action,
            actionIcon,
            actionRef,
            actionVariant,
            className,
            classes,
            disableAction,
            error,
            floatingLabel,
            hideMax,
            id,
            isNumeric,
            label,
            leadingIcon,
            leadingComponent,
            max = 200,
            maxEndingSpaces,
            name,
            onChange,
            onlyInput,
            trailingIcon,
            trailingComponent,
            trimSpaces = true,
            value,
            hideRequired,
            ...props
        },
        ref
    ) => {
        const htmlId = useInputId({ id, name })
        const handleChangeProxy = useCallback(
            (event: React.ChangeEvent<HTMLInputElement>) => {
                /**
                 * Todo: Implement trim spaces from the event
                 * Todo: Implement string, number, email validations.
                 */
                onChange?.(event)
            },
            [onChange]
        )

        const hasValue = useMemo(() => (value as string)?.length > 0, [value])

        const inputRender = useMemo(() => {
            return (
                <input
                    className={cs(styles.input, className, {
                        [styles.withValue]: hasValue,
                        [styles.withLabel]: Boolean(label) && floatingLabel,
                        [styles.withLeadingIcon]: Boolean(leadingIcon),
                        [styles.withTrailingIcon]: Boolean(trailingIcon)
                    })}
                    id={htmlId}
                    maxLength={max}
                    name={name}
                    onChange={handleChangeProxy}
                    ref={ref}
                    value={value || ''} // Avoid controlled input warning
                    {...props}
                />
            )
        }, [props, htmlId, max, name, className])

        const length = useMemo(() => (value as string)?.length || 0, [value])

        const renderLabel = useMemo(
            () => (
                <Label
                    htmlFor={htmlId}
                    className={cs(styles.label, {
                        [styles.labelWithLeadingIcon]: Boolean(leadingIcon),
                        [styles.floatingLabel]: floatingLabel
                    })}
                >
                    {label}
                </Label>
            ),
            [floatingLabel]
        )

        if (onlyInput) {
            return inputRender
        }

        return (
            <FormControl
                error={error}
                hideRequired={hideRequired}
                className={cs(styles.root, classes?.wrapper, {
                    [styles.isRequiredField]: Boolean(props.required)
                })}
            >
                {leadingComponent}
                <div className={styles.inputWrapper}>
                    {leadingIcon && <Icon icon={leadingIcon} className={styles.icon} />}
                    {Boolean(label) && !floatingLabel && renderLabel}
                    {inputRender}
                    {Boolean(label) && floatingLabel && renderLabel}
                    {trailingIcon && (
                        <Icon
                            icon={trailingIcon}
                            className={cs(styles.icon, styles.trailingIcon)}
                        />
                    )}
                    {!hideMax && hasValue && (
                        <span className={styles.maxDisplay}>{`${length}/${max}`}</span>
                    )}
                </div>
                {trailingComponent}
                {Boolean(action) && (
                    <IconButton
                        ref={actionRef}
                        icon={actionIcon}
                        className={styles.actionIcon}
                        onClick={action}
                        variant={actionVariant}
                        disabled={disableAction}
                    />
                )}
            </FormControl>
        )
    }
)

export default InputBase
