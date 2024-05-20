import React, { useContext } from 'react'
import { StepperCTX } from './StepperContext'

interface StepperActionsProps {
    children?: React.ReactNode
    appendRender?: (values: { isInLastStep: boolean }) => React.ReactNode
}
const StepperActions: React.FC<StepperActionsProps> = ({ children, appendRender }) => {
    const { isInLastStep } = useContext(StepperCTX)

    return (
        <div className="flex flex-1 mt-10 justify-center">
            {children}
            {appendRender?.({ isInLastStep })}
        </div>
    )
}

export default StepperActions
