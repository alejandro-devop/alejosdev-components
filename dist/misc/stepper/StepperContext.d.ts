/// <reference types="react" />
type StepperCTXType = {
    goNext: () => void;
    goBack: () => void;
    isInFirstStep: boolean;
    isInLastStep: boolean;
    stepsValidation?: boolean[];
    isValidStep?: boolean;
};
declare const StepperCTX: import("react").Context<StepperCTXType>;
declare const StepperProvider: import("react").Provider<StepperCTXType>;
declare const StepperConsumer: import("react").Consumer<StepperCTXType>;
export { StepperCTX, StepperProvider, StepperConsumer };
