import { ISort } from "../interfaces/ISort";
import { setSortObject } from '../utils/setSortType';

describe('Test set sort object', () => {
  let sortState1: ISort;
  let sortState2: ISort;
  let sortState3: ISort;

  beforeEach(() => {
    sortState1 = {
      property: 'id',
      type: 'asc'
    };
    sortState2 = {
      property: 'id',
      type: 'desc'
    };
    sortState3 = {
      property: 'name',
      type: 'asc'
    };
  });

  it('Should return sort object', () => {
    expect(setSortObject(sortState1, 'id')).toEqual({property: 'id', type: 'desc'});
    expect(setSortObject(sortState2, 'name')).toEqual({property: 'name', type: 'asc'});
    expect(setSortObject(sortState3, 'name')).toEqual({property: 'name', type: 'desc'});
  });
});