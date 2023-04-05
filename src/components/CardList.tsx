/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image} from 'react-native';

const CardList = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            position: 'relative',
            width: 36,
            height: 36,
          }}>
          <Image
            source={require('../assets/logo/Muslim.png')}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
          <Text
            style={{
              position: 'absolute',
              fontSize: 18,
              fontFamily: 'Poppins-Bold',
              color: '#240F4F',
              top: 2,
              left: 0,
              right: 0,
              bottom: 0,
              textAlign: 'center',
              textAlignVertical: 'center',
            }}>
            1
          </Text>
        </View>
        <View
          style={{
            marginLeft: 15,
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              fontSize: 16,
              color: '#240F4F',
            }}>
            Al-Fatihah
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 16,
              color: '#8789A3',
            }}>
            Meccan &#183; 7 Ayat
          </Text>
        </View>
      </View>
      <Text
        style={{
          fontFamily: 'Poppins-sBold',
          fontSize: 20,
          alignContent: 'flex-end',
          textAlign: 'right',
          color: '#863ED5',
        }}>
        ةحتافلا
      </Text>
    </View>
  );
};

export default CardList;
