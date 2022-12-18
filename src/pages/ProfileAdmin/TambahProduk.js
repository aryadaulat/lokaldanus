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
import {Avatar, RadioButton, Button} from 'react-native-paper';
import ComButton from '../../common/ComButton';
import {launchImageLibrary} from 'react-native-image-picker';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

const TambahProduk = () => {
  const navigation = useNavigation();
  const [namaProduk, onChangeNamaProduk] = useState('');
  const [harga, onChangeHarga] = useState('');
  const [kategori, onChangeCategory] = useState('');
  const [Jenis, onChangeJenis] = useState('');
  const [berat, onChangeWeight] = useState('');
  const [value, setValue] = React.useState('');
  const [Pic, SetPic] = React.useState('');
  const [DownPic, SetDownPic] = React.useState('');
  const setToastMsg = msg => {
    ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);
  };
  const uploadImage = async () => {
    let option = {
      mediaType: 'photo',
      quality: 1,
      includeBase64: true,
    };

    const result = await launchImageLibrary(option);
    if (result.didCancel == true) {
      Alert.alert('ERROR', result.errorMessage);
    } else {
      SetPic(result.assets[0]);
    }

    // await launchImageLibrary(option, response => {
    //   if (response.didCancel) {
    //     setToastMsg('Cancelled image selection');
    //   } else if ((response.errorCode = 'permission')) {
    //     console.log(response.errorCode);
    //     setToastMsg('permission not satisfied');
    //   } else if ((response.errorCode = 'others')) {
    //     setToastMsg(response.errorMessage);
    //   } else if (response.assets[0].fileSize > 2097152) {
    //     Alert.alert(
    //       'Maximum image size exceeded',
    //       'Please choose image under 2 MB',
    //       [{text: 'ok'}],
    //     );
    //   } else {
    //     SetPic(response.assets[0].base64);
    //   }
    // });
  };

  const removeImage = () => {
    SetPic('');
    setToastMsg('Image Removed');
  };
  const upload = () => {
    if (
      namaProduk !== '' &&
      harga !== '' &&
      kategori !== '' &&
      Jenis !== '' &&
      berat !== '' &&
      value !== ''
    ) {
      try {
        const reference = storage().ref('Images/' + namaProduk);
        const task = reference.putFile(Pic.uri);
        task.on('state_changed', taskSnapshot => {
          console.log(
            `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
          );

          console.log(
            Math.round(
              (taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 100,
            ),
          );
        });

        task.then(async () => {
          const url = await storage()
            .ref('Images/' + namaProduk)
            .getDownloadURL();
          SetDownPic(url);
          uploadfirestore(url);
        });
      } catch (e) {
        console.log(e);
      }
    } else {
      Alert.alert('Oops', 'Isi Semua Data Dahulu');
    }
  };
  const uploadfirestore = url => {
    console.log('masuk upload');
    if (url !== '') {
      firestore()
        .collection('Produk')
        .add({
          nama: namaProduk,
          harga: harga,
          kategori: kategori,
          jenis: Jenis,
          berat: berat,
          ukuran: value,
          image: url,
        })
        .then(() => {
          Alert.alert('Done', 'Berhasil Tambah Produk');
          navigation.navigate('TambahProduk2');
        });
    } else {
      Alert.alert('Failed', 'Gagal Upload');
    }
  };

  // () => {
  // 	navigation.navigate('TambahProduk2');
  // }

  const checkdata = () => {
    console.log(namaProduk);
    console.log(harga);
    console.log(kategori);
    console.log(Jenis);
    console.log(berat);
    console.log(value);
    console.log(DownPic);
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
          icon ={require('../../images/product.png')}
        />
        <ComTextInput
          value={harga}
          onChangeText={onChangeHarga}
          style={{marginTop: 10}}
          placeholder={'Harga dalam Rupiah'}
          name={'Harga :'}
          icon ={require('../../images/bookmark.png')}
        />
        <ComDropList name={'Kategori'} values={onChangeCategory} />

        <ComTextInput
          value={Jenis}
          onChangeText={onChangeJenis}
          style={{marginTop: 10}}
          placeholder={'Jenis Barang'}
          name={'Jenis :'}
          icon ={require('../../images/tag.png')}
        />
        <ComTextInput
          value={berat}
          onChangeText={onChangeWeight}
          style={{marginTop: 10}}
          placeholder={'Berat dalam Kilogram'}
          name={'Berat :'}
          icon ={require('../../images/heavy.png')}
        />
        <Text style={styles.ukuran}> Ukuran : </Text>

        <RadioButton.Group
          onValueChange={value => setValue(value)}
          value={value}>
          <RadioButton.Item label="Small" value="Small" />
          <RadioButton.Item label="Medium" value="Medium" />
          <RadioButton.Item label="Large" value="Large" />
          <RadioButton.Item label="X-tra Large" value="X-tra Large" />
          <RadioButton.Item
            label="X-tra X-tra Large"
            value="X-tra X-tra Large"
          />
          <RadioButton.Item label="Random" value="Random" />
        </RadioButton.Group>

        <View style={styles.centerContent} />
        <TouchableHighlight
          onPress={() => uploadImage()}
          underlayColor="rgba(0,0,0,0)">
          <Avatar.Image
            style={{justifyContent: 'center', bottom: -30}}
            size={150}
            source={{uri: 'data:Image/png;base64,' + Pic.base64}}
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
          onPress={upload}
        />
      </View>
    </ScrollView>
  );
};

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
  ukuran: {
    marginLeft: 27,
    marginTop: 20,
    fontWeight: 'bold',
  },
  simpan: {
    weight: 271,
    height: 32,
    marginVertical: 20,
  },
});

export default TambahProduk;
