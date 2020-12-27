import React from 'react';
import './cardInfo.css';
import { IUser } from '../../interfaces/IUser';

interface CardInfoProps {
  user: IUser
}

export const CardInfo: React.FC<CardInfoProps> = ({user}: CardInfoProps): React.ReactElement => {
  return (
    <div className="row">
    <div className="col s12">
      <div className="card deep-orange lighten-1">
        <div className="card-content white-text">
          <span className="card-title">Выбран пользователь <b>{`${user.firstName} ${user.lastName}`}</b></span>
          <textarea readOnly={true} value={user.description}/>
          <div className="card_address">
            <span>Адрес проживания: <b>{user.address.streetAddress}</b></span>
            <span>Город: <b>{user.address.city}</b></span>
            <span>Провинция/штат: <b>{user.address.state}</b></span>
            <span>Индекс: <b>{user.address.zip}</b></span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}