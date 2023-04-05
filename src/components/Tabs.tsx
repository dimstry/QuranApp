/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Icons from 'react-native-vector-icons/MaterialIcons';
import Home from '../screens/Home/Home';
const Tab = createBottomTabNavigator();

const Tabs = ({navigation}: any) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        tabBarStyle: {
          paddingBottom: 2,
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
          tabBarLabel: 'Home',
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Search');
              }}>
              {/* <Icons name="search" size={30} color="#000" /> */}
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
