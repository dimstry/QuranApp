/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Image, StatusBar, Text} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Surah from '../screens/Surah/Surah';
import Tabs from './Tabs';
import Welcome from '../screens/Welcome';
const Stack = createNativeStackNavigator();

function Navigate() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'} />
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SurahPage"
          component={Surah}
          options={({route}) => ({
            title: route.params?.name,
            headerTitleStyle: {
              fontFamily: 'Poppins-Bold',
              fontSize: 20,
              color: '#672CBC',
            },
            headerRight: () => (
              <Image
                source={require('../assets/logo/Search.png')}
                style={{
                  width: 24,
                  height: 24,
                }}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigate;
