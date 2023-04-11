/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';

const Surah = ({route}: any) => {
  const {name} = route.params;
  const {surahId} = route.params;

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getDatas = async () => {
    setLoading(true);
    const response = await fetch(
      'https://quran-api.santrikoding.com/api/surah/2',
    );
    const json = await response.json();
    setData(json.data);
    setLoading(false);
  };

  useEffect(() => {
    getDatas();
  }, []);
  console.log(data);

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          paddingHorizontal: 15,
        }}>
        {/* header */}
        <View
          style={{
            marginTop: 10,
            position: 'relative',
            width: '100%',
            height: 265,
          }}>
          <Image
            source={require('../../assets/images/Card.png')}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 10,
              resizeMode: 'cover',
            }}
          />
          <View
            style={{
              position: 'absolute',
              paddingHorizontal: 25,
              paddingVertical: 15,
              width: '100%',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 26,
                  fontFamily: 'Poppins-SemiBold',
                  color: '#fff',
                }}>
                {name}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'Poppins-Regular',
                  color: '#fff',
                  borderBottomWidth: 1,
                  borderBottomColor: '#ccc',
                  paddingHorizontal: 30,
                  paddingVertical: 10,
                }}>
                The opening
              </Text>
            </View>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Poppins-SemiBold',
                color: '#fff',
                marginTop: 10,
                width: '100%',
                textAlign: 'center',
              }}>
              Meccan &#183; 7 Ayat
            </Text>
            <Image
              source={require('../../assets/images/Group.png')}
              style={{
                width: '80%',
                height: 50,
                marginTop: 15,
                alignSelf: 'center',
              }}
            />
          </View>
        </View>
        {/* end header */}
        {/* content */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: 10,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#F5F5F5',
              paddingBottom: 25,
              marginTop: 10,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 10,
                backgroundColor: '#F5F5F5',
                padding: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Poppins-SemiBold',
                  color: '#fff',
                  backgroundColor: '#863ED5',
                  paddingHorizontal: 15,
                  paddingVertical: 5,
                  borderRadius: 50,
                }}>
                1
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}>
                <Image
                  source={require('../../assets/logo/Play.png')}
                  style={{width: 24, height: 24, marginRight: 10}}
                />
              </View>
            </View>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Poppins-SemiBold',
                color: '#240F4F',
                marginTop: 15,
              }}>
              َﻦﻳِمَلٰعْلا ِّبَر ِهَّلِل ُدْمَحْلا
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Poppins-Regular',
                color: '#8789A3',
                marginTop: 10,
              }}>
              [All] praise is [due] to Allah, Lord of the worlds -
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Surah;
