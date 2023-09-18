import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './RootNavigation';
import Screens from './Screens';
import React from 'react';

export default () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Screens />
    </NavigationContainer>
  );
};
