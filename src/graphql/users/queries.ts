import * as gqlT from '@app/gql-types';
import {
  Maybe,
  IResolverSimple
} from '@app/types';

let _users : gqlT.User[] = [
  {
    id: '1',
    followers: ['2', '3', '4'],
    name: 'Alice',
  },
  {
    id: '2',
    followers: ['1', '3'],
    name: 'Bob',
  },
  {
    id: '3',
    followers: ['4', '2'],
    name: 'Susan',
  },
  {
    id: '4',
    followers: ['1'],
    name: 'George',
  }
];

const getUser = (
  id: Maybe<gqlT.Scalars['ID']>
): Maybe<gqlT.User> => {
  const user = _users.filter(user => user.id === `${id}`)[0];
  if (user && Object.keys(user).length > 0) {
    return (user as gqlT.User);
  }
  return null;
}

export const users = (): gqlT.UserResponse[] => {
  return _users.map((user: gqlT.User): gqlT.UserResponse => {
    const followers : Maybe<gqlT.User>[] = user?.followers?.map(
      (id) => getUser(id)
    ) ?? [];
    return ({
      ...user,
      followers
    } as gqlT.UserResponse)
  });
}

export const user = (
  id: gqlT.Scalars['ID']
): gqlT.Maybe<gqlT.UserResponse> => {
  return (getUser(id) as gqlT.UserResponse);
}

export const addUser : IResolverSimple<
  gqlT.QueryAddUserArgs,
  unknown,
  gqlT.User
> = (
  _,
  args,
  ctx
) => {
  const user : gqlT.User = {
    id: `${_users.length + 1}`,
    name: args.name,
    followers: []
  };
  _users.push(user)
  return user;
}

export const removeUser: IResolverSimple<
  gqlT.QueryRemoveUserArgs,
  unknown,
  gqlT.Scalars['Boolean']
> = (
  obj,
  args
) => {
  _users = _users
    .filter(user => user.id !== `${args.id}`);
  return true;
}
