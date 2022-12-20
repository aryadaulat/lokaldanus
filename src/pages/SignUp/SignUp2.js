import {View, Text, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import ComButton from '../../common/ComButton';
import {useNavigation} from '@react-navigation/native';
import ComDropList from '../../common/ComDropList';
import ComTextMessege from '../../common/ComTextMessege';
import ComTextInput from '../../common/ComTextInput';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const SignUp2 = () => {
  const navigation = useNavigation();
  const [phone, onChangePhone] = useState('');
  const [alamat, onChangeAlamat] = useState('');
  const [provinsi, onChangeProvinsi] = useState('');
  const [kabupaten, onChangeKabupaten] = useState('');
  const checkuser = () => {
    console.log(auth().currentUser);
  };
  const update = () => {
    firestore()
      .collection('Users')
      .doc(auth().currentUser.uid)
      .update({
        phone: phone,
        alamat: alamat,
        provinsi: provinsi,
        kabupaten: kabupaten,
      })
      .then(() => {
        console.log('User updated!');
      });
  };
  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View style={{flex: 1}}>
        <View>
          <Image
            source={require('../../images/Register2.png')}
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
            Isi Alamat Domisil Anda
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
          <ComTextMessege
            value={alamat}
            onChange={onChangeAlamat}
            placeholder={'Enter Your Domisili'}
            name={'Alamat :'}
          />
          <ComTextInput
            value={phone}
            onChangeText={onChangePhone}
            style={{marginTop: 10}}
            placeholder={'Enter Your Number Phone'}
            name={'Number Phone :'}
          />
          <ComTextInput
            value={provinsi}
            onChangeText={onChangeProvinsi}
            style={{marginTop: 10}}
            placeholder={'Enter Your Province'}
            name={'Provinsi :'}
          />
            <ComTextInput
            value={kabupaten}
            onChangeText={onChangeKabupaten}
            style={{marginTop: 10}}
            placeholder={'Enter Your Kabupaten/Kota'}
            name={'Kabupaten/Kota:'}
          />
          <ComButton
            title={'Sign Up'}
            bgColor={'#f3c10d'}
            textColor={'#ffff'}
            onPress={update}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp2;
