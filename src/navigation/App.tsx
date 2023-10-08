import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './RootNavigation';
import Screens from './Screens';
import React from 'react';
import AppApolloProvider from '../hooks/ApolloProvider';

export default () => {
  return (
    <AppApolloProvider>
      <NavigationContainer ref={navigationRef}>
        <Screens />
      </NavigationContainer>
    </AppApolloProvider>
  );
};
