/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {useState} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import CardList from '../../components/CardList';

const Home = ({navigation}: any) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getDatas = async () => {
    setLoading(true);
    const response = await fetch('http://api.alquran.cloud/v1/surah');
    const json = await response.json();
    setData(json.data);
    setLoading(false);
  };

  useEffect(() => {
    getDatas();
  }, []);

  // console.log(data);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingTop: 15,
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Poppins-Regular',
            color: '#8789A3',
          }}>
          Asslamualaikum
        </Text>
        <Text
          style={{
            fontSize: 24,
            fontFamily: 'Poppins-SemiBold',
            color: '#240F4F',
          }}>
          Dimas Triana
        </Text>
      </View>
      <View
        style={{
          marginTop: 10,
          position: 'relative',
          width: '100%',
          height: '30%',
        }}>
        <Image
          source={require('../../assets/images/CardFrame.png')}
          resizeMode="cover"
          style={{
            borderRadius: 10,
            width: '100%',
            height: '100%',
          }}
        />
        <View
          style={{
            position: 'absolute',
            paddingHorizontal: 25,
            paddingVertical: 15,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
            }}>
            <Image
              source={require('../../assets/logo/Book.png')}
              style={{
                width: 20,
                height: 20,
              }}
            />
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Poppins-Regular',
                color: '#fff',
              }}>
              Last Read
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: 25,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Poppins-Bold',
                color: '#fff',
              }}>
              Al-Fatihah{' '}
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Poppins-regular',
                color: '#fff',
              }}>
              Ayat no: 1
            </Text>
          </View>
        </View>
      </View>
      {/* list surah container */}
      <ScrollView
        style={{
          display: 'flex',
          flex: 1,
          marginTop: 35,
        }}>
        {/* list surah card */}
        {data.map((item: any) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SurahPage', {
                  surahId: item.number,
                  name: item.englishName,
                });
              }}>
              <CardList
                noSurah={item.number}
                name={item.name}
                nameTranslate={item.englishName}
                numberOfAyat={item.numberOfAyahs}
                city={item.revelationType}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Home;
