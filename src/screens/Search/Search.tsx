/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CardList from '../../components/CardList';
const Search = ({navigation}: any) => {
  const [search, setSearch] = useState('');

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <TextInput
        placeholder="Search"
        style={{
          backgroundColor: '#F2F2F2',
          borderRadius: 10,
          marginHorizontal: 15,
          marginTop: 15,
          paddingHorizontal: 15,
        }}
        value={search}
        onChangeText={setSearch}
      />
      {search.length > 0 && (
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: '#fff',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Poppins-Regular',
              color: '#8789A3',
              marginHorizontal: 15,
              marginTop: 15,
            }}>
            Surah {search}
          </Text>
          {/* list surah card */}
          <View style={{marginHorizontal: 15, marginTop: 15}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SurahPage', {
                  surahId: 1,
                  name: 'Al-Fatihah',
                });
              }}>
              <CardList />
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default Search;
