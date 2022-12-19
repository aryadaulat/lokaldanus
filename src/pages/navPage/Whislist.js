import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {removeFromWishlist} from '../../redux/actions/Actions';
import {useDispatch, useSelector} from 'react-redux';
import {FlatGrid} from 'react-native-super-grid';

const Whislist = () => {
  const items = useSelector(state => state.Reducers2);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const removewishlist=(index) =>{
    dispatch(removeFromWishlist(index))
  }

  console.log(items);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: 100,
          backgroundColor: '#f3c10d',
          marginBottom:10
        }}>
        <Text style={{fontSize: 28, fontWeight: 'bold', color: '#000'}}>
          Whislist
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          width: '100%',
          flex: 1,
        }}>
        
        <FlatGrid
          itemDimension={130}
          data={items}
          style={{marginBottom: 70}}
          staticDimension={350}
          // fixed
          spacing={10}
          renderItem={({item, index}) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#fff6d5',
                  height: 180,
                  width: 150,
                  justifyContent: 'center',
                  alignItems: 'center',
                  shadowColor: '#000',
                  shadowOffset: {width: 0, height: 5},
                  shadowOpacity: 1,
                  shadowRadius: 5,
                  elevation: 10,
                }}>
                <Image
                  source={{uri: item.image}}
                  style={{height: 100, width: 120}}
                />
                <Text
                  style={{
                    fontSize: 14,
                    color: 'black',
                    fontWeight: 'bold',
                    marginTop: 5,
                  }}>
                  {item.nama}
                </Text>
              </View>
              <View style={{flexDirection:'row'}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#f3c102',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 100,
                  height: 30,
                  borderRadius: 5,
                  alignSelf: 'center',
                  marginTop: 10,
                  shadowColor: '#000',
                  shadowOffset: {width: 0, height: 5},
                  shadowOpacity: 1,
                  shadowRadius: 5,
                  elevation: 10,
                }}
                onPress={() => {
                  navigation.navigate('Detail', {data: item});
                }}>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 10}}>
                  Detail
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#f3c102',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft:20,
                  width: 30,
                  height: 30,
                  borderRadius: 5,
                  alignSelf: 'center',
                  marginTop: 10,
                  shadowColor: '#000',
                  shadowOffset: {width: 0, height: 5},
                  shadowOpacity: 1,
                  shadowRadius: 5,
                  elevation: 10,
                }}
                onPress={()=>{removewishlist(index)}}>
                <Image source={require('../../images/Delete.png')} style={{height:25, width:25}}/>
              </TouchableOpacity>
              </View>
            </View>
          )}
        /> 
      </View>
    </SafeAreaView>
  );
};

export default Whislist;
