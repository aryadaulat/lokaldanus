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
  
  const Payment = () => {
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
              navigation.navigate('CheckOut');
            }}>
            <Image
              source={require('../../images/arrow.png')}
              style={{height: 40, width: 40}}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 28, fontWeight: 'bold', color: '#000'}}>
            Payment
          </Text>
        </View>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 'bold',
            color: '#000',
            marginLeft: 30,
          }}>
          Lakukan pembayaran melalui :
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 'bold',
            color: '#000',
            marginLeft: 30,
            marginTop:10
          }}>
          Transfer Bank :
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
            Mandiri : 10241342342{'\n'}
            BRI : 124143215{'\n'}
            BCA : 143123412{'\n'}
            BNI : 141234124
          </Text>
       </View>
       <Text
          style={{
            fontSize: 17,
            fontWeight: 'bold',
            color: '#000',
            marginLeft: 30,
            marginTop:10
          }}>
          E-Wallet :
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
            DANA : 10241342342{'\n'}
            OVO : 124143215{'\n'}
            GOPAY : 143123412{'\n'}
            LINK : 141234124
          </Text>
       </View>
       <Text
          style={{
            fontSize: 17,
            fontWeight: 'bold',
            color: '#000',
            marginLeft: 30,
            marginTop:10
          }}>
          CASH :
        </Text>
        <View
          style={{
            justifyContent: 'space-evenly',
            marginTop: 10,
            width: '90%',
            marginLeft: '5%',
            backgroundColor: '#fff',
            borderRadius: 10,
            paddingHorizontal: 20,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 3},
            shadowOpacity: 1,
            shadowRadius: 5,
            elevation: 10,
          }}>
          <Text style={styles.txt}>
            Siapkan Uang Pas Ya :{')'}
          </Text>
       </View>
       <Text
       style={{
            fontSize: 10,
            fontWeight: 'bold',
            color: '#000',
            marginTop:10,
            color:'red',
            marginLeft: 30,
          }}>
          Jangan lupa untuk menyimpan bukti pembayaran{'\n'} karena kurir akan meminta nya kembali
        </Text>
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
            title={'Kembali'}
            onPress={() => {
              navigation.navigate('Home');
            }}
            bgColor={'#f3c10d'}
            textColor={'#fff'}
          />
        </View>
      </SafeAreaView>
    );
  };
  
  export default Payment;
  
  const styles = StyleSheet.create({
    txt: {
      fontSize: 13,
      color: '#000',
      fontWeight: '600',
    },
  });
  