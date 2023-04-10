/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {Image} from 'react-native';

const Welcome = ({navigation}: any) => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 10,
          backgroundColor: '#fff',
          paddingBottom: 100,
        }}>
        <Text
          style={{
            fontSize: 28,
            fontFamily: 'Poppins-Bold',
            color: '#672CBC',
            marginTop: 40,
          }}>
          Quran App
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Poppins-Regular',
            color: '#8789A3',
            paddingHorizontal: 100,
            textAlign: 'center',
          }}>
          Learn Quran and Recite once everyday
        </Text>
        <View
          style={{
            position: 'relative',
            width: 314,
            height: 450,
            marginTop: 20,
          }}>
          <Image
            source={require('../assets/images/Hero.png')}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: -25,
              alignSelf: 'center',
              backgroundColor: '#F9B091',
              borderRadius: 50,
              paddingHorizontal: 50,
              paddingVertical: 15,
            }}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'poppins-Bold',
                color: '#fff',
              }}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Welcome;
