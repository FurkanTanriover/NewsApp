import React from 'react';
import {WebView} from 'react-native-webview';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const WebPage = ({route}: any) => {
  const websiteLink = route.params.url;
  return (
    <WebView
      source={{uri: websiteLink}}
      style={{flex: 1, marginTop: hp(-20)}}
    />
  );
};

export default WebPage;
