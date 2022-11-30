import {View, Text, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import ComTextInput from '../../common/ComTextInput';
import ComButton from '../../common/ComButton';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const SignUp = () => {
	const navigation = useNavigation();
  const [nama, onChangeNama] = useState('');
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const createUser = async () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        const update = {
          displayName: nama,
          photoURL: '',
        };
        auth().currentUser.updateProfile(update);
        navigation.navigate('SignUp2');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View style={{flex: 1}}>
        <View>
          <Image
            source={require('../../images/Register1.png')}
            style={{
              width: 120,
              height: 120,
              alignSelf: 'center',
              marginTop: 30,
            }}
          />
          <Text
            style={{
              alignSelf: 'center',
              marginTop: 10,
              fontSize: 30,
              color: '#f3c10d',
              fontWeight: '600',
            }}>
            Isi Data Diri Anda
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            width: '90%',
            marginTop: 20,
            marginBottom: 50,
            padding: 20,
            borderRadius: 20,
            marginLeft: 20,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}>
          <ComTextInput
            value={nama}
            onChangeText={onChangeNama}
            style={{marginTop: 10}}
            placeholder={'Enter Your Name'}
            name={'Nama :'}
          />
          <ComTextInput
            value={email}
            onChangeText={onChangeEmail}
            style={{marginTop: 10}}
            placeholder={'Enter Your Email'}
            name={'Email :'}
          />
          
          <ComTextInput
            value={password}
            onChangeText={onChangePassword}
            placeholder={'Enter Password'}
            name={'Password :'}
            type={'password'}
          />
          <ComButton
            title={'Continue'}
            bgColor={'#f3c10d'}
            textColor={'#ffff'}
            onPress={createUser}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
