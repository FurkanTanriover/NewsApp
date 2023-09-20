import React from 'react';
import {WebView} from 'react-native-webview';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const WebPage = ({route}) => {
  const websiteLink = route.params.url;
  return (
    <WebView source={{uri: websiteLink}} style={{flex: 1, marginTop: hp(-20)}} />
  );
};

export default WebPage;
