import React, { useContext } from 'react'
import Button from '../../buttons/button'
import { StepperCTX } from './StepperContext'

interface StepperNextProps {
    label?: string
}

const StepperBack: React.FC<StepperNextProps> = ({ label }) => {
    const { goBack, isInFirstStep } = useContext(StepperCTX)
    if (isInFirstStep) return null
    return (
        <Button rounded onClick={goBack} type="button" variant="light">
            {label || 'Previous'}
        </Button>
    )
}

export default StepperBack
