import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';
import { Button } from 'react-native-paper';
import ComButton from '../../common/ComButton';

const TambahProduk2 = () => {
  const navigation = useNavigation();
  return (
      <View style={styles.wrap}>
        <Text style={styles.berhasil}>Produk Berhasil Ditambahkan</Text>

        <ComButton
              style={styles.simpan}
              title={'Kembali'}
              bgColor={'#f3c10d'}
              textColor={'#ffff'}
              onPress={() => {
                navigation.navigate('ProfileAdmin');
              }}
        />
      </View>
  )
}

const styles = StyleSheet.create({
    simpan: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      height: 60,
      marginTop: 10,
      marginLeft: 10,
    },
    berhasil:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 24,
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 300,
    },
    wrap:{
        flex: 1,
        justifyContent: 'center',
    }
});

export default TambahProduk2