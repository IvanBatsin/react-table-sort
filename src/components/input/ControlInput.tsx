import React from 'react';
import { IRules } from '../../interfaces/IRulesInputControl'; 

interface ControlInputProps {
  register: any,
  errors: any,
  name: string,
  type?: 'text' | 'number' | 'email',
  rules: IRules,
  placeholder?: string
}

export const ControlInput: React.FC<ControlInputProps> = ({placeholder ,errors, name, register, type = 'text', rules}: ControlInputProps): React.ReactElement => {
  return (
    <>
      <input 
          ref={register(rules)}
          type={type} 
          name={name} 
          placeholder={placeholder || name.toUpperCase()} 
          required
        />
        {!!errors[name] && <span className="form_error">incorrect {name}</span>}
    </>
  )
}