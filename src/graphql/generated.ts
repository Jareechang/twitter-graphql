/* These are auto generated DO NOT EDIT */
import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions, useMutation, UseMutationOptions } from 'react-query';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTweet: TweetItem;
  test: Scalars['String'];
};


export type MutationCreateTweetArgs = {
  content: Scalars['String'];
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  addUser: UserResponse;
  /** tweets feed / trending items */
  feed: Array<TweetItemResponse>;
  removeUser?: Maybe<Scalars['Boolean']>;
  trending: Array<TrendingItem>;
  user?: Maybe<UserResponse>;
  /** users */
  users: Array<UserResponse>;
};


export type QueryAddUserArgs = {
  name: Scalars['String'];
};


export type QueryRemoveUserArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type TrendingItem = {
  __typename?: 'TrendingItem';
  id: Scalars['ID'];
  thumbnail: Scalars['String'];
  title: Scalars['String'];
  tweets?: Maybe<Scalars['String']>;
};

export type Tweet = {
  __typename?: 'Tweet';
  author: Scalars['ID'];
  id: Scalars['ID'];
  image: Scalars['String'];
  text: Scalars['String'];
};

export type TweetItem = {
  __typename?: 'TweetItem';
  comments: Scalars['Int'];
  content: Scalars['String'];
  id: Scalars['ID'];
  likes?: Maybe<Scalars['Int']>;
  retweets: Scalars['Int'];
  user: Scalars['ID'];
};

export type TweetItemResponse = {
  __typename?: 'TweetItemResponse';
  comments: Scalars['Int'];
  content: Scalars['String'];
  id: Scalars['ID'];
  likes?: Maybe<Scalars['Int']>;
  retweets: Scalars['Int'];
  user: User;
};

export type User = {
  __typename?: 'User';
  followers?: Maybe<Array<Maybe<Scalars['String']>>>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  followers?: Maybe<Array<Maybe<User>>>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type FetchUserQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchUserQuery = { __typename?: 'Query', users: Array<{ __typename?: 'UserResponse', id: string, name: string, followers?: Array<{ __typename?: 'User', id: string, name: string } | null | undefined> | null | undefined }> };

export type ComposeTweetMutationVariables = Exact<{
  id: Scalars['ID'];
  content: Scalars['String'];
}>;


export type ComposeTweetMutation = { __typename?: 'Mutation', createTweet: { __typename?: 'TweetItem', id: string, content: string, user: string } };

export type FetchFeedListQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchFeedListQuery = { __typename?: 'Query', feed: Array<{ __typename?: 'TweetItemResponse', id: string, content: string, user: { __typename?: 'User', id: string, name: string } }> };


export const FetchUserDocument = `
    query fetchUser {
  users {
    id
    name
    followers {
      id
      name
    }
  }
}
    `;
export const useFetchUserQuery = <
      TData = FetchUserQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables?: FetchUserQueryVariables, 
      options?: UseQueryOptions<FetchUserQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) => 
    useQuery<FetchUserQuery, TError, TData>(
      variables === undefined ? ['fetchUser'] : ['fetchUser', variables],
      fetcher<FetchUserQuery, FetchUserQueryVariables>(client, FetchUserDocument, variables, headers),
      options
    );
export const ComposeTweetDocument = `
    mutation composeTweet($id: ID!, $content: String!) {
  createTweet(id: $id, content: $content) {
    id
    content
    content
    user
  }
}
    `;
export const useComposeTweetMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<ComposeTweetMutation, TError, ComposeTweetMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) => 
    useMutation<ComposeTweetMutation, TError, ComposeTweetMutationVariables, TContext>(
      (variables?: ComposeTweetMutationVariables) => fetcher<ComposeTweetMutation, ComposeTweetMutationVariables>(client, ComposeTweetDocument, variables, headers)(),
      options
    );
export const FetchFeedListDocument = `
    query fetchFeedList {
  feed {
    id
    content
    user {
      id
      name
    }
  }
}
    `;
export const useFetchFeedListQuery = <
      TData = FetchFeedListQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables?: FetchFeedListQueryVariables, 
      options?: UseQueryOptions<FetchFeedListQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) => 
    useQuery<FetchFeedListQuery, TError, TData>(
      variables === undefined ? ['fetchFeedList'] : ['fetchFeedList', variables],
      fetcher<FetchFeedListQuery, FetchFeedListQueryVariables>(client, FetchFeedListDocument, variables, headers),
      options
    );