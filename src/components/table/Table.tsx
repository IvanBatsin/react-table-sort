import React from 'react';
import './table.css';
import { useSelector } from 'react-redux';
import { IUser } from '../../interfaces/IUser';
import { selectSortProp, selectSortType } from '../../store/uses/selector';
import { EmptyTablel } from '../empty/EmptyTable';
import { TableSortCell } from './TableSortCell'

interface TableProps {
  data: IUser[],
  handleUser: (id: number) => void
  handleSort: (type: string) => void
}

export const Table: React.FC<TableProps> = ({data, handleUser, handleSort}: TableProps): React.ReactElement => {
  const sortType = useSelector(selectSortType);
  const sortProperty = useSelector(selectSortProp);
  const sortTypes = ['id', 'firstName', 'lastName', 'email', 'phone'];
  return (
    <>
      <table className="highlight">
        <thead>
          <tr>
            {sortTypes.map(item => {
              return <TableSortCell 
                key={item}
                handleSort={handleSort} 
                sortCellName={item} 
                sortProperty={sortProperty} 
                sortType={sortType}/>
            })}
          </tr>
        </thead>

        {data.length > 0 && 
          <tbody>
            {data.map(obj => {
              return (
                <tr onClick={() => handleUser(obj.id)} className='table_row' key={obj.id + obj.phone}>
                  <td>{obj.id}</td>
                  <td>{obj.firstName}</td>
                  <td>{obj.lastName}</td>
                  <td>{obj.email}</td>
                  <td>{obj.phone}</td>
                </tr>
              )
            })}
          </tbody>
        }
      </table>
      {data.length === 0 && <EmptyTablel/>}
    </>
  )
}