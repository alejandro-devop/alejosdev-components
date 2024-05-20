import React from 'react';
import { ActionType } from './types';
interface TableActionsProps {
    actions?: ActionType[];
    onActionCalled?: (action: string, item: any) => void;
}
declare const TableActions: React.FC<TableActionsProps>;
export default TableActions;
