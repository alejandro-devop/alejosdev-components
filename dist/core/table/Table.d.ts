import React from 'react';
import { ActionType } from './types';
type ColumnResolversType = {
    [key: string]: (data: any) => React.ReactNode;
};
export interface TableProps {
    tableActions?: ActionType[];
    colLabels?: {
        [k: string]: string;
    };
    columns?: string[];
    data?: {
        [k: string]: any;
    }[];
    title?: string;
    actions?: ActionType[];
    loading?: boolean;
    onActionCalled?: (action: string, item: any) => void;
    onTableActionCalled?: (action: string, item: any) => void;
    columnResolvers?: ColumnResolversType;
    columnClasses?: {
        [k: string]: string;
    };
    disablePagination?: boolean;
}
declare const Table: React.FC<TableProps>;
export default Table;
