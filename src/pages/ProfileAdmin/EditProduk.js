import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ComButton from '../../common/ComButton';
import firestore from '@react-native-firebase/firestore';

const EditProduk = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

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
        });
    }
    fetchdata();
  }, []);

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
            navigation.navigate('ProfileAdmin');
          }}>
          <Image
            source={require('../../images/arrow.png')}
            style={{height: 30, width: 30}}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 24, fontWeight: 'bold', color: '#000'}}>
          Edit Produk
        </Text>
      </View>
      <View style={styles.content}>
        <Image source={require('../../images/Jas_Lab.png')} />
        <View>
          <Text style={styles.txtNama}>Jas Lab Lengan Pendek {'\n'}</Text>
          <Text style={styles.txt}>Harga : {'Rp 125.000,-'} </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('EditProduk2');
          }}>
          <Image
            source={require('../../images/edit.png')}
            style={{height: 28, weight: 28, marginRight: 10}}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {data != '' &&
          data.map(datas => (
            <View style={styles.content} key={datas.key}>
              <Image source={{uri: datas.image}} style={styles.images} />
              <View>
                <Text style={styles.txtNama}>{datas.nama}</Text>
                <Text style={styles.txt}>Harga : {datas.harga} </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('EditProduk2', {key: datas.key});
                }}>
                <Image
                  source={require('../../images/edit.png')}
                  style={{height: 28, weight: 28, marginRight: 10}}
                />
              </TouchableOpacity>
            </View>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
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
    marginBottom: 20,
  },
  txtNama: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    fontWeight: '600',
  },
  txt: {
    fontSize: 12,
    color: '#000',
    fontWeight: '600',
  },
  images: {
    width: 80,
    height: 80,
  },
});

export default EditProduk;
