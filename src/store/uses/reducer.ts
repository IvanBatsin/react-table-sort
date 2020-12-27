import { ActionTypes, Actions } from './actions';
import { InitialState, LoadingStatus } from "./state";

export const initialState: InitialState = {
  data: [],
  dataMap: {},
  loading: LoadingStatus.NEVER,
  sort: {
    property: undefined,
    type: 'asc'
  }
};

export const reducer = (state: InitialState = initialState, action: Actions) => {
  switch(action.type) {
    case ActionTypes.SET_DATA: return {
      ...state,
      data: action.payload
    }

    case ActionTypes.SET_DATA_NEW: return {
      ...state,
      data: [action.payload, ...state.data]
    }

    case ActionTypes.SET_DATA_MAP: return {
      ...state,
      dataMap: action.payload
    }

    case ActionTypes.SET_LOADING: return {
      ...state,
      loading: action.payload
    }

    case ActionTypes.SET_SORT: return {
      ...state,
      sort: action.payload
    }

    default: return initialState;
  }
}