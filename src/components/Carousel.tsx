import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

const MyCarousel = ({data}) => {
  const navigation = useNavigation();

  const renderItem = ({item}) => {
    const openWebPage = () => {
      navigation.navigate('WebPage', {url: item.url});
    };

    return (
      <TouchableOpacity onPress={() => openWebPage()}>
        <View style={styles.card}>
          <Image
            source={{uri: item?.thumbnails?.full.url}}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <View style={styles.cardContent}>
            <View style={styles.contentDescription}>
              <Text className="font-bold text-center text-lg">
                {item.title}
              </Text>
            </View>
            <View style={styles.constentCreator}>
              <Text className="text-gray-700 font-bold text-sm">
                {item.author.full_name}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={wp(100)}
      itemWidth={wp(85)}
      autoplay={false}
      //   autoplayInterval={2000}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
    shadowColor: 'gray',
    shadowOpacity: 0.2,
    height: hp(35),
  },
  cardImage: {
    width: '100%',
    height: '55%',
  },
  cardContent: {
    flex: 1,
    padding: wp(3),
    flexDirection: 'column',
  },
  cardAuthor: {
    fontSize: 12,
    color: 'lightgray',
  },
  contentDescription: {
    height: '80%',
  },
  constentCreator: {
    height: '20%',
  },
});

export default MyCarousel;
