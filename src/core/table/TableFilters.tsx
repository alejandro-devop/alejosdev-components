import React from 'react'
import IconButton from '../../buttons/icon-button'
import styles from './table-filters.module.scss'
import classNames from 'classnames'

interface TableFiltersProps {}

const TableFilters: React.FC<TableFiltersProps> = () => {
    return (
        <div className={classNames('flex', styles.tableFilters)}>
            {/* <TextField icon="search" placeholder="Enter criteria to filter..." /> */}
            <IconButton icon="filter" />
        </div>
    )
}

export default TableFilters
