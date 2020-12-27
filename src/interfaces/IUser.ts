interface IAddress {
  streetAddress: string,
  city: string,
  state: string,
  zip: string
}

export interface IUser {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  address: IAddress,
  description: string
}

export interface IUserMap {
  [key: number]: IUser
}