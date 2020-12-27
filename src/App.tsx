import React from 'react';
import { StartPage } from './components/startPage/StartPage';
import { IUserMap } from './interfaces/IUser';
import { fetchData } from './API/fetchData';
import { Loader } from './components/loader/Loader';
import { TablePage } from './components/tablePage/TablePage';
import { ErrorComponent } from './components/error/Error';

import { setData, setDataMap, setLoading } from './store/uses/actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectData, selectLoading } from './store/uses/selector';
import { LoadingStatus } from './store/uses/state';

export const App: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const data = useSelector(selectData);
  const loading = useSelector(selectLoading);

  const handleGetData = async (type: string): Promise<void> => {
    dispatch(setLoading(LoadingStatus.LOADING));

    const res = await fetchData.getData(type);
    if (!res.length) {
      dispatch(setLoading(LoadingStatus.ERROR));
    } else {
      dispatch(setData(res));

      const map: IUserMap = {};
      res.forEach(item => {
        map[item.id] = item
      });

      dispatch(setDataMap(map));
      dispatch(setLoading(LoadingStatus.LOADED));
    }
  }

  return (
    <div className="container wrapper">
      {data.length < 1 && loading === LoadingStatus.NEVER && <StartPage dataType={handleGetData}/>}
      {data.length < 1 && loading === LoadingStatus.LOADING && <Loader/>}
      {loading === LoadingStatus.LOADED && <TablePage/>}
      {loading === LoadingStatus.ERROR && <ErrorComponent/>}
    </div>
  )
}