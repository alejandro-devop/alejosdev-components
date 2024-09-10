/// <reference types="react" />
export interface DialogBaseProps {
    open?: boolean;
    children?: React.ReactNode;
    disableClose?: boolean;
    dialogBodyProps?: React.HtmlHTMLAttributes<HTMLDivElement>;
    onClose?: () => void;
    onAccept?: () => void;
    acceptLabel?: string;
    cancelLabel?: string;
    disableAccept?: boolean;
    disableCancel?: boolean;
    disableHeader?: boolean;
    disableFooter?: boolean;
    hideAccept?: boolean;
    hideCancel?: boolean;
    title?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'full';
    lock?: boolean;
    classes?: {
        overlay?: string;
        frame?: string;
        header?: string;
    };
    footerProps?: {
        className?: string;
    };
    labels?: {
        accept?: string;
        cancel?: string;
    };
}
