import { ISort } from "../interfaces/ISort";

export const setSortObject = (state: ISort, sortType: string): ISort => {
  if (!state.property){
    return ({
      property: sortType,
      type: 'asc'
    });
  } else if (state.property !== sortType) {
    return ({
      property: sortType,
      type: 'asc'
    });
  } else if (state.property === sortType){
    const type = state.type === 'asc' ? 'desc' : 'asc';
    return ({
      property: sortType,
      type
    });
  } else{
    return ({
      property: sortType,
      type: 'asc'
    });
  }
}