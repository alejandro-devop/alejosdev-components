import React from 'react';
interface PickerRendererProps {
    currentColor: string;
    handleChange: (color: string) => void;
    onClose: () => void;
    placeholder?: string;
}
declare const PickerRenderer: React.FC<PickerRendererProps>;
export default PickerRenderer;
