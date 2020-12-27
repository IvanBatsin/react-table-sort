import React from 'react'
import './tableHeader.css';
import { useDispatch, useSelector } from 'react-redux';
import { IUser } from '../../interfaces/IUser';
import { setData } from '../../store/uses/actions';
import { selectData } from '../../store/uses/selector';
import { AddFrom } from '../form/AddFrom';
import { filterdUsers } from '../../utils/setFilterdUsers';

export const TableHeader: React.FC = (): React.ReactElement => {
  const [showForm, setShowForm] = React.useState<boolean>(false);
  const [inputValue, setInputValue] = React.useState<string>('');
  const dispatch = useDispatch();
  const data = useSelector(selectData);
  const dataRef = React.useRef<IUser[]>(data);

  const handleShowForm = (): void => {
    setShowForm(prevState => !prevState);
  }

  const handleInput = (value: string): void => {
    setInputValue(value);
  }

  const handleTableFilter = (): void => {
    if (!inputValue && dataRef.current.length > data.length) {
      dispatch(setData(dataRef.current));
    } else if (inputValue) {
      const filterd = filterdUsers(dataRef.current, inputValue) as IUser[];
      dispatch(setData(filterd));
    }
  }

  React.useEffect(() => {
    if (data.length === dataRef.current.length + 1) {
      dataRef.current = data;
    }
  }, [data]);

  return (
    <div className="table_header">
      <div className="header_search">
        <input onChange={event => handleInput(event.currentTarget.value)} defaultValue={inputValue} type="text" placeholder="Filter" className="validate"/>
        <button onClick={handleTableFilter} className="waves-effect waves-light btn-small">Search</button>
      </div>
      <div className="header_add">
        <button onClick={handleShowForm} className="waves-effect orange darken-2 btn-small">Create</button>
        {showForm && <AddFrom handleShowForm={handleShowForm}/>}
      </div>
    </div>
  )
}