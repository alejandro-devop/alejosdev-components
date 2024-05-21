import React from 'react'
import styles from './table-empty.module.scss'

interface TableEmptyProps {
    colsNumber?: number
}

const TableEmpty: React.FC<TableEmptyProps> = ({ colsNumber }) => {
    return (
        <tr>
            <td className={styles.cell} colSpan={colsNumber}>
                <span>No data to be displayed</span>
            </td>
        </tr>
    )
}

export default TableEmpty
