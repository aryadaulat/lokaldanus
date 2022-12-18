import React, { useEffect } from 'react'
import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity , StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const CekPesanan = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
    <SafeAreaView style={{ flex: 1 }}>
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

          <Text style={styles.tambah}> Cek Pesanan </Text>
        </View>
      </SafeAreaView>

      <View style={{
        backgroundColor:'white',
        width: '80%',
        height: 150,
        marginHorizontal: '10%',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 10,
        borderRadius:20,
        padding:20
      }}>
        <Text style={{
          fontSize:21,
          fontWeight:'bold',
          color:'black',
        }}>
        Gado-gado
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
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 60,
    marginTop: 10,
    marginLeft: 10,
    marginBottom:20
  },

  tambah: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
})

export default CekPesanan