import React from 'react';
import {StyleSheet, View} from 'react-native';
import BaseLayout from '../components/BaseLayout';
import NewsCard from '../components/NewsCard';

const Insights = () => {
  const data = [
    {
      category: 'Kategori 1',
      description:
        'Açıklamaskdjskdsdksjdksjdkdjsdkjdksjdksdjskdjskdjsskdjskdjskdjskdjskdsjdksksjdksdjskdskjdksjdksjdskjdksdjskdjskdjsdkskjdksdjskdjskdjskdjskdjssdkjkdjskdjs ',
      author: 'Yazar 1',
      daysAgo: 3,
      imageUrl: require('./../assets/webrazzi-insights.png'),
    },
    {
      category: 'Kategori 2',
      description: 'Açıklama 2',
      author: 'Yazar 2',
      daysAgo: 7,
      imageUrl: require('./../assets/webrazzi-insights.png'),
    },
    {
      category: 'Kategori 1',
      description:
        'Açıklamaskdjskdsdksjdksjdkdjsdkjdksjdksdjskdjskdjsskdjskdjskdjskdjskdsjdksksjdksdjskdskjdksjdksjdskjdksdjskdjskdjsdkskjdksdjskdjskdjskdjskdjssdkjkdjskdjs ',
      author: 'Yazar 1',
      daysAgo: 3,
      imageUrl: require('./../assets/webrazzi-insights.png'),
    },
    {
      category: 'Kategori 2',
      description: 'Açıklama 2',
      author: 'Yazar 2',
      daysAgo: 7,
      imageUrl: require('./../assets/webrazzi-insights.png'),
    },
    {
      category: 'Kategori 1',
      description:
        'Açıklamaskdjskdsdksjdksjdkdjsdkjdksjdksdjskdjskdjsskdjskdjskdjskdjskdsjdksksjdksdjskdskjdksjdksjdskjdksdjskdjskdjsdkskjdksdjskdjskdjskdjskdjssdkjkdjskdjs ',
      author: 'Yazar 1',
      daysAgo: 3,
      imageUrl: require('./../assets/webrazzi-insights.png'),
    },
    {
      category: 'Kategori 2',
      description: 'Açıklama 2',
      author: 'Yazar 2',
      daysAgo: 7,
      imageUrl: require('./../assets/webrazzi-insights.png'),
    },
    // Diğer kartlar
  ];
  return (
    <BaseLayout image={require('./../assets/webrazzi-insights.png')}>
      <View>
        {data.map((item, index) => (
          <NewsCard
            key={index}
            category={item.category}
            description={item.description}
            author={item.author}
            daysAgo={item.daysAgo}
            imageUrl={item.imageUrl}
          />
        ))}
      </View>
    </BaseLayout>
  );
};

export default Insights;

const styles = StyleSheet.create({});
