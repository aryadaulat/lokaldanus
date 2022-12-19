import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import ComButton from '../../common/ComButton';

const Detail = ({route}) => {
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
          <Image
            source={require('../../images/love.png')}
            style={{height: 30, width: 30}}
          />
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
        <Text>{route.params.data.nama}</Text>
        <Text>Harga : {route.params.data.harga}</Text>
        <View style={{backgroundColor: '#000', width: '80%', height: 2}}></View>
        <View style={{flexDirection: 'row'}}>
          <Text>jenis : {route.params.data.jenis} </Text>
          <Text> berat : {route.params.data.berat}kg</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{marginTop: 20}}>
            <Text style={{marginLeft: 30, fontWeight: 'bold'}}>Jumlah :</Text>
            <View
              style={{
                width: '50%',
                height: 50,
                borderWidth: 1,
                borderRadius: 10,
                alignSelf: 'center',
                marginTop: 5,
                alignItems: 'center',
                paddingLeft: 20,
                paddingRight: 20,
              }}>
              <TextInput
                value={jumlah}
                placeholder={'satuan'}
                style={{marginLeft: 10,width: 40}}
                onChangeText={onChangeJumlah}
								keyboardType="numeric"
              />
            </View>
          </View>
          <Text> berat : {route.params.data.berat}kg</Text>
        </View>
        <ComButton
          title={'Masukkan Keranjang'}
          onPress={() => {
            navigation.navigate('Keranjang');
          }}
          bgColor={'#f3c102'}
          textColor={'#fff'}
        />
      </View>
    </SafeAreaView>
  );
};

export default Detail;
