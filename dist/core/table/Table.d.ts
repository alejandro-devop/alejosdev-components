import React from 'react';
import { ActionType } from './types';
interface TableProps {
    tableActions?: ActionType[];
    colLabels?: {
        [k: string]: string;
    };
    columns: string[];
    data?: {
        [k: string]: any;
    }[];
    title?: string;
    actions?: ActionType[];
    loading?: boolean;
    onActionCalled?: (action: string, item: any) => void;
    onTableActionCalled?: (action: string, item: any) => void;
}
declare const Table: React.FC<TableProps>;
export default Table;
