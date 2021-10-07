import * as React from 'react';
import {
  QueryObserverResult
} from 'react-query';

import { client } from '@app/client/external';

import {
  FetchUserQuery,
  useFetchUserQuery
} from '@app/graphql';

export interface UsersProps {}

const Users: React.FC<UsersProps> = (props) => {
  const userRequest : QueryObserverResult<FetchUserQuery> = useFetchUserQuery(client);
  if (userRequest?.error) {
    return (
      <div>There was an error</div>
    );
  }
  if (userRequest?.isFetching) {
    return (
      <div>Loading</div>
    );
  }
  return (
    <div>
      {JSON.stringify(userRequest?.data ?? {}, null, 4)}
    </div>
  );
}

export default Users;
