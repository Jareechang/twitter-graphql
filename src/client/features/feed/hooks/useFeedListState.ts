/*
 * All api state operations for feed in react-query
 *
 * **/
import {
  useQueryClient,
  QueryClient
} from 'react-query'
import {
  FetchFeedListQuery
} from '@app/graphql';
import * as R from 'ramda';
import {
  AddFeedListData,
} from '../types';
import {
  addFeedListState
} from '../updaters';

export const cacheKey = 'fetchFeedList';

/*
 *
 * get feed list data
 *
 * **/
export function getFeedList(
  queryClient: QueryClient
): FetchFeedListQuery | undefined {
  return queryClient.getQueryData<FetchFeedListQuery>(cacheKey);
}

export function updateFeedList(
  queryClient: QueryClient,
  data?: AddFeedListData,
): void {
  queryClient.setQueryData<FetchFeedListQuery>(
    cacheKey,
    R.partial(addFeedListState, [data])
  );
}

export function cancelQueries(
  queryClient: QueryClient,
): void {
  queryClient.cancelQueries(cacheKey);
}

export function invalidateQueries(
  queryClient: QueryClient,
): void {
  queryClient.invalidateQueries(cacheKey);
}

/*
 *
 * Expose functions to interface with 'fetchFeedList' global state
 *
 * **/
function useFeedListState() {
  const queryClient : QueryClient = useQueryClient();
  return {
    /*
     * update feed list
     * */
    update: R.partial(updateFeedList, [queryClient]),
    /*
     * get feed list
     * */
    get: R.partial(getFeedList, [queryClient]),
    /*
     * Cancel any existing queries on feed list
     *
     * **/
    cancelQueries: R.partial(cancelQueries, [queryClient]),
    /*
     * Invalidate queries
     *
     * **/
    invalidateQueries: R.partial(invalidateQueries, [queryClient]),
  };
}

export default useFeedListState;
