import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, Image, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {setUserInfo} from '../redux/action';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogin = async () => {
    await setUserInfo(dispatch);
    navigation.navigate('TabStackScreen' as never);
  };

  return (
    <SafeAreaView style={styles.loginContainer}>
      <Image
        source={require('./../assets/logo.png')} // Buraya projenizde kullanmak istediğiniz logo URL'sini koyabilirsiniz.
        resizeMode="contain"
        style={styles.logo}
      />
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={handleLogin}
        disabled={this.state?.isSigninInProgress}
        style={styles.signInButton}
      />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray', // İstediğiniz başka bir arka plan rengi olabilir.
  },

  logo: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 30,
    color: '#333',
  },
  signInButton: {
    width: '70%',
    height: 50,
  },
});
