import React, { useContext } from 'react'
import Button from '../../buttons/button'
import { StepperCTX } from './StepperContext'

interface StepperNextProps {
    label?: string
}

const StepperNext: React.FC<StepperNextProps> = ({ label }) => {
    const { goNext, isInLastStep, isValidStep } = useContext(StepperCTX)
    if (isInLastStep) return null
    return (
        <Button variant="primary" rounded onClick={goNext} disabled={!isValidStep} type="button">
            {label || 'Next step'}
        </Button>
    )
}

export default StepperNext

// * Keep the dots visible when the page reloads
// * Hide the tooltip when the user scrolls down.
// * Basically there will be only one set of dots opened at the same time
// *
