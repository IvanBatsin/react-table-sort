import React from 'react';
import './tableSortCell.css';

interface TableSortCellProps {
  sortProperty: string | undefined,
  sortType: string | boolean,
  handleSort: (type: string) => void,
  sortCellName: string
}

export const TableSortCell: React.FC<TableSortCellProps> = ({handleSort, sortProperty, sortType, sortCellName}: TableSortCellProps): React.ReactElement => {
  return (
    <th className="table_sort_block" data-sort={sortCellName} onClick={event => handleSort(event.currentTarget.dataset.sort!)}>
      <div className="table_type_sort">
        {sortCellName}
        {sortProperty === sortCellName && sortType === 'asc' && <i className="material-icons">arrow_drop_down</i>}
        {sortProperty === sortCellName && sortType === 'desc' && <i className="material-icons">arrow_drop_up</i>}
      </div>
    </th>
  )
}