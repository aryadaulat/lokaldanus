import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const ComCard = ({onPress, title, image}) => {
  return (
    <View
      style={{
        width: 150,
        height: 250,
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
        <Image source={image} style={{height: 100, width: 120}} />
        <Text
          style={{
            fontSize: 14,
            color: 'black',
            fontWeight: 'bold',
            marginTop: 5,
          }}>
          {title}
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#f3c102',
          justifyContent: 'center',
          alignItems: 'center',
          width: 150,
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
          onPress();
        }}>
        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 10}}>
          Detail
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ComCard;
