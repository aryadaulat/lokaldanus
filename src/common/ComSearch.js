import {View, Text, Image, TextInput} from 'react-native';
import React from 'react';

const ComTextInput = ({name, value, onChangeText, placeholder, type}) => {
  return (
    <View
      style={{
        width: '80%',
        height: 50,
        backgroundColor:'#fff',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
      }}>
      <Image source={require('../images/search.png')}style={{width: 25, height: 25}} />
      <TextInput
        placeholder={placeholder}
        secureTextEntry={type ? true : false}
        style={{marginLeft: 10}}
        keyboardType={type ? type : 'default'}
      />
    </View>
  );
};

export default ComTextInput;
