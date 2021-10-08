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
  test: Scalars['String'];
  tweet: Scalars['String'];
};


export type MutationTweetArgs = {
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

export type CreateTweetMutationVariables = Exact<{
  id: Scalars['ID'];
  content: Scalars['String'];
}>;


export type CreateTweetMutation = { __typename?: 'Mutation', tweet: string };


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
export const CreateTweetDocument = `
    mutation createTweet($id: ID!, $content: String!) {
  tweet(id: $id, content: $content)
}
    `;
export const useCreateTweetMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<CreateTweetMutation, TError, CreateTweetMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) => 
    useMutation<CreateTweetMutation, TError, CreateTweetMutationVariables, TContext>(
      (variables?: CreateTweetMutationVariables) => fetcher<CreateTweetMutation, CreateTweetMutationVariables>(client, CreateTweetDocument, variables, headers)(),
      options
    );