import {View, Text, Image, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import ComTextInput from '../../common/ComTextInput';
import ComButton from '../../common/ComButton';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const LoginAdmin = () => {
  const navigation = useNavigation();
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [data, setData] = useState('');
  const checkuser = async () => {
    const user = await firestore().collection('Admin').doc('Admin1').get();
    setData(user.data());
  };
  useEffect(() => {
    checkuser();
  });
  const login = () => {
    if (email == data.Email && password == data.Password) {
      navigation.navigate('ProfileAdmin');
    }else{
			Alert.alert('Opps','Inputan Salah')
		}
  };

  return (
    <View style={{flex: 1}}>
      <Image
        source={require('../../images/Logo.png')}
        style={{
          width: 100,
          height: 100,
          alignSelf: 'center',
          marginTop: 30,
        }}
      />
      <Text
        style={{
          marginTop: 10,
          alignSelf: 'center',
          fontSize: 30,
          color: '#F3C10D',
        }}>
        Lokal Danus
      </Text>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 30,
          color: '#F3C10D',
        }}>
        LoginAdmin
      </Text>

      <View
        style={{
          backgroundColor: 'white',
          width: '90%',
          marginTop: 20,
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
          value={email}
          onChangeText={onChangeEmail}
          style={{marginTop: 10}}
          placeholder={'Enter Email'}
          name={'Email :'}
          icon ={require('../../images/mail.png')}
        />
        <ComTextInput
          value={password}
          onChangeText={onChangePassword}
          placeholder={'Enter Password'}
          name={'Password :'}
          type={'password'}
          icon ={require('../../images/padlock.png')}
        />
        <ComButton
          title={'Login'}
          bgColor={'#f3c10d'}
          textColor={'#ffff'}
          onPress={login}
        />
      </View>
    </View>
  );
};

export default LoginAdmin;
