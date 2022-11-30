/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  const ComButtonCustom = ({onPress, image, title, bgColor, textColor}) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: bgColor,
          alignItems: 'center',
          width: '85%',
          justifyContent: 'space-between',
          height: 60,
          paddingHorizontal: 20,
          borderRadius: 10,
          alignSelf: 'center',
          marginTop: 30,
          flexDirection: 'row',
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 5},
          shadowOpacity: 1,
          shadowRadius: 5,
          elevation: 10,
        }}
        onPress={() => {
          onPress();
        }}>
        <Image source={image} style={{height: 20, width: 20}} />
        <Text style={{color: textColor, fontWeight: 'bold', fontSize: 20}}>
          {title}
        </Text>

        <Image
          source={require('../../images/arrowlite.png')}
          style={{height: 20, width: 20}}
        />
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            height: 150,
            paddingHorizontal: 20,
            backgroundColor: '#f3c10d',
            justifyContent: 'space-between',
          }}
        />

        <View>
          <Image
            source={require('../../images/imageAdmin.png')}
            style={{
              alignSelf: 'center',
              width: 150,
              height: 150,
              position: 'absolute',
              bottom: 400,
              zIndex: 2,
            }}
          />
          <View style={{marginTop: 55}}>
            <Text
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 20,
                color: 'black',
              }}>
              Entahlah
            </Text>
          </View>

          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              color: 'black',
            }}>
            No HP : 0821
          </Text>

          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              color: 'black',
            }}>
            Jl. Bebas
          </Text>

          <ComButtonCustom
            title={'Edit Profil'}
            bgColor={'#ffff'}
            textColor={'black'}
            image={require('../../images/edit.png')}
            onPress={() => {
              navigation.navigate('EditProfil');
            }}
          />
          <ComButtonCustom
            title={'Ubah Kata Sandi'}
            bgColor={'#ffff'}
            textColor={'black'}
            image={require('../../images/changepass.png')}
            onPress={() => {
              navigation.navigate('UbahKataSandi');
            }}
          />
          <ComButtonCustom
            title={'Sign Out'}
            bgColor={'#ffff'}
            textColor={'black'}
            image={require('../../images/signOut.png')}
            onPress={() => {
              navigation.navigate('Login');
            }}
          />
          <View
            style={{
              marginBottom: 50,
            }}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Profile;
