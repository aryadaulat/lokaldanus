/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  ToastAndroid,
  Alert,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {Avatar, Button} from 'react-native-paper';
import ComTextInput from '../../common/ComTextInput';
import ComButton from '../../common/ComButton';
import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

const EditProfil = () => {
  const user = auth().currentUser;
  const navigation = useNavigation();
  const [nama, onChangeNama] = useState('');
  const [email, onChangeEmail] = useState('');
  const [HP, onChangeHP] = useState('');
  const [Alamat, onChangeAlamat] = useState('');
  const [Provinsi, onChangeProvinsi] = useState('');
  const [KoKab, onChangeKoKab] = useState('');
  const [Pic, SetPic] = React.useState('');
  const [Pics, SetPics] = React.useState('');
  const [data, setData] = useState({});
  const [changepict, setChangepict] = useState(false);

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
    if (result.didCancel === true) {
      Alert.alert('ERROR', result.errorMessage);
    } else {
      SetPic(result.assets[0]);
    }
  };

  const removeImage = () => {
    SetPic('');
    setToastMsg('Image Removed');
  };
  const upload = () => {
    try {
      const reference = storage().ref('Images/' + auth().currentUser.uid);
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
          .ref('Images/' + auth().currentUser.uid)
          .getDownloadURL();
        update(url);
      });
    } catch (e) {
      console.log(e);
    }
  };
  const update = url => {
    firestore()
      .collection('Users')
      .doc(auth().currentUser.uid)
      .update({
        nama: nama,
        email: email,
        phone: HP,
        alamat: Alamat,
        provinsi: Provinsi,
        kabupaten: KoKab,
        photoprofile: url,
      })
      .then(() => {
        console.log('User updated!');
      });
  };
  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
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
          Edit Profil
        </Text>
      </View>
      <View style={{flex: 1}}>
        <View
          style={{
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
          }}>
          <ComTextInput
            value={nama}
            onChangeText={onChangeNama}
            style={{marginTop: 10}}
            placeholder={'Enter Your Name'}
            name={'Nama :'}
          />
          <ComTextInput
            value={email}
            onChangeText={onChangeEmail}
            style={{marginTop: 10}}
            placeholder={'Enter Your Email'}
            name={'Email'}
          />
          <ComTextInput
            value={HP}
            onChangeText={onChangeHP}
            style={{marginTop: 10}}
            placeholder={'Enter Your Number HP'}
            name={'No. HP :'}
          />
          <ComTextInput
            value={Alamat}
            onChangeText={onChangeAlamat}
            style={{marginTop: 10}}
            placeholder={'Enter Your Address'}
            name={'Alamat :'}
          />
          <ComTextInput
            value={KoKab}
            onChangeText={onChangeKoKab}
            style={{marginTop: 10}}
            placeholder={'Enter Your City/Regency'}
            name={'Kota/Kabupaten :'}
          />
          <ComTextInput
            value={Provinsi}
            onChangeText={onChangeProvinsi}
            style={{marginTop: 10}}
            placeholder={'Enter Your Province'}
            name={'Provinsi :'}
          />
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
            title={'Continue'}
            bgColor={'#f3c10d'}
            textColor={'#ffff'}
            onPress={upload}
            // onPress={() => {
            //   navigation.navigate('Home');
            // }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  centerContent: {},
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 100,
});
export default EditProfil;
