import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import ComSearch from '../../common/ComSearch';
import Keranjang from './Keranjang';
import {useNavigation} from '@react-navigation/native';
import ComCard from '../../common/ComCard';
import firestore from '@react-native-firebase/firestore';
import {FlatGrid} from 'react-native-super-grid';
import { addItemToCart } from '../../redux/actions/Actions';

const Beranda = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [datatampil, setDataTampil] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      await firestore()
        .collection('Produk')
        .get()
        .then(querySnapshot => {
          var simpandata = [];
          querySnapshot.forEach(snapshot => {
            let datas = snapshot.data();
            let createdata = {
              key: snapshot.id,
              berat: datas.berat,
              harga: datas.harga,
              image: datas.image,
              jenis: datas.jenis,
              kategori: datas.kategori,
              nama: datas.nama,
              ukuran: datas.ukuran,
            };
            // datas.push({key: snapshot.id});
            simpandata = [...simpandata, createdata];
          });
          setData(simpandata);
          setDataTampil(simpandata);
        });
    }
    fetchdata();
  }, []);

  const filter = value => {
    let check = data.filter(datas => datas.kategori === value);
    setDataTampil(check);
  };

  const Kategory = ({onPress, image, bgColor, value}) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: bgColor,
          justifyContent: 'center',
          backgroundColor: '#fff',
          alignItems: 'center',
          width: 80,
          height: 80,
          borderRadius: 10,
          alignSelf: 'center',
          marginTop: 30,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 5},
          shadowOpacity: 1,
          shadowRadius: 5,
          elevation: 10,
        }}
        onPress={() => filter(value)}>
        <Image source={image} style={{width: 57, height: 57}} />
      </TouchableOpacity>
    );
  };

  return (
    // <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
    <SafeAreaView style={{flex: 1}}>
      {/* bagian Promosi */}
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f3c10d',
          padding: 30,
        }}>
        <Image source={require('../../images/slider.png')} />
      </View>
      <Text
        style={{
          fontSize: 17,
          fontWeight: 'bold',
          color: '#000',
          marginLeft: 20,
          marginTop: 20,
        }}>
        Kategori:
      </Text>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-evenly',
          marginHorizontal: 2,
          height: 100,
        }}>
        <Kategory
          image={require('../../images/Kategori-1.png')}
          value={'Makanan'}
        />
        <Kategory
          image={require('../../images/Kategori-2.png')}
          value={'Minuman'}
        />
        <Kategory
          image={require('../../images/Kategori-3.png')}
          value={'Merchandise'}
        />
        <Kategory
          image={require('../../images/Kategori-4.png')}
          value={'Pakaian'}
        />
      </View>
      <Text
        style={{
          fontSize: 17,
          fontWeight: 'bold',
          color: '#000',
          marginLeft: 20,
          marginTop: 40,
        }}>
        Rekomendasi Produk:
      </Text>
      <View
        style={{
          alignItems: 'center',
          width: '100%',
          flex: 1,
        }}>
        <FlatGrid
          itemDimension={130}
          data={datatampil}
          style={{marginBottom: 70}}
          staticDimension={350}
          // fixed
          spacing={10}
          renderItem={({item}) => (   
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#fff6d5',
                  height: 180,
                  width: 150,
                  justifyContent: 'center',
                  alignItems: 'center',
                  shadowColor: '#000',
                  shadowOffset: {width: 0, height: 5},
                  shadowOpacity: 1,
                  shadowRadius: 5,
                  elevation: 10,
                }}>
                <Image
                  source={{uri: item.image}}
                  style={{height: 100, width: 120}}
                />
                <Text
                  style={{
                    fontSize: 14,
                    color: 'black',
                    fontWeight: 'bold',
                    marginTop: 5,
                  }}>
                  {item.nama}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: '#f3c102',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 150,
                  height: 30,
                  borderRadius: 5,
                  alignSelf: 'center',
                  marginTop: 10,
                  shadowColor: '#000',
                  shadowOffset: {width: 0, height: 5},
                  shadowOpacity: 1,
                  shadowRadius: 5,
                  elevation: 10,
                }}
                onPress={() => {
                  navigation.navigate('Detail', {data: item});
                }}>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 10}}>
                  Detail
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
    // </ScrollView>
  );
};

export default Beranda;
