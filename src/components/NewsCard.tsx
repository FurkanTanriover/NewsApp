import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

interface NewsCardProps {
  category: string;
  description: string;
  author: string;
  daysAgo: number;
  imageUrl: ImageSourcePropType;
  cardHeight?: number;
  cardWidth?: number;
  imageHeight?: number;
  imageWidth?: number;
}

const NewsCard: React.FC<NewsCardProps> = ({
  category,
  description,
  author,
  daysAgo,
  imageUrl,
  cardHeight = hp(22), // Ekran yüksekliğinin %20'si
  cardWidth = wp(90), // Ekran genişliğinin %90'ı
}) => {
  return (
    <View style={[styles.container, {height: cardHeight, width: cardWidth}]}>
      {/* left container */}
      <View style={styles.leftContainer}>
        <View style={styles.categoryTextContainer}>
          <Text>{category}</Text>
        </View>
        <View style={styles.descriptionTextContainer}>
          <Text>{description}</Text>
        </View>
        <View style={styles.authorDaysAgoContainer}>
          <Text>{author}</Text>
          <Text> -- </Text>
          <Text>{daysAgo} days ago</Text>
        </View>
      </View>
      {/* right container */}
      <View style={styles.rightContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={imageUrl}
            style={{width: wp(28)}}
            resizeMode="contain"
          />
        </View>
        <View style={styles.addCollectionContainer}>
          <Image
            source={require('./../assets/collection.png')}
            style={{width: wp(5)}}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: wp(4),
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    shadowColor: 'gray',
    shadowOpacity: 0.2,
  },
  leftContainer: {
    width: '55%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  rightContainer: {
    width: '45%',
    height: '100%',
    paddingLeft: '11%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  categoryTextContainer: {
    width: '100%',
    height: '20%',
  },
  descriptionTextContainer: {
    width: '100%',
    height: '60%',
  },
  authorDaysAgoContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '20%',
  },
  imageContainer: {
    marginTop: hp(4),
    width: '100%',
    height: '60%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addCollectionContainer: {
    width: '100%',
    height: '20%',
    marginTop: '10%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

export default NewsCard;
