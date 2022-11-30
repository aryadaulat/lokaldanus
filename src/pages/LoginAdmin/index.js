import {View, Text, Image} from 'react-native';
import React from 'react';
import ComTextInput from '../../common/ComTextInput';
import ComButton from '../../common/ComButton';
import {useNavigation} from '@react-navigation/native';

const LoginAdmin = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <Image source={require('../../images/Logo.png')}
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
                    color: "#F3C10D",
                }}>Lokal Danus</Text>
            <Text
                style={{
                    alignSelf: 'center',
                    fontSize: 30,
                    color: "#F3C10D",
                }}>LoginAdmin
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
            onPress={() => {navigation.navigate('ProfileAdmin')}}
          />
        </View>
        </View>
    )
}

export default LoginAdmin