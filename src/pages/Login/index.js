import {View, Text, Image} from 'react-native';
import React from 'react';
import ComTextInput from '../../common/ComTextInput';
import ComButton from '../../common/ComButton';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex:1}}>
      <View >
        <Image
          source={require('../../images/Logo.png')}
          style={{width: 100, height: 100, alignSelf: 'center', marginTop: 70}}
        />
        <Text
          style={{
            alignSelf: 'center',
            marginTop: 10,
            fontSize: 30,
            color: '#f3c10d',
            fontWeight: '600',
          }}>
          Lokal Danus
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
            style={{marginTop: 10}}
            placeholder={'Enter Email'}
            name={'Email :'}
          />
          <ComTextInput
            placeholder={'Enter Password'}
            name={'Password :'}
            type={'password'}
          />
          <ComButton
            title={'Login'}
            bgColor={'#f3c10d'}
            textColor={'#ffff'}
            onPress={() => {navigation.navigate('Home')}}
          />
        </View>
      </View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '800',
          alignSelf: 'center',
          marginTop: 20,
          textDecorationLine: 'underline',
        }}
        onPress={() => {
          navigation.navigate('SignUp');
        }}>
        Create New Account ?
      </Text>
      <Text style={{fontSize: 10,
          fontWeight: '800',
          alignSelf: 'center',
          marginTop: 20}}>Or</Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '800',
          alignSelf: 'center',
          marginTop: 20,
          textDecorationLine: 'underline',
        }}
        onPress={() => {
          navigation.navigate('Admin');
        }}>
        Login As Administrator ?
      </Text>
    </View>
  );
};

export default Login;
