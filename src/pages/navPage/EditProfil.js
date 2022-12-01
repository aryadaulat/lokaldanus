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

const EditProfil = () => {
  const navigation = useNavigation();
  const [nama, onChangeNama] = useState('');
  const [email, onChangeEmail] = useState('');
  const [HP, onChangeHP] = useState('');
  const [Alamat, onChangeAlamat] = useState('');
  const [Provinsi, onChangeProvinsi] = useState('');
  const [KoKab, onChangeKoKab] = useState('');
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
            title={'Continue'}
            bgColor={'#f3c10d'}
            textColor={'#ffff'}
            onPress={() => {
              navigation.navigate('Home');
            }}
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
