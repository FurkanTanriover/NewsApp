import React, {useEffect} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import NewsCard from '../components/NewsCard';
import Carousel from '../components/Carousel';
import {getPosts} from '../redux/action';
import {useDispatch, useSelector} from 'react-redux';

interface NewsItemProps {
  data: [];
}
class NewsItem extends React.Component<NewsItemProps> {
  render() {
    return <NewsCard data={this.props.data} />;
  }
}

const News = () => {
  const dispatch = useDispatch();
  const {posts} = useSelector((state: any) => state.reducer);
  const searchQuery = useSelector((state: any) => state.reducer.searchQuery);
  const normalPosts = posts?.data?.filter(
    (item: any) => item.insights === false,
  );

  const filteredPosts = normalPosts?.filter((item: any) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const firstSevenPosts = normalPosts?.slice(0, 7);

  useEffect(() => {
    getPosts(dispatch);
  }, [dispatch, searchQuery]);

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
        <FlatList
          data={filteredPosts}
          renderItem={({item}) => <NewsItem data={item} />}
          keyExtractor={item => item.id.toString()}
          scrollEnabled={false}
        />
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
