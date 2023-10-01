import React from 'react';
import {Text, View} from 'react-native';
import BaseLayout from '../components/BaseLayout';

const Collection = () => {
  return (
    <BaseLayout image={require('./../assets/gray-gradient.png')}>
      <View>
        <Text className="text-4xl text-white font-bold">My Collection </Text>
        <View className="w-50 h-4 bg-["></View>
      </View>
    </BaseLayout>
  );
};

export default Collection;
