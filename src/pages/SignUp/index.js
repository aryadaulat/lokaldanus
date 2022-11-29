import {View, Text, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import ComTextInput from '../../common/ComTextInput';
import ComButton from '../../common/ComButton';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const [nama, onChangeNama] = useState('');
  const [email, onChangeEmail] = useState('');
  const [phone, onChangePhone] = useState('');
  const [password, onChangePassword] = useState('');

  const navigation = useNavigation();
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
            value={phone}
            onChangeText={onChangePhone}
            style={{marginTop: 10}}
            placeholder={'Enter Your Number Phone'}
            name={'Number Phone :'}
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
            onPress={() => {
              navigation.navigate('SignUp2');
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
