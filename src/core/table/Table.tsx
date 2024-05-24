import React, { useCallback } from 'react'
import styles from './table.module.scss'
// import TableFilters from './TableFilters'
import TableActions from './TableActions'
import TableFooter from './TableFooter'
import { ActionType } from './types'
import classNames from 'classnames'
import { useMediaQuery } from 'hooks'
import IconButton from '../../buttons/icon-button'
import TableEmpty from './TableEmpty'

type ColumnResolversType = {
    [key: string]: (data: any) => React.ReactNode
}
interface TableProps {
    tableActions?: ActionType[]
    colLabels?: { [k: string]: string }
    columns?: string[]
    data?: { [k: string]: any }[]
    title?: string
    actions?: ActionType[]
    loading?: boolean
    onActionCalled?: (action: string, item: any) => void
    onTableActionCalled?: (action: string, item: any) => void
    columnResolvers?: ColumnResolversType
    columnClasses?: { [k: string]: string }
}

interface RenderRowProps {
    actions?: ActionType[]
    handleAction: (action: string, item: any) => void
    colLabels?: { [k: string]: string }
    rowId: string
    cols: string[]
    data: { [k: string]: any }
    columnResolvers?: ColumnResolversType
    columnClasses?: { [k: string]: string }
}

const RenderRow: React.FC<RenderRowProps> = ({
    actions,
    cols,
    colLabels,
    data,
    rowId,
    handleAction,
    columnResolvers,
    columnClasses
}) => {
    return (
        <tr>
            {cols.map((key, index) => (
                <td
                    className={columnClasses?.[key]}
                    data-label={colLabels ? colLabels[key] || key : key}
                    key={`${rowId}-${index}`}
                >
                    {columnResolvers?.[key] ? columnResolvers?.[key]?.(data) : data[key]}
                </td>
            ))}
            {actions?.length && (
                <td
                    data-label={'Actions'}
                    className={classNames(styles.actionsCell, styles.hasActions)}
                >
                    {actions.map((item, index) => (
                        <IconButton
                            className="mr-2"
                            icon={item.icon}
                            onClick={() => handleAction(item.action, data)}
                            key={`${index}-${item.action}`}
                            size="sm"
                            {...item?.buttonProps}
                        />
                    ))}
                </td>
            )}
        </tr>
    )
}

const Table: React.FC<TableProps> = ({
    actions,
    data,
    colLabels = {},
    columns: receivedCols,
    onActionCalled,
    onTableActionCalled,
    tableActions,
    columnResolvers,
    columnClasses
}) => {
    const { isIn } = useMediaQuery()
    const columns = !receivedCols ? Object.keys(colLabels) : receivedCols
    const handleActionTriggered = useCallback(
        (action: string, item: any) => {
            onActionCalled?.(action, item)
        },
        [onActionCalled]
    )

    const isMobile = isIn(['xs', 'sm', 'md'])
    const hasData = data?.length || 0 > 0
    return (
        <div className={classNames(styles.table)}>
            {tableActions && tableActions?.length > 0 && (
                <div className={styles.tableToolbar}>
                    {/* <div className={styles.tableToolbarLeft}>
                        <TableFilters />
                    </div> */}
                    <div className={styles.tableToolbarRight}>
                        <TableActions actions={tableActions} onActionCalled={onTableActionCalled} />
                    </div>
                </div>
            )}
            <table className={classNames({ [styles.isMobile]: isMobile })}>
                <thead>
                    <tr>
                        {columns.map((col, index) => (
                            <th key={`title-${index}`}>
                                <span>{colLabels[col] || col}</span>
                            </th>
                        ))}
                        {actions?.length && (
                            <th className={classNames(styles.actionsCell, styles.hasActions)}>
                                <span>Actions</span>
                            </th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {!hasData && (
                        <TableEmpty colsNumber={columns?.length + (Boolean(actions) ? 1 : 0)} />
                    )}
                    {data?.map((rowData, index) => (
                        <RenderRow
                            columnClasses={columnClasses}
                            handleAction={handleActionTriggered}
                            actions={actions}
                            rowId={`${index}`}
                            colLabels={colLabels}
                            cols={columns}
                            data={rowData}
                            key={`row-${index}`}
                            columnResolvers={columnResolvers}
                        />
                    ))}
                </tbody>
            </table>
            {hasData && <TableFooter />}
        </div>
    )
}

export default Table
