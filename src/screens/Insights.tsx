import React, {useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import BaseLayout from '../components/BaseLayout';
import NewsCard from '../components/NewsCard';
import {getPosts} from '../redux/action';
import {useDispatch, useSelector} from 'react-redux';

class InsightsItem extends React.PureComponent {
  render() {
    return <NewsCard data={this.props.data} />;
  }
}

const Insights = () => {
  const dispatch = useDispatch();
  const {posts} = useSelector(state => state.reducer);
  const searchQuery = useSelector(state => state.reducer.searchQuery);
  const insightsPost = posts?.data?.filter(item => item.insights === true);

  const filteredPosts = insightsPost?.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  useEffect(() => {
    getPosts(dispatch);
  }, [dispatch]);
  return (
    <BaseLayout image={require('./../assets/webrazzi-insights.png')}>
      <FlatList
        data={filteredPosts}
        renderItem={({item}) => <InsightsItem data={item} />}
        keyExtractor={item => item.id.toString()}
        scrollEnabled={false}
      />
    </BaseLayout>
  );
};

export default Insights;

const styles = StyleSheet.create({});
