import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import NewsCard from '../components/NewsCard';
import Carousel from '../components/Carousel';
import {getPosts} from '../redux/action';
import {useDispatch, useSelector} from 'react-redux';

const News = () => {
  const dispatch = useDispatch();
  const {posts} = useSelector(state => state.reducer);

  const normalPosts = posts?.data?.filter(item => item.insights === false);
  console.log('normalPosts', normalPosts);

  const firstSevenPosts = normalPosts?.slice(0, 7);

  useEffect(() => {
    getPosts(dispatch);
  }, [dispatch]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Üstteki backgorund color */}
      <View style={styles.backgroundColor}>
        <View style={styles.highlightsContainer}>
          <View style={styles.highlightTitleContainer}>
            <Text className="text-2xl text-black font-bold"> Highlights</Text>
          </View>
          <Carousel data={firstSevenPosts} />
        </View>
      </View>
      {/* Sayfa İçeriği */}
      <View style={styles.content}>
        {normalPosts?.map((item, index) => {
          return <NewsCard key={index} data={item} />;
        })}
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
