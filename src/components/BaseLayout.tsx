import React, {ReactNode} from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

interface BaseLayoutProps {
  children: ReactNode;
  image: string;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({children, image}) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Üstteki Image */}
      <Image source={image} style={styles.image} resizeMode="cover" />
      {/* Sayfa İçeriği */}
      <View style={styles.content}>{children}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: wp(100),
    height: hp(20),
  },
  content: {
    flex: 1,
    marginHorizontal: wp(5),
    marginTop: -hp(5),
  },
});

export default BaseLayout;
