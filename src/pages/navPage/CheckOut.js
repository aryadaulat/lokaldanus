import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import ComButton from '../../common/ComButton';

const CheckOut = () => {
  const navigation = useNavigation();
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Keranjang');
          }}>
          <Image
            source={require('../../images/arrow.png')}
            style={{height: 40, width: 40}}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 28, fontWeight: 'bold', color: '#000'}}>
          CheckOut
        </Text>
      </View>
      <Text
        style={{
          fontSize: 17,
          fontWeight: 'bold',
          color: '#000',
          marginLeft: 30,
        }}>
        Apakah Benar Alamat ini ?
      </Text>
      <View
        style={{
          justifyContent: 'space-evenly',
          marginTop: 10,
          width: '90%',
          marginLeft: '5%',
          backgroundColor: '#fff',
          height: 100,
          borderRadius: 10,
          paddingHorizontal: 20,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 3},
          shadowOpacity: 1,
          shadowRadius: 5,
          elevation: 10,
        }}>
        <Text style={styles.txt}>
          Jl. Menoreh Tengah X/22 Sampangan {'\n'}
          Gajah Mungkur{'\n'}
          Kota Semarang{'\n'}
          Provinsi Jawa Tengah
        </Text>
      </View>
      <View style={{height:200, width:"100%", alignItems:'center', marginTop:20}}>
      <View
        style={{
          flexDirection: 'row',
          width: '80%',
          height: 50,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
          Total Harga :
        </Text>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
          Rp.{'135.000'}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '80%',
          height: 50,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
          Ongkos Kirim :
        </Text>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
          Rp.{'3000'}
        </Text>
      </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          height: 150,
          width: '100%',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '80%',
            marginTop:20
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
            Total Harga :
          </Text>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
            Rp.{'140.000'}
          </Text>
        </View>
        <ComButton
          title={'Bayar'}
          onPress={() => {
            navigation.navigate('Payment');
          }}
          bgColor={'#f3c10d'}
          textColor={'#fff'}
        />
      </View>
    </SafeAreaView>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  txt: {
    fontSize: 13,
    color: '#000',
    fontWeight: '600',
  },
});
