/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import Collection from '../screens/Collection';
import Insights from '../screens/Insights';
import News from '../screens/News';
import Profile from '../screens/Profile';
import WebPage from '../screens/WebPage';

type RootStackParamList = {
  Auth: undefined;
  TabStackScreen: undefined;
  WebPage: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const HeaderLeft = () => {
  return (
    <View
      style={{flexDirection: 'row', alignItems: 'center', marginLeft: wp(1.5)}}>
      <Image
        resizeMode="contain"
        source={require('../assets/logo.png')}
        style={{width: wp(25), height: 40}}
      />
    </View>
  );
};

const HeaderRight = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={() => console.log('Arama')}>
        <Image
          source={require('../assets/search.png')}
          style={{width: wp(5), height: hp(2.4), marginRight: 12}}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Bildirimler')}>
        <Image
          source={require('../assets/notification.png')}
          style={{width: wp(5), height: hp(2.4), marginRight: 12}}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Hamburger Menu')}>
        <Image
          source={require('../assets/hamburger.png')}
          style={{width: wp(5), height: hp(2.4), marginRight: 12}}
        />
      </TouchableOpacity>
    </View>
  );
};

const TabStackScreen: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: hp(1.5),
          fontWeight: 'normal',
        },
        tabBarLabel: ({focused}) => {
          return (
            <Text style={{color: focused ? 'black' : 'gray'}}>
              {route.name}
            </Text>
          );
        },
        tabBarIcon: ({focused, color}) => {
          let iconName;
          if (route.name === 'News') {
            iconName = require('../assets/news.png');
          } else if (route.name === 'Collection') {
            iconName = require('../assets/collection.png');
          } else if (route.name === 'Insights') {
            iconName = require('../assets/insights.png');
          } else if (route.name === 'Profile') {
            iconName = require('../assets/profile.png');
          }
          return (
            <Image
              source={iconName}
              style={{
                width: hp(2.5),
                height: hp(2.5),
                tintColor: focused ? 'black' : color,
              }}
              resizeMode="contain"
            />
          );
        },
        tabBarStyle: {
          paddingTop: hp(0.5),
          borderTopColor: 'rgba(237, 209, 83,1)',
          borderTopWidth: hp(0.4),
          backgroundColor: 'rgba(227, 227, 227, 1)',
          height: hp(10),
        },
      })}>
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="Insights" component={Insights} />
      <Tab.Screen name="Collection" component={Collection} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Screens = () => {
  return (
    <Stack.Navigator initialRouteName={'TabStackScreen'}>
      <Stack.Screen
        options={{
          title: '',
          headerLeft: () => <HeaderLeft />,
          headerRight: () => <HeaderRight />,
        }}
        name="TabStackScreen"
        component={TabStackScreen}
      />
      <Stack.Screen
        options={{title: '', headerLeft: () => <HeaderLeft />}}
        name="WebPage"
        component={WebPage}
      />
    </Stack.Navigator>
  );
};

export default Screens;
