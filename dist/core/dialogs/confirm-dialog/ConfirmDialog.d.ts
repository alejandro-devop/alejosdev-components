import React from 'react';
import { DialogBaseProps } from '../dialog-base/types';
interface ConfirmDialogProps extends DialogBaseProps {
    message?: string;
    onAccept?: () => void;
    onCancel?: () => void;
    acceptLabel?: string;
    cancelLabel?: string;
    disableAcctions?: boolean;
    loading?: boolean;
}
declare const ConfirmDialog: React.FC<ConfirmDialogProps>;
export default ConfirmDialog;
