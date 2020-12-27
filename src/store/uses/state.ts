import { IUser, IUserMap } from "../../interfaces/IUser";
import { ISort } from "../../interfaces/ISort";

export enum LoadingStatus {
  LOADED = 'loaded',
  LOADING = 'loading',
  NEVER = 'never',
  ERROR = 'error'
}

export interface InitialState {
  data: IUser[],
  dataMap: IUserMap,
  loading: LoadingStatus,
  sort: ISort
}