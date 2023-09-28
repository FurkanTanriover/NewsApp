import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import BaseLayout from '../components/BaseLayout';
import NewsCard from '../components/NewsCard';
import {getPosts} from '../redux/action';
import {useDispatch, useSelector} from 'react-redux';

interface InsightsItemProps {
  data: [];
}

class InsightsItem extends React.Component<InsightsItemProps> {
  render() {
    return <NewsCard data={this.props.data} />;
  }
}

const Insights = () => {
  const dispatch = useDispatch();
  const {posts} = useSelector((state: any) => state.reducer);
  const searchQuery = useSelector((state: any) => state.reducer.searchQuery);
  const insightsPost = posts?.data?.filter(
    (item: any) => item.insights === true,
  );

  const filteredPosts = insightsPost?.filter((item: any) =>
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
