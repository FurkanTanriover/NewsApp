import React, {ReactNode} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

interface NewsLayoutProps {
  children: ReactNode;
}

const NewsLayout: React.FC<NewsLayoutProps> = ({children}) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Üstteki backgorund color */}
      <View style={styles.backgroundColor}></View>
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
  backgroundColor: {
    width: wp(100),
    height: hp(60),
  },
  content: {
    flex: 1,
    marginHorizontal: wp(5),
    marginTop: -hp(5),
  },
});

export default NewsLayout;
