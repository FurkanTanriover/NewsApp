import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import BaseLayout from '../components/BaseLayout';
import {getCollectionsFromHasura} from '../modules/collectionModule';
import NewsCard from '../components/NewsCard';

const Collection = () => {
  const [collections, setCollections] = React.useState([]);
  React.useEffect(() => {
    const getCollections = async () => {
      const collections = await getCollectionsFromHasura();
      setCollections(collections);
    };
    getCollections();
  }, []);
  console.log('collections', collections);
  return (
    <BaseLayout image={require('./../assets/gray-gradient.png')}>
      <View>
        <View style={styles.titleContainer}>
          <Text className="text-4xl text-white font-bold">My Collection </Text>
          <View className="w-[50%] h-1 bg-[#EDD153]"></View>
        </View>
        <View style={styles.contentContainer}>
          {collections.map((collection: any) => (
            <NewsCard data={collection} />
          ))}
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
