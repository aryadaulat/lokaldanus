import React, { useEffect } from 'react'
import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ComButton from '../../common/ComButton';

const ProfileAdmin = () => {
    const navigation = useNavigation()
    const ComButtonCustom =  ({onPress, image, title, bgColor, textColor}) => {
        return (
          <TouchableOpacity
            style={{
              backgroundColor: bgColor,
              alignItems: 'center',
              width: '85%',
              justifyContent:'space-between',
              height: 60,
              paddingHorizontal:20,
              borderRadius: 10,
              alignSelf: 'center',
              marginTop: 30,
              flexDirection:"row",
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 1,
              shadowRadius: 5,
              elevation: 10,
            }}
            onPress={() => {
              onPress();
            }}>
                <Image source={image}/>
            <Text style={{color: textColor, fontWeight:'bold', fontSize:20}}>{title}</Text>

            <Image source={require("../../images/arrowlite.png")} style={{height:20, width:20, }}/>
          </TouchableOpacity>
          

        );
      };
      
    return (
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', width: '100%', height: 150, paddingHorizontal: 20, backgroundColor: '#f3c10d', justifyContent: 'space-between', }}>

                </View>

                <View>
                    <Text style={{
                        fontWeight: 'bold',
                        textAlign: 'center',
                        fontSize: 18,
                        color: 'black',
                        marginTop: -80,

                    }}>Admin</Text>
                    <Image source={require('../../images/imageAdmin.png')}
                        style={{
                            alignSelf: 'center',
                            width: 150,
                            height: 150,
                        }} />
                    <Text style={{
                        fontWeight: 'bold',
                        textAlign: 'center',
                        fontSize: 20,
                        color: 'black',
                    }}>Admin</Text>

                    <Text style={{
                        textAlign: 'center',
                        fontSize: 16,
                        color: 'black',
                    }}>No HP : 0821</Text>

                    <Text style={{
                        textAlign: 'center',
                        fontSize: 16,
                        color: 'black',
                    }}>Jl. Bebas</Text>

                    <ComButtonCustom
                        title={'Cek Pesanan'}
                        bgColor={'#ffff'}
                        textColor={'black'}
                        image={require("../../images/cek.png")}
                        onPress={() => { navigation.navigate('ProfileAdmin') }}
                    />
                    <ComButtonCustom
                        title={'Tambah Produk'}
                        bgColor={'#ffff'}
                        textColor={'black'}
                        onPress={() => { navigation.navigate('ProfileAdmin') }}
                    />
                    <ComButtonCustom
                        title={'Hapus Produk'}
                        bgColor={'#ffff'}
                        textColor={'black'}
                        onPress={() => { navigation.navigate('ProfileAdmin') }}
                    />
                    <ComButtonCustom
                        title={'Edit Produk'}
                        bgColor={'#ffff'}
                        textColor={'black'}
                        onPress={() => { navigation.navigate('ProfileAdmin') }}
                    />
                    <ComButtonCustom
                        title={'Sign Out'}
                        bgColor={'#ffff'}
                        textColor={'black'}
                        onPress={() => { navigation.navigate('ProfileAdmin') }}
                    />
                    <View style={{
                        marginBottom:50,
                    }}>

                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default ProfileAdmin 
