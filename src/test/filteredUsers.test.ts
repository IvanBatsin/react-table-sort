import { IUser } from "../interfaces/IUser";
import { filterdUsers } from '../utils/setFilterdUsers';

describe('Test filter users function', () => {
  let user1: IUser;
  let user2: IUser;
  let user3: IUser;
  let user4: IUser;
  let user5: IUser;

  let usersArray: IUser[] = [];

  beforeEach(() => {
    user1 = {
      address: {
        city: 'none',
        state: 'none',
        streetAddress: 'none',
        zip: 'none'
      },
      description: 'User number 1',
      email: 'test@gnai.con',
      firstName: 'Karry',
      lastName: 'Dugman',
      phone: '223435',
      id: 1
    };

    user2 = {
      address: {
        city: 'none',
        state: 'none',
        streetAddress: 'none',
        zip: 'none'
      },
      description: 'User number 1',
      email: 'test@gnai.con',
      firstName: 'Larry',
      lastName: 'Dugman',
      phone: '223435',
      id: 2
    };

    user3 = {
      address: {
        city: 'none',
        state: 'none',
        streetAddress: 'none',
        zip: 'none'
      },
      description: 'User number 1',
      email: 'test@gnai.con',
      firstName: 'Karry',
      lastName: 'Bugman',
      phone: '223435',
      id: 3
    };

    user4 = {
      address: {
        city: 'none',
        state: 'none',
        streetAddress: 'none',
        zip: 'none'
      },
      description: 'User number 1',
      email: 'test@gnai.con',
      firstName: 'Larry',
      lastName: 'Bugman',
      phone: '223435',
      id: 4
    };

    user5 = {
      address: {
        city: 'none',
        state: 'none',
        streetAddress: 'none',
        zip: 'none'
      },
      description: 'User number 1',
      email: 'test@gnai.con',
      firstName: 'Tarry',
      lastName: 'Dugman',
      phone: '223435',
      id: 2
    };

    usersArray = [user1, user2, user3, user4, user5];
  });

  it('Should filter users array', () => {
    expect(filterdUsers(usersArray, 'dug')).toEqual([user1, user2, user5]);
    expect(filterdUsers(usersArray, 'Ka')).toEqual([user1, user3]);
  });
});