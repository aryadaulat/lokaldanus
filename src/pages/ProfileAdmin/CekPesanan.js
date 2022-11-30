import React, { useEffect } from 'react'
import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const CekPesanan = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          height: 60,
        }}>
        <TouchableOpacity onPress={() => { navigation.navigate('ProfileAdmin') }}>
          <Image
            source={require('../../images/arrow.png')}
            style={{ height: 40, width: 40 }}

          />

        </TouchableOpacity>
        <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#000', marginLeft: 80 }}>
          CekPesanan
        </Text>
      </View>

      <View style={{
        backgroundColor:'#D9D9D9',
        width: '80%',
        height: 150,
        marginHorizontal: '10%'
      }}>
        <Text style={{
          fontSize:21,
          fontWeight:'bold',
          color:'black',
        }}>
          DataPesanan {('\n')}Gado-gado
        </Text>
        <Text style={{
          fontSize:14,
          fontWeight:'bold',
          color:'black',
        }}>
          Jumlah : 2{('\n')}Alamat : bla bla bla {('\n')}ukuran : medium{('\n')}Harga : 200.000{('\n')}Keterangan : Jangan pedas
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default CekPesanan