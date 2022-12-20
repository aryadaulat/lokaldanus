import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import ComButton from '../../common/ComButton';
import {useDispatch, useSelector} from 'react-redux';
import { FlatGrid } from 'react-native-super-grid';
import { removeFromCart } from '../../redux/actions/Actions';

const Keranjang = () => {
  const items = useSelector(state => state.Reducers);
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const removeItem=(index) =>{
    dispatch(removeFromCart(index))
  }

  const numberFormat = (value) => {
    var re = '\\d(?=(\\d{' + 3 + '})+' + '\\D' + ')';
    var num = value.toFixed(Math.max(0, ~~2));
    var str = num.replace(new RegExp(re, 'g'), '$&' + ',');
    return str;
}
  const getTotal = ()=>{
    let temptotal = 0;
    items.map((item)=>{
      temptotal+=Number(item.harga);
    })
    console.log(temptotal)
    return temptotal;
  }
  console.log(items)
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
            navigation.navigate('Home');
          }}>
          <Image
            source={require('../../images/arrow.png')}
            style={{height: 40, width: 40}}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 28, fontWeight: 'bold', color: '#000'}}>
          Keranjang
        </Text>
      </View>
  
      <FlatList
        nestedScrollEnabled
        data={items}
        renderItem={({item, index}) => {
          return (
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
                borderRadius: 20,
                marginBottom:20
              }}>
              <Image source={{uri:item.image}} style={{width:80, height:80}}/>
              <View>
                <Text style={styles.txt}>{item.nama}{'\n'}</Text>
                <Text style={styles.txt}>Harga : {item.harga} </Text>
                <Text style={styles.txt}>Jumlah Pesanan : </Text>
                <Text style={styles.txt}>Ukuran : {item.ukuran}</Text>
                <Text style={styles.txt}>Total Harga :{item.harga} </Text>
                <Text style={styles.txt}>Deskripsi : </Text>
              </View>
              <TouchableOpacity onPress={()=>{removeItem(index)}}>

              <Image source={require('../../images/Delete.png')}/>
              </TouchableOpacity>
            </View>
          );
        }}
      />

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
            marginTop: 20,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
            Total Harga :
          </Text>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
         {'Rp.'+ numberFormat(getTotal())}

          </Text>
        </View>
        <ComButton
          title={'Check Out'}
          onPress={() => {
            navigation.navigate('CheckOut');
          }}
          bgColor={'#f3c10d'}
          textColor={'#fff'}
        />
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
