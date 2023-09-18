import {NavigationContainerRef} from '@react-navigation/core';
import {StackActions} from '@react-navigation/native';
import {createRef} from 'react';

export const navigationRef: React.RefObject<NavigationContainerRef<any>> =
  createRef<NavigationContainerRef<any>>();

export function navigate(name: string, params?: object) {
  navigationRef.current?.navigate(name, params);
}

export function replace(...args: [string, object]) {
  navigationRef.current?.dispatch(StackActions.replace(...args));
}

export function pop() {
  navigationRef.current?.dispatch(StackActions.pop());
}
