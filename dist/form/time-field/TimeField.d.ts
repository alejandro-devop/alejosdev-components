import * as React from 'react';
interface TimeFieldProps extends React.HTMLAttributes<HTMLInputElement> {
    label?: string;
    name?: string;
    value?: string;
}
declare const TimeField: React.FC<TimeFieldProps>;
export default TimeField;
