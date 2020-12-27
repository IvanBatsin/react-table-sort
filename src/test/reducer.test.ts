import { IUser } from '../interfaces/IUser';
import { ActionTypes, ISetData, ISetDataMap, ISetDataNew, ISetLoading, ISetSort } from '../store/uses/actions';
import { reducer, initialState } from '../store/uses/reducer';
import { LoadingStatus } from '../store/uses/state';


describe('Reducer test', () => {
  let user: IUser;
  let user2: IUser

  beforeEach(() => {
    user = {
      address: {
        city: 'unknown',
        state: 'none',
        streetAddress: 'none',
        zip: 'wwe'
      },
      description: 'test',
      email: 'test@dd.com',
      firstName: 'Larry',
      id: 11,
      lastName: 'Willson',
      phone: '33333'
    }
    
    user2 = {
      address: {
        city: 'unknown',
        state: 'none',
        streetAddress: 'none',
        zip: 'wwe'
      },
      description: 'test',
      email: 'test@dd.com',
      firstName: 'Larry',
      id: 11,
      lastName: 'Willson',
      phone: '33333'
    }
  });

  it('Should add new user to users array', () => {
    const action: ISetDataNew = {
      payload: user,
      type: ActionTypes.SET_DATA_NEW
    };
  
    const newState = reducer(initialState, action);
    expect(newState.data.length).toBe(1);
  });
  
  it('Should change loading status', () => {
    const action: ISetLoading = {
      type: ActionTypes.SET_LOADING,
      payload: LoadingStatus.ERROR
    };
  
    const newState = reducer(initialState, action);
    expect(newState.loading).toBe(LoadingStatus.ERROR)
  });
  
  it('Should set new data', () => {
    const action: ISetData = {
      type: ActionTypes.SET_DATA,
      payload: [user, user2]
    };
  
    const newState = reducer(initialState, action);
    expect(newState.data.length).toBe(2);
  });
  
  it('Should set data map', () => {
    const action: ISetDataMap = {
      type: ActionTypes.SET_DATA_MAP,
      payload: {11: user}
    };
  
    const newState = reducer(initialState, action);
    expect(newState.dataMap).toEqual({11: {...user}});
  });
  
  it('Should set sort object', () => {
    const action: ISetSort = {
      type: ActionTypes.SET_SORT,
      payload: {type: 'asc', property: 'id'}
    };
  
    const newState = reducer(initialState, action);
    expect(newState.sort).toEqual({type: 'asc',  property: 'id'});
  });
});