import { IUser } from "../interfaces/IUser";
import { filter } from 'lodash'; 

export const filterdUsers = (users: IUser[], inputValue: string) => {
  return filter(users, obj => {
    if (obj.id.toString().toUpperCase().startsWith(inputValue.toUpperCase())) return obj;
    if (obj.lastName.toUpperCase().startsWith(inputValue.toUpperCase())) return obj;
    if (obj.phone.toUpperCase().startsWith(inputValue.toUpperCase())) return obj;
    if (obj.email.toUpperCase().startsWith(inputValue.toUpperCase())) return obj;
    if (obj.firstName.toUpperCase().startsWith(inputValue.toUpperCase())) return obj;
  });
}