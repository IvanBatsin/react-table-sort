import React from 'react';
import './tablePage.css';
import { IUser } from '../../interfaces/IUser';
import { Table } from '../table/Table';
import { Pagination } from '../pagination/Pagination';
import { paginator } from '../../utils/paginator';
import { CardInfo } from '../cardInfo/CardInfo';
import { TableHeader } from '../tableHeader/TableHeader';
import { orderBy } from 'lodash';

import { useDispatch, useSelector } from 'react-redux';
import { selectData, selectDataMap, selectSort } from '../../store/uses/selector';
import { setSortObject } from '../../utils/setSortType';
import { setData, setSort } from '../../store/uses/actions';

export const TablePage: React.FC = (): React.ReactElement => {
  const data = useSelector(selectData);
  const dataMap = useSelector(selectDataMap);
  const sortType = useSelector(selectSort)
  const dispatch = useDispatch();

  const [itemsPerPage, setItemPerPage] = React.useState<number>(50);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [currentItems, setCurrentItems] = React.useState<IUser[]>(paginator(data, itemsPerPage, currentPage));
  const [user, setUser] = React.useState<IUser | undefined>(undefined);

  const handlePageNumber = (number: number): void => {
    setCurrentPage(number);
    setCurrentItems(paginator(data, itemsPerPage, number));
  }

  const handleUser = (id: number) => {
    setUser(dataMap[id]);
  }

  const handleSort = (type: string) => {
    const newSort = setSortObject(sortType, type);
    dispatch(setSort(newSort));
  }

  React.useEffect(() => {
    const sortedData = orderBy(data, [sortType.property], [sortType.type]) as IUser[];
    dispatch(setData(sortedData));
  }, [sortType]);

  React.useEffect(() => {
    setCurrentItems(paginator(data, itemsPerPage, currentPage))
  }, [data]);

  return (
    <div className="table_page">
      <TableHeader/>
      <Table handleUser={handleUser} data={currentItems} handleSort={handleSort}/>
      {
        itemsPerPage < data.length 
      && 
        <Pagination 
          handePageNumber={handlePageNumber} 
          currentPage={currentPage} 
          totalItems={data.length} 
          itemPerPage={itemsPerPage}/>
      }
      {user && data.length > 0 && <CardInfo user={user}/>}
    </div>
  )
};