import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ComButton from '../../common/ComButton';
import firestore from '@react-native-firebase/firestore';

const HapusProduk = () => {
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

  const deletedata = key => {
    firestore()
      .collection('Produk')
      .doc(key)
      .delete()
      .then(() => {
        Alert.alert('Produk Telah Di Delet');
      });
  };
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
          Hapus Produk
        </Text>
      </View>
      <ScrollView style={{marginBottom: 80}}>
        {data != null &&
          data.map(datas => (
            <View style={styles.content} key={datas.key}>
              <Image source={{uri: datas.image}} style={styles.images} />
              <View>
                <Text style={styles.txtNama}>{datas.nama}</Text>
                <Text style={styles.txt}>Harga : {datas.harga} </Text>
              </View>
              <TouchableOpacity onPress={() => deletedata(datas.key)}>
                <Image source={require('../../images/Delete.png')} />
              </TouchableOpacity>
            </View>
          ))}
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          height: 150,
          width: '100%',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '80%',
            height: 40,
          }}></View>
        <ComButton
          title={'Simpan'}
          onPress={() => navigation.navigate('ProfileAdmin')}
          bgColor={'#f3c10d'}
          textColor={'#fff'}
        />
      </View>
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

export default HapusProduk;
