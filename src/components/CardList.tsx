/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image} from 'react-native';

type Props = {
  noSurah: number;
  name: string;
  nameTranslate: string;
  numberOfAyat: number;
  city: string;
};

const CardList = ({
  name,
  nameTranslate,
  numberOfAyat,
  noSurah,
  city,
}: Props) => {
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
              fontSize: 15,
              fontFamily: 'Poppins-SemiBold',
              color: '#240F4F',
              top: 2,
              left: 0,
              right: 0,
              bottom: 0,
              textAlign: 'center',
              textAlignVertical: 'center',
            }}>
            {noSurah}
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
            {nameTranslate}
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 16,
              color: '#8789A3',
            }}>
            {city} &#183; {numberOfAyat} Ayat
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
        {name}
      </Text>
    </View>
  );
};

export default CardList;
