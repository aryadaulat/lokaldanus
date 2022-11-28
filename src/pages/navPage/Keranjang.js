import {View, Text, ScrollView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import ComButton from '../../common/ComButton';

const Keranjang = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          width: '70%',
          height: 100,
        }}>
            <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}>
        <Image
          source={require('../../images/arrow.png')}
          style={{height: 40, width: 40}}
          
        />
        </TouchableOpacity>
        <Text style={{fontSize: 28, fontWeight: 'bold', color: '#000'}}>
          Keranjang
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          width: '90%',
          marginLeft: '5%',
          backgroundColor: '#fff',
          height: 130,
          paddingVertical: 10,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 5},
          shadowOpacity: 1,
          shadowRadius: 5,
          elevation: 10,
          borderRadius:20
        }}>
        <Image source={require('../../images/Jas_Lab.png')} />
        <View>
          <Text style={styles.txt}>Baju Lengan Panjang {'\n'}</Text>
          <Text style={styles.txt}>Harga : {'dfgd'} </Text>
          <Text style={styles.txt}>Jumlah Pesanan : </Text>
          <Text style={styles.txt}>Ukuran : </Text>
          <Text style={styles.txt}>Total Harga : </Text>
          <Text style={styles.txt}>Deskripsi : </Text>
        </View>
        <Image source={require('../../images/Delete.png')} />
      </View>
      <View style={{position: 'absolute',bottom:0, height:150, width:'100%', alignItems:'center', backgroundColor:'#fff'}}>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', width:'80%', height:40}}>
            <Text style={{fontSize:20,fontWeight:'bold', color:"#000"}}>Total Harga :</Text>
            <Text style={{fontSize:20,fontWeight:'bold', color:"#000"}}>Rp.{'135.000'}</Text>
        </View>
        <ComButton title={'Check Out'} onPress={()=>{navigation.navigate('CheckOut')}} bgColor={'#f3c10d'} textColor={'#fff'}/>


      </View>
    </SafeAreaView>
  );
};

export default Keranjang;

const styles = StyleSheet.create({
  txt: {
    fontSize: 10,
    color: '#000',
    fontWeight: '600',
  },
});
