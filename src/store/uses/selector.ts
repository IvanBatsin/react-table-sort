import { IUser, IUserMap } from "../../interfaces/IUser";
import { ISort } from "../../interfaces/ISort";
import { RootStore } from "../rootStore";
import {  LoadingStatus } from './state';

export const selectRootStateUser = (store: RootStore): RootStore['data'] => store.data;

export const selectData = (store: RootStore): IUser[] => selectRootStateUser(store).data;
export const selectDataMap = (store: RootStore): IUserMap => selectRootStateUser(store).dataMap;
export const selectLoading = (store: RootStore): LoadingStatus => selectRootStateUser(store).loading;
export const selectSort = (store: RootStore): ISort => selectRootStateUser(store).sort;
export const selectSortType = (store: RootStore): ISort['type'] => selectRootStateUser(store).sort.type;
export const selectSortProp = (store: RootStore): string | undefined => selectRootStateUser(store).sort.property;