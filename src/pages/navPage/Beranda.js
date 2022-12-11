import { View, Text , SafeAreaView, Image, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import ComSearch from '../../common/ComSearch'
import Keranjang from './Keranjang'
import { useNavigation } from '@react-navigation/native'
import ComCard from '../../common/ComCard'

const Beranda = () => {
  const navigation = useNavigation()
  const Kategory = ({onPress, image, bgColor}) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: bgColor,
          justifyContent: 'center',
          backgroundColor:'#fff',
          alignItems: 'center',
          width: 80,
          height: 80,
          borderRadius: 10,
          alignSelf: 'center',
          marginTop: 30,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 5},
          shadowOpacity: 1,
          shadowRadius: 5,
          elevation: 10,
        }}
        onPress={() => {
          onPress();
        }}>
        <Image source={image} style={{width:57, height:57}}/>
      </TouchableOpacity>
    );
      };
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
    <SafeAreaView style={{flex:1}}>

      {/* bagian Promosi */}
      <View style={{ width:'100%', justifyContent:'center', alignItems:'center', backgroundColor: '#f3c10d', padding:30}}>
      <Image source={require('../../images/slider.png')}/>
    </View>
    <Text
          style={{
            fontSize: 17,
            fontWeight: 'bold',
            color: '#000',
            marginLeft: 20,
            marginTop:20
          }}>
          Kategori:
        </Text>
    <View style={{flexDirection:'row', width:'100%', justifyContent:'space-evenly', marginHorizontal:2, height:100}}>
          <Kategory image={require('../../images/Kategori-1.png')}/>
          <Kategory image={require('../../images/Kategori-2.png')}/>
          <Kategory image={require('../../images/Kategori-3.png')}/>
          <Kategory image={require('../../images/Kategori-4.png')}/>
      </View>
      <Text
          style={{
            fontSize: 17,
            fontWeight: 'bold',
            color: '#000',
            marginLeft: 20,
            marginTop:40
          }}>
          Rekomendasi Produk:
        </Text>
        <View style={{flexDirection:'row', justifyContent:'space-evenly', alignItems:'center', width:"100%", }}>
          <ComCard title={"Jas Lengan Panjang"} image={require('../../images/jaspendek.png')} onPress={()=>{navigation.navigate("Detail")}} />
          <ComCard title={"Jas Lengan Panjang"} image={require('../../images/jaspendek.png')} onPress={()=>{navigation.navigate("Detail")}} />
        </View>
    </SafeAreaView>
    </ScrollView>
  )
}

export default Beranda;