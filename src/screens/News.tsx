import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import NewsCard from '../components/NewsCard';
import Carousel from '../components/Carousel';

const News = () => {
  const data = [
    {
      title: 'İçerik 1',
      image: 'https://picsum.photos/200/300',
      author: 'Furkan Tanrıöver',
      description:
        'Fintexh girişimi wamo, Finberg ve Re-Pie dan 1,5 milyon dolar yatırım aldı.',
    },
    {
      title: 'İçerik 2',
      image: 'https://picsum.photos/200/300',
      author: 'Furkan Tanrıöver',
      description:
        'Fintexh girişimi wamo, Finberg ve Re-Pie dan 1,5 milyon dolar yatırım aldı.',
    },
    {
      title: 'İçerik 3',
      image: 'https://picsum.photos/200/300',
      author: 'Furkan Tanrıöver',
      description:
        'Fintexh girişimi wamo, Finberg ve Re-Pie dan 1,5 milyon dolar yatırım aldı.',
    },
    // Daha fazla içerik ekleyebilirsiniz
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Üstteki backgorund color */}
      <View style={styles.backgroundColor}>
        <View style={styles.highlightsContainer}>
          <View style={styles.highlightTitleContainer}>
            <Text className="text-2xl text-black font-bold"> Highlights</Text>
          </View>
          <Carousel data={data} />
        </View>
      </View>
      {/* Sayfa İçeriği */}
      <View style={styles.content}>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </View>
    </ScrollView>
  );
};

export default News;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundColor: {
    width: wp(100),
    height: hp(50),
    backgroundColor: 'rgba(257, 209, 43,1)',
  },
  highlightsContainer: {
    flexDirection: 'column',
    height: '85%',
  },
  highlightTitleContainer: {
    marginTop: hp(2),
    marginBottom: hp(2),
    width: '100%',
    height: '10%',
    marginLeft: wp(7),
  },
  highlightNewsContainer: {
    width: '100%',
    height: '90%',
  },
  content: {
    flex: 1,
    marginHorizontal: wp(5),
    marginTop: -hp(5),
  },
});
