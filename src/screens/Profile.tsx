import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as Icons from 'react-native-heroicons/outline';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import UserAvatar from '../components/UserAvatar';
import {removeToken} from '../redux/action';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const userInfo = AsyncStorage.getItem('@userInfo');
  console.log('userInfo=>', userInfo);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const sections = [
    {
      title: 'Bildirimlerim',
      icon: Icons.BellIcon,
      onPress: () => {
        console.log('Bildirimlerim');
      },
    },
    {
      title: 'Profil Bilgilerim',
      icon: Icons.UserIcon,
      onPress: () => {
        console.log('Profil');
      },
    },
    {
      title: 'Koleksiyonlarım',
      icon: Icons.ClockIcon,
      onPress: () => {
        console.log('Koleksiyonlarım');
      },
    },
    {
      title: 'Çıkış Yap',
      icon: Icons.ArrowLeftOnRectangleIcon,
      onPress: async () => {
        await dispatch(removeToken());
        navigation.navigate('Login');
      },
    },
    // Diğer elemanları ekleyebilirsiniz.
  ];

  return (
    <View style={styles.container}>
      <View style={styles.userSection}>
        <UserAvatar avatarUrl={'https://i.pravatar.cc/300'} />
        <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
          Kullanıcı Adı
        </Text>
      </View>
      <View>
        <FlatList
          data={sections}
          keyExtractor={item => item.title}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.section} onPress={item.onPress}>
              <item.icon size={25} color={'#EDD153'} />
              <Text style={styles.sectionText}>{item.title}</Text>
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <View style={styles.divider} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userSection: {
    width: wp(100),
    height: hp(15),
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    // backgroundColor: '#EDD153',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    padding: 15,
    height: hp(7),
  },
  sectionText: {
    fontSize: 18,
    marginLeft: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#999990',
  },
});

export default Profile;
