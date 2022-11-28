import {View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import ComButton from '../../common/ComButton';

const Detail = () => {
  const navigation = useNavigation();
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
          source={require('../../images/jaspendek.png')}
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
          borderTopLeftRadius:40,
          borderTopRightRadius:40,
        }}>
        <Text>Jas Lengan Pendek</Text>
        <Text>Harga : 135.000</Text>
        <View style={{backgroundColor:"#000", width:'80%', height:2}}></View>
        <View style={{flexDirection:'row'}}>
            <Text>jenis : lengan panjang </Text>
            <Text> berat : 0.25kg</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <View style={{marginTop:20}}>
      <Text style={{marginLeft:30, fontWeight:'bold'}}>Jumlah :</Text>
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
          placeholder={"satuan"}
          style={{marginLeft: 10}}
        />
        </View>
        </View>
            <Text> berat : 0.25kg</Text>
        </View>
        <ComButton title={'Masukkan Keranjang'} onPress={()=>{navigation.navigate("Keranjang")}} bgColor={'#f3c102'} textColor={"#fff"}/>

        </View>
    </SafeAreaView>
  );
};

export default Detail;
