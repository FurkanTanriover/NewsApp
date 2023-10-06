import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {daysAgoFromDate} from '../utils/helpers';
import WebPage from '../screens/WebPage';
import {useNavigation} from '@react-navigation/native';
interface NewsCardProps {
  data: [];
  cardHeight?: number;
  cardWidth?: number;
  imageHeight?: number;
  imageWidth?: number;
}

const NewsCard: React.FC<NewsCardProps> = ({
  data,
  cardHeight = hp(22), // Ekran yüksekliğinin %20'si
  cardWidth = wp(90), // Ekran genişliğinin %90'ı
}) => {
  const navigation = useNavigation();
  const daysAgo = daysAgoFromDate(data?.published_at);
  const openWebPage = () => {
    navigation.navigate('WebPage', {url: data?.url});
  };
  return (
    <TouchableOpacity key={data?.id} onPress={() => openWebPage()}>
      <View style={[styles.container, {height: cardHeight, width: cardWidth}]}>
        <View style={styles.titleSection}>
          <Text className="uppercase text-gray-500 text-xs font-bold">
            {data?.categories[0]?.title}
          </Text>
        </View>
        <View style={styles.descAndImageSection}>
          <View style={styles.descriptionSection}>
            <Text className="text-black text-base font-bold">
              {data?.title}
            </Text>
          </View>
          <View style={styles.imageSection}>
            <Image
              source={data?.thumbnails?.full}
              style={{width: '100%', height: '100%'}}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={styles.authorAndCollectionSection}>
          <View style={styles.authorSection}>
            <Text className="text-gray-700 font-bold">
              {data?.author?.full_name}
            </Text>
            <Text> 〰 </Text>
            <Text className="text-gray-700 font-normal">{daysAgo}</Text>
          </View>
          <View style={styles.collectionSection}>
            <TouchableOpacity onPress={() => console.log('Koleksiyon')}>
              <Image
                className="w-6 h-6"
                source={require('../assets/collection.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: wp(4),
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    shadowColor: 'gray',
    shadowOpacity: 0.2,
  },
  titleSection: {
    width: '100%',
    height: '15%',
  },
  descAndImageSection: {
    width: '100%',
    height: '70%',
    flexDirection: 'row',
  },
  descriptionSection: {
    width: '60%',
    marginRight: '5%',
    height: '100%',
  },
  imageSection: {
    width: '35%',
    height: '100%',
  },
  authorAndCollectionSection: {
    height: '15%',
    flexDirection: 'row',
  },
  authorSection: {
    width: '70%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  collectionSection: {
    width: '30%',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-end',
  },
});

export default NewsCard;
