import { IUser } from '../interfaces/IUser';
import { paginator } from '../utils/paginator';

describe('Test paginator function', () => {
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
      firstName: 'Karry',
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
      lastName: 'Dugman',
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
      firstName: 'Karry',
      lastName: 'Dugman',
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
      firstName: 'Karry',
      lastName: 'Dugman',
      phone: '223435',
      id: 2
    };

    usersArray = [user1, user2, user3, user4, user5];
  });

  it('Should return part uses', () => {
    expect(paginator(usersArray, 2, 1)).toEqual([user1, user2]);
    expect(paginator(usersArray, 2, 3)).toEqual([user5]);
  });
});