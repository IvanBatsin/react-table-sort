import React from 'react';
import './addForm.css';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { IUser } from '../../interfaces/IUser';
import { setDataMap, setDataNew } from '../../store/uses/actions';
import { selectDataMap } from '../../store/uses/selector';
import { ControlInput } from '../input/ControlInput';

interface AddFormProps {
  handleShowForm: () => void
}

export const AddFrom: React.FC<AddFormProps> = ({handleShowForm}: AddFormProps): React.ReactElement => {
  const { register, errors, handleSubmit, formState } = useForm<IUser>({mode: 'onChange'});
  const dispatch = useDispatch();
  const dataMap = useSelector(selectDataMap);

  const onSubmit =( data: IUser) => {
    data.id = Number(data.id);
    dispatch(setDataNew(data));
    
    dataMap[data.id] = data;
    dispatch(setDataMap(dataMap));
    handleShowForm();
  };

  return (
    <div className="overlay">
      <form onSubmit={handleSubmit(onSubmit)} className="add_form">
        <i onClick={handleShowForm} className="material-icons close_icon">close</i>
        <h4>User Info</h4>
        <ControlInput 
          rules={{required: true}} 
          errors={errors} 
          type="number" 
          name="id"
          register={register}/>
        <ControlInput 
          rules={{required: true, minLength: 2, maxLength: 20}} 
          errors={errors} 
          name="firstName"
          register={register}/>
        <ControlInput 
          rules={{ required: true, maxLength: 25, minLength: 2 }} 
          errors={errors} 
          name="lastName"
          register={register}/>
        <ControlInput 
          rules={{ required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i}} 
          errors={errors} 
          type="email"
          name="email"
          register={register}/>
        <ControlInput 
          rules={{ required: true, pattern: /^\(\d{3}\)\d{3}-\d{4}/ }} 
          errors={errors} 
          name="phone"
          register={register}
          placeholder="Phone: (999)999-9999"/>
        <textarea 
          ref={register({ required: true})}
          className="materialize-textarea" 
          name="description" 
          placeholder="Description" 
          required
        />
        {!!errors.description && <span className="form_error">incorrect description</span>}
        <h4>Address</h4>
        <input 
          ref={register({ required: true})}
          type="text" 
          name="address.streetAddress"
          placeholder="StreetAddress" 
          required
        />
        {!!errors.address?.streetAddress && <span className="form_error">incorrect streetAddress</span>}
        <input
          ref={register({ required: true})}
          name="address.city"
          type="text"
          placeholder="City" 
          required
        />
        {!!errors.address?.city && <span className="form_error">incorrect city</span>}
        <input 
          ref={register({ required: true})}
          type="text" 
          name="address.state" 
          placeholder="State" 
          required
        />
        {!!errors.address?.state && <span className="form_error">incorrect state</span>}
        <input 
          ref={register({ required: true})}
          placeholder="Zip" 
          type="text" 
          name="address.zip" 
          required
        />
        {!!errors.address?.zip && <span className="form_error">incorrect zip</span>}
        <div className="btn-controls">
          <button type="submit" className="waves-effect waves-light btn-small add_btn" disabled={!formState.isValid}>Add</button>
        </div>
      </form>
    </div>
  )
}