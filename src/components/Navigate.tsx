/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Image, StatusBar, Text, TouchableOpacity} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Surah from '../screens/Surah/Surah';
import Tabs from './Tabs';
import Welcome from '../screens/Welcome';
import Search from '../screens/Search/Search';
const Stack = createNativeStackNavigator();

function Navigate({navigation}: {navigation: any}) {
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
            headerShadowVisible: false,
            headerRight: () => (
              <TouchableOpacity>
                <Image
                  source={require('../assets/logo/Search.png')}
                  style={{
                    width: 24,
                    height: 24,
                  }}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="SearchPage"
          component={Search}
          options={{
            headerShadowVisible: false,
            headerTitle: () => (
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Poppins-Bold',
                  color: '#672CBC',
                }}>
                Search
              </Text>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigate;
