import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const UserAvatar = ({avatarUrl}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: avatarUrl}} style={styles.avatar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(20), // İstenilen boyuta göre ayarlayabilirsiniz.
    height: hp(10),
    borderRadius: 25, // borderRadius değeri genellikle width ve height değerlerinin yarısı kadar olur.
    overflow: 'hidden',
    borderColor: '#EDD153',
    borderWidth: 2,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
});

export default UserAvatar;
