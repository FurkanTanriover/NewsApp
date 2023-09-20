import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import BaseLayout from '../components/BaseLayout';
import NewsCard from '../components/NewsCard';
import {getPosts} from '../redux/action';
import {useDispatch, useSelector} from 'react-redux';

const Insights = () => {
  const dispatch = useDispatch();
  const {posts} = useSelector(state => state.reducer);

  const insightsPost = posts?.data?.filter(item => item.insights === true);
  console.log('insightsPost', insightsPost);

  useEffect(() => {
    getPosts(dispatch);
  }, [dispatch]);
  return (
    <BaseLayout image={require('./../assets/webrazzi-insights.png')}>
      <View>
        {insightsPost?.map((item, index) => {
          return <NewsCard key={index} data={item} />;
        })}
      </View>
    </BaseLayout>
  );
};

export default Insights;

const styles = StyleSheet.create({});
