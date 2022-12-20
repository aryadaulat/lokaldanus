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
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import ComButton from '../../common/ComButton';

import {useDispatch, useSelector} from 'react-redux';
import {addItemToCart, addToWishlist} from '../../redux/actions/Actions';
import { black } from 'react-native-paper/lib/typescript/styles/colors';

const Detail = ({route}) => {
  
  const [state, setState] = useState(false)
  const [state1, setState1] = useState(false)

  const items = useSelector(state=>state.Reducers);
  const wish = useSelector(state=>state.Reducers2)
  useEffect(()=>{
    console.log(wish)
    console.log(items)
    items.forEach(element => {
      if(element.key===route.params.data.key){
        setState1(true);
        
      }
      
    });

    wish.forEach(element => {
      if(element.key===route.params.data.key){
        setSelect(1);
        setState(true);
        
      }
      
    });
  })
  const [select, setSelect] = useState(0);

  const like = require('../../images/heart.png');
  const dislike = require('../../images/love.png');

  
  const dispatch = useDispatch();
  const addItem = item => {
    const data = Object.assign({banyak:jumlah, desk:desk, cek:false}, item);
    // var tambah = {};
    // tambah.banyak = jumlah;
    // item.push(tambah);
    // console.log(item);
    dispatch(addItemToCart(data));
  };
  const addwishlist = item => {
    dispatch(addToWishlist(item));
  };
  const navigation = useNavigation();
  const [desk, onChangeDesk] = useState('');
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
            disabled={state}
            onPress={() => {
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
            fontWeight: '800',
            color: 'black',
            marginVertical: 10,
            marginLeft:20
          }}>
          {route.params.data.nama}
        </Text>
        <Text style={{fontSize: 24, color: 'black', fontWeight:"500", marginLeft:20}}>
          Harga : {route.params.data.harga}
        </Text>
        <View style={{backgroundColor: '#000', width: '100%', height: 2}} />
        <View style={{flexDirection: 'row', marginTop:10, marginLeft:40, justifyContent:'space-evenly'}}>
          <Text style={{fontSize: 13, color: 'black', fontWeight: 'bold'}}>
            Jenis : {route.params.data.jenis}{' '}
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: 'black',
              fontWeight: 'bold',
              marginHorizontal: 100,
            }}>
            Berat : {route.params.data.berat}kg
          </Text>
        </View>
        
          <View style={{ flexDirection: 'row', flex: 1, alignItems:'center'}}>
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
                marginLeft:10,
                width: 20,
                height: 30,
                borderWidth: 1,
                borderRadius: 10,
                alignSelf: 'center',
                alignItems: 'center',
                paddingLeft: 20,
                paddingRight: 20,
                justifyContent:'center',
                alignItems:'center'
              }}>
              <TextInput
                value={jumlah}
                placeholder={'1'}
                style={{width: 30, height: 60, fontSize:15}}
                onChangeText={onChangeJumlah}
                keyboardType="numeric"
              />
            </View>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-evenly', alignItems:'center'}}>
            <Text
              style={{
                color: 'black',
                fontSize: 13,
                fontWeight: 'bold',
              }}>
              Ket :
            </Text>
            <View
              style={{
                width: '70%',
                height: 60,
                borderWidth: 1,
                borderRadius: 10,
                marginRight:20,
                alignSelf: 'center',
                alignItems: 'center',
                padding:8
              }}
            >
            <TextInput value={desk} onChangeText={onChangeDesk} placeholder='aku mau yang pedes !!' style={{ width:"100%", height:"100%", fontSize:15}} keyboardType="alphabetic" />
            </View>
          </View>
          <TouchableOpacity
          disabled = {state1}
      style={{
        backgroundColor: state1==true?'black':'#f3c102',
        justifyContent: 'center',
        alignItems: 'center',
        width: '85%',
        height: 50,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 30,
      }}
      onPress={() => {
        Alert.alert('Data berhasil dimasukkan ke keranjang');
        addItem(route.params.data);
      }}>
      <Text style={{color: '#ffff', fontWeight:'bold', fontSize:20}}>Masukkan Keranjang</Text>
    </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Detail;
