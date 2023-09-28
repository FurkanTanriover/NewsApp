import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
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
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => {
          handleLogin();
        }}
        disabled={this.state?.isSigninInProgress}
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
  },
  loginButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'center',
  },
  loginText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
