import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {useSelector} from 'react-redux';
import config from '../../config';
import React from 'react';

const AppApolloProvider = ({children}: {children: React.ReactNode}) => {
  const token = useSelector((state: any) => (state as any).reducer.token);
  const client = new ApolloClient({
    uri: config.HASURA_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default AppApolloProvider;
