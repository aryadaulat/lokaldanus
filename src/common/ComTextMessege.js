import {View, Text, Image, TextInput} from 'react-native';
import React from 'react';

const ComTextInput = ({name, placeholder, type}) => {
  return (
    <View style={{marginTop:20}}>
      <Text style={{marginLeft:30, fontWeight:'bold'}}>{name}</Text>
      <View
        style={{
          width: '85%',
          height: 100,
          borderWidth: 1,
          borderRadius: 10,
          alignSelf: 'center',
          marginTop: 5,
          flexDirection: 'row',
          paddingLeft: 20,
          paddingRight: 20,
        }}>
        <TextInput
          placeholder={placeholder}
          secureTextEntry={type ? true : false}
          style={{marginLeft: 10}}
          keyboardType={type ? type : 'default'}
        />
      </View>
    </View>
  );
};

export default ComTextInput;
