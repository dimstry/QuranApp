import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

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
          name="Surah1"
          component={Surah}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigate;
