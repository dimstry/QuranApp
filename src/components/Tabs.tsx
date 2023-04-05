/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Icons from 'react-native-vector-icons/MaterialIcons';
import Home from '../screens/Home/Home';
const Tab = createBottomTabNavigator();

const Tabs = ({navigation}: any) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingBottom: 2,
          paddingTop: 2,
          height: 60,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          // padding di kiri kanan
          headerRightContainerStyle: {
            paddingRight: 15,
          },
          headerLeftContainerStyle: {
            paddingLeft: 15,
          },
          // header title di kiri
          // shadow di header
          headerShadowVisible: false,
          headerTitleAlign: 'left',
          headerTitle: () => (
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Poppins-Bold',
                color: '#672CBC',
              }}>
              Quran App
            </Text>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Menu');
              }}>
              <Image
                source={require('../assets/logo/Menu.png')}
                style={{
                  width: 24,
                  height: 24,
                }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Search');
              }}>
              <Image
                source={require('../assets/logo/Search.png')}
                style={{
                  width: 24,
                  height: 24,
                }}
              />
            </TouchableOpacity>
          ),
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/logo/Home.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#672CBC' : '#8789A3',
              }}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
