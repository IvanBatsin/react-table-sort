import React from 'react';
import './error.css';
import errorImg from '../../assets/img/error.svg';

interface ErrorComponentProps {
  title?: string
}

export const ErrorComponent: React.FC<ErrorComponentProps> = ({title = 'Server Errors'}: ErrorComponentProps): React.ReactElement => {
  return (
    <div className="error_component">
      <h3>{title}</h3>
      <p>Please try again later, we are working on fixing the problem</p>
      <img src={errorImg} alt="Error"></img>
    </div>
  )
}