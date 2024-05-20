import React from 'react';
interface InputControlProps {
    value: string;
    onChange: (newValue: string) => void;
    twoDigitMax?: number;
    oneDigitMax?: number;
    autoFocus?: boolean;
}
declare const InputControl: React.FC<InputControlProps>;
export default InputControl;
