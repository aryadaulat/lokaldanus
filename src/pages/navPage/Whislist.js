import { View, Text , SafeAreaView} from 'react-native'
import React from 'react'
import ComCard from '../../common/ComCard';
import { useNavigation } from '@react-navigation/native';
const Whislist = () => {
  const navigation = useNavigation()
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
          Whislist
        </Text>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-evenly', alignItems:'center', width:"100%", }}>
          <ComCard title={"Jas Lengan Panjang"} image={require('../../images/jaspendek.png')} onPress={()=>{navigation.navigate("Detail")}} />
          <ComCard title={"Jas Lengan Panjang"} image={require('../../images/jaspendek.png')} onPress={()=>{navigation.navigate("Detail")}} />
        </View>
    </SafeAreaView>
  );
};

export default Whislist