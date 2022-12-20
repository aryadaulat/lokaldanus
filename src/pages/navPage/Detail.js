/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import ComButton from '../../common/ComButton';

import {useDispatch} from 'react-redux';
import {addItemToCart, addToWishlist} from '../../redux/actions/Actions';

const Detail = ({route}) => {
  const [select, setSelect] = useState(0);

  const like = require('../../images/heart.png');
  const dislike = require('../../images/love.png');

  const dispatch = useDispatch();
  const addItem = item => {
    dispatch(addItemToCart(item));
  };
  const addwishlist = item => {
    dispatch(addToWishlist(item));
  };
  const iswishlist = 'cek';
  const Ket = 'Keterangan';
  const navigation = useNavigation();
  const [jumlah, onChangeJumlah] = useState('');
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f3c102'}}>
      <View
        style={{
          flexDirection: 'row',
          width: '80%',
          marginHorizontal: '10%',
          justifyContent: 'space-evenly',
          paddingTop: 20,
        }}>
        <TouchableOpacity
          style={{
            width: 53,
            height: 53,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            borderRadius: 10,
          }}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Image
            source={require('../../images/arrow.png')}
            style={{height: 30, width: 30}}
          />
        </TouchableOpacity>
        <Image
          source={{uri: route.params.data.image}}
          style={{height: 250, width: 250, marginTop: 50}}
        />
        <View
          style={{
            width: 53,
            height: 53,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 5},
            shadowOpacity: 1,
            shadowRadius: 5,
            elevation: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              setSelect(1);
              addwishlist(route.params.data);
            }}>
            <Image
              source={select == 1 ? like : dislike}
              style={{height: 30, width: 30}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '50%',
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: 'black',
            marginVertical: 10,
          }}>
          {route.params.data.nama}
        </Text>
        <Text style={{fontSize: 24, color: 'black', fontWeight: 'bold'}}>
          Harga : {route.params.data.harga}
        </Text>
        <View style={{backgroundColor: '#000', width: '80%', height: 2}} />
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 13, color: 'black', fontWeight: 'bold'}}>
            jenis : {route.params.data.jenis}{' '}
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: 'black',
              fontWeight: 'bold',
              marginHorizontal: 100,
            }}>
            berat : {route.params.data.berat}kg
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{marginTop: 20, flexDirection: 'row', flex: 1}}>
            <Text
              style={{
                marginLeft: 20,
                color: 'black',
                fontSize: 13,
                fontWeight: 'bold',
              }}>
              Jumlah :
            </Text>
            <View
              style={{
                width: '50%',
                height: 30,
                borderWidth: 1,
                borderRadius: 10,
                alignSelf: 'center',
                marginTop: 10,
                alignItems: 'center',
                paddingLeft: 20,
                paddingRight: 20,
              }}>
              <TextInput
                value={jumlah}
                placeholder={'satuan'}
                style={{marginLeft: 50, width: 100, height: 30}}
                onChangeText={onChangeJumlah}
                keyboardType="numeric"
              />
            </View>
          </View>
          <View style={{marginTop: 20, flex: 1}}>
            <Text
              style={{
                marginLeft: 30,
                color: 'black',
                fontSize: 13,
                fontWeight: 'bold',
              }}>
              Ket :
            </Text>
            <View
              style={{
                width: '50%',
                height: 30,
                borderWidth: 1,
                borderRadius: 10,
                alignSelf: 'center',
                marginTop: 10,
                alignItems: 'center',
                paddingLeft: 20,
                paddingRight: 20,
              }}
            />
            <TextInput style={{marginLeft: 60}} keyboardType="alphabetic" />
          </View>
        </View>
        <ComButton
          title={'Masukkan Keranjang'}
          onPress={() => {
            Alert.alert('Data berhasil dimasukkan ke keranjang');
            addItem(route.params.data);
            console.log(route.params.data);
          }}
          bgColor={'#f3c102'}
          textColor={'#fff'}
        />
      </View>
    </SafeAreaView>
  );
};

export default Detail;
