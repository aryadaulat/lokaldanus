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
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import ComTextInput from '../../common/ComTextInput';
import {Avatar, RadioButton, Button} from 'react-native-paper';
import ComButton from '../../common/ComButton';
import ComDropList from '../../common/ComDropList';
import {launchImageLibrary} from 'react-native-image-picker';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

const EditProduk2 = ({route}) => {
  const navigation = useNavigation();
  const [namaProduk, onChangeNamaProduk] = useState('');
  const [harga, onChangeHarga] = useState('');
  const [kategori, onChangeCategory] = useState('');
  const [Jenis, onChangeJenis] = useState('');
  const [berat, onChangeWeight] = useState('');
  const [value, setValue] = React.useState('');
  const [Pic, SetPic] = React.useState('');
  const [Pics, SetPics] = React.useState('');
  const [data, setData] = useState({});
  const [changepict, setChangepict] = useState(false);
  // route.params.key

  useEffect(() => {
    async function fetchdata() {
      await firestore()
        .collection('Produk')
        .doc(route.params.key)
        .get()
        .then(querySnapshot => {
          var simpandata = querySnapshot.data();
          console.log(simpandata);
          onChangeNamaProduk(simpandata.nama);
          onChangeHarga(simpandata.harga);
          onChangeCategory(simpandata.kategori);
          onChangeJenis(simpandata.jenis);
          onChangeWeight(simpandata.berat);
          setValue(simpandata.ukuran);
          SetPics(simpandata.image);
          setData(simpandata);
        });
    }
    fetchdata();
  }, []);
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
      setChangepict(true);
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
  const upload = () => {
    if (
      namaProduk !== '' &&
      harga !== '' &&
      kategori !== '' &&
      Jenis !== '' &&
      berat !== '' &&
      value !== ''
    ) {
      if (Pic != '') {
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
            update(url);
          });
        } catch (e) {
          console.log(e);
        }
      } else {
        update('');
      }
    } else {
      Alert.alert('Oops', 'Isi Semua Data Dahulu');
    }
  };

  const removeImage = () => {
    SetPic('');
    setToastMsg('Image Removed');
  };
  const update = url => {
    if (url !== '') {
      firestore()
        .collection('Produk')
        .doc(route.params.key)
        .update({
          nama: namaProduk,
          harga: harga,
          kategori: kategori,
          jenis: Jenis,
          berat: berat,
          ukuran: value,
          image: url,
        })
        .then(() => {
          Alert.alert('success', 'Produk updated!');
          navigation.navigate('EditProduk3');
        });
    } else {
      firestore()
        .collection('Produk')
        .doc(route.params.key)
        .update({
          nama: namaProduk,
          harga: harga,
          kategori: kategori,
          jenis: Jenis,
          berat: berat,
          ukuran: value,
        })
        .then(() => {
          Alert.alert('success', 'Produk updated!');
          navigation.navigate('EditProduk3');
        });
    }
  };

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('EditProduk');
            }}>
            <Image
              source={require('../../images/arrow.png')}
              style={{height: 30, width: 30, marginRight: 28, marginLeft: 10}}
            />
          </TouchableOpacity>

          <Text style={styles.tambah}> Edit Produk </Text>
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
          values={onChangeCategory}
          defaultValue={kategori}
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
          {changepict ? (
            <Avatar.Image
              style={{justifyContent: 'center', bottom: -30}}
              size={150}
              source={{uri: 'data:Image/png;base64,' + Pic.base64}}
            />
          ) : (
            <Avatar.Image
              style={{justifyContent: 'center', bottom: -30}}
              size={150}
              source={{uri: Pics}}
            />
          )}
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
  selection: {
    backgroundColor: 'white',
    width: '70%',
    marginTop: 20,
    marginBottom: 50,
    padding: 20,
    borderRadius: 20,
    marginLeft: 20,
  },
  simpan: {
    weight: 271,
    height: 32,
  },
});

export default EditProduk2;
