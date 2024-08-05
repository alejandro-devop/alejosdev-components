import React, { useMemo } from 'react'

const colSizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const

type ColSizeType = (typeof colSizes)[number]

interface ColProps {
    children?: React.ReactNode
    xs?: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
    all?: number
    applyFor?: Partial<Record<ColSizeType, number | undefined>>
    applyFrom?: [ColSizeType, number | undefined]
    ascendingApply?: boolean
    className?: string
}

const Col: React.FC<ColProps> = ({
    all,
    applyFor,
    applyFrom,
    ascendingApply = true,
    children,
    xs = 12,
    sm = 12,
    md = 12,
    lg = 12,
    xl = 12
}) => {
    const generatedClassName = useMemo(() => {
        // The outputted dimensions.
        type DimensionsType = { [key: string]: number | undefined }
        let dimensions: DimensionsType = {
            xs,
            sm,
            md,
            lg,
            xl
        }
        if (all) {
            // If all means that the given value should apply for all dimension keys
            dimensions = Object.keys(dimensions).reduce((result, currentKey: string) => {
                result[currentKey] = all
                return result
            }, {} as DimensionsType)
        } else if (applyFor) {
            // Apply the given value only to the given keys
            dimensions = { ...dimensions, ...applyFor }
        } else if (applyFrom && Array.isArray(applyFrom)) {
            // Depending on the ascendingApply it will apply the value to all
            // dimensions forward or backwarsapplyFrom
            const [dimFrom = 'xs', value = 12] = applyFrom
            const index = colSizes.findIndex((item) => item === dimFrom)
            const iniIndex = ascendingApply ? index : 0
            const endIndex = ascendingApply ? undefined : index
            const resultSizes = colSizes.slice(iniIndex, endIndex)
            resultSizes.forEach((size) => {
                dimensions[size] = value
            })
        }
        return Object.keys(dimensions).reduce((result, currentKey) => {
            return `${result} col-${currentKey}-${dimensions[currentKey]}`
        }, '')
        return ''
    }, [xs, sm, md, lg, xl, all, applyFor, applyFrom, ascendingApply])

    return <div className={generatedClassName}>{children}</div>
}

export default Col
