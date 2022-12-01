/* eslint-disable prettier/prettier */
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ComTextInput from '../../common/ComTextInput';
import ComButton from '../../common/ComButton';
import {useNavigation} from '@react-navigation/native';

const UbahKataSandi = () => {
  const navigation = useNavigation();
  const [PassLama, onChangePassLama] = useState('');
  const [PassBaru, onChangePassBaru] = useState('');
  const [KonfirUlangPass, onChangeKonfirUlangPass] = useState('');

  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          width: '70%',
          height: 100,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Image
            source={require('../../images/arrow.png')}
            style={{height: 40, width: 40}}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 28, fontWeight: 'bold', color: '#000'}}>
          Ubah Kata Sandi
        </Text>
      </View>
      <View style={{flex: 1}}>
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
            value={PassLama}
            onChangeText={onChangePassLama}
            style={{marginTop: 10}}
            placeholder={'Enter Your Last Password'}
            name={'Password Lama :'}
          />
          <ComTextInput
            value={PassBaru}
            onChangeText={onChangePassBaru}
            style={{marginTop: 10}}
            placeholder={'Enter Your New Password'}
            name={'Password Baru'}
          />
          <ComTextInput
            value={KonfirUlangPass}
            onChangeText={onChangeKonfirUlangPass}
            style={{marginTop: 10}}
            placeholder={'Reconfirm Your Password'}
            name={'Konfirmasi Ulang Password :'}
          />

          <ComButton
            title={'Continue'}
            bgColor={'#f3c10d'}
            textColor={'#ffff'}
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default UbahKataSandi;
