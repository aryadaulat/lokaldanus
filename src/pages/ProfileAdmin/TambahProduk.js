import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TouchableHighlight,
  ToastAndroid,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import ComTextInput from '../../common/ComTextInput';
import ComDropList from '../../common/ComDropList';
import { Avatar, RadioButton, Button } from 'react-native-paper';
import ComButton from '../../common/ComButton';

const TambahProduk = () => {
  const navigation = useNavigation();
  const [namaProduk, onChangeNamaProduk] = useState('');
  const [harga, onChangeHarga] = useState('');
  const [kategori, onChangeCategory] = useState('');
  const [Jenis, onChangeJenis] = useState('');
  const [berat, onChangeWeight] = useState('');
  const [value, setValue] = React.useState('first');
  const [Pic, SetPic] = React.useState('');
  const setToastMsg = msg => {
    ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);
  };
  const uploadImage = () => {
    let option = {
      mediaType: 'photo',
      quality: 1,
      includeBase64: true,
    };

    launchImageLibrary(option, response => {
      if (response.didCancel) {
        setToastMsg('Cancelled image selection');
      } else if ((response.errorCode = 'permission')) {
        setToastMsg('permission not satisfied');
      } else if ((response.errorCode = 'others')) {
        setToastMsg(response.errorMessage);
      } else if (response.assets[0].fileSize > 2097152) {
        Alert.alert(
          'Maximum image size exceeded',
          'Please choose image under 2 MB',
          [{text: 'ok'}],
        );
      } else {
        SetPic(response.assets[0].base64);
      }
    });
  };

  const removeImage = () => {
    SetPic('');
    setToastMsg('Image Removed');
  };


  return (
    <ScrollView>
      <SafeAreaView>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ProfileAdmin');
              }}>
              <Image
                source={require('../../images/arrow.png')}
                style={{height: 30, width: 30, marginRight: 28, marginLeft: 10}}
              />
            </TouchableOpacity>

          <Text style={styles.tambah}> Tambah Produk </Text>
          </View>
      </SafeAreaView>

      <View style={styles.fill}>
            <ComTextInput
              value={namaProduk}
              onChangeText={onChangeNamaProduk}
              style={{marginTop: 10}}
              placeholder={'Nama Produk'}
              name={'Nama :'}
            />
            <ComTextInput
              value={harga}
              onChangeText={onChangeHarga}
              style={{marginTop: 10}}
              placeholder={'Harga dalam Rupiah'}
              name={'Harga :'}
            />
            <ComDropList
            name={'Kategori'}
            />

            <ComTextInput
              value={Jenis}
              onChangeText={onChangeJenis}
              style={{marginTop: 10}}
              placeholder={'Jenis Barang'}
              name={'Jenis :'}
            />
            <ComTextInput
              value={berat}
              onChangeText={onChangeWeight}
              style={{marginTop: 10}}
              placeholder={'Berat dalam Kilogram'}
              name={'Berat :'}
            />
            <Text style={styles.ukuran}> Ukuran : </Text>
            
            <RadioButton.Group 
              onValueChange={value => setValue(value)} value={value}>
              <RadioButton.Item label="Small" value="first" />
              <RadioButton.Item label="Medium" value="second" />
              <RadioButton.Item label="Large" value="third" />
              <RadioButton.Item label="X-tra Large" value="forth" />
              <RadioButton.Item label="X-tra X-tra Large" value="fifth" />
              <RadioButton.Item label="Random" value="sixth" />
            </RadioButton.Group>

            <View style={styles.centerContent} />
            <TouchableHighlight
              onPress={() => uploadImage()}
              underlayColor="rgba(0,0,0,0)">
              <Avatar.Image
                style={{justifyContent: 'center', bottom: -30}}
                size={150}
                source={{uri: 'data:Image/png;base64,' + Pic}}
              />
            </TouchableHighlight>
            <View
              style={[
                styles.centerContent,
                {marginTop: 25, flexDirection: 'row', bottom: -20},
              ]}>
              <Button mode="contained" onPress={() => uploadImage()}>
                Upload Image
              </Button>
              <Button
                mode="contained"
                style={{marginLeft: 20}}
                onPress={() => removeImage()}>
                Remove Image
              </Button>
            </View>
            <ComButton
              style={styles.simpan}
              title={'Simpan'}
              bgColor={'#f3c10d'}
              textColor={'#ffff'}
              onPress={() => {
                navigation.navigate('TambahProduk2');
              }}
            />

          </View>
           
    </ScrollView>
  );
};;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 60,
    marginTop: 10,
    marginLeft: 10,
  },

  tambah: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },

  fill: {
    backgroundColor: 'white',
    width: '90%',
    marginTop: 20,
    marginBottom: 50,
    padding: 20,
    borderRadius: 20,
    marginLeft: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  ukuran:{
    marginLeft: 27,
    marginTop: 20,
    fontWeight: 'bold',
  },
  simpan:{
    weight: 271,
    height: 32,
    marginVertical: 20,
  }
});

export default TambahProduk