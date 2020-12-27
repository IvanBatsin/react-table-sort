import { IUser, IUserMap } from "../../interfaces/IUser";
import { Action } from 'redux';
import { ISort } from "../../interfaces/ISort";
import { LoadingStatus } from "./state";

export enum ActionTypes {
  SET_DATA = 'set_data',
  SET_DATA_NEW = 'set_data_new',
  SET_DATA_MAP = 'set_data_map',
  SET_LOADING = 'set_loading',
  SET_SORT = 'set_sort'
}

export interface ISetData extends Action<ActionTypes> {
  type: ActionTypes.SET_DATA,
  payload: IUser[]
}
export interface ISetDataNew extends Action<ActionTypes> {
  type: ActionTypes.SET_DATA_NEW,
  payload: IUser
}
export interface ISetDataMap extends Action<ActionTypes> {
  type: ActionTypes.SET_DATA_MAP,
  payload: IUserMap
}
export interface ISetLoading extends Action<ActionTypes> {
  type: ActionTypes.SET_LOADING,
  payload: LoadingStatus
}
export interface ISetSort extends Action<ActionTypes> {
  type: ActionTypes.SET_SORT,
  payload: ISort
}




export const setData = (payload: IUser[]): ISetData => ({
  type: ActionTypes.SET_DATA,
  payload
});
export const setDataNew = (payload: IUser): ISetDataNew => ({
  type: ActionTypes.SET_DATA_NEW,
  payload
});
export const setDataMap = (payload: IUserMap): ISetDataMap => ({
  type: ActionTypes.SET_DATA_MAP,
  payload
});
export const setLoading = (payload: LoadingStatus): ISetLoading => ({
  type: ActionTypes.SET_LOADING,
  payload
});
export const setSort = (payload: ISort): ISetSort => ({
  type: ActionTypes.SET_SORT,
  payload
});

export type Actions = ISetData | ISetDataMap | ISetLoading | ISetDataNew | ISetSort;