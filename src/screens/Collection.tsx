import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BaseLayout from '../components/BaseLayout';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import NewsCard from '../components/NewsCard';

const Collection = () => {
  return (
    <BaseLayout image={require('./../assets/gray-gradient.png')}>
      <View>
        <View style={styles.titleContainer}>
          <Text className="text-4xl text-white font-bold">My Collection </Text>
          <View className="w-[50%] h-1 bg-[#EDD153]"></View>
        </View>
        <View style={styles.contentContainer}>
          <NewsCard />
        </View>
      </View>
    </BaseLayout>
  );
};

export default Collection;

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: hp(-8),
  },
  contentContainer: {
    marginTop: hp(3),
  },
});
