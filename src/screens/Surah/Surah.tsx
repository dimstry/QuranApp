import React from 'react';
import {View, Text} from 'react-native';

const Surah = ({
  navigation,
  route: {
    params: {surahId},
  },
}: any) => {
  return (
    <View>
      <Text>Surah</Text>
    </View>
  );
};

export default Surah;
