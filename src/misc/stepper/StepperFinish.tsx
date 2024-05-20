import React, { useContext } from 'react'
import Button from '../../buttons/button'
import { StepperCTX } from './StepperContext'
import { ButtonProps } from '../../buttons/button-commons.types'

interface StepperNextProps extends ButtonProps {
    label?: string
}

const StepperFinish: React.FC<StepperNextProps> = ({ label, ...props }) => {
    const { goBack, isInLastStep } = useContext(StepperCTX)
    return (
        <Button
            rounded
            disabled={!isInLastStep}
            onClick={goBack}
            type="button"
            variant="success"
            {...props}
        >
            {label || 'Finish'}
        </Button>
    )
}

export default StepperFinish
