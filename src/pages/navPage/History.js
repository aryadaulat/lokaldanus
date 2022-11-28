import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';
import React from 'react';

const History = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: 100,
        }}>
        <Text style={{fontSize: 28, fontWeight: 'bold', color: '#000'}}>
          History
        </Text>
      </View>
      <View
        style={{
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
        }}>
        <Image source={require('../../images/Jas_Lab.png')} />
        <View>
          <Text style={styles.txt}>Baju Lengan Panjang {'\n'}</Text>
          <Text style={styles.txt}>Harga : {'dfgd'} </Text>
          <Text style={styles.txt}>Jumlah Pesanan : </Text>
          <Text style={styles.txt}>Ukuran : </Text>
          <Text style={styles.txt}>Total Harga : </Text>
          <Text style={styles.txt}>Deskripsi : </Text>
        </View>
        <Image source={require('../../images/Delete.png')} />
      </View>
    </SafeAreaView>
  );
};

export default History;
const styles = StyleSheet.create({
  txt: {
    fontSize: 10,
    color: '#000',
    fontWeight: '600',
  },
});
